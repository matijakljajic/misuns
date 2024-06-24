<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';

	import avatar from '$lib/assets/avatars/male.svg';
	import Button from '$lib/components/ui/button/button.svelte';

	import type { PageData } from './$types.js';
	export let data: PageData;
	const sender = data.sender;
	const address = data.address;
</script>

<div class="w-dvh flex h-5/6 items-center justify-center">
	<div class="flex flex-col space-y-5 font-light">
		<div class="flex items-center justify-center space-x-6">
			<h1 class="text-4xl font-bold">{sender.fname} {sender.lname}</h1>
			<Avatar.Root class="size-32">
				<Avatar.Image src={avatar} alt="@shadcn" />
				<Avatar.Fallback>{sender.fname} {sender.lname}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<p class="text-xl">
			Email: <a class="font-sans hover:underline" href="mailto:{sender.email}">{sender.email}</a>
		</p>
		<p class="text-xl">
			Telefon: <a class="font-sans hover:underline" href="tel:{sender.phone}">{sender.phone}</a>
		</p>
		<p class="text-xl">
			Adresa: {address.street}
			{address.num}, {address.city}
			{address.zip}, {address.country}
		</p>
		<p class="text-xl">Povezan račun: Nema</p>
		<form class="flex items-center justify-center">
			<Button type="submit">Ažuriraj informacije</Button>
		</form>
	</div>
</div>
