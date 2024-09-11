import type { ButtonProps } from 'ant-design-vue';
import type { VxeGridEventProps, VxeGridProps } from 'vxe-table';

import type { TableRadioGroupProps, TableTabProps } from '../../components';
import type {
  TableTreeMethods,
  TableTreeProps,
} from '../../components/table/table-tree/types';

export interface FormConfigExtraButton {
  title: string;
  props?: ButtonProps;
  type: string;
}

export interface RadioGroupConfig extends TableRadioGroupProps {
  field: string;
}

export interface TabsConfig extends Partial<TableTabProps> {
  filed: string;
  parentKeyName?: string;
}

export type TreeConfig = {
  filed: string | string[];
} & TableTreeMethods &
  TableTreeProps;

type TablePropsAndEmits<T = any> = Omit<
  VxeGridProps<T>,
  'border' | 'treeConfig'
> &
  VxeGridEventProps<T>;

export interface TableProps<T = any> extends TablePropsAndEmits<T> {
  formConfig?: {
    /** form 右侧按钮列表 */
    extraButton?: FormConfigExtraButton[];
    tree?: TreeConfig;
  } & VxeGridProps['formConfig'];
}
