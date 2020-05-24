import React from 'react';
import Props from './Props';
import Component from './component';

const Remove = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M14.659 18.773v-7.364a.614.614 0 0 0-.614-.614.614.614 0 0 0-.613.614v7.364c0 .339.275.613.614.613a.614.614 0 0 0 
      .613-.613zm-4.09 0v-7.364a.614.614 0 0 0-.614-.614.614.614 0 0 0-.614.614v7.364c0 .339.275.613.614.613a.614.614 0 0 0 
      .613-.613zm7.567-10.637a.41.41 0 0 1 .41.41V20c0 .903-.734 1.636-1.637 1.636H7.091A1.637 1.637 0 0 1 5.455 20V8.546a.41.41 0 
      0 1 .409-.41h12.272zm-8.59-3.068c0 .113.091.205.204.205h4.5a.205.205 0 0 0 .205-.205V4.046a.41.41 0 0 0-.41-.41h-4.09a.41.41 
      0 0 0-.41.41v1.022zm10.636.205A.818.818 0 0 1 21 6.09a.818.818 0 0 1-.818.818H3.818A.819.819 0 0 1 3 6.091a.819.819 0 0 
      1 .818-.818h3.886a.205.205 0 0 0 .205-.205V4.046C7.91 2.915 8.825 2 9.954 2h4.091c1.13 0 2.046.915 2.046 2.046v1.022c0 
      .113.092.205.205.205h3.886z"
      />
    </Component>
  );
};

export default Remove;
