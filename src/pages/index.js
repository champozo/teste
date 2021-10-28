import { Layout, Banner, LastStats, CollectionsTable, Loading, MobileContent } from 'components'
import styled from 'styled-components'

export default function Home({ collections, solana }) {
  if (!collections || !solana) return <Loading />
  return (
    <Layout
      title='SolaLandHQ • Solana NFT House.'
      description='SolaLand is your Solana NFT House for analytics, upcoming drops, rarity tools and more!'
    >
      <StyledContent>
        <Title>Analytics</Title>

        <Banner />

        <LastStats
          marketCap={solana.market_cap}
          marketVariation={solana.market_cap_change_percentage_24h}
          prevMarket='834,786,280'
          day7='825,795,126'
          day7Variation={5.0}
          prevDay7='834,786,280'
          solana={solana.current_price}
          solanaVariation={solana.price_change_percentage_24h}
          prevSolana={(100 / (100 + solana.price_change_percentage_24h) * solana.current_price).toFixed(2)}
        />

        <CollectionsTable data={collections} solana={solana.current_price} />

        <MobileContent data={collections} />
      </StyledContent>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await (await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana')).json();
  const solana = data[0]

  const response = await (await fetch('https://api-mainnet.magiceden.io/rpc/getAggregatedCollectionMetrics')).json();
  const collections = response.results.map(obj => {
    return {
      price: obj.avgPrice.value1d,
      priceChange: obj.avgPrice.prev1d / obj.avgPrice.value1d,
      volumeChange: obj.avgPrice.delta1d,
      average: obj.avgPrice.value1d,
      marketCap: obj.totalItems * obj.avgPrice.value1d * solana.current_price,
      floorPrice: obj.floorPrice.value1d,
      collection: obj.name,
      totalSales: obj.totalItems,
      img: obj.image,
      dailySales: 0,
    }
  })

  return {
    props: {
      collections,
      solana
    },
    revalidate: 60 * 5
  }
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 0 clamp(2rem, 4rem, 4rem) 1rem;
  position: relative;

  @media(max-width: 415px) {
    padding: 0;
  }
`

const Title = styled.h1`
  max-width: 1215px;
  width: 100%;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 600;
  margin-top: 41px;
  padding: 0;
  text-align: start;

  @media(max-width: 428px) {
    max-width: 368px;
    font-size: 32px;
    font-weight: 600;
    margin-left: 32px;
    line-height: 48px;
    margin-bottom: 60px;
  }
`
