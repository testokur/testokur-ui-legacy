import { Props } from '../Props';

type ShouldUseFlex = (props: Props) => boolean;

const shouldUseFlex: ShouldUseFlex = (props: Props) => {
  return (
    props.flex ||
    Object.keys(props)
      .map(item => !(item === 'children' || item === 'spacingAfter' || item === 'spacing' || item === 'dataTestId'))
      .indexOf(true) !== -1
  );
};

export default shouldUseFlex;
