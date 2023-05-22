<template>
	<h2 class="text-5xl font-semibold text-emerald-800 text-center">Professional Experience </h2>
	<div class="mt-8">
		<el-collapse accordion v-model="professional" class="md:w-[650px] mx-auto">
      <el-collapse-item v-for="(exp, name) in experience"
      	:name="name">
        <template #title>
          <div class="md:flex justify-between w-full text-base font-semibold h-auto">
          	<div>{{ exp.work }}</div>
          	<div class="mr-3 hidden md:inline">{{ exp.time }}</div>
          </div>
        </template>
        <div class="text-base ">
          <div class="text-emerald-700 mb-4 md:flex">
          	<div class="md:hidden">
	          	<icons icon="simple-line-icons:calender" class="h-4 mr-1 "/>
	          	{{ exp.time }}
          	</div>
          	<div class="mt-1 md:mt-0">
	          	<icons icon="ion:location-sharp" class="h-4 mr-1 "/>
	          	{{ exp.place }}
          	</div>
          	<div class="mt-1 md:mt-0 md:ml-7 ">
	          	<icons icon="fluent:open-16-filled" class="h-4 mr-1 "/>
	          	<a :href="exp.link" target="_blank">{{ exp.web }}</a>
	          </div>
          </div>
          <div class="flex w-full flex-col md:flex-row gap-y-3">
          	<div>
							<div v-html="exp.description"/>
							<div class="mt-4 font-mono text-xs text-white flex flex-wrap gap-x-1 gap-y-2">
								<span class="bg-emerald-600 rounded-xl px-3 py-1"
									v-for="tech in exp.tech">
									{{ tech }}
								</span>
							</div>
						</div>
						<img :src="exp.logo.src" :alt="exp.logo.alt"
							class="object-cover w-24 order-first
								md:order-last md:h-full md:ml-4 md:mb-4 ">
					</div>
        </div>
      </el-collapse-item>
    </el-collapse>
	</div>
</template>

<script>
import experience from '@/helpers/experience.js'

export default {
  name: 'experience',
  data: function() {
    return {
    	experience: experience,
    	professional: Object.keys(experience),
    }
  },
}
</script>