/* eslint-disable @next/next/no-img-element */
import {
  Content,
  Title,
  Upcoming,
  CollectionCard,
  SocialIcon,
  CollectionData,
  CardHeader,
  CardDescription,
  CardFooter,
  SocialLinks,
  Button,
  DataPill,
  Image
} from './styles';

import { Banner } from 'components'
import { upcoming } from 'config/UpcomingConfig'
import { Fragment } from 'react'

function breakLine(description) {
  const final = description.split('|quebra|');
  return (
    <ul>
      {
        final.map((linha) => <li key={ Math.random() }>{linha}</li>)
      }
    </ul>
  );
}

export const UpcomingContent = () => {
  return (
    <Content>
      <Title>
        Upcoming Drops
      </Title>

      <Banner />

      <Upcoming>
        {upcoming.map(collection => {
          return (
            <Fragment key={collection.name}>
              <CollectionCard>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  height={170}
                  width={170}
                  align='center'
                  radius='50%'
                />
                <CollectionData>
                  <CardHeader>
                    <h1>{collection.name}</h1>
                    <DataPill>{collection.mint.price}</DataPill>
                    <DataPill color='#7FBA7A'>{collection.mint.date}</DataPill>
                  </CardHeader>
                  <CardDescription>
                    {
                      collection.name === 'TheSquidZ' ? breakLine(collection.description) : <p> { collection.description } </p>
                    }
                  </CardDescription>
                  <CardFooter>
                    <SocialLinks>
                      <SocialIcon target='_blank' href={collection.twitterUrl}>
                        <img src="/img/twitter.png" alt="Twitter" height={13} />
                      </SocialIcon>
                      <SocialIcon target='_blank' href={collection.discord}>
                        <img src="/img/discord.png" alt="Discord" height={13}/>
                      </SocialIcon>
                    </SocialLinks>
                    <Button href={collection.mint.website} target='_blank'>
                      Mint
                    </Button>
                  </CardFooter>
                </CollectionData>
              </CollectionCard>
            </Fragment>
          )
        })}
      </Upcoming>
    </Content>
  );
}

