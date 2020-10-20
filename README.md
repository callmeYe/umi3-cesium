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

cesium包只是为了开发时编辑器能够提示所以安装，实际上是通过cdn方式引入的，当前版本固定为1.74，
需要更改的话在.umirc.ts里的scripts项中更改url，然后在global.less文件中更改widgets的样式文件url。
