<template>
	<div class="main p-4 pt-12">
		<div id="home" class="mb-24">
			<div class="font-sans text-6xl mt-5 text-emerald-800 font-semibold">
				Welcome...
			</div>
			<div class="font-sans text-6xl mt-5 text-emerald-500 font-semibold">
				I Make Your Life Easier
			</div>
			<p class="font-sans md:w-2/3 mt-5">
				Hello, my name is <b>Adi Sabwa Isti Besari Arkanuddin.</b><br/>
				I'm a full-stack developer based in Kendal, Centra Java, Indonesia. Over {{ new Date().getFullYear() - 2019}} years, I have developed many types of both front-end and back-end development that allows me to build and maintain web applications with a deep understanding of the user experience.<br/>
				I passionate about solving complex problems and implementing innovative solutions.
			</p>
		</div>
		<div id="about" class="mb-24">
			<about />
		</div>
		<div id="experience" class="mb-24">
			<experience />
		</div>
		<div id="work" class="mb-24">
			<work />
		</div>
		<div id="contact" class="mb-24">
			<contact />
		</div>
	</div>
</template>

<script setup>
	import { scrollToElement } from '@/helpers/functions'
</script>

<script>
import JQuery from 'jquery'
let $ = JQuery;
import {debounce} from 'lodash'
import About from './About.vue'
import Experience from './Experience.vue'
import Work from './Work.vue'
import Contact from './Contact.vue'

export default {
  name: 'main-page',
  components: {
  	Contact,
  	Work,
  	Experience,
  	About,
  },
  data: function() {
    return {
    	hash: '',
    }
  },
  methods: {
  	scroll() {
	  	let hash = this.$route.hash.replace('#','')
	  	// window.location.hash = hash;
  		scrollToElement(document.getElementById(hash))
  		return hash;
  	},
  	onScroll: debounce(function () {
      this.setActiveHash()
    },100),
    setActiveHash(){
    	let offset = 144
    	let childs = $('.main').children().toArray()
    	let elem = document.getElementById(this.hash)
    	let position = window.pageYOffset + offset
    	for (var i = 0; i < childs.length; i++) {
    		let c = childs[i],
    				top = c.offsetTop,
    				height = c.offsetHeight
    		// console.log(position, c.offsetTop)
    		if (position >= top && position <= (top + height) ) {
    			this.hash = $(c).attr('id');
    			elem = c;
    		}
    		// console.log('hash', this.hash)
    	}
    	// console.log(elem)
      // elem.id = `${this.hash}-tmp`
		  // window.location.hash = this.hash
		  // elem.id = this.hash
		  let hash = "#" + this.hash
		  history.pushState({}, "", hash)
		  this.$emit('scrolling','main'+ hash);
    },
  },
  mounted() {
  	this.scroll()
    window.addEventListener('mousewheel', this.onScroll)
  },
  updated() {
  	this.hash = this.scroll()
  	console.log(this.hash)
  },
  beforeDestroy () {
    window.removeEventListener('mousewheel', this.onScroll)
  }
}
</script>