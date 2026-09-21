## 快速上手

小米手环上的《箱即是空》游戏（开发中）。

<img src=".\docs\miband9.png">

<img src=".\docs\miband10.png">

米坛社区资源链接：https://www.bandbbs.cn/resources/5388/

内有rpk可下载（或者下载本代码工程，在dist文件夹里也有个rpk，它是有签名的，也可以直接安装到手环上玩）。

原作：独门Lohh，原作游戏在steam上有Win版免费demo试玩，推荐去玩。

## 开发与验证

使用 Node.js 18.18 或以上版本，在项目根目录执行：

```sh
npm install
npm test
npm run lint
npm run build
```

自动测试覆盖移动和推箱规则、撤销与重置、胜利条件、页面跳转、按钮反馈、192/212 像素宽度适配，以及第一关的完整通关路线。测试通过不代表手环真机验证通过；修改 UI 后还需在 AIoT IDE 模拟器及真机检查显示与触控。

调试包输出到 `dist/com.boxorvoid.demo.debug.1.1.0.rpk`。当前版本只有第一关，通关后可重玩。

未压缩的标题素材保存在 `docs/assets/title_original.png`，不参与应用打包。
