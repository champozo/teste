import Image from 'next/image'
import closeImg from '/public/img/close.svg'
import {
  DesktopContainer,
  MobileContainer,
  CloseButton,
  Button,
} from './styles'

export const Banner = () => {
  return (
    <>
      <DesktopContainer>
        <h1>NoiaDucks</h1>
        <h2>2mins SOLDOUT! 100% Royalty Sharing and 51% Profit Sharing from our NFT Marketplace.</h2>
        <Button href='https://www.magiceden.io/marketplace/noiaducks' target='_blank'>
          <p>Buy Now</p>
        </Button>
      </DesktopContainer>

      <MobileContainer>
        {/* <CloseButton>
          <Image
            src={closeImg}
            height={10}
            width={10}
            alt='Close'
          />
        </CloseButton> */}
        <h1>NoiaDucks</h1>
        <h2>2mins SOLDOUT! 100% Royalty Sharing and 51% Profit Sharing from our NFT Marketplace.</h2>
        <Button href='https://www.magiceden.io/marketplace/noiaducks' target='_blank'>
          <p>Buy Now</p>
        </Button>
      </MobileContainer>
    </>
  )
}
