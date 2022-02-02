<template>
  <v-app>
    <v-system-bar color="#7a4a58" height="50" class="justify-center">
      <p class="text-xl text-white font-bold mt-3">HOT SALE -30% EN SANDALIAS </p>
    </v-system-bar>

    <v-system-bar color="#c8c6cb" height="30" class="justify-end space-x-4">
      <router-link to="/tiendas" class="text-xs font-bold text-gray-500"> DIRECTORIO DE TIENDAS </router-link>
      <router-link to="/sac" class="text-xs font-bold text-gray-500"> SERVICIO AL CLIENTE </router-link>
      <router-link to="/cuenta" class="text-xs font-bold text-gray-500"> MI CUENTA </router-link>
    </v-system-bar>

    <v-app-bar prominent class="px-10">
      <v-toolbar-title class="mt-10 flex items-center w-1/4">
          <router-link to="/">
            <img src="@/assets/img/12.png" width="100"/>
          </router-link>
          <router-link to="/" class="text-3xl text-gray-700 font-bold">
            Hush Puppies
            <span class="text-xs inline-block align-top"> &copy; </span>
          </router-link>
      </v-toolbar-title>

      <div class="w-3/4 flex flex-col mt-10">
        <div class="self-end w-1/4 border border-gray-500 h-10 hover:border-black cursor-text">
          <input class="outline-none border-0 h-full w-5/6 font-bold px-2 text-sm align-middle" placeholder="BUSCAR"/>
          <v-btn icon small>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <p class="self-end text-sm mt-2" style="color: #7a4a58;">
          ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
        </p>
      </div>
      
      <template v-slot:extension>
        <div class="flex justify-between w-full">
          <div class="w-5/6 flex space-x-4">
            <router-link to="/categorias/hombre" class="text-base font-bold text-gray-500"> HOMBRE </router-link>
            <router-link to="/categorias/mujer" class="text-base font-bold text-gray-500"> MUJER </router-link>
            <router-link to="/blog" class="text-base font-bold text-gray-500"> BLOG </router-link>
            <router-link to="/historia" class="text-base font-bold text-gray-500"> HISTORIA </router-link>
            <router-link to="/tiendas" class="text-base font-bold text-gray-500"> TIENDAS </router-link>
          </div>

          <div class="w-1/6 flex space-x-4 justify-end">
            <router-link to="/carrito" class="text-base font-bold text-gray-500">
              <v-icon class="mr-2">mdi-shopping-outline</v-icon>
              <span class="text-xs mr-2"> CARRITO </span>
              <span class="text-base"> 0 </span>
            </router-link>
          </div>
        </div>
      </template>

    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

    <the-footer></the-footer>

    <v-bottom-navigation fixed class="md:flex sm:flex lg:flex xl:hidden">
      <v-btn to="/shops">
        <span> {{ $t('shops') | capitalize }} </span>
        <v-icon>mdi-shopping</v-icon>
      </v-btn>

      <v-btn to="/categories">
        <span> {{ $t('categories') | capitalize }} </span>
        <v-icon>mdi-shape</v-icon>
      </v-btn>

      <v-btn to="/search">
        <span> {{ $t('search') | capitalize }} </span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn to="/cart">
        <span> {{ $t('cart') | capitalize }} </span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CountryFlag from 'vue-country-flag';

import { LanguageI, NavLinkI } from './store/interfaces/types.interface';

import { AppMutations } from './store/mutations';

import TheFooter from './components/app/the-footer.vue';

Component.registerHooks([
  'created',
  'destroyed',
]);

@Component({
  name: 'App',
  components: {
    CountryFlag,
    TheFooter,
  },
})
export default class App extends Vue {

  shopsMenu       = false;
  catsMenu        = false;
  langsMenu       = false;
  langsMenuMovil  = false;
  drawer          = false;
  group           = null;
  isDesktop       = false;

  // getter and setter for language
  get language(): LanguageI { return this.$store.state.language; }
  set language(val: LanguageI) {
    // change app language
    this.$i18n.locale = val.code;
    this.$store.commit(AppMutations.SET_LANG, val);
  }
  // getter of languages list
  get languages(): LanguageI[] { return this.$store.state.languages; }

  // getter of navlinks
  get navLinks(): NavLinkI[] { return this.$store.state.navLinks; }

  searchTerm(e: Event) {
    console.log(e);
  }

  created() {
    window.addEventListener('resize', this.checkDesktop);
    this.checkDesktop();
  }

  private checkDesktop() {
    const isDesktop = window.innerWidth > Number( process.env.VUE_APP_UI_SCREENS_LG );
    this.isDesktop = isDesktop;
    // hide the sidebar of main menu on desktop
    if(isDesktop) {      
      setTimeout(() => {
        this.drawer = false;
      }, 500);
    }
  }

}
</script>

<style lang="scss">
.nav-links {
  color: #000;
  font-size: 1.1rem;
  a {
    transition: all 0.3s ease-in-out;
  }
  a.router-link-active {
    border-top: 5px solid theme('colors.blue.500');
    color: theme('colors.blue.500');
    font-weight: 700;
  }
  a:hover {
    color: theme('colors.blue.500');
    font-weight: 700;
  }
}
</style>
