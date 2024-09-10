import type { TabsProps } from 'ant-design-vue';

export interface TableTabProps extends TabsProps {
  tabList: Record<string, any>[];
  target?: {
    /** 显示的 keyName */
    titleKey?: string;
    /** 获取的 keyName */
    titleValue?: string;
  };
}
