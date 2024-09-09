import type { App } from 'vue';

import { VxeButtonGroup, VxeForm, VxeInput } from 'vxe-pc-ui';

import 'video.js/dist/video-js.min.css';
import 'vxe-pc-ui/lib/style.css';
import 'vxe-table/lib/style.css';

/** 初始化 VxeTable */
export function initVxeTable(app: App) {
  app.use(VxeForm);
  app.use(VxeInput);
  app.use(VxeButtonGroup);
}
