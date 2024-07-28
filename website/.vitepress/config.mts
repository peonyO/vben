import type { DefaultTheme, HeadConfig } from 'vitepress';

import { defineConfigWithTheme } from 'vitepress';

import { version } from '../../package.json';

export default defineConfigWithTheme({
  description: 'Vben Admin& 企业级管理系统框架',
  head: head(),
  lang: 'zh',
  srcDir: 'src',
  // locales: {
  //   en: {
  //     label: 'English',
  //     lang: 'en',
  //     link: '/en/',
  //   },
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh-CN',
  //   },
  themeConfig: {
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    editLink: {
      pattern: 'https://github.com/vbenjs/vue-vben-admin/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Vben`,
      message: '基于 MIT 许可发布.',
    },
    i18nRouting: true,
    langMenuLabel: '多语言',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    lightModeSwitchTitle: '切换到浅色模式',
    logo: 'https://unpkg.com/@vbenjs/static-source@0.1.5/source/logo-v1.webp',
    nav: nav(),
    outline: {
      label: '页面导航',
    },
    returnToTopLabel: '回到顶部',
    search: {
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonAriaLabel: '搜索文档',
                buttonText: '搜索文档',
              },
              modal: {
                footer: {
                  navigateText: '切换',
                  selectText: '选择',
                },
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
              },
            },
          },
        },
      },
      provider: 'local',
    },
    sidebar: {
      '/commercial/': { base: '/commercial/', items: sidebarCommercial() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },
    sidebarMenuLabel: '菜单',
    siteTitle: 'Vben Admin',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vbenjs/vue-vben-admin' },
    ],
  },
  title: 'Vben Admin',
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
      minify: 'terser',
    },
    json: {
      stringify: true,
    },
    server: {
      fs: {
        allow: ['../..'],
      },
      host: true,
      port: 6173,
    },
    ssr: {
      external: ['@vue/repl'],
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '文档',
      items: [
        {
          link: '/guide/introduction/vben',
          text: '指南',
          // items: [
          //   {
          //     link: '/guide/introduction/vben',
          //     text: '简介',
          //   },
          //   {
          //     link: '/guide/essentials/concept',
          //     text: '基础',
          //   },
          //   {
          //     link: '/guide/in-depth/layout',
          //     text: '深入',
          //   },
          //   {
          //     link: '/guide/project/standard',
          //     text: '工程',
          //   },
          //   {
          //     link: '/guide/other/project-update',
          //     text: '其他',
          //   },
          // ],
        },
        {
          text: '历史版本',
          items: [
            {
              link: 'https://doc.vvbin.cn',
              text: '2.x版本文档',
            },
          ],
        },
      ],
    },
    {
      text: '演示',
      items: [
        {
          text: 'Vben Admin',
          items: [
            {
              link: 'https://www.vben.pro',
              text: '完整版(Ant Design Vue)',
            },
          ],
        },
        {
          text: '其他',
          items: [
            {
              link: 'https://vben.vvbin.cn',
              text: 'Vben Admin 2.x',
            },
          ],
        },
      ],
    },
    {
      text: version,
      items: [
        {
          link: 'https://github.com/vbenjs/vue-vben-admin/releases',
          text: '更新日志',
        },
        {
          link: 'https://github.com/vbenjs/vue-vben-admin/blob/main/.github/contributing.md',
          text: '贡献',
        },
      ],
    },
    {
      link: '/commercial/technical-support',
      text: '🦄 技术支持',
    },
    {
      link: '/sponsor/personal',
      text: '✨ 赞助',
    },
    {
      link: '/friend-links/',
      text: '🤝 友情链接',
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      text: '简介',
      items: [
        {
          link: 'introduction/vben',
          text: '关于 Vben Admin',
        },
        {
          link: 'introduction/why',
          text: '为什么选择我们?',
        },
        { link: 'introduction/quick-start', text: '快速开始' },
        {
          link: 'https://github.com/vbenjs/vue-vben-admin/releases',
          text: '更新日志',
        },
        { link: 'https://github.com/orgs/vbenjs/projects/5', text: '路线图' },
      ],
    },
    {
      text: '基础',
      items: [
        { link: 'essentials/concept', text: '基础概念' },
        { link: 'essentials/development', text: '本地开发' },
        { link: 'essentials/route', text: '路由和菜单' },
        { link: 'essentials/settings', text: '配置' },
        { link: 'essentials/icons', text: '图标' },
        { link: 'essentials/styles', text: '样式' },
        { link: 'essentials/external-module', text: '外部模块' },
        { link: 'essentials/build', text: '构建与部署' },
        { link: 'essentials/server', text: '服务端交互与数据Mock' },
      ],
    },
    {
      text: '深入',
      items: [
        // { link: 'in-depth/layout', text: '布局' },
        { link: 'in-depth/theme', text: '主题' },
        { link: 'in-depth/access', text: '权限' },
        { link: 'in-depth/features', text: '功能' },
        { link: 'in-depth/locale', text: '国际化' },
        { link: 'in-depth/loading', text: '全局loading' },
      ],
    },
    {
      text: '工程',
      items: [
        { link: 'project/standard', text: '规范' },
        { link: 'project/cli', text: 'CLI' },
        { link: 'project/test', text: '单元测试' },
        { link: 'project/tailwindcss', text: 'Tailwind CSS' },
        { link: 'project/changeset', text: 'Changeset' },
        { link: 'project/vite', text: 'Vite Config' },
      ],
    },
    {
      text: '其他',
      items: [
        { link: 'other/project-update', text: '项目更新' },
        { link: 'other/remove-code', text: '移除代码' },
        { link: 'other/faq', text: '常见问题' },
      ],
    },
  ];
}
function sidebarCommercial(): DefaultTheme.SidebarItem[] {
  return [
    {
      link: 'technical-support',
      text: '技术支持',
    },
    {
      link: 'customized',
      text: '定制开发',
    },
  ];
}

function head(): HeadConfig[] {
  return [
    ['meta', { content: 'Vbenjs Team', name: 'author' }],
    [
      'meta',
      {
        content: 'vben, vitejs, vite, shacdn-ui, vue',
        name: 'keywords',
      },
    ],
    ['link', { href: '/favicon.ico', rel: 'icon', type: 'image/svg+xml' }],
    [
      'meta',
      {
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        name: 'viewport',
      },
    ],
    ['meta', { content: 'vben admin docs', name: 'keywords' }],
    ['link', { href: '/favicon.ico', rel: 'icon' }],
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.tailwindcss.com',
    //   },
    // ],
    [
      'script',
      {},
      `
       var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e443a834727c065877c01d89921545e";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ];
}
