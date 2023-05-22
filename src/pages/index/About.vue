<template>
	<h2 class="text-4xl font-semibold text-emerald-800"> About Me </h2>
		<div class="mt-4 flex md:flex-row flex-col">
			<div class="flex-1 md:order-first order-last md:min-w-[400px]">
				<p class="mb-4"> 
					Hello! I'm Adi Sabwa Isti Besari Arkanuddin, and I'm passionate about creating innovative web-based solutions that make people's lives easier. As graduate from Bachelor of Information Technology at Universitas Gadjah Mada, coding and programming is my second nature. I have created many applications that help people's work and make their lives easier.
				</p>
				<p class="mb-4">
					Today, I spend my days writing code and creating projects both for my job and personal endeavors. These projects allow me to explore my creativity and improve my skills, all with the intention of developing solutions that are relevant and valuable to others. Ultimately, my goal is to make a positive impact to enhance people's lives by using technology . 
				</p>
				<p class="mb-4">
					Here are a few technologies I've been working with:
				</p>
				<ol class="font-mono marker:text-red-500 text-sm
					grid grid-flow-dense
					md:grid-cols-3
					grid-cols-2
					w-full
					auto-cols-max gap-y-2 gap-x-6">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Vue.js</li>
					<li>Tailwind CSS</li>
					<li>PHP</li>
					<li>CodeIgniter</li>
					<li>Yii2</li>
					<li>Node.js</li>
					<li>Google Apps Script</li>
					<li>MySQL</li>
					<li>Python</li>
				</ol>
			</div>
			<div class="flex-1 md:order-last md:m-0 md:ml-16 order-first mb-7 text-center max-w-xs">
				<div class="overflow-hidden rounded-3xl border border-gray-300 shadow-xl h-80 w-fit m-auto">
					<img :src="$baseUrl + 'assets/images/photo.JPG'" alt="Profile"
						class="object-cover h-full">
				</div>
			</div>
		</div>
</template>



<style lang="scss" scoped>
	ol {
		list-position: inside;
		li {
			display: flex;
			padding-left: 5px;
			&::before {
		  	content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="18" height="18" viewBox="0 0 24 24"%3E%3Cpath fill="%2334d399" d="M8 19V5l11 7l-11 7Zm2-7Zm0 3.35L15.25 12L10 8.65v6.7Z"%2F%3E%3C%2Fsvg%3E');
		  	font-size: 5px;
		  	height: 20px;
		  	margin-right: 8px;
		  	color: emerald;
			}
		}
	}
</style>