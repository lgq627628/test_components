<template>
  <svg
    id="svgContent"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1260" height="1029" data-spm-anchor-id="TODO.11007039.0.i6.12b64a9bcbXQmm">
    <g
      v-for="(item, i) in data"
      :key="i" class="svgEach"
      :transform="`translate(${item.pos_x}, ${item.pos_y})`">
      <foreignObject width="180" height="30" >
        <body xmlns="http://www.w3.org/1999/xhtml">
          <div class="pane-node-content">
            <span class="icon icon-data"></span>
            <span class="name">{{item.name}}</span>
          </div>
        </body>
      </foreignObject>

      <path
        class="connector"
        v-for="(each, n) in item.out_ports" :key="n"
        :d="computedLink(i, each)"></path>
    </g>
  </svg>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [{ "id": 0, "in_ports": [], "name": "X_SUB_PD0_V01", "out_ports": [0, 1, 2, 3, 4], "pos_x": 295, "pos_y": 205, "type": "Variable" }, { "id": 1, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 108, "pos_y": 382, "type": "XGBoostOp" }, { "id": 3, "in_ports": [], "name": "X_SUB_PD0_V02", "out_ports": [0, 1, 2, 3, 4], "pos_x": 513, "pos_y": 226, "type": "Variable" }, { "id": 4, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 374, "pos_y": 325, "type": "XGBoostOp" }, { "id": 6, "in_ports": [], "name": "X_SUB_PD0_V03", "out_ports": [0, 1, 2, 3, 4], "pos_x": 803, "pos_y": 345, "type": "Variable" }, { "id": 7, "in_ports": [0, 1, 2, 3, 4], "name": "RandomForestClassifierOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 608, "pos_y": 422, "type": "RandomForestClassifierOp" }, { "id": 9, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": -5, "pos_y": 598, "type": "Constant" }, { "id": 10, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 145, "pos_y": 469, "type": "Constant" }, { "id": 11, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 407, "pos_y": 405, "type": "Constant" }, { "id": 12, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 45, "pos_y": 734, "type": "Multiply" }, { "id": 13, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 160, "pos_y": 619, "type": "Multiply" }, { "id": 14, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 371, "pos_y": 506, "type": "Multiply" }, { "id": 21, "in_ports": [0, 1, 2, 3, 4], "name": "Add", "out_ports": [0, 1, 2, 3, 4], "pos_x": 157, "pos_y": 856, "type": "Add" }, { "id": 22, "in_ports": [0], "name": "Output", "out_ports": [], "pos_x": 5, "pos_y": 932, "type": "Output" }, { "id": 27, "in_ports": [], "name": "X_SUB_169", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1301, "pos_y": 330, "type": "Variable" }, { "id": 28, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 897, "pos_y": 692, "type": "XGBoostOp" }, { "id": 30, "in_ports": [], "name": "X_SUB_PD1", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1025, "pos_y": 334, "type": "Variable" }, { "id": 31, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 637, "pos_y": 570, "type": "XGBoostOp" }, { "id": 33, "in_ports": [], "name": "X_SUB_111_V01", "out_ports": [0, 1, 2, 3, 4], "pos_x": 2067, "pos_y": 350, "type": "Variable" }, { "id": 34, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1861, "pos_y": 664, "type": "XGBoostOp" }, { "id": 36, "in_ports": [], "name": "X_SUB_PD0_HISTORY", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1643, "pos_y": 330, "type": "Variable" }, { "id": 37, "in_ports": [0, 1, 2, 3, 4], "name": "XGBoostOp", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1197, "pos_y": 696, "type": "XGBoostOp" }, { "id": 39, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 8, "pos_y": 1003, "type": "Constant" }, { "id": 40, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 917, "pos_y": 792, "type": "Constant" }, { "id": 41, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 629, "pos_y": 674, "type": "Constant" }, { "id": 42, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 413, "pos_y": 574, "type": "Constant" }, { "id": 43, "in_ports": [], "name": "Constant", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1643, "pos_y": 662, "type": "Constant" }, { "id": 44, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 997, "pos_y": 954, "type": "Multiply" }, { "id": 45, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 671, "pos_y": 788, "type": "Multiply" }, { "id": 46, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 371, "pos_y": 790, "type": "Multiply" }, { "id": 47, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 1495, "pos_y": 942, "type": "Multiply" }, { "id": 48, "in_ports": [0, 1, 2, 3, 4], "name": "Multiply", "out_ports": [0, 1, 2, 3, 4], "pos_x": 303, "pos_y": 1122, "type": "Multiply" }, { "id": 59, "in_ports": [0, 1, 2, 3, 4], "name": "Add", "out_ports": [0, 1, 2, 3, 4], "pos_x": 887, "pos_y": 1180, "type": "Add" }, { "id": 60, "in_ports": [0], "name": "Output2", "out_ports": [], "pos_x": 881, "pos_y": 1266, "type": "Output" }],
      simulate: {
        name: 'name2',
        id: 2,
        imgContent: '',
        pos_x: 300,
        pos_y: 400,
        type: 'constant',
        in_ports: [0, 1, 2, 3, 4],
        out_ports: [0, 1, 2, 3, 4]
      }
    }
  },
  methods: {
    computedLink(i, each) {
      const { pos_x, pos_y } = this.data[i]; // 起点位置
      const aimObj = this.data.find(item => item.id === each); // 终点坐标
      if (!aimObj) return `M 0 0 T 0 0`;
      /**
       * 关于贝塞尔曲线坐标公式直接看
       * https://brucewar.gitbooks.io/svg-tutorial/15.SVG-path%E5%85%83%E7%B4%A0.html
       * path里关于贝塞尔的部分
       * step5 整合以后的计算公式更清晰, 此处可以跳过
       */
      let q = `M 90 30  Q 90 ${(aimObj['pos_y'] - pos_y + 30) / 2} ${(aimObj['pos_x'] -
        pos_x +
        180) /
        2} ${(aimObj['pos_y'] - pos_y + 30) / 2} T ${aimObj['pos_x'] -
        pos_x +
        90} ${aimObj['pos_y'] - pos_y}`;
      console.log(q);
      return q;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.svgEach {
  position: relative;
}
.pane-node-content {
  width: 180px;
  height: 30px;
  background-color: hsla(0, 0%, 100%, 0.9);
  border: 1px solid #289de9;
  border-radius: 15px;
  font-size: 12px;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  box-sizing: border-box;
  .icon {
    width: 26px;
    height: 26px;
    margin: 1px;
    border-radius: 100%;
    float: left;
    color: #fff;
    font-size: 16px;
    background-color: #289de9;
    cursor: pointer;
  }
  .name {
    float: left;
    margin-left: 2px;
    width: 135px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
  }
  .parentLink {
    font-size: 0;
    height: 12px;
    width: 12px;
    position: absolute;
    top: 0;
    left: 90px;
    transform: translateX(-50%);
    border-top: 6px solid black;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
  .parentRing {
    font-size: 0;
    height: 10px;
    width: 10px;
    position: absolute;
    top: 0;
    left: 90px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid gray;
    background: #ffffff;
  }
  .childLink {
    height: 10px;
    width: 10px;
    position: absolute;
    bottom: 0;
    left: 90px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
    border: 1px solid gray;
    background: #ffffff;
    cursor: crosshair;
  }
}
.selected {
  background: rgba(227, 244, 255, 0.9) !important;
}
.connector {
  stroke: hsla(0, 0%, 50%, 0.6);
  stroke-width: 2px;
  fill: none;
}
.dragFrame {
  .dragFrameArea {
    width: 180px;
    height: 30px;
    background-color: hsla(0, 0%, 100%, 0.9);
    border: 1px dashed black;
    border-radius: 15px;
    font-size: 12px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
  }
}
.dragLinkArrows {
  border-top: 6px solid black;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  z-index: -10;
}



.connector {
  stroke: hsla(0, 0%, 50%, 0.6);
  stroke-width: 2px;
  fill: none;
}
</style>
