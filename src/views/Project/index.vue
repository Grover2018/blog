<template>
  <div class="project-container">
    <h1>画板练习</h1>
    <div class="paint">
      <div id="box" ref="box">
        <canvas id="ca" width="600" height="600" ref="ca"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var box = this.$refs.box;
    var ca = this.$refs.ca;
    var ctx = ca.getContext("2d");
    ca.onmousedown = function (ev) {
      var event = window.event || ev;
      var startx = event.clientX - box.offsetLeft;
      var starty = event.clientY - box.offsetTop;
      ctx.beginPath();
      ctx.moveTo(startx, starty);
      ca.onmousemove = function (ev) {
        var event = window.event || ev;
        var endx = event.clientX - box.offsetLeft;
        var endy = event.clientY - box.offsetTop;
        ctx.lineTo(endx, endy);
        ctx.strokeStyle = "green";
        ctx.stroke();
      };
      document.onmouseup = function () {
        ca.onmousemove = null;
        ctx.closePath();
      };
    };
  },
};
</script>

<style scoped>
h1 {
  padding: 20px;
  border-bottom: 2px solid rgba(199, 194, 194, 0.808);
}
#box {
  width: 600px;
  height: 600px;
  margin: 0 auto;
}

#ca {
  background: #ccc;
}
</style>
