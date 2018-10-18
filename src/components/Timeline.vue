<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card
        dark
        flat
      >
        <v-btn
          absolute
          bottom
          color="pink"
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-title class="pa-2 purple lighten-3">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <h3 class="title font-weight-light text-xs-center grow">Timeline</h3>
          <v-avatar>
            <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
          </v-avatar>
        </v-card-title>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container fill-height>
            <v-layout align-center>
              <strong class="display-4 font-weight-regular mr-4">8</strong>
              <v-layout column justify-end>
                <div class="headline font-weight-light">Monday</div>
                <div class="text-uppercase font-weight-light">February 2015</div>
              </v-layout>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
       
      </v-card-text>
    </v-card>
   </template>
   

   <script>
export default {
  name: "TimeLine",
  props: {
    msg: String
  }
};
</script>
