import * as React from 'react';
import { Testable } from '../../modules';
import { Type } from './const';
import { StyledLoading, StyledLoadingText, StyledLoaderCircle, StyledSpinnerCircle, StyledSpinner, StyledLoader } from './styled';
import { isUndefined } from '../../utils';

type Props = Testable & {
  type?: Type;
  children?: JSX.Element;
  loading?: boolean;
  text?: string;
};

const component = (props: Props): JSX.Element => {
  const { children = <></>, loading = false, type = Type.PageLoader, text } = props;

  return !isUndefined(children) && !loading ? (
    children
  ) : (
    <StyledLoading type={type}>
      {type === Type.BoxLoader || type === Type.SearchLoader || type === Type.InlineLoader ? (
        <StyledLoader>
          <StyledLoaderCircle />
          <StyledLoaderCircle />
          <StyledLoaderCircle />
        </StyledLoader>
      ) : (
        <StyledSpinner viewBox="0 0 40 40">
          <StyledSpinnerCircle cx="50%" cy="50%" r="18" type={type} />
        </StyledSpinner>
      )}
      {type !== Type.ButtonLoader && <StyledLoadingText type={type}>{text}</StyledLoadingText>}
    </StyledLoading>
  );
};

export default component;
