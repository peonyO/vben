import type { TreeProps } from 'ant-design-vue';

interface NodeContextMenuItem {
  title: string;
  type: string;
}

export interface TableTreeProps extends Omit<TreeProps, 'treeData'> {
  treeData?: any[];
  nodeContextMenu?: NodeContextMenuItem[];
}

export interface TableTreeMethods {
  onContextMenu?: (treeKey: string, menuKey: number | string) => void;
}
