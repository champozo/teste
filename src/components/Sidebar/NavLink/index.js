import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { StyledLink, IconContainer, SoonIcon } from './styles'

export function NavLink({ icon, href, comingSoon, target, title }) {
  const { pathname } = useRouter()
  let isActive = false

  if (pathname === href) {
    isActive = true
  }

  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive} href={href} target={target && '_blank'}>
        <IconContainer>
          <Image
            src={isActive ? icon.active : icon.inactive}
            alt={title}
            width={18}
            height={18}
          />
        </IconContainer>
            <p>{title}</p>
            {comingSoon && <SoonIcon>Soon</SoonIcon>}
      </StyledLink>
    </Link>
  )
}


