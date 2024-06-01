<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	const postalpackage = data.postalpackage;

	export let storeName = 'AMMPost';
	export let storeAddress = '123 Druga Tita, Užice';
	export let storePhone = '(123) 456-7890';
	export let receiptDate = new Date().toLocaleDateString();
	export let receiptTime = new Date().toLocaleTimeString();
	export let items = [
		{ name: `Pošiljka ${postalpackage.id}`, quantity: 1, price: postalpackage.value }
	];
	export let service = 0.05; // 5%

	let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	let serviceAmount = total * service;
	let grandTotal = total + serviceAmount;
</script>

<div class="mx-auto max-w-xs border-2 border-dashed border-gray-300 p-4">
	<h1 class="text-center text-lg font-bold">{storeName}</h1>
	<p class="text-center text-sm">{storeAddress}</p>
	<p class="text-center text-sm">{storePhone}</p>
	<div class="my-2 border-t border-gray-300"></div>
	<p class="text-sm">Date: {receiptDate}</p>
	<p class="text-sm">Time: {receiptTime}</p>
	<div class="my-2 border-t border-gray-300"></div>
	<ul class="text-sm">
		{#each items as item}
			<li class="flex justify-between">
				<span>{item.name}</span>
				<span>${item.price.toFixed(2)}</span>
			</li>
		{/each}
	</ul>
	<div class="my-2 border-t border-gray-300"></div>
	<div class="flex justify-between text-sm">
		<span>Ukupno</span>
		<span>${total.toFixed(2)}</span>
	</div>
	<div class="flex justify-between text-sm">
		<span>Poštarina</span>
		<span>${serviceAmount.toFixed(2)}</span>
	</div>
	<div class="my-2 border-t border-gray-300"></div>
	<div class="flex justify-between text-sm font-bold">
		<span>Ukupno</span>
		<span>${grandTotal.toFixed(2)}</span>
	</div>
	<div class="my-2 border-t border-gray-300"></div>
	<p class="text-center text-sm">Hvala Vam što koristite AMMPost!</p>
</div>
