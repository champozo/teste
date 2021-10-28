import { useState } from 'react';
import { useAppContext } from 'contexts/AppContext';
import {
  MobileArea,
  HeadingArea,
  SelectFilter,
  TopArea,
  Image,
  Divider,
  MobileItem,
  FirstArea,
  CheckInput,
  ImageArea,
  BackImageArea,
  RightSide,
  SecondArea,
  Pipe,
  LoadMore,
  InputArea,
  SearchInput,
  PriceChange
} from './styles';

export const MobileContent = ({ data }) => {
  const collection = [...data]
  const ordenado = collection.sort(
    (a, b) => {
      return a.dailyVolume < b.dailyVolume ? 1 : a.dailyVolume < b.dailyVolume ? -1 : 0;
    });
  ordenado.length = 50;
  const { filter, setFilter, setPeriodo } = useAppContext();
  const [final, setFinal] = useState(ordenado);

  function switchSearch({ target }) {
    const { value } = target;
    setFilter(value);
    const temp = data.filter((item) => (item.collection.toUpperCase()).includes(value.toUpperCase()));
    temp.length = 50
    setFinal(temp);
  }

  function ItemMobile(item, index) {
    // if (item.dailySales < 1 || item.prevDailySales < 1) return null;
    let color;

    if (item.dailySales > item.prevDailySales * 1.2) {
      color = '0F0';
    } else if (item.dailySales < item.prevDailySales) {
      color = 'FFA2C0';
    } else {
      color = '6C5DD3';
    }
    return (
      <MobileItem key={Math.random()}>
        <FirstArea>
          <p>
            {`${index + 1}.`}
          </p>
          <ImageArea>
            <Image
              src={item.img}
              height={55}
              width={72}
              radius={8}
              alt={item.collection}
            />

          </ImageArea>
          {/* <BackImageArea /> */}
          <RightSide>
            <h1>
              {item.collection}
            </h1>

            <h2>
              3D Illustration
            </h2>
          </RightSide>

        </FirstArea>

        <SecondArea>
          <Pipe color={color} />

          <span>{`$${item?.price.toFixed(2)}`}</span>
          <p>{item.floorPrice}SOL</p>
          {/* <p>{item.totalSales}</p> */}
          <PriceChange
            color={item.priceChange ? '#7FBA7A' : '#FFA2C0'}
          >
            {item.priceChange ? item.priceChange.toFixed(2) : 0}%
          </PriceChange>
          {/* <h2>{ item.dailySales }</h2> */}

        </SecondArea>
      </MobileItem>

    );
  }

  return (
    <MobileArea>
      <HeadingArea>
        <TopArea>
          <InputArea
            to='searchInput'
          >
            <Image
              src='/img/lupa.svg'
              height={20}
              alt='Icon'
              color='#FFF'
              left={18}
            />
            <SearchInput
              type='text'
              placeholder='Search'
              id='searchInput'
              value={filter}
              onChange={switchSearch}
            />
          </InputArea>
        </TopArea>
      </HeadingArea>
      <Divider />
      {
        final.map((item, index) => ItemMobile(item, index))
      }
    </MobileArea>
  );
}
