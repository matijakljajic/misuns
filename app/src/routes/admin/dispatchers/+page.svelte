<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	import InfoIcon from '$lib/assets/icons/info.svg';
	import { PositionsEnum } from '$lib/types/positions.js';

	import type { PageData } from './$types.js';
	export let data: PageData;
	const dispatchers = data.dispatchers;
</script>

{#if dispatchers.length == 0}
	<p class="text-center text-2xl font-black">Nijedan dispečer nije pronađen.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih dispečera.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Ime i prezime</Table.Head>
				<Table.Head class="text-right">Admin</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each dispatchers as dispatcher (dispatcher.id)}
				<Table.Row>
					<Table.Cell class="flex items-center font-medium">
						<p>{dispatcher.id}</p>
						<a href="/admin/dispatchers/{dispatcher.id}">
							<img src={InfoIcon} alt="i" class="size-3" />
						</a>
					</Table.Cell>
					<Table.Cell>{dispatcher.email}</Table.Cell>
					<Table.Cell>{`${dispatcher.fname} ${dispatcher.lname}`}</Table.Cell>
					<Table.Cell class="text-right"
						>{dispatcher.position === PositionsEnum.admin ? 'Yes' : 'No'}</Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
