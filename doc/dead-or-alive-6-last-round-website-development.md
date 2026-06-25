# Dead or Alive 6 Last Round 网站开发信息

## 重要核实结论

《Dead or Alive 6 Last Round》是已正式公布并于 **2026 年 6 月 25 日**发行的《Dead or Alive 6》现世代强化版本，支持 PS5、Xbox Series X|S 和 Steam。正式版包含 **29 名可操作角色**、新拍照模式、5 套新服装和现世代硬件优化；免费版 Core Fighters 初始开放 4 名角色。

部分 Steam、PlayStation 地区商店显示 6 月 24 日，这是区域时区和商店解锁时间造成的日期差异。网站正文建议统一采用官方全球宣传日期 **June 25, 2026**。

首页建议采用以下四项稳定数据，避免使用刚上线、变化很快的评价数量或在线人数：

- 29 Playable Fighters
- 13 Battle Stages
- 4 Free Core Fighters
- 37 Steam Achievements

---

# 1、主题基础信息

## （1）官方网站、商店和社群

### 官方网站

- [Dead or Alive 6 Last Round 英文官网](https://teamninja-studio.com/doa6/lastround/us/)
- [Dead or Alive 6 Last Round 日文官网](https://teamninja-studio.com/doa6/lastround/jp/)
- [KOEI TECMO 产品页面](https://www.koeitecmoamerica.com/games/dead-or-alive-6-last-round/)
- [官方角色列表](https://teamninja-studio.com/doa6/lastround/us/characters/)
- [官方场景列表](https://teamninja-studio.com/doa6/lastround/us/stages/)
- [Core Fighters 免费版介绍](https://teamninja-studio.com/doa6/lastround/us/corefighters/)
- [存档与 DLC 转移说明](https://teamninja-studio.com/doa6/lastround/us/productinfo/)

### 官方商店

- [Steam](https://store.steampowered.com/app/4144680/DEAD_OR_ALIVE_6_Last_Round/)
- [PlayStation Store](https://store.playstation.com/en-us/product/JP0106-PPSA34363_00-APPDOA6LR0000001)
- [Xbox Store](https://www.xbox.com/en-US/games/store/dead-or-alive-6-last-round/9nd19sm06dcx)

### 常用社群

- [KOEI TECMO Global Discord](https://discord.gg/ktfamily)
- [Reddit — r/DeadOrAlive](https://www.reddit.com/r/DeadOrAlive/)
- [Steam Community Hub](https://steamcommunity.com/app/4144680)
- [KOEI TECMO AMERICA YouTube](https://www.youtube.com/user/TecmoKoeiAmerica)

### 官方 Trailer

- [Dead or Alive 6 Last Round — Announcement Trailer](https://www.youtube.com/watch?v=P1YX7JKs4io)
- [The King of Fighters XIV Collaboration Trailer](https://www.youtube.com/watch?v=eqKxb-CSR0Y)

---

## 可直接下载的 5 张官方横图

1. [主视觉横图，包含游戏 Logo](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4144680/e94fe79e24de4c1488f1967f13144c6df66b5b51/header.jpg?t=1782352133)
2. [Kasumi 官方横图](https://teamninja-studio.com/doa6/lastround/assets/img/features/f02_newcostume_kasumi.jpg)
3. [Ayane 官方横图](https://teamninja-studio.com/doa6/lastround/assets/img/features/f02_newcostume_ayane.jpg)
4. [Marie Rose 官方横图](https://teamninja-studio.com/doa6/lastround/assets/img/features/f02_newcostume_marie.jpg)
5. [Honoka 官方横图](https://teamninja-studio.com/doa6/lastround/assets/img/features/f02_newcostume_honoka.jpg)

第二至第五张尺寸约为 1000×563，适合裁剪为首页卡片或 Hero 背景。使用官方素材时，建议在页脚保留 KOEI TECMO / Team NINJA 版权和非官方粉丝站声明。

---

## （2）Favicon Logo 英文绘画提示词

```text
Create a bold 512x512 PNG favicon for an independent fan-made Dead or Alive 6 Last Round community wiki. Design an original compact fighting emblem built around a metallic number “6” inside a sharp hexagonal arena crest, with a fiery red-orange impact slash crossing the center and subtle electric-blue energy along the edges. Use dark gunmetal, black, silver, crimson, and ember-orange colors, polished current-generation fighting game aesthetics, strong symmetry, thick readable silhouette, high contrast, subtle sparks and motion trails, clean premium 3D metal finish, centered composition, transparent background, no characters, no official game logo, no copyrighted typography, no small text, no watermark, readable at 16px to 48px.
```

---

## （3）首页 JSON

```json
{
  "home": {
    "meta": {
      "title": "Dead or Alive 6 Last Round Wiki — Fighters & Guides",
      "description": "Master Dead or Alive 6 Last Round with fighter guides, tier lists, combos, controls, Photo Mode tips, unlocks, stages, and Core Fighters help."
    },
    "hero": {
      "eyebrow": "Independent Fan-Made Fighting Game Wiki",
      "title": "Dead or Alive 6 Last Round",
      "description": "Return to Team NINJA's fast, tactical 3D fighting arena with 29 playable fighters, interactive Danger Zones, and a new Photo Mode. Learn the strike, throw, and hold triangle, build reliable combos, and choose a fighter that matches your style.",
      "stats": [
        "Released Jun 25, 2026",
        "29 Playable Fighters",
        "13 Battle Stages",
        "4 Free Core Fighters",
        "37 Steam Achievements"
      ],
      "primaryCta": "Start Beginner Guide",
      "secondaryCta": "Compare Fighters",
      "tertiaryCta": "Try Core Fighters",
      "videoLabel": "Official Announcement Trailer"
    },
    "start": {
      "eyebrow": "Start Here",
      "title": "Your Dead or Alive 6 Last Round Journey",
      "cards": [
        {
          "number": "1",
          "title": "Beginner Guide",
          "description": "Learn movement, blocking, the strike-throw-hold triangle, Break Gauge basics, and the fastest settings to change before your first match."
        },
        {
          "number": "2",
          "title": "Combat System",
          "description": "Understand Holds, Throws, Fatal Rush, Break Blow, wall pressure, and Danger Zones so you can stop button-mashing and begin making deliberate decisions."
        },
        {
          "number": "3",
          "title": "Fighters and Combos",
          "description": "Compare all 29 fighters by playstyle, difficulty, speed, range, and beginner value, then learn practical launchers, juggles, and punish combos."
        },
        {
          "number": "4",
          "title": "Photo Mode and Data Transfer",
          "description": "Set poses, expressions, camera angles, sweat, and dirt in Photo Mode, and follow platform-specific steps for moving eligible DOA6 saves and costumes."
        }
      ]
    },
    "aboutGame": {
      "title": "What is Dead or Alive 6 Last Round?",
      "paragraphs": [
        "Dead or Alive 6 Last Round is the current-generation definitive edition of Team NINJA's fast-paced 3D fighting game. Its combat revolves around a tactical triangle of strikes, throws, and holds, supported by explosive stage hazards and cinematic Break Gauge attacks.",
        "The Last Round edition launches with 29 playable fighters, five new costumes, current-generation optimization, and a flexible Photo Mode. A free Core Fighters edition opens most modes with four starting characters, while the full edition includes the main roster and Story unlock."
      ],
      "stats": [
        {
          "label": "Developer",
          "value": "Team NINJA"
        },
        {
          "label": "Platforms",
          "value": "PS5 / Xbox Series X|S / Steam"
        },
        {
          "label": "Genre",
          "value": "3D Fighting Action"
        },
        {
          "label": "Playable Fighters",
          "value": "29"
        },
        {
          "label": "Battle Stages",
          "value": "13"
        },
        {
          "label": "Free Core Fighters",
          "value": "4"
        },
        {
          "label": "Steam Achievements",
          "value": "37"
        }
      ],
      "cta": "Explore All Guides"
    },
    "finalCta": {
      "title": "Ready to Master Dead or Alive 6 Last Round?",
      "description": "From your first counter hold to advanced wall pressure, character matchups, Photo Mode setups, and save transfers, this community wiki helps you spend less time searching and more time fighting.",
      "primary": "Read the Beginner Guide",
      "secondary": "Play on Steam"
    }
  },
  "footer": {
    "aboutTitle": "Dead or Alive 6 Last Round Wiki",
    "about": "Dead or Alive 6 Last Round Wiki is an independent fan-made guide hub for fighters, combos, stages, modes, unlocks, and save-transfer help. It is not affiliated with Team NINJA or KOEI TECMO GAMES.",
    "description": "Current-generation 3D fighter with 29 characters, 13 stages, Photo Mode, and a free Core Fighters edition.",
    "playGame": "Play Dead or Alive 6 Last Round",
    "officialDiscord": "KOEI TECMO Global Discord — https://discord.gg/ktfamily",
    "officialYoutube": "KOEI TECMO AMERICA — https://www.youtube.com/user/TecmoKoeiAmerica",
    "communityTool": "Steam Community Hub — https://steamcommunity.com/app/4144680",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service"
  },
  "shared": {
    "wikiNavigation": "Wiki Navigation",
    "activeCodes": "Code Status",
    "viewAllCodes": "View code status",
    "home": "Home",
    "readMore": "Read more"
  },
  "sidebarCodes": [
    {
      "code": "暂无",
      "reward": "No redemption code system is currently available."
    },
    {
      "code": "暂无",
      "reward": "No second active redemption code is available."
    }
  ],
  "metadata": {
    "title": "Dead or Alive 6 Last Round Wiki — Fighters & Guides",
    "description": "Master Dead or Alive 6 Last Round with fighter guides, tier lists, combos, controls, Photo Mode tips, unlocks, stages, and Core Fighters help.",
    "keywords": "Dead or Alive 6 Last Round, DOA6LR, fighters, tier list, combos, controls, Photo Mode, stages"
  }
}
```

### JSON 自查结果

| 检查项目 | 结果 |
|---|---:|
| `home.meta.title` | 51 字符，符合 ≤60 |
| `metadata.title` | 51 字符，符合 ≤60 |
| `metadata.description` | 142 字符，符合 140–160 |
| `metadata.keywords` | 93 字符，符合 ≤100 |
| `home.hero.stats` | 5 个纯字符串 |
| `home.start.cards` | 4 个对象 |
| `home.aboutGame.stats` | 7 个 `label + value` 对 |
| `footer.about` | 2 句介绍 |
| `sidebarCodes` | 2 条，均填写“暂无” |
| JSON 格式 | 已通过结构校验 |

---

# 2、网站主题色

## 结论

**默认选择暗色主题。**

官方视觉主要使用黑色、枪灰色、红橙色冲击光和蓝色能量光。暗色背景更符合格斗游戏、金属 Logo、竞技场和角色立绘，同时也能降低多张高饱和角色图片放在同一页面时产生的视觉杂乱。

主色建议使用 **战斗红橙色**，辅助内容、链接和信息标签可以使用电光蓝色。

```css
/* 导航页主题色 - 亮色主题 */
--nav-theme: 12 88% 48%;        /* battle orange-red */
--nav-theme-light: 18 92% 58%;  /* lighter impact orange */

/* 导航页主题色 - 暗色主题 */
--nav-theme: 10 93% 56%;        /* brighter combat red-orange */
--nav-theme-light: 18 96% 64%;  /* glowing ember orange */
```

推荐的整体搭配：

| 用途 | 建议颜色 |
|---|---|
| 主背景 | `#07090D` |
| 卡片背景 | `#111722` |
| 次级卡片 | `#171E2A` |
| 主文字 | `#F5F7FA` |
| 次级文字 | `#A7B0BF` |
| 主强调色 | `#F04A2A` |
| 辅助蓝色 | `#3B82F6` |
| 金属边框 | `#697386` |

---

# 3、多语言

## 结论：建议优先支持 4 门语言

1. **英语**
2. **日语**
3. **韩语**
4. **西班牙语**

| 优先级 | 语言 | 本地化主题名 | 推荐 URL | 说明 |
|---:|---|---|---|---|
| 1 | English | **Dead or Alive 6 Last Round** | `/` 或 `/en` | 全球统一主词，官方英文页面、Steam、PS5 和 Xbox 均使用该名称。 |
| 2 | 日本語 | **DEAD OR ALIVE 6 Last Round** | `/ja` | 日本官网仍使用英文官方标题；SEO 正文可自然加入日文搜索别名 **デッド オア アライブ 6 ラストラウンド**。 |
| 3 | 한국어 | **데드 오어 얼라이브 6 라스트 라운드** | `/ko` | 韩国本地游戏页面和搜索结果普遍使用完整韩文音译，适合覆盖角色、콤보、티어표、공략等搜索。 |
| 4 | Español | **Dead or Alive 6 Last Round** | `/es` | 官方标题保持英文，页面内容使用西班牙语；适合覆盖 `guía`、`personajes`、`combos`、`lista de niveles`。 |

### 各语言建议使用的 SEO 标题

| 语言 | 推荐标题 |
|---|---|
| English | `Dead or Alive 6 Last Round Wiki — Fighters & Guides` |
| 日本語 | `DEAD OR ALIVE 6 Last Round 攻略Wiki｜キャラ・コンボ` |
| 한국어 | `데드 오어 얼라이브 6 라스트 라운드 공략 — 캐릭터·콤보` |
| Español | `Dead or Alive 6 Last Round Wiki — Personajes y Combos` |
