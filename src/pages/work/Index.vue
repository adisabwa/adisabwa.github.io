<template>
	<div id="work-detail" class="mt-6 md:mt-16">
		<div class="group flex items-center md:fixed md:left-[30px] mb-4 pointer"
			@click="$router.push({name:'main', hash:'#work'})">
			<span class="flex items-center align-middle rounded-full w-10 h-10 
				transition ease-in-out duration-200
				bg-white group-hover:bg-white/[0.2] ">
				<icons icon="icon-park-solid:back" class="m-0 m-auto text-emerald-600"/>
			</span>
			<span class="ml-2 text-emerald-600
				transition ease-in-out duration-200
				origin-left md:scale-x-0 group-hover:scale-x-100">
				Back
			</span>
		</div>
		<div class="font-mono text-sm">
			{{ data.subtitle }} 
		</div>
		<div class="mt-1 text-5xl text-emerald-700 font-semibold
			leading-[1.3]">
			<span class="origin-left scale-x-[1.1]">{{ data.title }}</span>
		</div>
		<div class="mt-6" >
			<div 
				v-html="data.content"/>
			<div>
				<span class="font-bold">Technologies</span>
				<div class="mt-2 mb-4 font-mono text-xs text-white
					flex flex-wrap gap-x-1 gap-y-2">
					<span class="bg-emerald-600 rounded-xl px-3 py-1"
						v-for="tech in data.tech">
						{{ tech }}
					</span>
				</div>
				<a :href="data.link" target="_blank" class="text-emerald-500">
					Open Project <icons class="ml-2" icon="solar:arrow-right-outline"/>
				</a>
			</div>
		</div>
		<div class="mt-6">
			<img v-for="img in data.images" 
				:src="img.link" :alt="img.alt"
				class="border border-green-100 border-[5px] mb-7 w-full" />
		</div>
		<div class="group/image pointer text-emerald-800"
			@click="getData(showData.type)"
			@mouseleave="resetData">
			<div class="flex transition ease-in-out duration-300
				border border-orange-100 border-[10px]
				fixed bottom-2 right-2 w-[350px]
				-translate-y-[40px] opacity-100 scale-y-0 origin-bottom 
				group-hover/image:opacity-100 group-hover/image:scale-y-100
				rounded-xl bg-white px-1 py-1 pb-4">
				<img :src="showData.image" class="h-24 aspect-video object-cover px-2 pt-1">
				<div class="ml-4 font-medium text-lg w-28 py-1">{{ showData.title }}</div>
			</div> 
			<div class="flex rounded-xl bg-white
				fixed bottom-2 right-2 w-[350px]">
				<div class="group/prev w-fit flex gap-x-4 items-center pointer
					py-2 pl-4 pr-1
					hover:bg-emerald-100 hover:rounded-l-xl"
					@mouseover="showData = next; hover = 'next'" >
					<div class="transition ease-in-out duration-200">
						Previous Project
					</div>
					<span class="flex items-center rounded-full w-10 h-10 
						transition ease-in-out duration-200
						group-hover/prev:bg-emerald-200">
						<icons icon="ph:arrow-left-bold" class="m-0 m-auto text-emerald-600"/>
					</span>
				</div>
				<div class="group/next w-fit flex gap-x-4 items-center pointer
					py-2 pr-4 pl-1
					hover:bg-emerald-100 hover:rounded-l-xl"
					@mouseover="showData = prev; hover = 'prev'">
					<span class="flex items-center align-middle rounded-full w-10 h-10 
						transition ease-in-out duration-200
						group-hover/next:bg-emerald-200">
						<icons icon="ph:arrow-right-bold" class="m-0 m-auto text-emerald-600"/>
					</span>
					<div>Next Project</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
  import { isEmpty, scrollToElement } from '@/helpers/functions'
</script>

<script>
	import works from '@/helpers/works.js'

	export default {
		name:'work-list',
		data: function() {
			return {
				type:'',
				data:{},
				next:{},
				prev:{},
				showData:{},
				hover: '',
			}
		},
		methods: {
			resetData() {
				let vm = this;
				setTimeout(function() {
					vm.showData = {}
				}, 500);
			},
			getData(type = false) {
				if (type) {
					this.type = type;
          this.$router.replace({params: {type: type}})
				} else {
					this.type = this.$route.params.type
				}
				this.data = works[this.type]
				let keys = Object.keys(works)
				let ind = keys.findIndex(k => k == this.type)
				let last = keys.length - 1
				let prev = ind != 0 ? keys[ind - 1] : keys[last];
				let next = ind != last ? keys[ind + 1] : keys[0];
				this.prev = works[prev];
				this.prev.type = prev;
				this.next = works[next];
				this.next.type = next;
				if (this.hover == 'next') this.showData = this.next;
				if (this.hover == 'prev') this.showData = this.prev;
				scrollToElement(document.getElementById('work-detail'), 0.6)
			}
		},
		watch: {
			showData(val){
				// console.log(val)
			}
		},
		created(){
			this.getData();
		}
	}
</script>

<style lang="scss">
	#work-detail {
		p {
			margin-bottom: 22px;
		}
	}
</style>