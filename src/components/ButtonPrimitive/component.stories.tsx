import * as React from 'react';
import { text, boolean, object, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { SpacingsAfter } from '../../modules/common';
import ButtonPrimitive from './component';
import { ChevronLeft, ChevronRight } from '../Icons';

export const Default = (): JSX.Element => {
  const ariaExpanded = boolean('ariaExpanded', false);
  const background = text('background', '#d63737');
  const backgroundHover = text('backgroundHover', '#da0a0a');
  const backgroundActive = text('backgroundActive', '#da0a0a');
  const backgroundFocus = text('backgroundFocus', '#da0a0a');
  const boxShadow = text('boxShadow', '0 8px 8px -6px rgba(0,0,0,.25)');
  const boxShadowHover = text('boxShadow', '0 8px 8px -6px rgba(0,0,0,.25)');
  const boxShadowActive = text('boxShadow', '0 8px 8px -6px rgba(0,0,0,.25)');
  const boxShadowFocus = text('boxShadow', '0 8px 8px -6px rgba(0,0,0,.25)');
  const children = text('children', 'ButtonPrimitive');
  const circled = boolean('circled', false);
  const disabled = boolean('disabled', false);
  const external = boolean('external', false);
  const fontSize = text('fontSize', '14px');
  const fontWeight = text('fontWeight', 'bold');
  const foreground = text('foreground', '#faf333');
  const foregroundHover = text('foregroundHover', '#faf333');
  const foregroundActive = text('foregroundActive', '#faf333');
  const fullWidth = boolean('fullWidth', false);
  const height = text('height', '46px');
  const icons = object('icons', {
    width: '16px',
    height: '16px',
    leftMargin: '2px',
    rightMargin: '2px',
    foreground: '#faf333',
    foregroundHover: '#faf333',
    foregroundActive: '#faf333',
  });
  const loading = boolean('loading', false);
  const padding = text('padding', '0 10px 0 10px');
  const role = text('role', '');
  const spacingsAfter = select('SpacingsAfter', Object.values(SpacingsAfter), SpacingsAfter.Small);
  const submit = boolean('submit', false);
  const title = text('title', '');
  const tabIndex = number('tabIndex', 1);
  const width = text('width', '');

  return (
    <ButtonPrimitive
      asComponent="button"
      ariaExpanded={ariaExpanded}
      background={background}
      backgroundHover={backgroundHover}
      backgroundActive={backgroundActive}
      backgroundFocus={backgroundFocus}
      boxShadow={boxShadow}
      boxShadowHover={boxShadowHover}
      boxShadowActive={boxShadowActive}
      boxShadowFocus={boxShadowFocus}
      circled={circled}
      dataTestId="default"
      disabled={disabled}
      external={external}
      fontSize={fontSize}
      fontWeight={fontWeight}
      foreground={foreground}
      foregroundHover={foregroundHover}
      foregroundActive={foregroundActive}
      fullWidth={fullWidth}
      height={height}
      iconLeft={<ChevronLeft />}
      iconRight={<ChevronRight />}
      icons={icons}
      loading={loading}
      onClick={action('onClick')}
      padding={padding}
      role={role}
      spacingsAfter={spacingsAfter}
      submit={submit}
      title={title}
      tabIndex={tabIndex}
      width={width}
    >
      {children}
    </ButtonPrimitive>
  );
};

export default {
  title: 'ButtonPrimitive',
};
