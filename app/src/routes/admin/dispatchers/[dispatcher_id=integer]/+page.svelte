<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import type { PageData } from './$types.js';

	import Male from '$lib/assets/avatars/male.svg';
	import Female from '$lib/assets/avatars/female.svg';
	const randomBoolean = Math.random() < 0.5;
	const avatar = randomBoolean ? Male : Female;

	export let data: PageData;
	const dispatcher = data.dispatcher;
</script>

<div class="flex flex-col space-y-5 font-light">
	<div class="flex items-center justify-center space-x-6">
		<h1 class="text-4xl font-bold">{dispatcher.fname} {dispatcher.lname}</h1>
		<Avatar.Root class="size-32">
			<Avatar.Image src={avatar} alt="@shadcn" />
			<Avatar.Fallback>{dispatcher.fname} {dispatcher.lname}</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<p class="text-xl">
		Email: <a class="hover:underline" href="mailto:{dispatcher.email}">{dispatcher.email}</a>
	</p>
	<p class="text-xl">
		Telefon: <a class="font-sans hover:underline" href="tel:{dispatcher.phone}"
			>{dispatcher.phone}</a
		>
	</p>
	<p class="text-xl">Pozicija: <span class="font-medium">{dispatcher.position}</span></p>
	<p class="text-xl">
		Adresa:
		{dispatcher.addr_street}
		{dispatcher.addr_number}, {dispatcher.addr_city}
		{dispatcher.addr_zip}, {dispatcher.addr_country}
	</p>
	<form class="flex items-center justify-center">
		<button type="submit" class="size-fit rounded-xl bg-rose-700 hover:bg-red-500">
			<p class="px-4 py-2 font-bold">Otpusti</p>
		</button>
	</form>
</div>
