<script setup lang="ts">
import type { TableRadioGroupProps } from './types';

import { computed, watch } from 'vue';

import { useForwardProps } from '@vben/hooks';

import { RadioButton, RadioGroup } from 'ant-design-vue';

interface Props extends TableRadioGroupProps {}

const props = defineProps<Props>();

const value = defineModel('value');

const delegatedRadioProps = computed(() => {
  const {
    buttonStyle: _buttonStyle,
    'onUpdate:value': _onUpdate,
    radioList: _radioList,
    size: _size,
    target: _target,
    value: _value,
    ...delegated
  } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedRadioProps);

/** 无值时，设置第一个为默认值 */
watch(
  () => props.radioList,
  () => {
    if (props.radioList.length > 0) {
      value.value = props.radioList[0]?.[props.target?.titleValue || 'value'];
    }
  },
  { immediate: true },
);
</script>

<template>
  <RadioGroup
    v-bind="forwarded"
    v-model:value="value"
    :button-style="buttonStyle || 'solid'"
    :size="size || 'large'"
  >
    <RadioButton
      v-for="item in radioList"
      :key="target?.titleValue ? item[target.titleValue] : item.value"
      :value="target?.titleValue ? item[target.titleValue] : item.value"
    >
      {{ target?.titleKey ? item[target.titleKey] : item.title }}
    </RadioButton>
  </RadioGroup>
</template>
