<script setup lang="ts">
import { computed, ref } from 'vue';

import { useForwardPropsEmits } from '@vben-core/shadcn-ui';

import { Button, Space } from 'ant-design-vue';
import dayjs from 'dayjs';
import { type VxeFormMethods, VxeGrid, type VxeGridMethods } from 'vxe-table';

import {
  TableAudio,
  TableImage,
  TableOperate,
  TableVideo,
} from '../../components';
import { type TableEmits, type TableProps } from './types';

interface Props extends TableProps {}

const props = defineProps<Props>();

const emits = defineEmits<TableEmits>();

const vxeGridRef = ref<VxeGridMethods>();
const vxeFormRef = ref<VxeFormMethods>();

const delegatedProps = computed(() => {
  const { align: _align, formConfig: _cormConfig, ...delegated } = props;

  return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits);

/** 搜索 */
async function searchTable() {
  await vxeGridRef.value?.commitProxy('reload');
}

/** 重置 */
async function resetTable() {
  await vxeFormRef.value?.reset();
  await vxeGridRef.value?.commitProxy('reload');
}
</script>

<template>
  <VxeGrid :align="align || 'center'" :border="true" v-bind="forwarded">
    <!-- form 新增右侧按钮展示，用于样式好看 -->
    <template #form>
      <section class="flex justify-between">
        <vxe-form ref="vxeFormRef" v-bind="formConfig">
          <template #action>
            <Space>
              <Button type="primary" @click="searchTable"> 搜索 </Button>
              <Button @click="resetTable()"> 重置 </Button>
            </Space>
          </template>
        </vxe-form>
        <Space v-if="!!formConfig?.extraButton?.length">
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
          row[column.field].map((item: any) => item[column.params]).join('、')
        }}
      </span>
    </template>
    <!-- 操作 -->
    <template #operate="{ row, column }">
      <TableOperate :column="column" :row="row" :vxe-grid-ref="vxeGridRef" />
    </template>
    <!-- #endregion -->
  </VxeGrid>
</template>

<style lang="scss" scoped></style>
