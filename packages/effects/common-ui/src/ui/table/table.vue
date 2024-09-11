<script setup lang="ts">
import type { EventDataNode } from 'ant-design-vue/es/tree';

import { computed, ref } from 'vue';

import { useForwardProps } from '@vben/hooks';
import { isEmpty } from '@vben/utils';

import { Button, Card, message, Space } from 'ant-design-vue';
import dayjs from 'dayjs';
import { type VxeFormMethods, VxeGrid, type VxeGridMethods } from 'vxe-table';

import {
  TableAudio,
  TableImage,
  TableOperate,
  TableRadioGroup,
  TableTab,
  TableTree,
  TableVideo,
} from '../../components';
import { defaultPagerConfig } from './helper';
import { type TableProps } from './types';

interface Props extends TableProps {}

const props = defineProps<Props>();

const vxeGridRef = ref<VxeGridMethods>();
const vxeFormRef = ref<VxeFormMethods>();

/** 表格 props */
const delegatedTableProps = computed(() => {
  const {
    align: _align,
    formConfig: _cormConfig,
    pagerConfig,
    ...delegated
  } = props;

  return {
    ...delegated,
    pagerConfig: {
      ...defaultPagerConfig,
      ...pagerConfig,
    },
  };
});

const tableForwarded = useForwardProps(delegatedTableProps);

/** tree props */
const treeProps = computed(() => {
  return props.formConfig?.tree;
});

/** 搜索 */
async function searchTable() {
  const formData = props.formConfig?.data;
  const isFormValuesEmpty = !Object.values(formData).some((item) => {
    return !isEmpty(item);
  });
  if (isFormValuesEmpty) {
    return message.error('请输入搜索内容！');
  }
  await vxeGridRef.value?.commitProxy('reload');
}

/** 重置 */
async function resetTable() {
  await vxeFormRef.value?.reset();
  await vxeGridRef.value?.commitProxy('reload');
}

async function handleSelectTree($event: EventDataNode) {
  // eslint-disable-next-line no-console
  console.log('SelectTree', $event);
  await vxeGridRef.value?.commitProxy('reload');
}
</script>

<template>
  <section class="flex gap-[20px] max-sm:flex-col">
    <Card
      v-if="treeProps && treeProps.treeData && treeProps.treeData.length > 0"
    >
      <TableTree v-bind="treeProps" @select-tree="handleSelectTree" />
    </Card>
    <Card>
      <VxeGrid
        :align="align || 'center'"
        :border="true"
        v-bind="tableForwarded"
        class="flex-1"
      >
        <!-- form 新增右侧按钮展示，用于样式好看 -->
        <template #form>
          <section class="relative">
            <vxe-form ref="vxeFormRef" v-bind="formConfig" title-bold>
              <template #buttonGroup="{ data, field, item }">
                <TableRadioGroup
                  v-model:value="data[field]"
                  :radio-list="item.itemRender.options"
                />
              </template>
              <template #tab="{ data, field, item }">
                <TableTab
                  v-model:active-key="data[field]"
                  :tab-list="item.itemRender.options"
                />
              </template>
              <template #action>
                <Space>
                  <Button type="primary" @click="searchTable"> 搜索 </Button>
                  <Button @click="resetTable"> 重置 </Button>
                </Space>
              </template>
            </vxe-form>
            <Space
              v-if="!!formConfig?.extraButton?.length"
              class="absolute bottom-0 right-0 box-content h-[36px] p-[.6em]"
            >
              <Button
                v-for="item in formConfig?.extraButton"
                :key="item.type"
                v-bind="item.props"
              >
                {{ item.title }}
              </Button>
            </Space>
          </section>
        </template>

        <!-- #region 显示用途 -->
        <!-- 图片显示 -->
        <template #image="{ row, column }">
          <TableImage :image-url="row[column.field]" />
        </template>
        <!-- 音频显示 -->
        <template #audio="{ row, column }">
          <TableAudio :audio-url="row[column.field]" />
        </template>
        <!-- 视频显示 -->
        <template #video="{ row, column }">
          <TableVideo :video-url="row[column.field]" />
        </template>
        <!-- 时间格式化显示 -->
        <template #dateTime="{ row, column }">
          <span>{{ dayjs(row[column.field]).format(column.params) }}</span>
        </template>
        <!-- 汉字顿号分割文本 -->
        <template #textJoin="{ row, column }">
          <span>
            {{
              row[column.field]
                .map((item: any) => item[column.params])
                .join('、')
            }}
          </span>
        </template>
        <!-- 操作 -->
        <template #operate="{ row, column }">
          <TableOperate
            :column="column"
            :row="row"
            :vxe-grid-ref="vxeGridRef"
          />
        </template>
        <!-- #endregion -->
      </VxeGrid>
    </Card>
  </section>
</template>

<style lang="scss" scoped></style>
