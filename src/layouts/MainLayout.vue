<template>
  <div id="main-layout">
    <el-container >
      <el-header class="main-navbar bg-white/95 fixed z-50
        p-0 h-16 w-full px-9 xl:px-40 lg:px-32 md:px-24 font-mono
        origin-top transition duration-300">
        <div class="navbar-wrap">
          <div class="flex items-center justify-between h-16">
            <img :src="$baseUrl + 'assets/images/logo.png'" alt="Logo" height="20"
              class="m-0 mr-3 h-10 pointer" @click="routePush('main#home'); changeMenuActive('main#home')" >
            <el-menu :default-active="activeMenu" 
              @select="routePush"
              :ellipsis="false"
              class="el-menu-demo text-emerald-400 h-16 hidden md:block" mode="horizontal"
               active-text-color="#34d399"  style="border: 0px;">
              <template v-for="menu in menus">
                <template v-if="menu.type == 'sub-menu'">
                  <el-sub-menu :index="menu.index" class="text-center">
                    <template #title>
                      <icons class="text-emerald-400" :icon="menu.icon" />
                      <span>{{ menu.title }}</span>
                    </template>
                    <template v-for="child in menu.children">
                      <el-menu-item :index="child.index" class="pl-4 pr-3 py-1 h-auto">
                        <span>{{ child.title }}</span>
                      </el-menu-item>
                    </template>
                  </el-sub-menu>
                </template>
                <template v-else>
                  <el-menu-item :index="menu.index" :class="'pl-4 pr-6 text-center '+(menu.isActive ? 'is-active' : '')">
                    <icons class="text-emerald-400" :icon="menu.icon" />
                    <span>{{ menu.title }}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-menu>
            <el-button class="h-12 w-fit px-2 bg-transparent text-emerald-400 md:hidden" 
              @click="showMenu = !showMenu" >
              <icons icon="ep:fold" class="text-2xl "/>
            </el-button>
          </div>
        </div>
        <el-menu :default-active="activeMenu" class="el-menu-demo text-emerald-400" v-if="showMenu"
          @select="routePush"
           active-text-color="34d399" background-color="white" style="border: 0px">
          <template v-for="menu in menus">
            <template v-if="menu.type == 'sub-menu'">
              <el-sub-menu :index="menu.index" class="ml-3 text-left">
                <template #title>
                  <icons class="text-emerald-400" :icon="menu.icon" />
                  <span>{{ menu.title }}</span>
                </template>
                <template v-for="child in menu.children">
                  <el-menu-item :index="child.index" class="px-4 pb-1 h-auto">
                    <span>{{ child.title }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="menu.index" class="ml-3 text-left">
                <icons class="text-emerald-400" :icon="menu.icon" />
                <span>{{ menu.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-header>
    </el-container>
    <el-container class="w-full main-content-wrap ml-0 bg-landmark bg-cover bg-center bg-fixed">
      <el-main class="bg-white/95 px-9 xl:px-40 lg:px-32 md:px-24 pt-16
        min-h-[calc(100vh-310px)] ">
        <router-view @scrolling="changeMenuActive"/>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import { isEmpty, checkScroll } from '@/helpers/functions'
</script>

<script>
import JQuery from 'jquery';
import {debounce} from 'lodash'
var $ = JQuery;

export default {
  name: 'dashboard-layout',
  data: function() {
    return {
      activeMenu: '',
      showMenu: false,
      showMenu2: true,
      menus: [
        {
          index:'main#about',
          icon:'material-symbols:info',
          title:'About',
          type:'menu',
          isActive: false,
        },
        {
          index:'main#experience',
          icon:'material-symbols:featured-play-list-rounded',
          title:'Experience',
          type:'menu',
          isActive: false,
        },
        {
          index:'main#work',
          icon:'zondicons:computer-laptop',
          title:'Work',
          type:'menu',
          isActive: false,
        },
        {
          index:'main#contact',
          icon:'material-symbols:contact-phone-rounded',
          title:'Contact',
          type:'menu',
          isActive: false,
        },
      ],
      scrollPosition:0,
    };
  },
  watch: {

  },
  computed: {

  },
  methods: {
    setActiveMenu: function() {
      var name = this.$route.name
      var hash = this.$route.hash
      if (!isEmpty(hash))
        name = name + hash
      this.activeMenu = name
    },
    routePush(index, indexPath) {
      console.log(index)
      let indexs = index.split('#')
      let hash = isEmpty(indexs[1]) ? '' : '#'+indexs[1]
      this.$router.push({'name': indexs[0], 'hash':hash})
      this.showMenu = false
    },
    changeMenuActive(index) {
      $('.el-menu-item').removeClass('is-active')
      let childs = $('li.el-menu-item').toArray();
      this.menus.forEach((el, key) => {
        if (el.index == index)
          $(childs[key]).addClass('is-active')
      });
    },
    // hiddenMenu: debounce(function () {
    //   let {up, currentScrollPosition} = checkScroll(this.scrollPosition)
    //   this.scrollPosition = currentScrollPosition;
    //   if (up) {
    //     $('header').addClass('scale-y-100')
    //     $('header').removeClass('scale-y-0')
    //   }
    //   else {
    //     $('header').addClass('scale-y-0')
    //     $('header').removeClass('scale-y-100')
    //   }
    // },100),
    hiddenMenu() {
      let {up, currentScrollPosition} = checkScroll(this.scrollPosition)
      this.scrollPosition = currentScrollPosition;
      if (up) {
        $('header').removeClass('-translate-y-16')
      }
      else {
        $('header').addClass('-translate-y-16')
      }
    }
  },
  created: function() {
    this.setActiveMenu();
    this.scrollPosition = window.scrollY;
    window.addEventListener('scroll', this.hiddenMenu)
  },
}
</script>