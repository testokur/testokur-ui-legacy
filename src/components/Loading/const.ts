import { curry } from 'testokur-utils';

enum Type {
  ButtonLoader = 'ButtonLoader',
  BoxLoader = 'BoxLoader',
  PageLoader = 'PageLoader',
  SearchLoader = 'SearchLoader',
  InlineLoader = 'InlineLoader',
}

const getHeight = curry<string>({
  InlineLoader: () => 'initial',
  ButtonLoader: () => '100%',
  SearchLoader: () => '40px',
  BoxLoader: () => '80px',
  PageLoader: () => '120px',
});

export { Type, getHeight };
