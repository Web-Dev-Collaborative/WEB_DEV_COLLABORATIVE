class Prime(object):
    def __init__(self):
        self.cache = {}

    def is_prime(self, x):
        if x in self.cache:
            return self.cache[x]
        prime_flag = True
        if x == 1:
            prime_flag = False
        else:
            for i in range( 2, x ):
                if x % i == 0:
                    prime_flag = False
                    break
        self.cache[x] = prime_flag
        return prime_flag

p = Prime()
print(p.is_prime( 5 ))
print(p.is_prime( 4 ))
print(p.is_prime( 5 ))