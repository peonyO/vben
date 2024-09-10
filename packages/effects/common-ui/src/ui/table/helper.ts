import type { VxeGridPropTypes } from 'vxe-table';

export const defaultPagerConfig: VxeGridPropTypes.PagerConfig = {
  align: 'center',
  autoHidden: true,
  background: true,
  border: true,
  enabled: true,
  layouts: [
    'Home',
    'PrevPage',
    'Number',
    'NextPage',
    'End',
    'Sizes',
    'FullJump',
    'Total',
  ],
  pageSize: 10,
};
