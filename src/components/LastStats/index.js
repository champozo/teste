import {
  LastInfos,
  InfoSection,
  InfoHeadingArea,
  Image,
  PriceArea,
  Price,
  PriceVariation,
  ProgressBar,
  InsideBar
} from './styles';

export const LastStats = (props) => {
  const solanaPrev = (100 / (100 + props.solanaVariation) * props.solana).toFixed(2);
  const prevMarket = (100 / (100 + props.marketVariation) * props.marketCap).toFixed(2);

  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  return (
    <LastInfos>

      <InfoSection>
        <InfoHeadingArea>
          <Image
            src='/img/market.svg'
            height={16}
            right={8}
            alt='Market Icon'
          />
          Market Capitalization
        </InfoHeadingArea>

        <PriceArea>
          <Price>
            {`$${props.marketCap.toLocaleString('en-US')}`}
          </Price>
          <PriceVariation>
            <p>{`${props.marketVariation.toFixed(1)}%`}</p>
            <span>{numberFormat.format(prevMarket)}</span>

          </PriceVariation>
        </PriceArea>

        <ProgressBar>
          <InsideBar color='#6C5DD3' width='100%'/>
        </ProgressBar>

      </InfoSection>



      <InfoSection>

        <InfoHeadingArea>
          <Image
            src='/img/7day.svg'
            height={16}
            right={8}
            alt='Market Icon'
          />
          7 Day Volume
        </InfoHeadingArea>

        <PriceArea>
          <Price>
            {`$${props.day7}`}
          </Price>
          <PriceVariation>
            <p>{`${props.day7Variation.toFixed(1)}%`}</p>
            <span>{`$${props.prevDay7}`}</span>

          </PriceVariation>
        </PriceArea>

        <ProgressBar>
          <InsideBar color='#FFA2C0' />
        </ProgressBar>

      </InfoSection>

      <InfoSection>

        <InfoHeadingArea>
          <Image
            src='/img/solana.svg'
            height={16}
            right={8}
            alt='Market Icon'
          />
          Solana
        </InfoHeadingArea>

        <PriceArea>
          <Price>
            {`$${props.solana}`}
          </Price>
          <PriceVariation>
            <p>{`${props.solanaVariation.toFixed(1)}%`}</p>
            <span>{`$${solanaPrev.toLocaleString('en-US')}`}</span>

          </PriceVariation>
        </PriceArea>

        <ProgressBar>
          <InsideBar color='#3F8CFF' />
        </ProgressBar>

      </InfoSection>
    </LastInfos>
  );
}
