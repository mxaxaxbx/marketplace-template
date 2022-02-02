<template>
  <v-footer :padless="padless" >
    <v-card flat tile width="100%" class="grey lighten-4 pb-20 pt-10">
      <div class="grid grid-cols-4">
        <div class="">
          <v-card-title> SERVICIO AL CLIENTE </v-card-title>

          <v-card-text>
            <router-link to="/policy" class="black--text"> CONTÁCTENOS </router-link> <br/>
            <router-link to="/sac" class="black--text"> CAMBIOS Y DEVOLUCIONES </router-link> <br/>
            <router-link to="/piliticas-de-la-tienda" class="black--text"> POLÍTICAS DE LA TIENDA </router-link> <br/>
            <router-link to="/piliticas-de-datos" class="black--text"> POLÍTICAS DE DATOS </router-link> <br/>
          </v-card-text>

        </div>

        <div class="lg:col-span-1">
          <v-card-title> MI CUENTA </v-card-title>

          <v-card-text>
            <router-link to="/pedidos" class="black--text"> MIS PEDIDOS </router-link> <br/>
            <router-link to="/devoluciones" class="black--text"> MIS DEVOLUCIONES </router-link> <br/>
          </v-card-text>
        </div>

        <div class="lg:col-span-1">
          <v-card-title> RECURSOS </v-card-title>

          <v-card-text>
            <router-link to="/tiendas" class="black--text"> TIENDAS </router-link> <br/>
            <router-link to="/devoluciones" class="black--text"> DEVOLUCIONES </router-link> <br/>
          </v-card-text>
        </div>

        <div class="lg:col-span-1">
          <v-card-title> NEWSLETTER </v-card-title>

          <v-card-text>
            <p> Regístrate para ser el primero en recibir <br/> nuestras noticias </p>
            <div class="w-3/4 border border-gray-500 h-10 hover:border-black cursor-text">
          <input class="outline-none border-0 h-full w-5/6 px-2 text-sm align-middle" placeholder="E-MAIL"/>
          <v-btn icon small>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
          </v-card-text>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="flex justify-between mt-5 p-5">
        <p> &copy; {{ year }} Marketplace. All rights reserved. </p>

        <div>
          We using safe payment for:
          <!-- card icons -->
          <!-- pse icon -->
        </div>
      </div>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { SocialLinkI } from '@/store/interfaces/types.interface';
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class TheFooter extends Vue {
  padless = true;

  // social links getter
  get socialLinks(): SocialLinkI[] {
    return this.$store.state.socialLinks;
  }

  // year getter
  get year(): number {
    return new Date().getFullYear();
  }
}
</script>
