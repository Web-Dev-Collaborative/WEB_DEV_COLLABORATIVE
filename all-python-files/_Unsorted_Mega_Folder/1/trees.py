import time
import calendar
import requests
import datetime
import pyinter

URL = 'https://api.pub.build.mozilla.org/treestatus/trees/%s/logs?all=1'
TREES = ['try', 'mozilla-inbound', 'autoland']
DAYS = 7
START = time.time() - 3600*24*DAYS
EARLIEST = START - 3600*24
REASON_WHITELIST = set([
    'Job ingestion on Treeherder is having issues (bug 1278711). Missing jobs should eventually show up on their own, no need to re-push unless you have failures. :)',
    'Job ingestion on Treeherder is having issues (bug 1278711)',
    'Bug 1293538 - tests not being run',
    'dependency issues from bug 1290502?',
])

def I(start, end):
    return pyinter.IntervalSet([pyinter.closed(start, end)])

def to_unix(json_date):
    dt = datetime.datetime.strptime(json_date, '%Y-%m-%dT%H:%M:%S+00:00')
    return calendar.timegm(dt.timetuple())

def dur(intervals):
    d = 0
    for i in intervals:
        d += i.upper_value - i.lower_value
    return d

tree_closed = pyinter.IntervalSet()
reasons = set([])
for tree in TREES:
    res = requests.get(URL % tree).json()
    logs = res['result']
    for l in logs:
        l['when'] = to_unix(l['when'])
    logs.sort(key=lambda l: l['when'])

    closed_at = None
    for l in logs:
        # ignore things that are too old
        if l['when'] < EARLIEST:
            continue
        if l['status'] == 'closed':
            if not closed_at and 'infra' in l['tags']:
                if l['reason'] in REASON_WHITELIST:
                    continue
                reasons.add(l['reason'])
                closed_at = l['when']
        elif l['status'] == 'open':
            if closed_at:
                closure = I(closed_at, l['when'])
                tree_closed = tree_closed | closure
                closed_at = None
    if closed_at:
        closure = I(closed_at, time.time())
        tree_closed = tree_closed | closure
        closed_at = None

# limit to the time range
tree_closed = tree_closed & I(START, time.time())
tree_closed_seconds = dur(tree_closed)
print "Trees closed for infra for %0.2f hours in the last %d days, or %0.2f%% because" % (
        tree_closed_seconds / 3600.0,
        DAYS,
        100.0 * tree_closed_seconds / (3600*24*DAYS)
        )
for r in sorted(reasons):
    print "*", r
