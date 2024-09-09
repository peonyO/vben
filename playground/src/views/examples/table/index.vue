<script setup lang="ts">
import { reactive } from 'vue';

import { Page, PeonyTable } from '@vben/common-ui';

import { Card } from 'ant-design-vue';

import { defaultTableConfig } from './helper';

const tableData = reactive(defaultTableConfig);
</script>

<template>
  <Page
    description="表格组件通过 VxeTable 二次封装，通过JSON方式配置展示界面"
    title="表格组件示例"
  >
    <Card>
      <PeonyTable v-bind="tableData" />
    </Card>
  </Page>
</template>

<style lang="scss" scoped></style>
