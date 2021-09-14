import { useEffect, useState } from 'react'
import axios from 'axios'

import Web3 from 'web3'

// let wraithApi = "https://api.binance.com/api/v3/ticker/price?symbol=FTMUSDT"

const web3 = new Web3('https://rpc.ftm.tools')

const abip = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    inputs: [],
    name: 'getLatestFTMPrice',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'pairAddress', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'getLatestTokenPrice',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]
const addp = '0x8fBE84d284D1614eaDc50EE69120Ec4f7f98cEd8'
const contractp = new web3.eth.Contract(abip, addp)

const abiftm = [
  { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
    name: 'PauserAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
    name: 'PauserRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'ERR_INVALID_ZERO_VALUE',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ERR_NO_ERROR',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'addPauser',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'isPauser',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'renouncePauser',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'withdraw',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const contractftm = new web3.eth.Contract(abiftm, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')

const useGetTVL = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setInterval(async function () {
          const ftmprice = (await contractp.methods.getLatestFTMPrice().call()) / 1e8
          // const syfperftm = await contractp.methods.getLatestTokenPrice("0xaf64771bbd013492ac69220eb67836f36b23d5aa", 1).call();
          // const syfusd = ftmprice / (syfperftm / 1e18);
          // const mcap = Number(100000000000 * syfusd);

          const balFTMlp = await contractftm.methods.balanceOf('0xaf64771bBD013492ac69220eB67836f36b23D5AA').call()
          const balWRAFTMlp = await contractftm.methods.balanceOf('0x2e9aC7f69e3c747420C918954f823a8e98AccAe2').call()
          const balUSDC = await contractftm.methods.balanceOf('0xC43b6a7Ff3929BE35cD4297309585e43b51cE0F4').call()
          const balSYF = await contractftm.methods.balanceOf('0x017672C6254c8C9593bc3B71F1a97E9ba45E8817').call()
          const balBOO = await contractftm.methods.balanceOf('0x36041D7F9639d954899315C11A997d9Cd5Ef4b8b').call()
          const balUSDCWRA = await contractftm.methods.balanceOf('0x6a80BD3eb550adcfF4f2f5f12a1bB213c1Ef57fA').call()
          const balSYFUSDC = await contractftm.methods.balanceOf('0x6B16f1E86a44368D0A88737dAA51DFe180c77Caa').call()

          if (balWRAFTMlp > 0) {
            var combine = 0
            combine = balFTMlp / 1e18
            combine += balWRAFTMlp / 1e18
            combine += balUSDC / 1e18
            combine += balSYF / 1e18
            combine += balBOO / 1e18
            combine += balUSDCWRA / 1e18
            combine += balSYFUSDC / 1e18

            console.log(combine)
            const totalliquidity = combine * ftmprice * 2

            setData(totalliquidity.toLocaleString('en-US', { maximumFractionDigits: 0 }))
          } else {
            var combine = 0
            combine = balFTMlp / 1e18
            combine += balUSDC / 1e18
            combine += balSYF / 1e18
            combine += balBOO / 1e18
            combine += balUSDCWRA / 1e18
            combine += balSYFUSDC / 1e18

            console.log(combine)
            const totalliquidity = combine * ftmprice * 2

            setData(totalliquidity.toLocaleString('en-US', { maximumFractionDigits: 0 }))
          }
        }, 5000)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [data])

  return data
}

export default useGetTVL
