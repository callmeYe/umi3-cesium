# umi3-cesium project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## Attention

1. cesium包只是为了开发时编辑器能够提示所以安装，实际上是通过静态资源/cdn方式引入的，当前版本固定为1.74，
需要更改的话在.umirc.ts里的scripts项中更改url，然后在global.less文件中更改widgets的样式文件url。
2. 为使webstorm能够识别alias配置，请在webstorm的设置中Language & Frameworks/JavaScript/Webpack一项中设置路径为webpack.config.js
