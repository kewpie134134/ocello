import React from 'react';
import Image from 'next/image';

interface MarkerProps {
  color: string;
}

const Marker = (props: MarkerProps) => {
  const { color } = props;
  if (['black', 'white'].includes(color)) {
    return (
      <Image
        src={`/assets/images/${color}Marker.svg`}
        width={80}
        height={80}></Image>
    );
  } else {
    return <></>;
  }
};
export default Marker;
