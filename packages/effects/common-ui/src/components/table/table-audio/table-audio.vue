<script setup lang="ts">
import { TableAudioIcon } from '@vben/icons';

import { Popover } from 'ant-design-vue';

interface Props {
  audioUrl?: string;
}

defineProps<Props>();
</script>

<template>
  <Popover
    v-if="audioUrl"
    :destroy-tooltip-on-hide="true"
    :hide-after="0"
    :width="328"
    trigger="click"
  >
    <template #content>
      <div class="w-[300px]">
        <audio
          :src="audioUrl"
          class="w-full"
          controls
          controlsList="nodownload noplaybackrate"
        ></audio>
      </div>
    </template>
    <TableAudioIcon
      class="mx-auto cursor-pointer text-[25px] text-[hsl(var(--primary))]"
    />
  </Popover>
  <span v-else class="mx-auto">暂无音频</span>
</template>
