import type { ButtonProps } from 'ant-design-vue';
import type { ValueOf, VxeGridEmits, VxeGridProps } from 'vxe-table';

export interface FormConfigExtraButton {
  title: string;
  props?: ButtonProps;
  type: string;
}

export interface TableProps<T = any> extends Omit<VxeGridProps<T>, 'border'> {
  formConfig?: {
    extraButton?: FormConfigExtraButton[];
  } & VxeGridProps['formConfig'];
}

export type TableEmits = {
  (event: ValueOf<VxeGridEmits>, params: any[]): void;
};
