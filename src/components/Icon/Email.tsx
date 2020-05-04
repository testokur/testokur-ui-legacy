import React from 'react';
import Props from './Props';
import Component from './component';

const Email = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M11.262 14.127l-8.07-8.072a.42.42 0 0 1-.119-.235.418.418 0 0 1 .353-.473c.08-.011.16-.017.24-.017h16.667c.08 0
       .161.006.24.017a.426.426 0 0 1 .235.119.417.417 0 0 1 0 .589l-8.073 8.072a1.044 1.044 0 0 1-1.473 0zM21.74 6.889a.15.15
        0 0 1 .166-.032.15.15 0 0 1 .093.14v10c0 .92-.746 1.667-1.667 1.667H3.667c-.92 0-1.667-.747-1.667-1.667v-10a.152.152 0 0
        1 .093-.138.15.15 0 0 1 .167.032l5.167 5.167a.21.21 0 0 1 0 .295l-3.202 3.202a.624.624 0 0 0 0
        .869c.24.249.634.255.883.015l3.202-3.202a.21.21 0 0 1 .295 0l1.776 1.772a2.293 2.293 0 0
        0 3.24 0l1.775-1.775c.08-.08.212-.08.294.001l3.203
        3.203.015.016c.248.239.644.231.884-.017a.625.625 0 0 0-.015-.883l-3.203-3.203a.208.208 0 0 1 0-.295l5.167-5.167z"
      />
    </Component>
  );
};

export default Email;
