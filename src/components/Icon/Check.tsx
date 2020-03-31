import React from 'react';
import Props from './Props';
import Component from './component';

const Check = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel}>
      <path
        d="M6.445 12.668a.9.9 0 0 0-1.303 1.242l3.573 3.745a.9.9 0 0 0 1.335-.036l8.591-10.037a.9.9 0 0
      0-1.367-1.17l-7.656 8.944a.4.4 0 0 1-.593.016l-2.58-2.704z"
      />
    </Component>
  );
};

export default Check;
