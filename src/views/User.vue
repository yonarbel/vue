<template>
  <div class="about">
    <h1>This is a USER page {{$route.params.username}} - {{username}}</h1>
  </div>
</template>

<script>
export default{

  props:["username"]
}
</script>