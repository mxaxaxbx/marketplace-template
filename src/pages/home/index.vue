<template>
  <div>
    <v-card color="#fbe7e0" class="px-24 pt-10">
      <!-- random people image -->
      <div class="flex justify-around items-end">
        <img src="@/assets/img/back.png" alt="">
        <v-btn class="mb-10"> shop now </v-btn>
      </div>
    </v-card>

    <div class="flex justify-around mt-10">
      <v-card width="600">
        <v-img src="@/assets/img/man.png">
          <div class="flex justify-center items-end h-full">
            <v-btn class="mb-10" color="#585559" dark x-large> Hombre </v-btn>
          </div>
        </v-img>
      </v-card>

      <v-card width="600">
        <v-img src="@/assets/img/woman.png">
          <div class="flex justify-center items-end h-full">
            <v-btn class="mb-10" color="#585559" dark x-large> Mujer </v-btn>
          </div>
        </v-img>
      </v-card>
    </div>

    <div class="w-full mt-10">
      <v-card height="900">
        <!-- random video -->
        <video src="@/assets/video/video.mp4" autoplay loop muted></video>
      </v-card>
    </div>

    <div class="w-full mt-10 grid grid-cols-2 grid-rows-2">
      <v-card class="row-span-2 mx-24">
        <v-img src="@/assets/img/dog-back.png">
          <div class="flex justify-center items-end h-full">
            <v-btn class="mb-10" x-large> Accesorios </v-btn>
          </div>
        </v-img>
      </v-card>

      <v-card class="mx-24">
        <v-img src="@/assets/img/woman-shoe.png" class="h-full">
          <div class="flex justify-center items-end h-full">
            <v-btn class="mb-10" x-large> Mujer </v-btn>
          </div>
        </v-img>
      </v-card>

      <v-card class="mx-24">
        <v-img src="@/assets/img/man-shoe.png" class="h-full">
          <div class="flex justify-center items-end h-full">
            <v-btn class="mb-10" x-large> Hombre </v-btn>
          </div>
        </v-img>
      </v-card>
    </div>

    <div class="w-full mt-10">
      <p class="text-center">
        <a href="#" class="text-black text-xl">
          <v-icon class="mr-2">mdi-instagram</v-icon>
          <span>Instagram - HUSHPUPPIESCO</span>
        </a>
      </p>

      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 18" :key="n" v-slot="{ active, toggle }">
          <v-card
            width="250"
            class="mx-2"
            :input-value="active"
            rounded="12px"
            @click="toggle"
          >
            <v-img :src="require(`@/assets/img/${n}.jpg`)"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>

    <div class="mt-10 bg-gray-300 py-5 flex flex-col">
      <h4 class="self-center text-h4 text-gray-700">@HUSHPUPPIESCO</h4>
      <div class="self-center mt-2 w-1/6 border-t-2 border-gray-700"></div>
      <div class="self-center mt-2">
        <a href="#" class="text-gray-700">
          <v-icon class="mr-2">mdi-facebook</v-icon>
        </a>
        <a href="#" class="text-gray-700">
          <v-icon class="mr-2">mdi-instagram</v-icon>
        </a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// components
import CharctaristicsCards from './characteristics-cards.vue';
import Promotions          from './promotions.vue';
import SubscripePanel      from './subscribe-panel.vue';

@Component({
  name: 'App',
  components: {
    CharctaristicsCards,
    Promotions,
    SubscripePanel,
  },
})
export default class App extends Vue {

  model = 0;
  colors: string[] = [
    'primary',
    'secondary',
    'yellow darken-2',
    'red',
    'orange',
  ];

}
</script>
