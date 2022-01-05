import { ChainId, Currency, WNATIVE } from '@sushiswap/sdk'
import React, { FunctionComponent, useMemo } from 'react'

import Logo from '../Logo'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import useHttpLocations from '../../hooks/useHttpLocations'

const BLOCKCHAIN = {
  [ChainId.MAINNET]: 'ethereum',
  [ChainId.BSC]: 'binanace',
  [ChainId.CELO]: 'celo',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.HARMONY]: 'harmony',
  [ChainId.MATIC]: 'polygon',
  [ChainId.XDAI]: 'xdai',
  // [ChainId.OKEX]: 'okex',
}

function getCurrencySymbol(currency) {
  if (currency.symbol === 'WBTC') {
    return 'btc'
  }
  if (currency.symbol === 'WETH') {
    return 'eth'
  }
  if (currency.symbol === 'WFTM') {
    return 'ftm'
  }
  return currency.symbol.toLowerCase()
}

export function getCurrencyLogoUrls(currency) {
  const urls = []

  if (currency.symbol === 'WRA') {
    urls.push(`https://ipfs.io/ipfs/QmX4YqexRsESSEDSid94nc6GMrEkw7b78TpAZGz7z6PfMB?filename=wraithcoin.png`)
  } else {
    urls.push(`https://raw.githubusercontent.com/sushiswap/icons/master/token/${getCurrencySymbol(currency)}.jpg`)
    if (currency.chainId in BLOCKCHAIN) {
      urls.push(
        `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
          currency.address
        }/logo.png`
      )
      urls.push(
        `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${
          BLOCKCHAIN[currency.chainId]
        }/assets/${currency.address}/logo.png`
      )
    }
  }

  return urls
}

const AvalancheLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/avax.jpg'
const BinanceCoinLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/bnb.jpg'
const EthereumLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg'
const FantomLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/ftm.jpg'
const HarmonyLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/one.jpg'
const HecoLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/heco.jpg'
const MaticLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg'
const MoonbeamLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg'
const OKExLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/okt.jpg'
const xDaiLogo =
  'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/xdai/assets/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo.png'
const CeloLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/celo.jpg'
const PalmLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/palm.jpg'
const MovrLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/movr.jpg'

const LOGO: { readonly [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: EthereumLogo,
  [ChainId.FANTOM]: FantomLogo,
  [ChainId.FANTOM_TESTNET]: FantomLogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.MATIC_TESTNET]: MaticLogo,
  [ChainId.XDAI]: xDaiLogo,
  [ChainId.BSC]: BinanceCoinLogo,
  [ChainId.BSC_TESTNET]: BinanceCoinLogo,
  [ChainId.MOONBEAM_TESTNET]: MoonbeamLogo,
  [ChainId.AVALANCHE]: AvalancheLogo,
  [ChainId.AVALANCHE_TESTNET]: AvalancheLogo,
  [ChainId.HECO]: HecoLogo,
  [ChainId.HECO_TESTNET]: HecoLogo,
  [ChainId.HARMONY]: HarmonyLogo,
  [ChainId.HARMONY_TESTNET]: HarmonyLogo,
  [ChainId.OKEX]: OKExLogo,
  [ChainId.OKEX_TESTNET]: OKExLogo,
  [ChainId.ARBITRUM]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.PALM]: PalmLogo,
  [ChainId.PALM_TESTNET]: PalmLogo,
  [ChainId.MOONRIVER]: MovrLogo,
}

interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
  squared?: boolean
}

const unknown = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png'

const wralogo = 'https://cloudflare-ipfs.com/ipfs/QmX4YqexRsESSEDSid94nc6GMrEkw7b78TpAZGz7z6PfMB'

const syflogo = 'https://sy.finance/img/icon-blk.png'

const ftmlogo = 'https://cloudflare-ipfs.com/ipfs/QmRJgxRqXUpHeskg48qeehUK97FzCAY7espZhTAVdrh9B9'

const wftmlogo = 'https://cloudflare-ipfs.com/ipfs/QmQTWE7DDGzPutQg3jgJKm8oy9qwnnWxJsxXRcpaUPgDE4'

const usdclogo = 'https://cloudflare-ipfs.com/ipfs/QmYD5pwxPxBHT7pubcMGsw6XEPNS9Q62YGE4sK2XqFoqPR'

const usdtlogo = 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png'

const boologo = 'https://assets.spookyswap.finance/tokens/BOO.png'

const dailogo = 'https://assets.spookyswap.finance/tokens/DAI.png'

const crvlogo = 'https://assets.spookyswap.finance/tokens/CRV.png'

const fusdlogo = 'https://assets.spookyswap.finance/tokens/fUSD.png'

const wbtclogo = 'https://assets.spookyswap.finance/tokens/wBTC.png'

const wethlogo = 'https://assets.spookyswap.finance/tokens/wETH.png'

const yfilogo = 'https://assets.spookyswap.finance/tokens/YFI.png'

const elitelogo = 'https://assets.spookyswap.finance/tokens/ELITE.png'

const geistlogo = 'https://assets.spookyswap.finance/tokens/GEIST.png'

const linklogo = 'https://cloudflare-ipfs.com/ipfs/QmUdtBEt4zaex8NYA5St9iSdnq6JKtJw2ArHpyr49W4XuL'

const mimlogo = 'https://abracadabra.money/img/Token_MIM.12c48248.svg'

const tomblogo = 'https://assets.spookyswap.finance/tokens/TOMB.png'

const tsharelogo = 'https://assets.spookyswap.finance/tokens/TSHARE.png'

const spelllogo = 'https://assets.spookyswap.finance/tokens/SPELL.png'

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({
  currency,
  size = '24px',
  style,
  className = '',
  ...rest
}) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )

  const srcs = useMemo(() => {
    if (!currency) {
      return [unknown]
    }

    if (currency.isNative || currency.equals(WNATIVE[currency.chainId])) {
      return [LOGO[currency.chainId], unknown]
    }

    // if (currency.symbol === 'WRA') {
    //   return [wralogo, wralogo]
    // }

    //console.log(currency.symbol)

    if (currency.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, unknown]
      }
      return defaultUrls
    }
  }, [currency, uriLocations])

  if (currency.symbol === 'FTM') {
    return <img src={ftmlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WFTM') {
    return <img src={wftmlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'USDC') {
    return <img src={usdclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'fUSDT') {
    return <img src={usdtlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'BOO') {
    return <img src={boologo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WRA') {
    return <img src={wralogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'LINK') {
    return <img src={linklogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'SYF') {
    return <img src={syflogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'TOMB') {
    return <img src={tomblogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'TSHARE') {
    return <img src={tsharelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'SPELL') {
    return <img src={spelllogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'MIM') {
    return <img src={mimlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'CRV') {
    return <img src={crvlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'DAI') {
    return <img src={dailogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'fUSD') {
    return <img src={fusdlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WBTC') {
    return <img src={wbtclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WETH') {
    return <img src={wethlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'YFI') {
    return <img src={yfilogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'ELITE') {
    return <img src={elitelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'GEIST') {
    return <img src={geistlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
}

export default CurrencyLogo
