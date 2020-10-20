import React,{useEffect} from 'react';
import {
  Ion,
  Viewer
} from 'cesium'
import styles from './index.less';

const MapView = (props) =>{
  useEffect(()=>{
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZmVjNGI2Zi1kMTA3LTQ4NjEtOWY5Mi1hOTQ0NjkwYzM0Y2YiLCJpZCI6NjQyMiwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NjQ4MjQzMH0.TmEcQVmerVoMPXZ2_xa9D2Dy5Wysy2j6_tgPeiV88aM';
    let viewer = new Viewer('cesiumContainer', {
      baseLayerPicker: false, //是否显示图层选择控件
      geocoder: true,   //地名查找
      homeButton: false,
      sceneModePicker: false,  //投影方式空间
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
  },[])
  return (
    <div className={styles.normal}>
      <div id="cesiumContainer" className={styles.fullScreen_3d}>
      </div>
    </div>
  );
}

export default MapView
