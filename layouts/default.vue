<template>
	<div class="w-screen min-h-[100dvh]">
		<header class="desktopmenu hidden w-full md:flex flex-col justify-center">
			<div class="relative w-full flex justify-between p-2 border-b bg-gray-400/10 border-gray-500">
				<div>
					<NuxtLink to="/">
						<nuxt-img src="/logo.png" quality="20" alt="logo" class="h-8" />
					</NuxtLink>
				</div>
				<div class="flex flex-nowrap space-x-4 items-center text-gray-400 pr-4">
					<NuxtLink class="hover:text-gray-200 duration-300" to="/">
						Home
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" to="/modpack">
						ModPack
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" to="/resourcepack">
						ResourcePack
					</NuxtLink>
				</div>
			</div>
		</header>

		<header id="mobileNav" class="ease-in-out duration-300 z-[100] grid grid-cols-3 bg-gray-700/40 backdrop-blur-md fixed bottom-2 left-1/2 -translate-x-1/2 py-2 px-4 md:hidden w-6/12 border border-gray-500 rounded-2xl">
			<NuxtLink to="/modpack" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-cube-alt'></i>
				<p class="text-white/80 text-xs text-center">Mod</p>
			</NuxtLink>
			<NuxtLink to="/" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-home-alt-2'></i>
				<p class="text-white/80 text-xs text-center">Home</p>
			</NuxtLink>
			<NuxtLink to="/resourcepack" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-image-alt'></i>
				<p class="text-white/80 text-xs text-center">Resource</p>
			</NuxtLink>
		</header>
		<slot />

		<Footer/>
	</div>

</template>

<script setup lang="ts">
onMounted(() => {
	let lastScrollTop: any;
	let navbar = <HTMLInputElement>document.getElementById('mobileNav');

	window.addEventListener('scroll',function(){
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if(scrollTop > lastScrollTop){
			navbar.style.bottom='-80px';
		}
		else{
			navbar.style.bottom='8px';
		}

		lastScrollTop = scrollTop;
	});
})

</script>


<style>

.router-link-active.mobileMenu{
	@apply bg-white/90 rounded-lg shadow-lg;
}

.router-link-active.mobileMenu i {
	color: rgb(0, 0, 0, 0.9) !important;
}

.router-link-active.mobileMenu p {
	color: rgb(0, 0, 0, 0.9) !important;
}

</style>