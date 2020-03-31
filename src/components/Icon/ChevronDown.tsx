import React from 'react';
import Props from './Props';
import Component from './component';

const ChevronDown = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel}>
      <path
        d="M7.912 8.747a.904.904 0 0 0-1.274-.065.898.898 0 0 0-.066 1.27l4.796 5.303a.904.904 0 0 0
      1.342-.003l4.72-5.255a.898.898 0 0 0-.07-1.271.904.904 0 0 0-1.274.07l-3.754 4.18a.4.4 0 0 1-.595 0L7.912 8.747z"
      />
    </Component>
  );
};

export default ChevronDown;
