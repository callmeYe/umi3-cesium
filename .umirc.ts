import { defineConfig } from 'umi';

const path = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  esbuild: {},
  antd: {},
  dva: {},
  targets: { ie: 11 },
  externals: {
    cesium: 'window.Cesium',
  },
  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [{ src: '/lib/Cesium/Cesium.js' }]
      : [{ src: '/lib/Cesium/Cesium.js' }],
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  plugins: ['@alitajs/routes'],
  routesExtend: {
    exclude: [
      /models\//,
      /services\//,
      /model\.(t|j)sx?$/,
      /service\.(t|j)sx?$/,
      /components\//,
    ],
  },
  alias: {
    '@components': path.resolve(__dirname, './src/components'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@services': path.resolve(__dirname, './src/services'),
    '@config': path.resolve(__dirname, './src/assets/config'),
  },
  chainWebpack(config, { webpack }) {
    config.merge({
      amd: {
        toUrlUndefined: true,
      },
      node: {
        fs: 'empty',
      },
      module: {
        unknownContextCritical: false,
      },
    });
  },
});
