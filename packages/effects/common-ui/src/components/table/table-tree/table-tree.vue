<script setup lang="ts">
import type { EventDataNode } from 'ant-design-vue/es/tree';

import type { TableTreeProps } from './types';

import { computed, ref } from 'vue';

import { useForwardProps } from '@vben/hooks';

import {
  DirectoryTree,
  Dropdown,
  Menu,
  MenuItem,
  type TreeProps,
} from 'ant-design-vue';

interface Props extends TableTreeProps {}

const props = defineProps<Props>();
const emits = defineEmits<{
  (event: 'contextMenu', treeKey: string, menuKey: number | string): void;
  (event: 'selectTree', node: EventDataNode): void;
}>();

const expandedKeys = ref<TreeProps['expandedKeys']>([]);
const selectedKeys = ref<TreeProps['selectedKeys']>([]);

const delegatedProps = computed(() => {
  const {
    expandedKeys: _expandedKeys,
    nodeContextMenu: _nodeContextMenu,
    'onUpdate:checkedKeys': _updateCheckedKeys,
    'onUpdate:expandedKeys': _updateExpandedKeys,
    'onUpdate:selectedKeys': _updateSelectedKeys,
    selectedKeys: _selectedKeys,
    ...delegated
  } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);

function onContextMenu(treeKey: string, menuKey: number | string) {
  emits('contextMenu', treeKey, menuKey);
}

function selectTree(_: TreeProps['selectedKeys'], $event: any) {
  emits('selectTree', $event.node as EventDataNode);
}
</script>

<template>
  <DirectoryTree
    v-bind="forwarded"
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    class="min-w-[160px]"
    show-line
    @select="selectTree"
  >
    <template #icon></template>
    <template #title="{ key: treeKey, title }">
      <Dropdown
        v-if="nodeContextMenu && nodeContextMenu.length > 0"
        :trigger="['contextmenu']"
      >
        <div>{{ title }}</div>
        <template #overlay>
          <Menu @click="({ key: menuKey }) => onContextMenu(treeKey, menuKey)">
            <MenuItem v-for="item in nodeContextMenu" :key="item.type">
              {{ item.title }}
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
      <div v-else>{{ title }}</div>
    </template>
  </DirectoryTree>
</template>

<style scoped>
.ant-tree-treenode-selected::before {
  border-radius: 6px;
}
</style>
