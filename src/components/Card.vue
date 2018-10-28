<template>
        <v-card>
         <!-- <v-img v-if="user"
            :src="user.avatar_url"
            height="200px"
          >
          </v-img> -->
  <v-parallax
    height="300"
    :src="user.avatar_url"
  ></v-parallax>
  
          <v-card-title primary-title>
            <div>
              <div class="headline">{{user.login}}</div>
              <span class="grey--text">1,000 miles of wonder -- {{expand}}</span>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="expand = !expand">
              <v-icon>{{ expandInfo ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
  
          <v-slide-y-transition>
            <v-card-text v-show="expand">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
</template>

   <script>
export default {
  name: "Card",
 props:["user"],
  data:
       ()=>{
        return {
          expand:false
          
          }
          
          
  },
  computed:{
      expandInfo: function(){
      return this.expand
      }
  }
};
</script>