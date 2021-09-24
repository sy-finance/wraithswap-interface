import { Currency, CurrencyAmount, Token } from '@sushiswap/sdk'

import { ethers } from 'ethers'

import { BigNumber, BigNumberish } from '@ethersproject/bignumber'

export default interface LPToken {
  id?: number
  address: string
  tokenA: Token
  tokenB: Token
  totalSupply: BigNumber
  balance: CurrencyAmount<Currency>
  name?: string
  symbol?: string
  decimals?: number
  version?: 'v1' | 'v2'
}
