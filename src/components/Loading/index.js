import Image from 'next/image'
import { LoadingArea } from './styles';

export const Loading = () => {
  return (
    <LoadingArea>
      <Image
        src={'/img/loading.svg'}
        height={300}
        width={300}
        alt='Loading'
      />
    </LoadingArea>
  );
}
