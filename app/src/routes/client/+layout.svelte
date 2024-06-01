<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
</script>

<nav>
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>Meni</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item href="/client/profile">Moj Profil</Menubar.Item>
				<Menubar.Item href="/client/packages">Moje Pošiljke</Menubar.Item>
				<Menubar.Item href="/client/packages/send">Nova Pošiljka</Menubar.Item>
				<Menubar.Item href="/client/tickets">Moji Tiketi</Menubar.Item>
			</Menubar.Content>
			<Menubar.Item href="tel:+123456789">Kontaktiraj Službu</Menubar.Item>
		</Menubar.Menu>
	</Menubar.Root>
</nav>

<main class="mx-auto max-w-screen-lg py-10">
	<slot></slot>
</main>
