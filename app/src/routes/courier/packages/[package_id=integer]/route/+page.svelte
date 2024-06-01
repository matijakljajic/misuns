<script lang="ts">
	import Leaflet from '$lib/assets/maps/leaflet.png';
	import type { PageData } from './$types.js';
	export let data: PageData;
	const recipient = data.recipient;
	const address = `${recipient.addr_street} ${recipient.addr_number}, ${recipient.addr_city}, ${recipient.addr_country}`;
</script>

<div class="flex flex-col items-center justify-center space-y-6">
	<img class="size-96" src={Leaflet} alt="Leaflet" />
	<h1 class="text-2xl">{address}</h1>
</div>
