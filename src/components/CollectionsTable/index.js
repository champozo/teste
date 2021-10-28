import { useState, useEffect } from 'react';
import { useAppContext } from 'contexts/AppContext';
import { CollectionItem } from 'components';
import Image from 'next/image'
import {
  CollectionsContainer,
  FilterArea,
  InputLabel,
  TableArea,
  TableHead,
  SearchInput,
  TableHeader
} from './styles';

export const CollectionsTable = ({ data, solana }) => {
  const collection = [...data]

  const ordenado = collection.sort(
    (a, b) => {
      return a.marketCap > b.marketCap ? -1 : a.marketCap < b.marketCap ? 1 : 0;
    });

  ordenado.length = 50;

  const { filter, setFilter, setPeriodo, periodo } = useAppContext();

  useEffect(() => {
    setPeriodo('InvertMarketCap');
  }, []);

  // console.log('stats', data)

  const [final, setFinal] = useState(ordenado);

  function switchSearch({ target }) {
    const { value } = target;
    setFilter(value);
    const temp = data.filter((item) => (item.collection.toUpperCase()).includes(value.toUpperCase()));
    temp.length = 50
    setFinal(temp);
  }

  function orderItems(column) {
    let temp;
    switch (column) {
      case 'Collection':
        const colle = [...data];
        if (periodo === 'Collection') {
          temp = colle.sort((a, b) => b.collection.toLowerCase().localeCompare(a.collection.toLowerCase()));
          setPeriodo('InvertCollection');
        } else if (periodo === 'InvertCollection') {
          temp = colle
          setPeriodo('')
        } else {
          temp = colle.sort((a, b) => a.collection.toLowerCase().localeCompare(b.collection.toLowerCase()));
          setPeriodo('Collection');
        }
        temp.length = 50
        setFinal(temp);
        break;

      case 'Average':
        const aver = [...data];
        if (periodo === 'Average') {
          temp = aver.sort((a, b) => {
            return a.average > b.average ? -1 : a.average < b.average ? 1 : 0;
          });
          setPeriodo('InvertAverage');
        } else if (periodo == 'InvertAverage'){
          temp = aver
          setPeriodo('')
        } else {
          temp = aver.sort((a, b) => {
            return a.average < b.average ? -1 : a.average > b.average ? 1 : 0;
          });
          setPeriodo('Average');
        }
        temp.length = 50
        setFinal(temp);
        break;

      case 'PriceChange':
        const price = [...data];
        if (periodo === 'PriceChange') {
          temp = price.sort(
            (a, b) => {
              return a.priceChange > b.priceChange ? -1 : a.priceChange < b.priceChange ? 1 : 0
            }
          );
          setPeriodo('InvertPriceChange');
        } else if (periodo === 'InvertPriceChange') {
          temp = price
          setPeriodo('')
        } else {
          temp = price.sort(
            (a, b) => {
              return a.priceChange < b.priceChange ? -1 : a.priceChange > b.priceChange ? 1 : 0
            }
          );
          setPeriodo('PriceChange');
        }
        temp.length = 50
        setFinal(temp);
        break;

      case 'MarketCap':
        const market = [...data];
        if (periodo === 'MarketCap') {
          temp = market.sort(
            (a, b) => {
              return a.marketCap > b.marketCap ? -1 : a.marketCap < b.marketCap ? 1 : 0
            }
          );
          setPeriodo('InvertMarketCap');
        } else if (periodo === 'InvertMarketCap') {
          temp = market
          setPeriodo('')
        } else {
          temp = market.sort(
            (a, b) => {
              return a.marketCap < b.marketCap ? -1 : a.marketCap > b.marketCap ? 1 : 0
            }
          );
          setPeriodo('MarketCap');
        }
        temp.length = 50
        setFinal(temp);
        break;

      case 'VolumeChange':
        const volume = [...data];
        if (periodo === 'VolumeChange') {
          temp = volume.sort((a, b) => {
            return a.volumeChange < b.volumeChange ? 1 : a.volumeChange > b.volumeChange ? -1 : 0
          });
          setPeriodo('InvertVolumeChange');
        } else if (periodo === 'InvertVolumeChange') {
          temp = volume
          setPeriodo('')
        } else {
          temp = volume.sort((a, b) => {
            return a.volumeChange > b.volumeChange ? 1 : a.volumeChange < b.volumeChange ? -1 : 0
          });
          setPeriodo('VolumeChange');
        }
        temp.length = 50
        setFinal(temp);
        break;

      case 'FloorPrice':
        const floor = [...data];
        if (periodo === 'FloorPrice') {
          temp = floor.sort(
            (a, b) => {
              return a.floorPrice < b.floorPrice ? 1 : a.floorPrice > b.floorPrice ? -1 : 0;
            }
          );
          setPeriodo('InvertFloorPrice');
        } else if (periodo === 'InvertFloorPrice') {
          temp = floor
          setPeriodo('')
        } else {
          temp = floor.sort(
            (a, b) => {
              return a.floorPrice > b.floorPrice ? 1 : a.floorPrice < b.floorPrice ? -1 : 0;
            }
          );
          setPeriodo('FloorPrice');
        }
        temp.length = 50
        setFinal(temp);
        break;
    }
  }

  return (
    <CollectionsContainer>
      <FilterArea>
        <InputLabel to='searchInput'>
          <Image
            src='/img/lupa.svg'
            height={20}
            width={20}
            alt='Icon'
          />
          <SearchInput
            type='text'
            placeholder='Search'
            id='searchInput'
            value={filter}
            onChange={switchSearch}
          />
        </InputLabel>
      </FilterArea>

      <TableArea>
        <TableHead>
          <TableHeader
            onClick={() => orderItems('Collection')}
            isActive={periodo === 'Collection' || periodo === 'InvertCollection' && true}
            hasPadding
          >
            Collection&nbsp;
            {periodo === 'Collection' ? '▲' : periodo === 'InvertCollection' ? '▼' : null}
          </TableHeader>

          <TableHeader
            onClick={() => orderItems('MarketCap')}
            isActive={periodo === 'MarketCap' || periodo === 'InvertMarketCap' && true}
          >
            Market Cap&nbsp;
            {periodo === 'MarketCap' ? '▲' : periodo === 'InvertMarketCap' ? '▼' : null}
          </TableHeader>

          <TableHeader
            onClick={() => orderItems('Average')}
            isActive={periodo === 'Average' || periodo === 'InvertAverage' && true}
          >
            Average Price&nbsp;
            {periodo === 'Average' ? '▲' : periodo === 'InvertAverage' ? '▼' : null}
          </TableHeader>

          <TableHeader
            onClick={() => orderItems('PriceChange')}
            isActive={periodo === 'PriceChange' || periodo === 'InvertPriceChange' && true}
          >
            Price % change&nbsp;
            {periodo === 'PriceChange' ? '▲' : periodo === 'InvertPriceChange' ? '▼' : null}
          </TableHeader>

          <TableHeader
            onClick={() => orderItems('VolumeChange')}
            isActive={periodo === 'VolumeChange' || periodo === 'InvertVolumeChange' && true}
            isVisible
          >
            Volume % Change&nbsp;
            {periodo === 'VolumeChange' ? '▲' : periodo === 'InvertVolumeChange' ? '▼' : null}
          </TableHeader>

          <TableHeader
            onClick={() => orderItems('FloorPrice')}
            isActive={periodo === 'FloorPrice' || periodo === 'InvertFloorPrice' && true}
            isVisible
          >
            Floor Price&nbsp;
            {periodo === 'FloorPrice' ? '▲' : periodo === 'InvertFloorPrice' ? '▼' : null}
          </TableHeader>
        </TableHead>

        {
          final.map(
            (item, index) => (
              <CollectionItem item={item} index={index} key={Math.random()} />
            )
          )
        }
      </TableArea>
    </CollectionsContainer>
  );
}

