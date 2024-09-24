from web3 import Web3

# Connect to local Ganache
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))
print(f"Connected to Ethereum network: {w3.is_connected()}")
