<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
	const ticket = data.ticket;
</script>

<div class="flex flex-col space-y-5 font-light">
	<h1 class="text-2xl font-medium">Naslov: {ticket.title}</h1>
	<p class="text-xl">ID: {ticket.id}</p>
	<p class="text-xl">
		Razlog za zatvaranje: {ticket.reason_for_closing !== '' ? ticket.reason_for_closing : 'Nema.'}
	</p>
	<div class="flex items-center justify-center space-x-3">
		<form>
			<Button variant="destructive" type="submit" class="size-fit rounded-xl">
				<p class="px-4 py-2 font-bold">Zatvori</p>
			</Button>
		</form>
	</div>
</div>

<hr class="my-2 border border-neutral-200" />

{#if ticket.messages.length === 0}
	<p class="text-lg font-medium">Nema komentara.</p>
{:else}
	{#each ticket.messages as message}
		<div class="flex space-x-2">
			<p class="text-lg font-medium">{message.author}:</p>
			<p class="text-lg">{message.content}</p>
		</div>
	{/each}
{/if}
