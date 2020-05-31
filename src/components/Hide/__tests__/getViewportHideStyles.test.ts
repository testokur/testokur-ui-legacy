import getViewportHideStyles from '../getViewportHideStyles';
import { Devices } from '../../../modules';

describe('getViewportHideStyles', () => {
  it('should return display none for input device list', () => {
    const result = getViewportHideStyles([Devices.Desktop], true);
    console.table(result);
    // TODO: Complete this
  });
});
