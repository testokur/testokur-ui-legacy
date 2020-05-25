import React from 'react';
import UserStatus from '.';

export default {
  title: 'UserStatus',
};

export const All = (): JSX.Element => {
  const year = new Date().getFullYear() + 10;

  return (
    <>
      <div style={{ width: '90%', padding: '10px' }}>
        <UserStatus active expirationDate={new Date(year, 5, 5)} />
        {' '}
      </div>
      <div style={{ width: '90%', padding: '10px' }}>
        <UserStatus active={false} expirationDate={new Date(year, 5, 5)} />
      </div>
      <div style={{ width: '90%', padding: '10px' }}>
        <UserStatus active expirationDate={new Date(year - 20, 5, 5)} />
      </div>
      <div style={{ width: '90%', padding: '10px' }}>
        <UserStatus active={false} />
      </div>
    </>
  );
};
