<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Table from '$lib/components/ui/table';

	import type { PageData } from './$types.js';

	import Male from '$lib/assets/avatars/male.svg';
	import Female from '$lib/assets/avatars/female.svg';
	import { averageCourierRating } from '$lib/utils/couriers.js';
	const randomBoolean = Math.random() < 0.5;
	const avatar = randomBoolean ? Male : Female;

	import InfoIcon from '$lib/assets/icons/info.svg';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data: PageData;
	const courier = data.courier;
	const packages = courier.packages;
</script>

<div class="flex flex-col space-y-5 font-light">
	<div class="flex items-center justify-center space-x-6">
		<h1 class="text-4xl font-bold">{courier.fname} {courier.lname}</h1>
		<Avatar.Root class="size-32">
			<Avatar.Image src={avatar} alt="@shadcn" />
			<Avatar.Fallback>{courier.fname} {courier.lname}</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<p class="text-xl">
		Email: <a class="hover:underline" href="mailto:{courier.email}">{courier.email}</a>
	</p>
	<p class="text-xl">
		Telefon: <a class="font-sans hover:underline" href="tel:{courier.phone}">{courier.phone}</a>
	</p>
	<p class="flex items-center space-x-1 text-xl">
		Srednja ocena:
		<span class="ml-2 font-medium">
			{averageCourierRating(courier.ratings).toFixed(2)}
		</span>
		<a href="/dispatcher/couriers/{courier.id}/ratings">
			<img src={InfoIcon} alt="i" class="size-3" />
		</a>
	</p>
	<p class="text-xl">
		Adresa:
		{courier.addr_street}
		{courier.addr_number}, {courier.addr_city}
		{courier.addr_zip}, {courier.addr_country}
	</p>
	<div class="flex items-center justify-center space-x-3">
		<form>
			<Button variant="destructive" type="submit" class="size-fit rounded-xl">
				<p class="px-4 py-2 font-bold">Otpusti</p>
			</Button>
		</form>
		<a href="/dispatcher/couriers/{courier.id}/update">
			<Button variant="default" class="size-fit rounded-xl">
				<p class="px-4 py-2 font-bold">Izmeni</p>
			</Button>
		</a>
	</div>
</div>

<hr class="my-4 border border-slate-200" />

{#if packages.length == 0}
	<p class="text-center text-2xl font-black">Nijedna pošiljka nije pronađena.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih dodeljenih pošiljki.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head>Otkup</Table.Head>
				<Table.Head>Masa</Table.Head>
				<Table.Head>Napomena</Table.Head>
				<Table.Head class="text-right">Obriši</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each packages as postalpackage (postalpackage.id)}
				<Table.Row>
					<Table.Cell class="flex items-center font-medium">
						<p>{postalpackage.id}</p>
						<a href="/dispatcher/packages/{postalpackage.id}">
							<img src={InfoIcon} alt="i" class="size-3" />
						</a>
					</Table.Cell>
					<Table.Cell>{postalpackage.value}</Table.Cell>
					<Table.Cell>{postalpackage.mass}</Table.Cell>
					<Table.Cell>
						{postalpackage.note !== '' ? postalpackage.note : 'Nema.'}
					</Table.Cell>
					<Table.Cell class="text-right">
						<form>
							<Button variant="destructive" type="submit" class="size-fit">
								<p class="text-xs">X</p>
							</Button>
						</form>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
