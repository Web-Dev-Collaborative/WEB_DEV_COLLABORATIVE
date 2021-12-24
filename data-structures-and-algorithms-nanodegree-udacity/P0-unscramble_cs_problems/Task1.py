"""
Read file into texts and calls.
It's ok if you don't understand how to read files.
"""
import csv
with open('texts.csv', 'r') as f:
    reader = csv.reader(f)
    texts = list(reader)

with open('calls.csv', 'r') as f:
    reader = csv.reader(f)
    calls = list(reader)


"""
TASK 1:
How many different telephone numbers are there in the records? 
Print a message:
"There are <count> different telephone numbers in the records."
"""

unique_call_records = dict()
for text in texts:
    unique_call_records[text[0]], unique_call_records[text[1]] = 1, 1

for call in calls:
    unique_call_records[call[0]], unique_call_records[call[1]] = 1, 1

print(f"There are {len(unique_call_records)} different telephone numbers in the records.")