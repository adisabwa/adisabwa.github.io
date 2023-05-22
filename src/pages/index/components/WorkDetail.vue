<template>
	<div class="p-4 bg-white rounded-3xl pointer 
		drop-shadow-lg hover:scale-95 hover:bg-emerald-50/[0.7] transition ease-in-out duration-300
		lg:nth-[3n-1]:translate-y-4 md:max-lg:nth-[2n]:translate-y-4"
		@click="$router.push({name:'work',params:{type: type}})" >
		<img :src="image" alt="Fakultas Teknik UGM"
			class="object-cover w-full aspect-video">
		<div class="mt-4 text-2xl font-medium text-emerald-500">
			 {{ title }}
		</div>
		<div class="mt-1 font-medium">
			{{ subTitle }}
		</div>
		<div class="mt-4">
			<div class="text-base">
				{{ content }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'work-detail',
		props:{
			title:{
				type:String,
				default:'',
			},
			subTitle:{
				type:String,
				default:'',
			},
			content:{
				type:String,
				default:'',
			},
			image:{
				type:String,
				default:'',
			},
			type:{
				type:String,
				default:'',
			}
		},
		data:  function() {
	    return {
	    	hash: '',
	    }
	  },
	}
</script>