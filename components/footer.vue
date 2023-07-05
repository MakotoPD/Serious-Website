<template>
	<div class="pt-12 bg-yellow-900/60 ">
		<div class="grid md:grid-cols-3 gap-3 px-12 pb-6 container mx-auto">
			<div>
				<nuxt-img src="/logo-full.png" quality="20" alt="logo" class="h-12" />
			</div>
			

			<div>
				<p class="text-white/20 tracking-widest text-lg">Social Media</p>
				<div class="flex flex-col text-yellow-100 pl-2">
					<NuxtLink target="_blank" to="https://www.instagram.com/makotopd/" class="hover:text-white/90">
						Instagram
					</NuxtLink>
					<NuxtLink target="_blank" to="https://twitter.com/MakotoPl" class="hover:text-white/90">
						Twitter
					</NuxtLink>
					<NuxtLink target="_blank" rel="me" href="https://github.com/MakotoPD">
						GitHub
					</NuxtLink>
					<NuxtLink target="_blank" to="https://www.twitch.tv/makoto_pl/" class="hover:text-white/90">
						Twitch
					</NuxtLink>
					<NuxtLink target="_blank" to="https://www.youtube.com/@makotopd" class="hover:text-white/90">
						YouTube
					</NuxtLink>
					<NuxtLink target="_blank" rel="me" href="https://mastodon.online/@MakotoPD">
						Mastadon
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="w-full py-4 flex justify-center items-center text-white/70">
			<p>Copyright © 2023 <a href="https://makoto.com.pl" target="_blank">MakotoPD</a>. MIT.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>
