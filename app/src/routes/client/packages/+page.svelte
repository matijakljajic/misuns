<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';

	import type { PageData } from './$types.js';
	export let data: PageData;
	const packages = data.packages;
</script>

{#if packages.length == 0}
	<p class="text-center text-2xl font-black">Nemate nijedan paket u istoriji.</p>
{:else}
	<Table.Root>
		<Table.Caption>Prikaz istorijata paketa.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head class="w-[150px]">Masa</Table.Head>
				<Table.Head class="w-[200px]">Otkup</Table.Head>
				<Table.Head class="text-right">Napomena</Table.Head>
				<Table.Head class="w-[100px]">Detaljnije</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each packages as postalpackage (postalpackage.id)}
				<Table.Row>
					<Table.Cell class="font-medium">
						<p>{postalpackage.id}</p>
					</Table.Cell>
					<Table.Cell>{postalpackage.mass}</Table.Cell>
					{#if postalpackage.value === 0}
						<Table.Cell>Nema.</Table.Cell>
					{:else}
						<Table.Cell>{postalpackage.value}RSD</Table.Cell>
					{/if}
					<Table.Cell class="text-right">{postalpackage.note}</Table.Cell>
					<Table.Cell class="text-right"
						><a href="/client/packages/{postalpackage.id}"><Button>Detaljnije</Button></a
						></Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
