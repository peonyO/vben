import type { ButtonProps } from 'ant-design-vue';
import type { VxeGridEventProps, VxeGridProps } from 'vxe-table';

export interface FormConfigExtraButton {
  title: string;
  props?: ButtonProps;
  type: string;
}

type TablePropsAndEmits<T = any> = Omit<VxeGridProps<T>, 'border'> &
  VxeGridEventProps<T>;

export interface TableProps<T = any> extends TablePropsAndEmits<T> {
  formConfig?: {
    extraButton?: FormConfigExtraButton[];
  } & VxeGridProps['formConfig'];
}
