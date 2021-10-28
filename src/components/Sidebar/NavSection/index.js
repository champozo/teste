import { SectionTitle, LinkContainer, Divider } from './styles'

export function NavSection({ title, children }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <LinkContainer>
        {children}
      </LinkContainer>
      {/* <Divider /> */}
    </>
  )
}
