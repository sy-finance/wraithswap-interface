import { getAddress } from '@ethersproject/address'
import { BigNumber } from '@ethersproject/bignumber'
import { ethers } from 'ethers'
import Numeral from 'numeral'
import { Fraction } from '../entities'

export const formatFromBalance = (value: BigNumber | undefined, decimals = 18): string => {
  if (value) {
    return Fraction.from(BigNumber.from(value), BigNumber.from(10).pow(decimals)).toString()
  } else {
    return ''
  }
}
export const formatToBalance = (value: string | undefined, decimals = 18) => {
  if (value) {
    return { value: ethers.utils.parseUnits(Number(value).toFixed(decimals), decimals), decimals: decimals }
  } else {
    return { value: BigNumber.from(0), decimals: decimals }
  }
}

export const parseBalance = (value: string, decimals = 18) => {
  return ethers.utils.parseUnits(value || '0', decimals)
}
