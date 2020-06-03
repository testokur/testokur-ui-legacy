import React from 'react';
import Props from './Props';
import Component from './component';

const ChevronLeft = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M15.254 16.089c.369.333.398.904.065 1.274a.898.898 0 0 1-1.27.066l-5.303-4.795a.904.904 0 0 1 .002-1.343l5.256-4.72a.898.898
        0 0 1 1.271.07c.332.372.3.942-.07 1.275l-4.18 3.753a.4.4 0 0 0 0 .594l4.229 3.826z"
      />
    </Component>
  );
};

export default ChevronLeft;
