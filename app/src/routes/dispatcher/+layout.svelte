<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<nav>
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>Kuriri</Menubar.Trigger>
			<Menubar.Content>
				<a href="/dispatcher/couriers"><Menubar.Item>Pregled</Menubar.Item></a>
				<a href="/dispatcher/couriers/hire"><Menubar.Item>Zaposli</Menubar.Item></a>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Pošiljke</Menubar.Trigger>
			<Menubar.Content>
				<a href="/dispatcher/packages"><Menubar.Item>Pregled</Menubar.Item></a>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Zahtevi za podršku</Menubar.Trigger>
			<Menubar.Content>
				<a href="/dispatcher/tickets"><Menubar.Item>Pregled</Menubar.Item></a>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</nav>

<main class="mx-auto max-w-screen-lg py-10">
	<slot></slot>
</main>
