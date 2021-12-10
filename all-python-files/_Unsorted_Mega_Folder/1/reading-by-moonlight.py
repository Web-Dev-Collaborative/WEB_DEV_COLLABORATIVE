import time

PHASE = 11 * 24 * 3600 + 7 * 3600 + 45 * 60

now = int(time.time())
next = now - (now % PHASE) + PHASE

print("phase: {} days {} hours {} minutes".format(PHASE / (3600*24), PHASE % (3600*24) / 3600, PHASE % 3600 / 60))

def time_is_link(when):
    return time.strftime(
        'https://time.is/%I00%P_%d_%b_%Y_in_UTC/PT/ET/Berlin/India/New_Zealand/Dubai/Tokyo?Reading_by_Moonlight',
        time.gmtime(when))

for x in range(10):
    when = next + x * PHASE
    # round down to the nearest hour
    when = when - (when % 3600)
    print("* [{} {} UTC] - (no topic)".format(
        time_is_link(when),
        time.asctime(time.gmtime(when))))
