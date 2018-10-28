
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
      <img class="main-image" :src="user.hdurl" />
      mail
      <input  v-model="form.email"/>
password
<input v-model="form.password"/>

<v-btn @click="registerUser" color="success">Register</v-btn>
<v-btn @click="login" color="success">Login</v-btn>
The The user is:
{{user}} ----- {{authUser}}
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import AuthService from "@/services/dao/auth_dao.js";
import SidebarNew from "@/components/layout_components/SidebarNew.vue";
import { mapState } from 'vuex';
export default {
  name: "App",
  components: {
    SidebarNew
  },
  data() {
    return {
      clipped: true,
      fixed: true,
      drawer: true,
      form: {},
      title: "Awsome Vue",
      user: {}
    };
  },
 
  methods: {
    registerUser: function() {
      console.log("Dispatching registeration",this.form)
      this.$store.dispatch("signup", this.form);
    },
    login: function() {
      this.$store.dispatch("login", this.form);
    }
  },
  computed: mapState(['authUser']),
  created() {}
};
</script>

<style lang="scss">
.v-content__wrap {
  padding: 20px 30px;
}
</style>

