<script setup lang="ts">
import { ref } from 'vue';

import { DirectoryTree, type TreeProps } from 'ant-design-vue';

const expandedKeys = ref<string[]>(['0-0', '0-1']);
const selectedKeys = ref<string[]>([]);
const treeData: TreeProps['treeData'] = [
  {
    key: '0-0',
    title: 'parent 0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    key: '0-1',
    title: 'parent 1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];
</script>

<template>
  <DirectoryTree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    :style="{ lineHeight: '30px' }"
    :tree-data="treeData"
    class="min-w-[160px]"
    multiple
  />
</template>

<style lang="scss" scoped></style>
