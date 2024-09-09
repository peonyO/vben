<script setup lang="ts">
import { EyeOutlined } from '@ant-design/icons-vue';
import { Image } from 'ant-design-vue';

interface Props {
  imageUrl?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-center">
    <Image v-if="imageUrl" :height="30" :src="imageUrl">
      <template #previewMask>
        <div>
          <EyeOutlined class="mask-icon" />
        </div>
      </template>
    </Image>

    <span v-else class="mx-auto">暂无图片</span>
  </div>
</template>
