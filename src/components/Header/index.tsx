import { ChainId, Currency, NATIVE } from '@sushiswap/sdk'
import { Feature, featureEnabled } from '../../functions/feature'
import React, { useEffect, useState } from 'react'

import { ANALYTICS_URL } from '../../constants'
import Buy from '../../features/on-ramp/ramp'
import ExternalLink from '../ExternalLink'
import Image from 'next/image'
import LanguageSwitch from '../LanguageSwitch'
import Link from 'next/link'
import More from './More'
import NavLink from '../NavLink'
import { Popover } from '@headlessui/react'
import QuestionHelper from '../QuestionHelper'
import Web3Network from '../Web3Network'
import Web3Status from '../Web3Status'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useETHBalances } from '../../state/wallet/hooks'
import { useLingui } from '@lingui/react'

import useTokenBalance from '../../hooks/useTokenBalance'
import { formatFromBalance } from '../../hooks/formatFromBalance'

import useGetPriceData from '../../hooks/useGetPriceData'
import useGetuPriceData from '../../hooks/useGetuPriceData'
import useGetFTMPrice from '../../hooks/useGetFTMPrice'

import Wraith from './wraithcoin.svg'
import Syf from './syfin.svg'

// import { ExternalLink, NavLink } from "./Link";
// import { ReactComponent as Burger } from "../assets/images/burger.svg";

function AppBar(): JSX.Element {
  const { i18n } = useLingui()
  const { account, chainId, library } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  const FantomBalanceBigInt = useTokenBalance('0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83')
  const FantomBalance = formatFromBalance(FantomBalanceBigInt?.value, FantomBalanceBigInt?.decimals)

  const WraithBalanceBigInt = useTokenBalance('0x4CF098d3775Bd78a4508a13E126798Da5911b6cd')
  const WraithBalance = formatFromBalance(WraithBalanceBigInt?.value, WraithBalanceBigInt?.decimals)
  const SyfBalanceBigInt = useTokenBalance('0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC')
  const SyfBalance = formatFromBalance(SyfBalanceBigInt?.value, SyfBalanceBigInt?.decimals)
  const WraithUSD = useGetPriceData()
  const SyfUSD = useGetuPriceData()
  const FTMUSD = useGetFTMPrice()

  return (
    //     // <header className="flex flex-row justify-between w-screen flex-nowrap">
    <header className="flex-shrink-0 w-full">
      <Popover as="nav" className="z-10 w-full bg-transparent header-border-b">
        {({ open }) => (
          <>
            <div className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* <Image src="/wraith-logo.png" alt="Wraith" height="40px" width="100%" /> */}
                  <div className="flex-shrink-0">
                    <img src="/wraith-logo.png" alt="Wraithswap" className="w-auto" style={{ height: '4.5rem' }} />
                  </div>
                  <div className="hidden sm:block sm:ml-4">
                    <div className="flex space-x-2">
                      {/* <Buy /> */}
                      <NavLink href="/swap">
                        <a
                          id={`swap-nav-link`}
                          className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                        >
                          {i18n._(t`Swap`)}
                        </a>
                      </NavLink>
                      <NavLink href="/pool">
                        <a
                          id={`pool-nav-link`}
                          className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                        >
                          Liquidity
                        </a>
                      </NavLink>
                      <NavLink href="https://syfin.art">
                        <a
                          id={`nft-nav-link`}
                          className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                        >
                          NFTs 🡕
                        </a>
                      </NavLink>
                      <NavLink href="https://fields.wraithswap.finance">
                        <a
                          id={`nft-nav-link`}
                          className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                        >
                          Fields 🡕
                        </a>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto lg:relative lg:p-0 lg:bg-transparent">
                  <div className="flex items-center justify-between sm:justify-end space-x-2 w-full">
                    <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                      {chainId && chainId === ChainId.FANTOM && library && library.provider.isMetaMask && (
                        <>
                          <QuestionHelper
                            text={
                              account &&
                              chainId &&
                              SyfBalance && (
                                <>
                                  <div className="py-2 px-3 text-primary text-bold sm:inline-block">
                                    <p>Wraith Balance</p>
                                    <b>{WraithBalance}</b>
                                    <p style={{ fontSize: '11px' }}>
                                      <b>≈ ${(Number(WraithBalance) * WraithUSD).toFixed(2)} USD</b>
                                    </p>
                                    <p>
                                      <b>${WraithUSD.toFixed(5)} USD ea</b>
                                    </p>
                                    <p>Click to add WRA to your Metamask Wallet</p>
                                  </div>
                                </>
                              )
                            }
                          >
                            <div
                              className="hidden sm:inline-block rounded-md bg-dark-900 hover:bg-dark-800 p-0.5 cursor-pointer"
                              onClick={() => {
                                const params: any = {
                                  type: 'ERC20',
                                  options: {
                                    address: '0x4CF098d3775Bd78a4508a13E126798Da5911b6cd',
                                    symbol: 'WRA',
                                    decimals: 18,
                                    image:
                                      'https://cloudflare-ipfs.com/ipfs/QmX4YqexRsESSEDSid94nc6GMrEkw7b78TpAZGz7z6PfMB',
                                  },
                                }

                                if (library && library.provider.isMetaMask && library.provider.request) {
                                  library.provider
                                    .request({
                                      method: 'wallet_watchAsset',
                                      params,
                                    })
                                    .then((success) => {
                                      if (success) {
                                        console.log('Successfully added Wraith to MetaMask')
                                      } else {
                                        throw new Error('Something went wrong.')
                                      }
                                    })
                                    .catch(console.error)
                                }
                              }}
                            >
                              <img
                                src="/wraithcoin.svg"
                                alt="Switch Network"
                                style={{ minWidth: 28, minHeight: 28, maxWidth: 28, maxHeight: 28 }}
                                className="rounded-md m-3 object-contain inline-block"
                              />
                              {/* {account && chainId && WraithBalance && (
                                            <>
                                                <div className="py-2 px-3 text-primary text-bold sm:inline-block">
                                                    {WraithBalance}{' WRA'}
                                                </div>
                                            </>
                                            )}                                             */}
                            </div>
                          </QuestionHelper>
                          <QuestionHelper
                            text={
                              account &&
                              chainId &&
                              SyfBalance && (
                                <>
                                  <div className="py-2 px-3 text-primary text-bold sm:inline-block">
                                    <p>Syfin Balance</p>
                                    <b>{SyfBalance}</b>
                                    <p style={{ fontSize: '11px' }}>
                                      <b>≈ ${(Number(SyfBalance) * SyfUSD).toFixed(2)} USD</b>
                                    </p>
                                    <p>
                                      <b>${SyfUSD.toFixed(7)} USD ea</b>
                                    </p>
                                    <p>Click to add SYF to your Metamask Wallet</p>
                                  </div>
                                </>
                              )
                            }
                          >
                            <div
                              className="hidden sm:inline-block rounded-md bg-dark-900 hover:bg-dark-800 p-0.5 cursor-pointer"
                              onClick={() => {
                                const params: any = {
                                  type: 'ERC20',
                                  options: {
                                    address: '0x1BCF4DC879979C68fA255f731FE8Dcf71970c9bC',
                                    symbol: 'SYF',
                                    decimals: 18,
                                    image: 'https://www.sy.finance/img/icon-blk.png',
                                  },
                                }

                                if (library && library.provider.isMetaMask && library.provider.request) {
                                  library.provider
                                    .request({
                                      method: 'wallet_watchAsset',
                                      params,
                                    })
                                    .then((success) => {
                                      if (success) {
                                        console.log('Successfully added Syfin to MetaMask')
                                      } else {
                                        throw new Error('Something went wrong.')
                                      }
                                    })
                                    .catch(console.error)
                                }
                              }}
                            >
                              <img
                                src="/syfin.svg"
                                alt="Switch Network"
                                style={{ minWidth: 28, minHeight: 28, maxWidth: 28, maxHeight: 28 }}
                                className="rounded-md m-3 object-contain inline-block"
                              />
                              {/* {account && chainId && SyfBalance && (
                                            <>
                                                <div className="py-2 px-3 text-primary text-bold sm:inline-block">
                                                    {SyfBalance}{' SYF'}
                                                </div>
                                            </>
                                            )}                                             */}
                            </div>
                          </QuestionHelper>
                        </>
                      )}
                    </div>

                    {library && library.provider.isMetaMask && (
                      <div className="hidden sm:inline-block">
                        <Web3Network />
                      </div>
                    )}

                    <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
                      {account && chainId && userEthBalance && (
                        <>
                          <div className="px-3 py-2 text-primary text-bold">
                            {userEthBalance?.toSignificant(4)} {NATIVE[chainId].symbol}
                          </div>
                        </>
                      )}
                      <Web3Status />
                    </div>
                    <div className="hidden md:block  bg-dark-900 hover:bg-dark-800 rounded-lg">
                      <LanguageSwitch />
                    </div>
                    <More />
                  </div>
                </div>
                <div className="flex -mr-2 sm:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none">
                    <span className="sr-only">{i18n._(t`Open main menu`)}</span>
                    {open ? (
                      <svg
                        className="block w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      // <X title="Close" className="block w-6 h-6" aria-hidden="true" />
                      <svg
                        className="block w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      // <Burger title="Burger" className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Popover.Panel className="sm:hidden">
              <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
                <Link href={'/swap'}>
                  <a
                    id={`swap-nav-link`}
                    className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                  >
                    {i18n._(t`Swap`)}
                  </a>
                </Link>
                <Link href={'/pool'}>
                  <a
                    id={`pool-nav-link`}
                    className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                  >
                    Liquidity
                  </a>
                </Link>

                <Link href={'https://syfin.art'}>
                  <a
                    id={`migrate-nav-link`}
                    className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                  >
                    NFTs 🡕
                  </a>
                </Link>
                <Link href={'https://fields.wraithswap.finance'}>
                  <a
                    id={`migrate-nav-link`}
                    className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                  >
                    Fields 🡕
                  </a>
                </Link>
                {/* {chainId && featureEnabled(Feature.LIQUIDITY_MINING, chainId) && (
                  <Link href={'/farm'}>
                    <a
                      id={`farm-nav-link`}
                      className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                    >
                      {' '}
                      {i18n._(t`Farm`)}
                    </a>
                  </Link>
                )}

                {chainId && featureEnabled(Feature.KASHI, chainId) && (
                  <>
                    <Link href={'/lend'}>
                      <a
                        id={`lend-nav-link`}
                        className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                      >
                        {i18n._(t`Lend`)}
                      </a>
                    </Link>

                    <Link href={'/borrow'}>
                      <a
                        id={`borrow-nav-link`}
                        className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                      >
                        {i18n._(t`Borrow`)}
                      </a>
                    </Link>
                  </>
                )}

                {chainId && featureEnabled(Feature.STAKING, chainId) && (
                  <Link href={'/stake'}>
                    <a
                      id={`stake-nav-link`}
                      className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                    >
                      {i18n._(t`Stake`)}
                    </a>
                  </Link>
                )}

                {chainId && featureEnabled(Feature.ANALYTICS, chainId) && (
                  <ExternalLink
                    id={`analytics-nav-link`}
                    href={ANALYTICS_URL[chainId] || 'https://analytics.sushi.com'}
                    className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                  >
                    {i18n._(t`Analytics`)}
                  </ExternalLink>
                )} */}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </header>
  )
}

export default AppBar
