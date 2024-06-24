<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	import InfoIcon from '$lib/assets/icons/info.svg';

	import type { PageData } from './$types.js';
	export let data: PageData;
	const tickets = data.tickets;
</script>

{#if tickets.length == 0}
	<p class="text-center text-2xl font-black">Nijedan tiket nije pronađen.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih tiketa za podršku.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head>Naslov</Table.Head>
				<Table.Head class="text-right">Razlog za zatvaranje</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each tickets as ticket (ticket.id)}
				<Table.Row>
					<Table.Cell class="flex items-center font-medium">
						<p>{ticket.id}</p>
						<a href="/client/tickets/{ticket.id}">
							<img src={InfoIcon} alt="i" class="size-3" />
						</a>
					</Table.Cell>
					<Table.Cell>{ticket.title}</Table.Cell>
					<Table.Cell class="text-right">
						{ticket.reasonForClosing !== '' ? ticket.reasonForClosing : 'Nema.'}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
