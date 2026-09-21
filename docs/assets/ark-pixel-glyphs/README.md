# 方舟像素单字 PNG 素材包

用于《箱即是空》现有界面和拟新增的选关、定时变化、莫比乌斯环关卡。

## 规格

- 51 个汉字与 10 个数字，共 61 个字符，每个字符各有白色、灰色一张，共 122 张 PNG。
- 每张 48×48，RGBA 透明背景。
- 白色 `#FFFFFF`；灰色 `#4B4B4B`，与工程原有素材的主要颜色一致。
- 使用 12px 字模整数放大 4 倍，不经过字体回退、平滑缩放或抗锯齿；透明度只有 0 和 255。
- 保留字模的统一基线和字间距，数字在 48px 方框内水平居中。
- 这是直接从字体字模导出的素材，保留原字体像素轮廓；不会复刻旧图片边缘已有的彩色杂点。

## 文件

- `white/`：白色单字，例如 `white-u9009.png` 是“选”。
- `grey/`：灰色单字，例如 `grey-u9009.png` 是“选”。
- `manifest.json`：字符、颜色和文件名的完整映射，以及实际尺寸、数量、体积。
- `preview.png`：全部字符的白色、灰色对照预览。预览背景不在单字 PNG 中。
- `source/glyphs.json`：本包所需的原始字模子集，供重复生成使用。
- `LICENSE-OFL.txt`：字体上游许可证。

文件名使用 Unicode 码位，避免同音汉字导致拼音文件名冲突。

现有界面已接入其中 21 张单字图片：棋盘的“黑、白、箱、位”、按钮的“切换到、撤销、重置”，以及胜利页的“重玩”。继续使用 `src/common/image/icons/` 下原有语义文件名，仅新增 `white-wan.png`，布局、配色和方向箭头保持原样。

本目录的原始素材仍为 48×48。同步到应用时，在左、右各增加 4px、底部增加 8px 透明留白，输出 56×56 运行时副本，以免 Vela 缩小字图时裁掉紧贴底边的最后一行笔画；字图控件使用 `object-fit: contain`。原始字模像素不变，按钮及棋盘容器尺寸不变。

选关和新关卡所需的其余字符保留在本素材库中，暂未进入应用包。后续接入时，在 `scripts/sync-glyphs.cjs` 中添加所需映射即可。

## 包含字符

```text
选关经典定时莫比乌斯环已通下一重玩暂停继续秒每翻色越界上转展开棋盘视图可换黑白箱位切到置撤销开始返回规则
0123456789
```

## 字体来源

- 字体：Ark Pixel 12px Mono zh_cn（方舟像素，12px 等宽简体中文）。
- 上游：[TakWolf/ark-pixel-font](https://github.com/TakWolf/ark-pixel-font)。
- 固定版本：[2026.09.01](https://github.com/TakWolf/ark-pixel-font/releases/tag/2026.09.01)。
- 上游压缩包：`ark-pixel-font-12px-monospaced-bdf-v2026.09.01.zip`。
- 字模来源：`ark-pixel-12px-monospaced-zh_cn.bdf`。
- Copyright (c) 2021, TakWolf (https://takwolf.com).
- 字体许可：SIL Open Font License 1.1，见同目录许可证。

## 重新生成与校验

在工程根目录执行：

```sh
node scripts/generate-glyphs.cjs
npm run assets:sync
```

生成脚本只依赖工程已有的 `sharp`，无需安装字体或联网。它会重建本目录的两色 PNG、索引和预览，并逐张解码校验尺寸、全部 RGBA 像素和透明背景；字形缺失或超出画布会报错。同步脚本先校验选中的全部 PNG，并校验新增透明底边与原字模像素保真，再更新应用中的对应图标，不处理方向箭头。
