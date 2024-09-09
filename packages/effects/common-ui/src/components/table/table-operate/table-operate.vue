<script setup lang="ts">
import type { VxeGridMethods, VxeTableDefines } from 'vxe-table';

import { Icon } from '@vben/icons';

import { Popconfirm, Tooltip } from 'ant-design-vue';

import { buttonColorMap } from './helper';

defineProps<{
  column: VxeTableDefines.ColumnInfo<any>;
  row: any;
  vxeGridRef?: VxeGridMethods<any>;
}>();
</script>

<template>
  <div v-if="column.params" class="flex h-full items-center justify-between">
    <template v-for="item in column.params" :key="item.id">
      <Popconfirm
        v-if="item.popconfirm?.enabled"
        :cancel-text="item.popconfirm?.cancelText"
        :ok-text="item.popconfirm?.okText"
        :placement="item.popconfirm?.placement"
        :title="item.popconfirm?.title"
        @confirm="item.handleClick?.(row, vxeGridRef)"
      >
        <Tooltip>
          <template #title>{{ item.title }}</template>
          <div class="cursor-pointer">
            <Icon
              v-if="item.icon"
              :icon="item.icon"
              :style="{
                fontSize: '25px',
                color: item.buttonType
                  ? buttonColorMap[
                      item.buttonType as keyof typeof buttonColorMap
                    ]
                  : buttonColorMap.primary,
              }"
            />
            <span v-else>{{ item.title }}</span>
          </div>
        </Tooltip>
      </Popconfirm>
      <Tooltip v-else>
        <template #title>{{ item.title }}</template>
        <div
          class="cursor-pointer"
          @click="item.handleClick?.(row, vxeGridRef)"
        >
          <div class="cursor-pointer">
            <Icon
              v-if="item.icon"
              :icon="item.icon"
              :style="{
                fontSize: '25px',
                color: item.buttonType
                  ? buttonColorMap[
                      item.buttonType as keyof typeof buttonColorMap
                    ]
                  : buttonColorMap.primary,
              }"
            />
            <span v-else>{{ item.title }}</span>
          </div>
        </div>
      </Tooltip>
    </template>
  </div>
</template>
