<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<nav>
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>Meni</Menubar.Trigger>
			<Menubar.Content>
				<a href="/admin/dispatchers"><Menubar.Item>Dispečeri</Menubar.Item></a>
				<a href="/admin/dispatchers/hire"><Menubar.Item>Zaposli</Menubar.Item></a>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</nav>

<main class="mx-auto max-w-screen-lg py-10">
	<slot></slot>
</main>
