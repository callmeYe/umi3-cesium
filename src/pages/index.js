import React, { useEffect } from 'react';
import CesiumMap from '@/utils/cesiumMap';
import styles from './index.less';

const MapView = props => {
  useEffect(() => {
    let _map = new CesiumMap('cesiumContainer', {
      baseLayerPicker: false, //是否显示图层选择控件
      geocoder: true, //地名查找
      homeButton: false,
      sceneModePicker: false, //投影方式空间
      fullscreenButton: false,
      vrButton: false,
      animation: false,
      timeline: false,
      infoBox: false,
      selectionIndicator: false,
      requestRenderMode: true,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
    });
  }, []);
  return (
    <div className={styles.normal}>
      <div id="cesiumContainer" className={styles.fullScreen_3d}></div>
    </div>
  );
};

export default MapView;
