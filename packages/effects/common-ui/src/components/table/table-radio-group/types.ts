import type { RadioGroupProps } from 'ant-design-vue';

export interface TableRadioGroupProps extends RadioGroupProps {
  radioList: Record<string, any>[];
  target?: {
    /** 显示的 keyName */
    titleKey?: string;
    /** 获取的 keyName */
    titleValue?: string;
  };
}
