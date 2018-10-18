
<template>
  <v-app>
<SidebarNew :drawer="drawer"/>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
       
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

import SidebarNew from "@/components/layout_components/SidebarNew.vue"
export default {
  name: 'App',
  components:{
    SidebarNew
  },
  data () {
    return {
      clipped:true,
      fixed:true,
     drawer:true,
      title:"Awsome Vue"
  
    }
  }
}
</script>

<style lang="scss">
.v-content__wrap {
    padding: 20px 30px;
}
</style>

