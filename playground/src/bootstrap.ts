import { createApp } from 'vue';

import { registerAccessDirective } from '@vben/access';
import { initVxeTable } from '@vben/common-ui';
import { initStores } from '@vben/stores';
import '@vben/styles';
import '@vben/styles/antd';

import { VueQueryPlugin } from '@tanstack/vue-query';

import { setupI18n } from '#/locales';

import App from './app.vue';
import { router } from './router';

async function bootstrap(namespace: string) {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 配置 vxe-table
  initVxeTable(app);

  // 安装权限指令
  registerAccessDirective(app);

  // 配置路由及路由守卫
  app.use(router);

  // 配置@tanstack/vue-query
  app.use(VueQueryPlugin);

  app.mount('#app');
}

export { bootstrap };
