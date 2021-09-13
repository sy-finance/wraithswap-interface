import { ChainId } from '@sushiswap/sdk'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../../hooks'
import { useCallback } from 'react'
import { useLingui } from '@lingui/react'

const DEFAULT_NETWORK = {
  [ChainId.MAINNET]: 'ethereum',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.BSC]: 'bsc',
  [ChainId.MATIC]: 'matic',
}

const DEFAULT_CRYPTO_CURRENCY = {
  [ChainId.MAINNET]: 'ETH',
  [ChainId.FANTOM]: 'FTM',
  [ChainId.BSC]: 'BNB',
  [ChainId.MATIC]: 'MATIC',
}

export default function Buy() {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const onClick = useCallback(() => {
    if (!(chainId in DEFAULT_NETWORK)) {
      return
    }

    const widget = new RampInstantSDK({
      userAddress: account,
      hostAppName: 'WRA',
      hostLogoUrl: 'https://ipfs.io/ipfs/QmX4YqexRsESSEDSid94nc6GMrEkw7b78TpAZGz7z6PfMB?filename=wraithcoin.png',
      defaultAsset: DEFAULT_CRYPTO_CURRENCY[chainId],
    })

    widget.show()
  }, [account, chainId])

  return (
    <a
      id={`buy-link`}
      onClick={onClick}
      className="p-2 cursor-pointer text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    >
      {i18n._(t`Buy`)}
    </a>
  )
}
