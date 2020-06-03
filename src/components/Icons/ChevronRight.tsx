import React from 'react';
import Props from './Props';
import Component from './component';

const ChevronRight = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M8.746 16.089l4.23-3.825a.4.4 0 0 0-.001-.595l-4.18-3.753a.904.904 0 0 1-.07-1.275.898.898 0 0 1 1.27-.07l5.256 
      4.72c.399.358.4.983.003 1.342L9.952 17.43a.898.898 0 0 1-1.271-.066.904.904 0 0 1 .065-1.274z"
      />
    </Component>
  );
};

export default ChevronRight;
