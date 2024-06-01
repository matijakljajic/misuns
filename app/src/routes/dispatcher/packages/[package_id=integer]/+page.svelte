<script lang="ts">
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
