import { NavLink } from '../NavLink'
import { NavSection } from "../NavSection";
import { Container, SectionContainer } from './styles'
import { toolsSection, insightsSection } from 'components/Sidebar/config'
import { useMediaQuery } from 'hooks/useMediaQuery'

export function SidebarNav() {
  const isDesktop = useMediaQuery('(min-width: 993px)')
  const isMobile = useMediaQuery('(max-width: 428px)')
  return (
    <Container>
      <SectionContainer>
        <NavSection title={isDesktop ? 'Solana tools' : isMobile ? 'Solana tools' : 'Data'}>
          {toolsSection.map(link => {
            const { title, path, icon, comingSoon, newTab } = link
            return (
              <NavLink
                key={title}
                href={path}
                icon={icon}
                title={title}
                comingSoon={comingSoon}
                target={newTab}
              />
            )
          })}
        </NavSection>
      </SectionContainer>

      {/* {!isDesktop && (
        <SectionContainer>
          <NavSection title='Insights'>
            {insightsSection.map(link => {
              const { title, path, icon, comingSoon, newTab } = link
              return (
                <NavLink
                  key={title}
                  href={path}
                  icon={icon}
                  title={title}
                  comingSoon={comingSoon}
                  target={newTab}
                />
              )
            })}
          </NavSection>
        </SectionContainer>
      )} */}
    </Container>
  )
}

