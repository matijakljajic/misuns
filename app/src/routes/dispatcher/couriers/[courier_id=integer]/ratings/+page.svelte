<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import InfoIcon from '$lib/assets/icons/info.svg';

	import type { PageData } from './$types.js';

	export let data: PageData;
	const ratings = data.ratings;
</script>

{#if ratings.length == 0}
	<p class="text-center text-2xl font-black">Nijedna ocena nije pronađena.</p>
{:else}
	<Table.Root>
		<Table.Caption>Lista svih ocena.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">ID</Table.Head>
				<Table.Head class="text-right">Ocena</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each ratings as rating (rating.id)}
				<Table.Row>
					<Table.Cell class="flex items-center font-medium">
						{rating.id}
						<a href="/admin/clients/{rating.id}">
							<img src={InfoIcon} alt="i" class="size-3" />
						</a>
					</Table.Cell>
					<Table.Cell class="text-right">
						{rating.rating.toFixed(2)}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
