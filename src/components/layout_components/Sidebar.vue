

<template>
<div  :class="{'pinned' : pinMenuStatus}" class="main-nav-wrapper">

 <div  id="nav">
      <router-link class="home" to="/"><font-awesome-icon :icon="['fab', 'html5']" /> <span v-if="!pinMenuStatus"  class="menu-item-text">HTML</span>    </router-link>
      <router-link to="/about"><font-awesome-icon :icon="['fab', 'css3-alt']" /><span v-if="!pinMenuStatus" class="menu-item-text">CSS</span>   </router-link>
      <router-link to="/users"> <font-awesome-icon :icon="['fab', 'js']" /><span v-if="!pinMenuStatus"  class="menu-item-text">Javascript</span>   </router-link>
    </div>
    <span class="pin-menu" @click="pinMenu(pinMenuStatus)">  <font-awesome-icon  v-if="!pinMenuStatus" icon="angle-double-left" />  <font-awesome-icon v-else icon="angle-double-right" /></span>
    <div class="sidebar-footer">All Rights Reserved <font-awesome-icon icon="copyright" /> </div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleRight,faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { faJs,faHtml5,faCss3Alt} from '@fortawesome/free-brands-svg-icons'

let iconsArr = [faAngleDoubleRight,faAngleDoubleLeft,faCss3Alt,faJs,faHtml5]
library.add(iconsArr);

export default {
  name: "Sidebar",
  props: {
    msg: String
  },
 data:  ()=> {
    return {
    pinMenuStatus:true
    }
  },
mounted: function () {
  console.log(this);
},
  methods:{
pinMenu: function(status){
  this.pinMenuStatus = this.pinMenuStatus? false: true;
}

}
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-nav-wrapper {
    position: relative;
     transition: width 0.25s ease;
    width:200px;
    &.pinned{
      width:80px;
      #nav{
        a{
          text-align:center;
        }
      }
    }
}
/* Nav Bar Css */
#nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
     svg {
    width: 40px;
}
   
    background: #373737;
    height: calc(100% - 95px);
    a {
        display: block;
        text-align: left;
    font-weight: 100;
    color: #afafaf;
    border-bottom: 1px solid #454545;
    box-shadow: inset 0 -1px 0 0 #2c2c2c;
    transition: color .15s ease-in;
    text-decoration: none;
cursor: pointer;
    &.router-link-exact-active,
    &.router-link-active:not(.home){
  color: #43a047;
}
}

 > a {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ffb2b20d;
}
&.pinned{
  width:80px;
}

}

.pin-menu {
    display: block;
    position: absolute;
    bottom: 105px;
    left: 0;
    background: #3e3e3e;
    text-align: center;
    height: 20px;
    width: 100%;
    max-width: 200px;
    cursor: pointer;
    color: #a8a8a8;
}
.sidebar-footer {
    height: 95px;
    background: #373737;
color: #a8a8a8;
  
}
/* End  Nav Bar Css */
</style>

