import React from 'react';
import Props from './Props';
import Component from './component';

const ArrowRepeat = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        fillRule="evenodd"
        d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 
      00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 
      00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z"
        clipRule="evenodd"
      />
    </Component>
  );
};

export default ArrowRepeat;
