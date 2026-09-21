import { defineConfig } from '@rspress/core';
import path from 'path';
import {
  OG_IMAGE,
  SITE_ICON,
  absoluteUrl,
  faqJsonLd,
  isZhRoute,
  softwareJsonLd,
  toEnPath,
  toZhPath,
  websiteJsonLd,
  keywordsForRoute,
} from './seo';

const SITE_ORIGIN = 'https://retrowin-site.pages.dev';

export default defineConfig({
  root: 'docs',
  title: 'RetroWin',
  description:
    'RetroWin brings the nostalgic Windows 98/XP/7/8.1/10/11 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.',
  icon: SITE_ICON,
  logo: SITE_ICON,
  lang: 'en',
  siteOrigin: SITE_ORIGIN,
  llms: {
    llmsTxt: ({ description, sections, lang }) => {
      const isZh = lang === 'zh';
      const siteTitle = isZh
        ? 'RetroWin - 在 macOS 上重现经典 Windows 任务栏'
        : 'RetroWin - Classic Windows Taskbar Experience for macOS';
      const siteDescription = isZh
        ? 'RetroWin 将经典的 Windows 98/XP/7/8.1/10/11 任务栏体验带到 Mac，用复古美学和怀旧功能自定义你的桌面。'
        : description ||
          'RetroWin brings the nostalgic Windows 98/XP/7/8.1/10/11 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.';
      const overview = isZh
        ? `RetroWin 是一款 macOS 应用，用像素级复古 UI 重现 Windows 98、Windows XP、Windows 7、Windows 8.1、Windows 10 和 Windows 11 任务栏。

## 核心信息
- 系统要求：macOS 15.0（Sequoia）或更高版本，支持 Apple Silicon 和 Intel。
- 免费版：多主题、窗口追踪、开始菜单、系统托盘、多语言。
- Pro 版（¥8.8 一次性）：自动隐藏、缩放、跟随窗口、合并/展开、窗口标题、悬浮预览。
- 下载：https://github.com/a1245582339/RetroWin-Release/releases
- GitHub：https://github.com/a1245582339/RetroWin-Release`
        : `RetroWin is a macOS app that recreates the Windows 98, Windows XP, Windows 7, Windows 8.1, Windows 10, and Windows 11 taskbar with pixel-perfect retro UI.

## Essentials
- Requires macOS 15.0 (Sequoia) or later. Apple Silicon and Intel.
- Free: themes, window tracking, Start menu, system tray, multi-language.
- Pro (¥8.8 one-time): auto-hide, scaling, follow-window, merge/expand, window titles, hover preview.
- Download: https://github.com/a1245582339/RetroWin-Release/releases
- GitHub: https://github.com/a1245582339/RetroWin-Release`;

      const sectionContent = sections
        .map(section => {
          const pages = section.pages
            .map(page => `- [${page.title}](${page.link})${page.description ? `: ${page.description}` : ''}`)
            .join('\n');
          return pages ? `## ${section.title}\n\n${pages}` : '';
        })
        .filter(Boolean)
        .join('\n\n');

      return `# ${siteTitle}

> ${siteDescription}

${overview}

${sectionContent}
`;
    },
  },
  route: {
    cleanUrls: true,
  },
  head: [
    ['meta', { name: 'google-site-verification', content: 'BPN8rF9tut1j7Cp6iXHyq2JbjmqM2fX2ruTjhYMbVEg' }],
    ['meta', { name: 'author', content: 'RetroWin' }],
    ['meta', { name: 'theme-color', content: '#0078d4' }],
    ['meta', { property: 'og:site_name', content: 'RetroWin' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:alt', content: 'RetroWin Windows-style taskbar on macOS' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'apple-touch-icon', href: SITE_ICON }],
    route => ['link', { rel: 'canonical', href: absoluteUrl(route.routePath) }],
    route => ['meta', { property: 'og:url', content: absoluteUrl(route.routePath) }],
    route => ['meta', { property: 'og:locale', content: isZhRoute(route.routePath) ? 'zh_CN' : 'en_US' }],
    route => [
      'meta',
      { property: 'og:locale:alternate', content: isZhRoute(route.routePath) ? 'en_US' : 'zh_CN' },
    ],
    route => ['link', { rel: 'alternate', hreflang: 'en', href: absoluteUrl(toEnPath(route.routePath)) }],
    route => ['link', { rel: 'alternate', hreflang: 'zh-CN', href: absoluteUrl(toZhPath(route.routePath)) }],
    route => ['link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(toEnPath(route.routePath)) }],
    route => ['meta', { name: 'keywords', content: keywordsForRoute(route.routePath) }],
    route =>
      isZhRoute(route.routePath)
        ? ['meta', { name: 'applicable-device', content: 'pc,mobile' }]
        : undefined,
    softwareJsonLd,
    websiteJsonLd,
    route => faqJsonLd(route.routePath),
  ],
  globalStyles: path.join(__dirname, 'theme', 'index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'RetroWin - Classic Windows Taskbar Experience for macOS',
      description:
        'RetroWin brings the nostalgic Windows 98/XP/7/8.1/10/11 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'RetroWin - 在 macOS 上重现经典 Windows 任务栏',
      description:
        'RetroWin 将经典的 Windows 98/XP/7/8.1/10/11 任务栏体验带到 Mac，用复古美学和怀旧功能自定义你的桌面。',
    },
  ],
  themeConfig: {
    lastUpdated: true,
    llmsUI: {
      injectLlmsHint: true,
      viewOptions: ['markdownLink', 'chatgpt', 'claude'],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/a1245582339/RetroWin-Release',
      },
    ],
    locales: [
      {
        lang: 'en',
        label: 'English',
        outlineTitle: 'On This Page',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        nav: [
          { text: 'Screenshots', link: '/guide/screenshots' },
          { text: 'Wallpapers', link: '/guide/wallpapers' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Pricing', link: '/guide/pricing' },
          { text: 'FAQ', link: '/guide/faq' },
          { text: 'Contact', link: '/guide/contact' },
        ],
      },
      {
        lang: 'zh',
        label: '简体中文',
        outlineTitle: '目录',
        prevPageText: '上一页',
        nextPageText: '下一页',
        nav: [
          { text: '截图展示', link: '/zh/guide/screenshots' },
          { text: '经典壁纸', link: '/zh/guide/wallpapers' },
          { text: '安装指南', link: '/zh/guide/installation' },
          { text: '购买许可证', link: '/zh/guide/pricing' },
          { text: '常见问题', link: '/zh/guide/faq' },
          { text: '联系我们', link: '/zh/guide/contact' },
        ],
      },
    ],
  },
});
