<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types.js';

	import Status from './Status.svelte';

	export let data: PageData;
	const postalpackage = data.postalpackage;
</script>

<div class="flex flex-col space-y-5 font-light">
	<h1 class="text-2xl font-medium">ID: {postalpackage.id}</h1>
	<p class="text-xl">
		Status:
		<Status currentStatus={postalpackage.status} />
	</p>
	<p class="text-xl">
		Otkup: {postalpackage.value !== 0 ? `${postalpackage.value}rsd` : 'Nema'}
	</p>
	<p class="text-xl">Masa: {postalpackage.mass}g</p>
</div>

<hr class="my-2 border border-neutral-200" />

<div class="my-2 flex items-center justify-center space-x-3">
	<a href="/courier/packages/{postalpackage.id}/receipt">
		<Button class="size-fit rounded-xl">
			<p class="px-4 py-2 font-bold">Izdavanje računa</p>
		</Button>
	</a>
	<a href="/courier/packages/{postalpackage.id}/route">
		<Button class="size-fit rounded-xl">
			<p class="px-4 py-2 font-bold">Ruta do primaoca</p>
		</Button>
	</a>
</div>
