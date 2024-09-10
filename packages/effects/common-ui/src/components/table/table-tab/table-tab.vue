<script setup lang="ts">
import type { TableTabProps } from './types';

import { computed, watch } from 'vue';

import { useForwardProps } from '@vben-core/shadcn-ui';

import { TabPane, Tabs } from 'ant-design-vue';

interface Props extends TableTabProps {}

const props = defineProps<Props>();

const activeKey = defineModel<number | string>('activeKey');

const delegatedTabsProps = computed(() => {
  const {
    activeKey: _activeKey,
    'onUpdate:activeKey': _onUpdate,
    tabList: _radioList,
    target: _target,
    ...delegated
  } = props;

  return delegated;
});
const forwarded = useForwardProps(delegatedTabsProps);

/** 无值时，设置第一个为默认值 */
watch(
  () => props.tabList,
  () => {
    if (props.tabList.length > 0) {
      activeKey.value = props.tabList[0]?.[props.target?.titleValue || 'value'];
    }
  },
  { immediate: true },
);
</script>

<template>
  <Tabs
    v-bind="forwarded"
    v-model:active-key="activeKey"
    :tab-bar-style="{ marginBottom: 0 }"
  >
    <TabPane
      v-for="item in tabList"
      :key="target?.titleValue ? item[target.titleValue] : item.value"
      :tab="target?.titleKey ? item[target.titleKey] : item.title"
    />
  </Tabs>
</template>
