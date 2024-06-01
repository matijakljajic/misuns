<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<nav>
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>Pošiljke</Menubar.Trigger>
			<Menubar.Content>
				<a href="/courier/packages"><Menubar.Item>Pregled</Menubar.Item></a>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</nav>

<main class="mx-auto max-w-screen-lg py-10">
	<slot></slot>
</main>
