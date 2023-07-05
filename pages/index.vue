<template>
	<div class="w-full min-h-[70dvh]">
		<div class="container mx-auto flex justify-center mt-16 px-8">
			<img data-aos="zoom-in" src="/logo-full.png" class="max-w-[40rem] w-full" />
		</div>

		<div class="container mx-auto flex justify-center pt-12">
			<div class="flex justify-center gap-8">
				<NuxtLink to="/modpack" class="rounded-xl border border-yellow-600 px-4 py-2 font-semibold text-xl text-white hover:bg-yellow-600 duration-150">
					ModPack
				</NuxtLink>
				<NuxtLink to="/Resourcepack" class="rounded-xl border border-yellow-600 px-4 py-2 font-semibold text-xl text-white hover:bg-yellow-600 duration-150">
					ResourcesPack
				</NuxtLink>
			</div>
		</div>
	</div>
</template>