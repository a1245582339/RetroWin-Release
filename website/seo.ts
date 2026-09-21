export const SITE_URL = 'https://retrowin-site.pages.dev';
export const SITE_ICON =
  'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp';
export const OG_IMAGE =
  'https://github.com/a1245582339/picx-images-hosting/raw/master/xpbar.99tvrocxu7.webp';

export const EN_KEYWORDS =
  'RetroWin, Windows taskbar macOS, Windows 98 taskbar Mac, Windows XP taskbar Mac, Windows 7 taskbar, Windows 10 taskbar Mac, Windows 11 taskbar Mac, macOS customization, retro UI, Mac start menu, desktop customization';

export const ZH_KEYWORDS =
  'RetroWin, Mac 任务栏, macOS 任务栏, Windows 任务栏 Mac, Mac 开始菜单, 复古任务栏, macOS 桌面美化, Windows 98 任务栏, Windows XP 任务栏, Windows 7 任务栏, Windows 10 任务栏, Windows 11 任务栏';

const ZH_PAGE_KEYWORDS: Record<string, string> = {
  '/zh/': ZH_KEYWORDS,
  '/zh/guide/': 'RetroWin 指南, Mac 任务栏教程, RetroWin 安装, RetroWin 截图, RetroWin 价格',
  '/zh/guide/screenshots':
    'RetroWin 截图, Mac Windows 任务栏截图, Windows 98 任务栏 Mac, Windows XP 开始菜单 Mac, Windows 11 任务栏 macOS',
  '/zh/guide/wallpapers':
    'Windows 经典壁纸, Windows XP 壁纸, Bliss 壁纸, Windows 98 白云壁纸, Mac 复古桌面壁纸',
  '/zh/guide/installation':
    'RetroWin 下载, RetroWin 安装, Mac 任务栏安装, DMG 安装, Gatekeeper 仍要打开, macOS 辅助功能',
  '/zh/guide/pricing':
    'RetroWin 价格, RetroWin 许可证, RetroWin Pro, 免费任务栏 Mac, 微信支付, 支付宝',
  '/zh/guide/faq':
    'RetroWin 常见问题, Mac 任务栏无法打开, 辅助功能权限, 任务栏自动隐藏, 多显示器任务栏',
  '/zh/guide/contact': 'RetroWin 联系, RetroWin 客服, 许可证激活, 微信客服, Mac 任务栏支持',
};

export function keywordsForRoute(routePath: string): string {
  const path = normalizeRoutePath(routePath);
  if (isZhRoute(path)) {
    return ZH_PAGE_KEYWORDS[path] ?? ZH_KEYWORDS;
  }
  return EN_KEYWORDS;
}

export function normalizeRoutePath(routePath: string): string {
  if (!routePath || routePath === '/' || routePath === '/index') {
    return '/';
  }

  let path = routePath.replace(/\.html$/, '');
  if (path.endsWith('/index')) {
    path = path.slice(0, -'/index'.length) || '/';
  }
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  if (path === '/zh') {
    return '/zh/';
  }
  return path;
}

export function isZhRoute(routePath: string): boolean {
  const path = normalizeRoutePath(routePath);
  return path === '/zh/' || path.startsWith('/zh/');
}

export function toEnPath(routePath: string): string {
  const path = normalizeRoutePath(routePath);
  if (!isZhRoute(path)) {
    return path;
  }
  if (path === '/zh/') {
    return '/';
  }
  return path.replace(/^\/zh/, '') || '/';
}

export function toZhPath(routePath: string): string {
  const path = normalizeRoutePath(routePath);
  if (isZhRoute(path)) {
    return path;
  }
  if (path === '/') {
    return '/zh/';
  }
  return `/zh${path}`;
}

export function absoluteUrl(routePath: string): string {
  const path = normalizeRoutePath(routePath);
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function jsonLdScript(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

export const softwareJsonLd = jsonLdScript({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RetroWin',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'macOS 15.0 or later',
  url: SITE_URL,
  downloadUrl: 'https://github.com/a1245582339/RetroWin-Release/releases',
  image: SITE_ICON,
  screenshot: [
    'https://github.com/a1245582339/picx-images-hosting/raw/master/98bar.lw9claato.webp',
    'https://github.com/a1245582339/picx-images-hosting/raw/master/xpbar.99tvrocxu7.webp',
    'https://github.com/a1245582339/picx-images-hosting/raw/master/7bar.2vf9w2v1aj.webp',
    'https://github.com/a1245582339/picx-images-hosting/raw/master/11bar.webp',
  ],
  description:
    'RetroWin brings the nostalgic Windows 98/XP/7/8.1/10/11 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.',
  author: {
    '@type': 'Person',
    name: 'RetroWin',
    email: 'zhipeng.0216@qq.com',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'CNY',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '8.8',
      priceCurrency: 'CNY',
    },
  ],
});

export const websiteJsonLd = jsonLdScript({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RetroWin',
  url: SITE_URL,
  inLanguage: ['en', 'zh-CN'],
  description:
    'Official site for RetroWin, a macOS app that recreates the classic Windows taskbar, Start menu, and system tray.',
});

const EN_FAQ = [
  {
    question: "Why can't RetroWin detect some app windows?",
    answer:
      'RetroWin needs Accessibility permission to track windows. Go to System Settings → Privacy & Security → Accessibility and make sure RetroWin is enabled.',
  },
  {
    question: "macOS says the app is damaged or can't be opened.",
    answer:
      'Since RetroWin is not distributed through the App Store, macOS Gatekeeper may block it. Go to System Settings → Privacy & Security, find the RetroWin prompt, and click Open Anyway. You can also run xattr -cr /Applications/RetroWin.app in Terminal.',
  },
  {
    question: 'Can I use RetroWin alongside the native macOS Dock?',
    answer:
      'Yes. RetroWin runs independently and does not replace or modify the Dock. You can use both at the same time, or hide the Dock via System Settings → Desktop & Dock.',
  },
  {
    question: 'Does RetroWin affect system performance?',
    answer:
      'RetroWin is lightweight and uses minimal CPU and memory. Window tracking polls once per second and has negligible impact on performance.',
  },
  {
    question: 'How do I switch themes?',
    answer:
      'Right-click the Start button and select Settings, or click Settings in the Start Menu. Go to the Theme tab to switch between Windows 98, Windows XP, Windows 7, Windows 8.1, Windows 10, and Windows 11.',
  },
  {
    question: 'Does it support multiple monitors?',
    answer:
      'Yes. You can enable or disable the taskbar on each monitor independently in Settings → General.',
  },
  {
    question: 'Which macOS versions are supported?',
    answer:
      'RetroWin requires macOS 15.0 (Sequoia) or later, and supports both Apple Silicon and Intel Macs.',
  },
];

const ZH_FAQ = [
  {
    question: 'RetroWin 无法检测到某些应用的窗口？',
    answer:
      'RetroWin 需要辅助功能权限才能追踪窗口。请前往系统设置 → 隐私与安全性 → 辅助功能，确保 RetroWin 已开启。',
  },
  {
    question: 'macOS 提示应用已损坏或无法打开？',
    answer:
      '由于 RetroWin 未通过 App Store 分发，macOS Gatekeeper 可能会拦截。请前往系统设置 → 隐私与安全性，找到 RetroWin 的提示并点击「仍要打开」。也可以在终端运行 xattr -cr /Applications/RetroWin.app。',
  },
  {
    question: 'RetroWin 可以和 macOS 原生 Dock 同时使用吗？',
    answer:
      '可以。RetroWin 独立运行，不会替换或修改 Dock。你可以同时使用两者，也可以通过系统设置隐藏 Dock。',
  },
  {
    question: 'RetroWin 会影响系统性能吗？',
    answer:
      'RetroWin 非常轻量，CPU 和内存占用极低。窗口追踪每秒轮询一次，对性能几乎没有影响。',
  },
  {
    question: '如何切换主题？',
    answer:
      '右键点击开始按钮选择设置，或在开始菜单中点击设置，进入主题标签页即可在 Windows 98、Windows XP、Windows 7、Windows 8.1、Windows 10 和 Windows 11 之间切换。',
  },
  {
    question: '支持多显示器吗？',
    answer: '支持。你可以在设置 → 通用中为每个显示器独立开启或关闭任务栏。',
  },
  {
    question: '支持哪些 macOS 版本？',
    answer: 'RetroWin 需要 macOS 15.0（Sequoia）或更高版本，支持 Apple Silicon 和 Intel Mac。',
  },
];

function faqSchema(items: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function faqJsonLd(routePath: string): string | undefined {
  const path = normalizeRoutePath(routePath);
  if (path === '/guide/faq') {
    return jsonLdScript(faqSchema(EN_FAQ));
  }
  if (path === '/zh/guide/faq') {
    return jsonLdScript(faqSchema(ZH_FAQ));
  }
  return undefined;
}

