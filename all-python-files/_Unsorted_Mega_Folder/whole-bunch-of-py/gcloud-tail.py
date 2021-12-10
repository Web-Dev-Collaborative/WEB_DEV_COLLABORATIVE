import sys
import json
import subprocess

# TODO: make this an option
freshness = '1m'
limit = 100

def get_logs():
    global freshness, limit

    args = ['gcloud', 'logging', 'read', *sys.argv[1:], '--format', 'json', '--freshness', freshness]
    if limit:
        args.extend(['--limit', str(limit)])
    res = subprocess.run(args, stdout=subprocess.PIPE, check=True)

    # after the first time, only fetch 30s of logs, but an unlimited number
    freshness = '30s'
    limit = None

    return json.loads(res.stdout)

def main():
    seen_insert_ids = []
    while True:
        logs = get_logs()

        keepers = []
        for log in logs:
            insert_id = log['insertId']
            if any(insert_id in seen for seen in seen_insert_ids):
                continue
            keepers.append(log)
        for log in sorted(keepers, key=lambda l: l['receiveTimestamp']):
            sys.stdout.write(json.dumps(log) + '\n')

        # stash the list of insert_ids we saw, and only keep 10
        seen_insert_ids.append(set(l['insertId'] for l in logs))
        seen_insert_ids = seen_insert_ids[-10:]

main()
