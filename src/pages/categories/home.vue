<template>
  <div>
    <div class="flex space-x-4 mx-24 mt-5">
      <div class="w-1/4">
        <p class="font-bold text-gray-500"> HUSHPUPPIESCO / CALZADO </p>
        <h2 class="text-h3 font-bold text-gray-700">CALZADO</h2>
        <p class="mt-5 text-gray-500"> TODOS(151) </p>

        <div class="border border-black px-2 py-5">
          <p class="text-black font-bold"> TALLA </p>
          <div class="my-5 grid grid-cols-5">
            <v-btn> 5 </v-btn>
            <v-btn> 5.5 </v-btn>
            <v-btn> 6 </v-btn>
            <v-btn> 6.5 </v-btn>
            <v-btn> 7 </v-btn>
            <v-btn> 7.5 </v-btn>
            <v-btn> 8 </v-btn>
            <v-btn> 8.5 </v-btn>
            <v-btn> 9 </v-btn>
            <v-btn> 9.5 </v-btn>
          </div>

          <p class="text-black font-bold"> PRECIO </p>
          <div>$150.000 - $300.000 (10)</div>
          <div>$300.000 - $450.000 (24)</div>

          <p class="text-black font-bold mt-5"> MATERIAL </p>
          <div>Cuero (18)</div>
          <div>Nubuck (8)</div>

          <p class="text-black font-bold mt-5"> COLOR </p>
          <div>NEGRO (12)</div>
          <div>AZUL (12)</div>
          <div>CAFE (12)</div>
          <div>ORO (12)</div>

          <p class="text-black font-bold mt-5"> TECNOLOGÍA </p>
          <div>HPO2Flex (5)</div>
          <div>BioBevel (1)</div>
          <div>flexGroove (3)</div>
          
        </div>
      </div>

      <div class="w-3/4 mb-10">
        <div class="flex justify-between">
          <div> ORDERNAR POR </div>
          <div> ARTÍCULOS POR PÁGINA </div>
        </div>
        <div class="my-2"> FECHA DE LANZAMIENTO </div>
        
        <div class="grid grid-cols-3">
          <v-card v-for="(shoe, i) of shoes" :key="i" to="/producto" class="mx-2 my-2">
            <v-img :src="require(`@/assets/img/${ shoe.foto }`)" class="w-full h-64">
              <div class="flex justify-end">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </div>
            </v-img>

            <v-card-text>
              <h4 class="text-center text-h6 font-bold"> {{ shoe.nombre }} </h4>
              <p class="text-center mt-5 text-h5" style="color: #7a4a58;"> $00.000 </p>
            </v-card-text>
          </v-card>
        </div>
      </div>
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
export default class CategoriesHome extends Vue {
  shoes = shoes;
  // categories getter
  get categories() { return this.$store.state.categories.categories; }

}
</script>
