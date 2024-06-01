<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';

	import Male from '$lib/assets/avatars/male.svg';
	import Female from '$lib/assets/avatars/female.svg';
	import Button from '$lib/components/ui/button/button.svelte';
	const randomBoolean = Math.random() < 0.5;
	const avatar = randomBoolean ? Male : Female;
</script>

<div class="w-dvh flex h-5/6 items-center justify-center">
	<div class="flex flex-col space-y-5 font-light">
		<div class="flex items-center justify-center space-x-6">
			<h1 class="text-4xl font-bold">Petar Petrović</h1>
			<Avatar.Root class="size-32">
				<Avatar.Image src={avatar} alt="@shadcn" />
				<Avatar.Fallback>Petar Petrović</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<p class="text-xl">
			Email: <a class="font-sans hover:underline" href="petarpetrovic@gmail.com"
				>petarpetrovic@gmail.com</a
			>
		</p>
		<p class="text-xl">
			Telefon: <a class="font-sans hover:underline" href="tel:56345765437567">76547654858768</a>
		</p>
		<p class="text-xl">Adresa: Milogorska 55, Kikinda 371148, Srbija</p>
		<p class="text-xl">Povezan račun: Nema</p>
		<form class="flex items-center justify-center">
			<Button type="submit">Ažuriraj informacije</Button>
		</form>
	</div>
</div>
