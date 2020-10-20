import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  esbuild: {},
  externals: {
    'cesium': 'window.Cesium',
  },
  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts: [
    'https://cesiumjs.org/releases/1.74/Build/Cesium/Cesium.js',
  ],
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
