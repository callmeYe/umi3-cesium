import { Ion, Viewer } from 'cesium';

class CesiumMap {
  constructor(container, options) {
    Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZmVjNGI2Zi1kMTA3LTQ4NjEtOWY5Mi1hOTQ0NjkwYzM0Y2YiLCJpZCI6NjQyMiwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NjQ4MjQzMH0.TmEcQVmerVoMPXZ2_xa9D2Dy5Wysy2j6_tgPeiV88aM';
    this.viewer = new Viewer(container, options);
  }
}

export default CesiumMap;
