<template>
	<h2 class="text-5xl font-semibold text-emerald-800 text-left leading-snug">My Project<br/>and Outcome </h2>
	<div class="mt-8">
		<p class="text-lg">Utilizing a wide variety of programs and tools to provide high-quality and cost-effective applications to boost organizational efficiency and productivity.</p>
	</div>
	<div id="work-detail" class="mt-8 font-sans mx-4
		grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]
		gap-x-8 gap-y-8
		">
		<detail v-for="(work, type) in works"
			:image="work.image" :title="work.title" :sub-title="work.subtitle"
			:content="work.contentMini" :type="type"/>
	</div>
</template>

<script>
	import Detail from './components/WorkDetail.vue'
	import works from '@/helpers/works.js'

	export default {
		name:'work',
		components:{
			Detail,
		},
		data: function() {
			return {
				works: works,
			}
		}
	}
</script>

<!-- <style lang="scss">
	#work-detail{
		& > div {
			&:first-child{
				margin-top: 20px !important;
			}
		}
	}
</style> -->