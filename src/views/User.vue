<template>
  <div class="about">
    <h1>This is a USER12121 page {{$route.params.username}} - {{username}}</h1>
<v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex  v-for="user in users" :key=user.id  xs4>
               
   <Card :user="user"/>

            </v-flex>
          </v-layout>
        </v-container>
  
    
  
  </div>

</template>

<script>
import axios from 'axios';
import Card from "@/components/Card.vue";
export default{

  props:["username"],
   beforeMount() {
    console.log(`this.$el doesn't exist yet, but it will soon!`)
    this.getUsers()
  },
  data:
       ()=>{
        return {
         users: null,
         imgSrc:null
          
          }  
  },
  components: {
    Card
  },
  methods:{

    getUsers(){
console.log("Getting users!!")
       axios.get('https://api.github.com/search/users?q=location%3Aisrael', {
        name: 'admin',
        lastName: 'Password1'
      })
      .then( (response)=> {
        console.log('!!!!!!new',response);
        this.users = response.data.items;
      })
      .catch(function (error) {
        console.log(error);
      });

  
    },
  }
}
</script>