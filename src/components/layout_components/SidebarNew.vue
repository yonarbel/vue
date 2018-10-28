<template>
  <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      :value="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <router-link tag="li" to="/">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        </router-link>
            <v-list-group
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >
              <v-list-tile :to="item.linkTo" slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
  
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidebarNew",
  props: {
drawer:Boolean
  },
 data:  function(){
    return {
      items: [
        {
          action: 'home',
            linkTo:'/',
          title: 'Attractions',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'info',
          linkTo:'/about',
          title: 'Info',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'folder_open',
          linkTo:'/users',
          title: 'Users',
  
        }
      ],
      miniVariant: false,
      rightDrawer: false,
       clipped:true,
        fixed:true
    }
  },
mounted: function () {
  console.log(this);
},
  methods:{
},
computed:{
   
}
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

