<template>

  <div class="header">
           <img alt="Xray logo" src="@/assets/images/xray_logo.png">
        <img alt="Vue logo" src="@/assets/images/logo.png">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    color:#fff;
    background: #43a047;
 max-height: 65px;
}
 img {
    max-height: 40px;
    position: absolute;
    left: 50px;
    top: 15px;
}
img[alt="Vue logo"] {
    left: 157px;
    top: 13px;
    height: 41px;
    max-height: 100px;
}
</style>
