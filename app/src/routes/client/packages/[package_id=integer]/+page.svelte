<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
	const postalpackage = data.postalpackage;
</script>

<div class="flex flex-col space-y-5 font-light">
	<h1 class="text-2xl font-medium">ID: {postalpackage.id}</h1>
	<p class="text-xl">
		Status: {postalpackage.status}
	</p>
	<p class="text-xl">
		Otkup: {postalpackage.cost !== 0 ? `${postalpackage.cost}rsd` : 'Nema'}
	</p>
	<p class="text-xl">Masa: {postalpackage.mass}g</p>
	<div class="flex items-center justify-center space-x-3">
		<a href="/client/packages/{postalpackage.id}/ticket">
			<Button variant="default" class="size-fit rounded-xl">
				<p class="px-4 py-2 font-bold">Pogledaj tiket</p>
			</Button>
		</a>
		<a href="/client/packages/{postalpackage.id}/ticket/open">
			<Button variant="default" class="size-fit rounded-xl">
				<p class="px-4 py-2 font-bold">Otvori tiket</p>
			</Button>
		</a>
	</div>
</div>
