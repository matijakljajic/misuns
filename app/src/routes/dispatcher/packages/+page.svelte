<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	import InfoIcon from '$lib/assets/icons/info.svg';

	import type { PageData } from './$types.js';
	export let data: PageData;
	const packages = data.packages;
</script>

{#if packages.length == 0}
	<p class="text-center text-2xl font-black">Nijedna pošiljka nije pronađena.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih pošiljaka.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head>Otkup</Table.Head>
				<Table.Head>Masa</Table.Head>
				<Table.Head class="text-right">Napomena</Table.Head>
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
					<Table.Cell class="text-right">
						{postalpackage.note !== '' ? postalpackage.note : 'Nema.'}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
