<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from './form.svelte';
	export let data: PageData;
</script>

<div class="flex size-full items-center justify-center">
	<SettingsForm courier={data.courier} data={data.form} />
</div>
