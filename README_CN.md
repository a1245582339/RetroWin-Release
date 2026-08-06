<div align="center">

<img src="https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp" alt="RetroWin" width="128" />

# RetroWin

**在 macOS 上重现经典 Windows 任务栏。**

一款复古风格的 macOS 任务栏应用，完美重现 Windows 98、Windows XP、Windows 7 和 Windows 10 的经典外观与体验。

[![GitHub release](https://img.shields.io/github/v/release/a1245582339/RetroWin-Release)](https://github.com/a1245582339/RetroWin-Release/releases)

[![macOS](https://img.shields.io/badge/macOS-15.0%2B-black)](https://www.apple.com/macos/)

[English](./README.md) | 简体中文

</div>

## 截图

### Windows 98 主题

![98bar](https://github.com/a1245582339/picx-images-hosting/raw/master/98bar.lw9claato.webp)

![98menu](https://github.com/a1245582339/picx-images-hosting/raw/master/98menu.4n88qzee6k.webp)

### Windows XP 主题

![xpbar](https://github.com/a1245582339/picx-images-hosting/raw/master/xpbar.99tvrocxu7.webp)

![xpmenu](https://github.com/a1245582339/picx-images-hosting/raw/master/xp-menu.2yyvtso40f.webp)

### Windows 7 主题

![7bar](https://github.com/a1245582339/picx-images-hosting/raw/master/98bar.lw9claato.webp)

![7menu](https://github.com/a1245582339/picx-images-hosting/raw/master/7menu.5j4q6fo2mk.webp)

### Windows 10 主题

![10bar](https://github.com/a1245582339/picx-images-hosting/raw/master/ScreenShot_2026-02-24_144429_819.5q7ybtkxz9.webp)

![10menu](https://github.com/a1245582339/picx-images-hosting/raw/master/ScreenShot_2026-02-24_144447_291.6f17vu8gzq.webp)


## 功能特性

- **多主题切换** — Windows 98、Windows XP、Windows 7、Windows 10，像素级还原经典 UI 细节
- **多显示器支持** — 每个屏幕独立任务栏，可自由配置
- **窗口管理** — 实时追踪应用状态，支持激活、最小化、合并/展开模式，悬浮预览窗口
- **任务栏固定** — 将应用固定到任务栏，支持拖拽排序，关闭后仍保留
- **开始菜单** — 各主题专属布局，支持固定程序、搜索及快速访问系统功能
- **系统托盘** — 输入法指示器、音量控制、时钟及自定义应用托盘图标
- **电源菜单** — 睡眠、重启、关机、锁屏、注销，配合主题风格的对话框
- **通知提醒** — 检测应用角标和横幅通知，橙色闪烁提示
- **自动隐藏** — 任务栏自动隐藏到屏幕边缘，鼠标悬停时显示；也可通过顶部菜单栏手动显示/隐藏，作为全屏未自动隐藏时的备用方案
- **缩放调节** — 支持 50% 到 200% 的任务栏缩放
- **自动更新** — 内置 Sparkle 更新检查，支持后台自动检查和手动检查
- **多语言** — English、简体中文、繁體中文、日本語、한국어、Français

![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/General-settings1.8s3u33bk99.webp)

![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/General-settings2.58hwda8uh9.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Theme-settings.4n88qzee6m.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Taskbar-settings.6f17lvxr2l.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Tray-settings.6t7ncr61xq.webp)



## 安装

1. 前往 [Releases 页面](https://github.com/a1245582339/RetroWin-Release/releases)
2. 下载最新的 `.dmg` 文件
3. 打开 DMG，将 RetroWin 拖入「应用程序」文件夹
4. 首次启动时，前往 **系统设置 → 隐私与安全性**，点击 **仍要打开**

需要 macOS 15.0 或更高版本，支持 Apple Silicon 和 Intel。

## 常见问题

<!-- FAQ_ZH_START -->
**Q： RetroWin 无法检测到某些应用的窗口？**

A： RetroWin 需要辅助功能权限才能追踪窗口。请前往 **系统设置 → 隐私与安全性 → 辅助功能**，确保 RetroWin 已开启。

**Q： macOS 提示应用已损坏或无法打开？**

A： 由于 RetroWin 未通过 App Store 分发，macOS 的 Gatekeeper 可能会拦截。请前往 **系统设置 → 隐私与安全性**，找到 RetroWin 的提示并点击 **仍要打开**。也可以在终端中运行以下命令：

```bash
xattr -cr /Applications/RetroWin.app
```

**Q： RetroWin 可以和 macOS 原生 Dock 同时使用吗？**

A： 可以。RetroWin 独立运行，不会替换或修改 Dock。你可以同时使用两者，也可以通过 **系统设置 → 桌面与程序坞 → 自动隐藏和显示程序坞** 来隐藏 Dock。

**Q： RetroWin 会影响系统性能吗？**

A： RetroWin 非常轻量，CPU 和内存占用极低。窗口追踪每秒轮询一次，对性能几乎没有影响。

**Q： 如何切换主题？**

A： 右键点击开始按钮选择 **设置**，或在开始菜单中点击 **设置**，进入 **主题** 标签页即可在 Windows 98、Windows XP、Windows 7 和 Windows 10 之间切换。

**Q： 支持多显示器吗？**

A： 支持。你可以在 **设置 → 通用** 中为每个显示器独立开启或关闭任务栏。

**Q： 如何将应用固定到任务栏？**

A： 右键点击任务栏上正在运行的应用按钮，选择 **固定到任务栏**。固定的应用在关闭后仍会保留在任务栏上，并且支持拖拽排序。

**Q： 任务栏可以自动隐藏吗？**

A： 可以。在 **设置 → 任务栏** 中开启 **自动隐藏**，任务栏会滑出屏幕，当鼠标移到屏幕底部边缘时自动弹出。

也可以通过 macOS 顶部菜单栏的 RetroWin 图标手动 **显示任务栏** / **隐藏任务栏**。

**Q： 进入全屏后任务栏没有自动隐藏，怎么办？**

A： 大多数原生全屏应用会被自动检测；但部分应用（尤其是 Chrome、Electron，或接近满屏的窗口）可能无法稳定触发自动隐藏。

作为临时解决办法：点击 macOS 顶部菜单栏的 RetroWin 图标，选择 **隐藏任务栏**。任务栏会保持隐藏，直到你再选择 **显示任务栏**；手动隐藏期间，鼠标移到屏幕底边也不会把它唤回。

**Q： 为什么关掉了应用窗口，任务栏上还显示着？**

A： 这是 macOS 的特性——点击红色关闭按钮（×）只是关闭窗口，并不会真正退出应用，应用仍在后台运行，所以任务栏上依然显示。如果你希望关闭窗口后应用从任务栏消失，有两种方式：

- 前往 **RetroWin 设置 → 任务栏**，为该应用开启 **跟随窗口** 模式。
- 右键点击任务栏上的应用，选择 **关闭** 来彻底退出。

**Q： 为什么每次更新后都需要重新授权辅助功能？**

A： macOS 的辅助功能权限与应用的代码签名绑定。由于 RetroWin 未使用 Apple 开发者证书签名，每次更新后签名会发生变化，macOS 会将其视为新应用。更新后请按以下步骤操作：

1. 前往 **系统设置 → 隐私与安全性 → 辅助功能**
2. 在列表中选中 RetroWin，点击 **"−"** 按钮将其移除
3. 重新启动 RetroWin
4. 系统会弹出授权提示，点击 **允许** 即可恢复正常

**Q： 支持哪些 macOS 版本？**

A： RetroWin 需要 macOS 15.0（Sequoia）或更高版本，支持 Apple Silicon 和 Intel Mac。

<!-- FAQ_ZH_END -->

## 联系我们

如果你有任何问题、建议或需要帮助，欢迎通过以下方式联系：

- **GitHub Issues**：[提交反馈](https://github.com/a1245582339/RetroWin-Release/issues)

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/a1245582339/picx-images-hosting/raw/master/feishu.3yez72bz49.webp" width="200" /><br/>
      <b>飞书交流群</b>
    </td>
    <td align="center">
      <img src="https://github.com/a1245582339/picx-images-hosting/raw/master/wechat-qrcode.et1h9a0ox.webp" width="200" /><br/>
      <b>客服微信</b>
    </td>
  </tr>
</table>

## 许可证

本软件为专有软件，保留所有权利。

---

<div align="center">

**如果你喜欢这个项目，请给一个 ⭐**

</div>
