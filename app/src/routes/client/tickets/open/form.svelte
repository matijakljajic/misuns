<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="title">
		<Form.Control let:attrs>
			<Form.Label>Naslov</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.title} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="firstMessage">
		<Form.Control let:attrs>
			<Form.Label>Poruka</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.firstMessage} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<div class="my-2 flex w-full justify-center">
		<Form.Button>Otvori tiket</Form.Button>
	</div>
</form>
