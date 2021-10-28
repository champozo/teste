/* eslint-disable @next/next/no-img-element */
import {
  Collection,
  Card,
  Image,
  TextArea,
  AverageData,
  PriceChangeData,
  MarketCapData,
  VolumeChangeData,
  FloorPriceData,
  RedPercent,
  GreenPercent,
  Data,
  DataPercent
} from './styles';

export const CollectionItem = ({ item, index }) => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  // if (item.dailySales < 1 || item.prevDailySales < 1) return null;

  return (
    <Collection>
      <Card>
        <h3>
          {`${index + 1}.`}
        </h3>
        <img src={item.img} alt='NFT Icon' height={72} width={72} />
        <TextArea>
          <p>{item.collection}</p>
          <span>{item.totalSales}</span>
        </TextArea>
      </Card>

      <Data color='#5F75EE'>
        <p>{numberFormat.format(item.marketCap)}</p>
      </Data>
      <Data>
        <p>{`${item.price.toFixed(2)}SOL`}</p>
      </Data>

      <Data>
        <img
          src={item.priceChange > 0 ? '/img/green.svg' : '/img/red.svg'}
          alt={item.priceChange > 0 ? 'Green Sqare' : 'Red Sqare'}
          height={20}
          width={20}
        />
        <DataPercent color={item.priceChange > 0 ? '#7FBA7A' : '#FFA2C0'}>
          <p>{!item.priceChange ? '0.00' : `${item?.priceChange.toFixed(2)}%`}</p>
        </DataPercent>
      </Data>

      <Data color={item.volumeChange > 0 ? '#7FBA7A' : '#FFA2C0'} isVisible>
        <p>{`${item.volumeChange.toFixed(2)}%`}</p>
      </Data>
      <Data isVisible>
        <p>{item.floorPrice ? item.floorPrice.toFixed(2) : '0.00'}SOL</p>
      </Data>
    </Collection>
  );
}
