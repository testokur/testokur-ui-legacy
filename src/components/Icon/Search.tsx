import React from 'react';
import Props from './Props';
import Component from './component';

const Search = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M9.815 3.19a6.625 6.625 0 0 1 5.624 10.128l4.927 4.933a1.5 1.5 0 1 1-2.123 2.12l-4.926-4.931A6.625 6.625 0 1 1 9.815 
      3.19zm0 2.25a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75z"
      />
    </Component>
  );
};

export default Search;
