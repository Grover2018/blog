<template>
  <div class="about-container">
    <img
      src="https://p1-tt.byteimg.com/origin/pgc-image/e3bbdab25ba44bb6b64b1138442b719a?from=pc"
      alt=""
    />
    <div class="content">
      <div class="text">
        朋友，你好。我是Grover，目前在太原读大三，计算机专业。在大学的前两年接触过JAVA、Python，但是感觉都不是很喜欢。我是在去年6月份，开始学习前端的。前端工程师的主要工作是和用户进行高效、愉快的交互，这正是我所期待的工作领域。因此，我下定决心要成为一名前端工程师。
      </div>
      <div class="text">
        如果是志同道合的朋友，欢迎联系我，一起交流。左下角有我的联系方式。
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style  scoped>
.about-container {
  width: 100%;
  height: 100%;
  display: flex;
}
img {
  width: 30%;
  height: 90%;
  border-radius: 50px;
  margin: auto 20px;
}
.content {
  width: 60%;
  margin: auto 20px;
  transform: translateY(-200px);
}
.text {
  font-weight: bold;
  text-indent: 2em;
  line-height: 26px;
}
</style>