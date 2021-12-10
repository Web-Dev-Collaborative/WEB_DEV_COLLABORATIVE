import cachetools

cache = cachetools.LRUCache(maxsize = 3)
cache['PyCon'] = 'India'
cache['year'] = '2017'
print("Older: " + cache['year'])

cache['year'] = '2018'
print("Newer: " + cache['year'])
print(cache)

cache['sdate'] = '05/09/2018'
print(cache)

cache['edate'] = '09/09/2018'
print(cache)