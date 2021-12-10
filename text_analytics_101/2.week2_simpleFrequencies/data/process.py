file_lists = ["docA", 'docB', 'docC', 'docD', 'docE', 'docF', 'docG', 'docH', 'docI', 'docJ']
file_lists = [ele + '.txt' for ele in file_lists]
print(file_lists)
data = []

x="docA.txt"

#for file in file_lists:
with open(x, 'r') as f:
    data.append(f.read())
print(data)