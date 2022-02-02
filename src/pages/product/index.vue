<template>
  <div>
    <div class="my-5 mx-24 text-gray-500 font-bold"> HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN </div>

    <div class="grid mt-10 grid-cols-2">
      <div class="p-10">
        <v-img src="@/assets/img/11.jpg"></v-img>
      </div>

      <div class="px-10">
        <h2 class="text-h4 text-gray-500"> ZAPATILLA HOMBRE PELIKAN </h2>
        <div style="color: #7a4a58;" class="text-xl"> $00.000 </div>
        <div class="text-gray-300"> Cod. de producto zap-005 </div>

        <div class="mt-5">
          <p class="font-bold"> COLOR </p>
          <div class="border border-black px-2 py-5 w-20">
            <v-img src="@/assets/img/11.jpg"></v-img>
          </div>
        </div>

        <div class="mt-5 w-1/2">
          <p class="font-bold"> TALLA </p>
          <div class="my-5 grid grid-cols-5">
            <v-btn class="mr-5"> 5 </v-btn>
            <v-btn class="mr-5 mb-2"> 5.5 </v-btn>
            <v-btn class="mr-5 mb-2" disabled> 6 </v-btn>
            <v-btn class="mr-5 mb-2"> 6.5 </v-btn>
            <v-btn class="mr-5 mb-2"> 7 </v-btn>
            <v-btn class="mr-5 mb-2"> 7.5 </v-btn>
            <v-btn class="mr-5 mb-2"> 8 </v-btn>
            <v-btn class="mr-5 mb-2"> 8.5 </v-btn>
            <v-btn class="mr-5 mb-2"> 9 </v-btn>
            <v-btn class="mr-5 mb-2"> 9.5 </v-btn>
          </div>

          <router-link to="/tallas" class="underline text-black"> GUÍA DE TALLAS </router-link>
        </div>

        <div class="mt-10 w-1/2 flex justify-between">
          <v-btn color="#7a4a58" class="mr-5" x-large dark> AÑADIR AL CARRITO </v-btn>
          <v-btn icon x-large>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="mx-24 my-10">
      <div class="text-2xl text-gray-700"> DETALLES DE PRODUCTO </div>
      <v-divider class="my-5"></v-divider>
      <p class="text-xl text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus magni deserunt delectus fugiat harum! Harum quia pariatur sit! Accusamus quia ducimus iure doloremque placeat porro obcaecati recusandae delectus id.
      </p>
    </div>

    <div class="mx-24 my-10">
      <div class="text-2xl  text-gray-700"> TECNOLOGÍAS </div>
      <v-divider class="my-5"></v-divider>
      <p class="text-xl text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore natus nihil harum eveniet laborum atque. Cumque vel ut explicabo nisi adipisci asperiores, eos tempore, sapiente, dignissimos omnis maiores blanditiis laudantium.
      </p>
    </div>

    <div class="mx-24 my-10">
      <div class="text-2xl bg-gray-300 px-1 py-1 mb-10"> COMPLETA TU LOOK </div>
      <div class="grid grid-cols-4">
        <v-card v-for="(shoe, i) of randomShoes()" :key="i" class="mx-2 my-2">
          <v-img :src="require(`@/assets/img/${ shoe.foto }`)" class="w-full h-64">
          </v-img>

          <v-card-text>
            <h4 class="text-center text-h6 font-bold"> {{ shoe.nombre }} </h4>
            <p class="text-center mt-5 text-h5" style="color: #7a4a58;"> $00.000 </p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#7a4a58" class="mr-5 w-full" large dark> AÑADIR AL CARRITO </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>

    <div class="my-10">
      <div class="mx-24 text-2xl text-gray-700"> PRODUCTOS RECOMENDADOS </div>
      <v-divider class="my-5"></v-divider>
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(shoe, i) of shoes" :key="i" v-slot="{ active, toggle }">
          <v-card
            width="250"
            class="mx-2"
            :input-value="active"
            rounded="12px"
            @click="toggle"
          >
            <v-img :src="require(`@/assets/img/${ shoe.foto }`)" class="w-full h-64">
            </v-img>

            <v-card-text>
              <h4 class="text-center text-h6 font-bold"> {{ shoe.nombre }} </h4>
              <p class="text-center mt-5 text-h5" style="color: #7a4a58;"> $00.000 </p>
            </v-card-text>
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
import Vue       from 'vue';
import Component from 'vue-class-component';

import shoes from '@/assets/data/zapato.json';

@Component
export default class ProductIndex extends Vue {
  shoes = shoes;
  
  // get number of shoes randomly
  randomShoes() {
    const shoes = this.shoes;
    const newShoes = [];
    for(let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * shoes.length);
      newShoes.push(shoes[random]);
    }
    return newShoes;
  }
}
</script>
