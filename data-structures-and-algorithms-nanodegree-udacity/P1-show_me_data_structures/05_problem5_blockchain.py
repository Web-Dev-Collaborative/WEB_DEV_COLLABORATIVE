import hashlib
import datetime
import random
import string

class Block(object):
    def __init__(self, timestamp, data, previous_hash, block_number):
        self.timestamp = timestamp
        self.block_number = block_number
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()
        self.next_ptr = None
        self.previous_ptr = None
        
    def calculate_hash(self):
        sha = hashlib.sha256()
        sha.update(str(self.timestamp).encode('utf-8') + self.data.encode('utf-8'))
        return sha.hexdigest()

    def get_timestamp(self):
        return self.timestamp
    
    def get_block_number(self):
        return self.block_number
    
    def get_data(self):
        return self.data
    
    def get_previous_hash(self):
        return self.previous_hash

    def get_current_hash(self):
        return self.hash
    
    def get_next_block(self):
        return self.next_ptr
    
    def set_next_block(self, next_block):
        self.next_ptr = next_block

    def get_previous_block(self):
        return self.previous_ptr
    
    def set_previous_block(self, previous_block):
        self.previous_ptr = previous_block
        
    def __repr__(self):
        strn = f"""Timestamp: {self.timestamp} || Current Hash: {self.hash} || Previous Hash: {self.previous_hash} || Data: {self.data}"""
        return strn    
        
class Blockchain(object):
    def __init__(self):
        self.genesis_block = None
        self.last_block = None
        self.block_count = -1
        
    def get_genesis_block(self):
        return self.genesis_block

    def set_genesis_block(self, block):
        self.genesis_block = block

    def get_last_block(self):
        return self.last_block
    
    def set_last_block(self, block):
        self.last_block = block
        
    def get_block_count(self):
        return self.block_count
    
    def append(self, value):
        self.block_count += 1

        if self.get_genesis_block() is None:
            self.set_genesis_block(Block(datetime.datetime.now(), "[Genesis] " + value, "None", self.get_block_count()))
            self.set_last_block(self.get_genesis_block())
            return
        
        #get to last node
        block = self.get_genesis_block()
        while block.get_next_block():
            block = block.get_next_block()
        
        block.set_next_block(Block(datetime.datetime.now(), "[Block " + str(self.block_count) + "] " + value, block.get_current_hash(), self.get_block_count()))
        self.get_last_block().get_next_block().set_previous_block(self.get_last_block())
        self.set_last_block(self.get_last_block().get_next_block())

    def size(self):
        return self.block_count + 1 

def get_randomized_data():
    data = ''
    for _ in range(64):
        data = f"{data}{random.choice(string.ascii_lowercase + string.ascii_uppercase)}"
    return data

def dump_blockchain_data(blockchain_name):
    info = "Current number of blocks created: " + str((blockchain_name.size()))

    block = blockchain_name.get_genesis_block()
    info += "\nBlock Details Report Start From Genesis Block\n------------------------------------------\n"

    while block.get_next_block():
        info += str(block)
        block = block.get_next_block()
        #info += "\n--------------------------#####################------------------------------------\n\n"
        info += "\n\n"

    info += "------------------------------------------\nBlock Details Report End\n\n"
    block = blockchain_name.get_last_block()
    info += "Block Details Report Start From Last Block in chain\n------------------------------------------\n"

    while block:
        info += str(block)
        block = block.get_previous_block()
        #info += "\n--------------------------#####################------------------------------------\n\n"
        info += "\n\n"
    info += "------------------------------------------\nBlock Details Report End"
    print(info)

#12-block blockchain
blockChain = Blockchain()
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
blockChain.append(get_randomized_data())
dump_blockchain_data(blockChain)

#single block blockchain
_blockChain = Blockchain()
_blockChain.append(get_randomized_data())
dump_blockchain_data(_blockChain)