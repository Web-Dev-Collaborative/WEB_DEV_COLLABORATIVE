local_cache = {} #just another dict
def compute_length(mystr):
	if mystr in local_cache:
		print("Retrieving from cache..", end = ' ')
		return local_cache[mystr]
	else:
		local_cache[mystr] = len(mystr)
		print("Stored in cache..", end = ' ')
		return local_cache[mystr]

def main():
	s1 = 'sudo'
	s2 = 'PyCon'
	print(compute_length(s1))
	print(compute_length(s2))
	print(compute_length(s1))
	print(local_cache)

if __name__ == '__main__':
	main()