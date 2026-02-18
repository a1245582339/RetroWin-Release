<div align="center">

<img src="https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp" alt="RetroWin" width="128" />

# RetroWin

**Bring the classic Windows taskbar to macOS.**

A retro-style taskbar app for macOS that recreates the look and feel of Windows 98, Windows XP, and Windows 7.

[![GitHub release](https://img.shields.io/github/v/release/a1245582339/RetroWin-Release)](https://github.com/a1245582339/RetroWin-Release/releases)

[![macOS](https://img.shields.io/badge/macOS-15.0%2B-black)](https://www.apple.com/macos/)

English | [简体中文](./README_CN.md)

</div>

## Screenshots

### Windows 98 Theme

![98bar](https://github.com/a1245582339/picx-images-hosting/raw/master/98bar.lw9claato.webp)

![98menu](https://github.com/a1245582339/picx-images-hosting/raw/master/98menu.4n88qzee6k.webp)

### Windows XP Theme

![xpbar](https://github.com/a1245582339/picx-images-hosting/raw/master/xpbar.99tvrocxu7.webp)

![xpmenu](https://github.com/a1245582339/picx-images-hosting/raw/master/xp-menu.2yyvtso40f.webp)

### Windows 7 Theme

![7bar](https://github.com/a1245582339/picx-images-hosting/raw/master/98bar.lw9claato.webp)

![7menu](https://github.com/a1245582339/picx-images-hosting/raw/master/7menu.5j4q6fo2mk.webp)


## Features

- **Multiple Themes** — Windows 98, Windows XP, and Windows 7, with pixel-perfect classic UI details
- **Multi-Monitor Support** — Independent taskbar on each display, freely configurable
- **Window Management** — Real-time app tracking, activation, minimization, merge/expand modes
- **Taskbar Pinning** — Pin apps to the taskbar, drag to reorder, persistent even when closed
- **Start Menu** — Classic layout with pinnable programs and quick access to system functions
- **System Tray** — Input method, volume control, clock, and custom app icons
- **Notification Alerts** — Badge and banner detection with orange flashing indicators
- **Auto-Hide** — Taskbar hides to screen edge, appears on hover
- **Scaling** — 50% to 200% taskbar scaling for any display
- **Multi-Language** — English, 简体中文, 繁體中文, 日本語, 한국어, Français

![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/General-settings1.8s3u33bk99.webp)

![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/General-settings2.58hwda8uh9.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Theme-settings.4n88qzee6m.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Taskbar-settings.6f17lvxr2l.webp)
![settings](https://github.com/a1245582339/picx-images-hosting/raw/master/Tray-settings.6t7ncr61xq.webp)



## Installation

1. Go to the [Releases page](https://github.com/a1245582339/RetroWin-Release/releases)
2. Download the latest `.dmg` file
3. Open the DMG and drag RetroWin to Applications
4. On first launch, go to **System Settings → Privacy & Security** and click **Open Anyway**

Requires macOS 15.0 or later, Apple Silicon or Intel.

## FAQ

<!-- FAQ_EN_START -->
**Q: Why can't RetroWin detect some app windows?**

A: RetroWin needs Accessibility permission to track windows. Go to **System Settings → Privacy & Security → Accessibility** and make sure RetroWin is enabled.

**Q: macOS says the app is damaged or can't be opened.**

A: Since RetroWin is not distributed through the App Store, macOS Gatekeeper may block it. Go to **System Settings → Privacy & Security**, find the RetroWin prompt, and click **Open Anyway**. Alternatively, run the following command in Terminal:

```bash
xattr -cr /Applications/RetroWin.app
```

**Q: Can I use RetroWin alongside the native macOS Dock?**

A: Yes. RetroWin runs independently and does not replace or modify the Dock. You can use both at the same time, or hide the Dock via **System Settings → Desktop & Dock → Automatically hide and show the Dock**.

**Q: Does RetroWin affect system performance?**

A: RetroWin is lightweight and uses minimal CPU and memory. Window tracking polls once per second and has negligible impact on performance.

**Q: How do I switch themes?**

A: Right-click the Start button and select **Settings**, or click **Settings** in the Start Menu. Go to the **Theme** tab to switch between Windows 98, Windows XP, and Windows 7.

**Q: Does it support multiple monitors?**

A: Yes. You can enable or disable the taskbar on each monitor independently in **Settings → General**.

**Q: How do I pin an app to the taskbar?**

A: Right-click on any running app's taskbar button and select **Pin to Taskbar**. Pinned apps remain on the taskbar even when closed, and you can drag to reorder them.

**Q: Can I make the taskbar auto-hide?**

A: Yes. Enable **Auto-Hide** in **Settings → Taskbar**. The taskbar will slide off-screen and reappear when you move your mouse to the bottom edge.

**Q: Why does an app still appear on the taskbar after I closed its window?**

A: On macOS, clicking the red close button (×) only closes the window — it does not quit the app. The app continues running in the background, which is why it still shows on the taskbar. If you want the app to disappear from the taskbar after closing its window, you have two options:

- Go to **RetroWin Settings → Taskbar** and enable **Follow Window** for that app.
- Right-click the app on the taskbar and select **Close** to fully quit it.

**Q: Which macOS versions are supported?**

A: RetroWin requires macOS 15.0 (Sequoia) or later, and supports both Apple Silicon and Intel Macs.

<!-- FAQ_EN_END -->

## Contact

If you have any questions, suggestions, or need support, feel free to reach out:

- **GitHub Issues**: [Submit feedback](https://github.com/a1245582339/RetroWin-Release/issues)

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/a1245582339/picx-images-hosting/raw/master/feishu.3yez72bz49.webp" width="200" /><br/>
      <b>Feishu Group</b>
    </td>
    <td align="center">
      <img src="https://github.com/a1245582339/picx-images-hosting/raw/master/wechat-qrcode.et1h9a0ox.webp" width="200" /><br/>
      <b>WeChat</b>
    </td>
  </tr>
</table>

## License

This software is proprietary. All rights reserved.

---

<div align="center">

**If you like this project, give it a ⭐**

</div>
