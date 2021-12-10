import threading, time
log, threads = [], []

def dump_to_file(lst, fname):
	with open(fname, 'w') as f:
		f.write(lst)

def run(tname):
	for i in range(200):
		for j in range(200):
			#time.sleep(0.1)
			#doing some computation
			pass 
		log.append("Thread %s"%tname)

for i in range(5):
	t = threading.Thread(target = run, args = (i,))
	threads.append(t)
	t.start()

for t in threads:
	t.join()

res = "\t".join(log)
print(res)
dump_to_file(res, "p3_dump.txt")