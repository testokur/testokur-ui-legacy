import React from 'react';
import Props from './Props';
import Component from './component';

const PlusCircle = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 4.11l-.113.007a.9.9 0 0 0-.787.893v3.688a.4.4 0 0 
            1-.4.4H7.012a.9.9 0 0 0-.9.9l.007.113a.9.9 0 0 0 .893.787H10.7a.4.4 0 0 1 .4.4v3.688a.9.9 0 0 0 .9.9l.113-.007a.9.9 0 0 
            0 .787-.893v-3.688a.4.4 0 0 1 .4-.4h3.688a.9.9 0 0 0 .9-.9l-.007-.113a.9.9 0 0 0-.893-.787H13.3a.4.4 0 0 
            1-.4-.4V7.01a.9.9 0 0 0-.9-.9z"
      />
    </Component>
  );
};

export default PlusCircle;
