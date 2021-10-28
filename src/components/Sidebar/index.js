import Image from 'next/image'
import { SidebarNav } from './SidebarNav';
import twitterImg from '/public/img/twitter-white.svg'
import { Container, LogoArea, Logo, SocialArea, MenuButton, MenuContainer, Divider, MobileWrapper } from './styles'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'

export function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 428px)')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isMobile ? (
        <>
          <MenuButton isMobile={isMobile} onClick={() => setIsOpen(!isOpen)}>
            <Hamburger color='#fff'/>
          </MenuButton>
          <MobileWrapper isOpen={isOpen}>
            <LogoArea>
              <Logo src='/img/logo.png' alt='Logo' />
              <h1>SolaLand</h1>
            </LogoArea>

            <SidebarNav />
          </MobileWrapper>
        </>
      ) : (
        <Container isMobile={isOpen}>
          <MenuContainer>
            <MenuButton>
              <Image
                src='/img/menu.svg'
                width={32}
                height={32}
                alt='Menu button'
              />
            </MenuButton>

            <Divider />
          </MenuContainer>

          <LogoArea>
            <Logo src='/img/logo.png' alt='Logo' />
            <h1>SolaLand</h1>
          </LogoArea>

          <SidebarNav />

          <Divider />

          <SocialArea>
            <a href='https://twitter.com/solalandhq' target='_blank' rel="noreferrer">
              <Image
                src={twitterImg}
                width={30}
                height={30}
                alt='Twitter logo'
              />
            </a>
          </SocialArea>
        </Container>
      )}
    </>
  )
}
