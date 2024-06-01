<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	import InfoIcon from '$lib/assets/icons/info.svg';

	import type { PageData } from './$types.js';
	import { averageCourierRating } from '$lib/utils/couriers.js';
	export let data: PageData;
	const couriers = data.couriers;
</script>

{#if couriers.length == 0}
	<p class="text-center text-2xl font-black">Nijedan kurir nije pronađen.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih kurira.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Ime i prezime</Table.Head>
				<Table.Head class="text-right">Srednja ocena</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each couriers as courier (courier.id)}
				<Table.Row>
					<Table.Cell class="flex items-center font-medium">
						<p>{courier.id}</p>
						<a href="/dispatcher/couriers/{courier.id}">
							<img src={InfoIcon} alt="i" class="size-3" />
						</a>
					</Table.Cell>
					<Table.Cell>{courier.email}</Table.Cell>
					<Table.Cell>{`${courier.fname} ${courier.lname}`}</Table.Cell>
					<Table.Cell class="text-right"
						>{averageCourierRating(courier.ratings).toFixed(2)}</Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
