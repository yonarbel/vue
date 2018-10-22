<template>
  <div class="about">
    <h1>This is an about page</h1>
<DataTable/>
<br/>
        <Card/>
        <br/>
        
        <br/>

        <TimeLine/>


  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TimeLine from "@/components/Timeline.vue";
import Card from "@/components/Card.vue";
import DataTable from "@/components/DataTable.vue";
export default {
  name: "about",
  components: {
    HelloWorld,
    TimeLine,
    Card,
    DataTable
  }
};
</script>
