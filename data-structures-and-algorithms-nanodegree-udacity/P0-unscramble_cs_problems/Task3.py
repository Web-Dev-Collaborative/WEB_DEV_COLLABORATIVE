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
TASK 3:
(080) is the area code for fixed line telephones in Bangalore.
Fixed line numbers include parentheses, so Bangalore numbers
have the form (080)xxxxxxx.)

Part A: Find all of the area codes and mobile prefixes called by people
in Bangalore.
 - Fixed lines start with an area code enclosed in brackets. The area
   codes vary in length but always begin with 0.
 - Mobile numbers have no parentheses, but have a space in the middle
   of the number to help readability. The prefix of a mobile number
   is its first four digits, and they always start with 7, 8 or 9.
 - Telemarketers' numbers have no parentheses or space, but they start
   with the area code 140.

Print the answer as part of a message:
"The numbers called by people in Bangalore have codes:"
 <list of codes>
The list of codes should be print out one per line in lexicographic order with no duplicates.

Part B: What percentage of calls from fixed lines in Bangalore are made
to fixed lines also in Bangalore? In other words, of all the calls made
from a number starting with "(080)", what percentage of these calls
were made to a number also starting with "(080)"?

Print the answer as a part of a message::
"<percentage> percent of calls from fixed lines in Bangalore are calls
to other fixed lines in Bangalore."
The percentage should have 2 decimal digits
"""

#part a
number_codes = dict()
for call in calls:
    if "(080)" in call[0]: #check if this number belongs to Bangalore
        code = call[1] #retrieve area_code / prefix
        prefix = code
        if code[0] == "(": #check for area_code
            after_open = code.split('(')[1] #extract area_code between (...)
            before_close = after_open.split(')')[0]
            prefix = before_close
        elif code[:3] == "140": #check for telemarketer number 
            prefix = "140"
        else: #mobile number
            prefix = code[:4] 

        #add prefix to dict 
        if prefix in number_codes.keys():
            number_codes[prefix] += 1
        else:
            number_codes[prefix] = 1

number_codes_sorted = sorted(number_codes.items(), key = lambda a : a[0])
print("The numbers called by people in Bangalore have codes:")
for code in number_codes_sorted:
    print(code[0])


#part b
cfb, cfb2b = 0, 0
for call in calls:
    if "(080)" in call[0]:
        cfb += 1
        if "(080)" in call[1]:
            cfb2b += 1

cfb2b_percent = (cfb2b * 100) / cfb
print("{} percent of calls from fixed lines in Bangalore are calls to other fixed lines in Bangalore.".format("%.2f" % cfb2b_percent))
