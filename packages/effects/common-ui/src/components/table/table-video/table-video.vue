<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import { TableVideoIcon } from '@vben/icons';

import { Popover } from 'ant-design-vue';
import videojs from 'video.js';

interface Props {
  videoUrl?: string;
}

const props = defineProps<Props>();

const videoPlayer = ref();

function initVideo() {
  if (!props.videoUrl || !videoPlayer.value) return;
  const options = {
    autoplay: false, // 是否自动播放
    controls: true, // 是否显示控制条
    language: 'zh-CN', // 设置语言
  };
  videojs(videoPlayer.value, options);
}

watch([() => props.videoUrl, () => videoPlayer.value], () => {
  initVideo();
});

onMounted(() => {
  initVideo();
});
</script>

<template>
  <Popover
    v-if="videoUrl"
    :destroy-tooltip-on-hide="true"
    :hide-after="0"
    :width="328"
    trigger="click"
  >
    <template #content>
      <video ref="videoPlayer" class="video-js h-[300px] w-[300px]">
        <source :src="videoUrl" />
      </video>
    </template>
    <TableVideoIcon
      class="mx-auto cursor-pointer text-[25px] text-[hsl(var(--primary))]"
    />
  </Popover>

  <span v-else class="mx-auto">暂无视频</span>
</template>
