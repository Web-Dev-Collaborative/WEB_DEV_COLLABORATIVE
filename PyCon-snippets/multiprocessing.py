import threading, random
import multiprocessing


results = []

def compute():
	results.append(sum([random.randint(1, 100) for i in range(1000000)]))

workers = [threading.Thread(target = compute) for x in range(8)]
for worker in workers:
	worker.start()
for worker in workers:
	worker.join()
print("results: %s" %results)

with multiprocessing.Manager() as manager:
	results = manager.list()
	workers = [multiprocessing.Process(target = compute, args = (results,)) for x in range(8)]
	for worker in workers:
		worker.start()
	for worker in workers:
		worker.join()
	print("Results %s" %results)