"""
Read file into texts and calls.
It's ok if you don't understand how to read files
"""
import csv
with open('texts.csv', 'r') as f:
    reader = csv.reader(f)
    texts = list(reader)

with open('calls.csv', 'r') as f:
    reader = csv.reader(f)
    calls = list(reader)

"""
TASK 2: Which telephone number spent the longest time on the phone
during the period? Don't forget that time spent answering a call is
also time spent on the phone.
Print a message:
"<telephone number> spent the longest time, <total time> seconds, on the phone during 
September 2016.".
"""

duration = dict()
for call in calls:
    if call[0] in duration.keys():
        duration[call[0]] += int(call[3])
    else:
        duration[call[0]] = int(call[3])

    if call[1] in duration.keys():
        duration[call[1]] += int(call[3])
    else:
        duration[call[1]] = int(call[3])

max_call_time, max_telephone_num = 0, ""
for telephone in duration:
    if duration[telephone] >= max_call_time:
        max_call_time = duration[telephone]
        max_telephone_num = telephone
print(f"{max_telephone_num} spent the longest time, {max_call_time} seconds, on the phone during September 2016.")