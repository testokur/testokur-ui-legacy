import React from 'react';
import Props from './Props';
import Component from './component';

const AccountCircle = (props: Omit<Props, 'children'>): JSX.Element => {
  const { size, color, ariaHidden, ariaLabel, customColor } = props;

  return (
    <Component size={size} color={color} viewBox="0 0 24 24" ariaHidden={ariaHidden} ariaLabel={ariaLabel} customColor={customColor}>
      <path
        d="M13.694 2.132C6.917 1.036 1.036 6.917 2.132 13.694c.698 4.087 3.987 7.476 8.174 8.174 6.777 1.096 12.658-4.785 
      11.562-11.562-.698-4.087-4.087-7.476-8.174-8.174zM12.2 18.977H11.9c-2.392 0-4.585-1.196-5.78-3.09.996-.498 2.092-.897 
      3.09-1.296l.498-.199c.199-.1.398-.299.398-.598.1-.498.1-.997-.2-1.395-.697-.698-1.295-1.595-1.295-3.888 0-1.794 1.196-3.289 
      2.99-3.488h.499c1.794 0 3.289 1.395 3.289 3.09v.398c0 2.293-.698 3.19-1.296 3.888-.299.398-.299.897-.2 1.395 0 
      .2.2.498.4.598l.498.2c1.096.398 2.093.797 3.09 1.295-1.296 1.794-3.29 2.99-5.682 3.09z"
      />
    </Component>
  );
};

export default AccountCircle;
