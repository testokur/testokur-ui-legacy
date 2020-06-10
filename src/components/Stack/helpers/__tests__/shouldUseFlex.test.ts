import React from 'react';
import shouldUseFlex from '../shouldUseFlex';
import { Props } from '../../Props';
import { SpacingsAfter } from '../../../../modules';

describe('shouldUseFlex', () => {
  it('should return true when flex prop is true', () => {
    const props: Props = {
      flex: true,
      dataTestId: 'flex',
    } as Props;
    expect(shouldUseFlex(props)).toBeTruthy();
  });

  it('should return false when props has no other attributes than {children , spaceAfter , spacing  and dataTestId} ', () => {
    const props: Props = {
      spacingAfter: SpacingsAfter.Medium,
      spacing: 'extraTight',
      dataTestId: 'flex2',
      children: React.Fragment,
    } as Props;

    expect(shouldUseFlex(props)).toBeFalsy();
  });

  it('should return true when props has other attributes than {children , spaceAfter , spacing  and dataTestId} ', () => {
    const props: Props = {
      spacingAfter: SpacingsAfter.Medium,
      spacing: 'extraTight',
      dataTestId: 'flex2',
      children: React.Fragment,
      grow: true,
    } as Props;

    expect(shouldUseFlex(props)).toBeTruthy();
  });
});
