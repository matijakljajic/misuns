<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
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
	<div class="flex justify-around space-x-2 mb-3">
		<RadioGroup.Root value="kartica">
			<Label>Plaćanje se vrši?</Label>
			<div class="flex gap-3">
				<div class="flex items-center space-x-2">
				<RadioGroup.Item value="kartica" id="r1" />
				<Label for="r1">Karticom</Label>
				</div>
				<div class="flex items-center space-x-2">
				<RadioGroup.Item value="gotovina" id="r2" />
				<Label for="r2">Gotovinom</Label>
				</div>
			</div>
		</RadioGroup.Root>
		<RadioGroup.Root value="primalac">
			<Label>Ko snosi troškove?</Label>
			<div class="flex gap-3">
				<div class="flex items-center space-x-2">
				<RadioGroup.Item value="posiljalac" id="r1" />
				<Label for="r1">Pošiljalac</Label>
				</div>
				<div class="flex items-center space-x-2">
				<RadioGroup.Item value="primalac" id="r2" />
				<Label for="r2">Primalac</Label>
				</div>
			</div>
		</RadioGroup.Root>
	</div>
	<div class="flex space-x-2">
		<div>	
			<Form.Field {form} name="fname">
				<Form.Control let:attrs>
					<Form.Label>Ime Primaoca</Form.Label>
					<Input type="text" {...attrs} bind:value={$formData.fname} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="otkup">
				<Form.Control let:attrs>
					<Form.Label>Otkup</Form.Label>
					<Input type="number" {...attrs} bind:value={$formData.otkup} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div>
			<Form.Field {form} name="lname">
				<Form.Control let:attrs>
					<Form.Label>Prezime Primaoca</Form.Label>
					<Input type="text" {...attrs} bind:value={$formData.lname} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="masa">
				<Form.Control let:attrs>
					<Form.Label>Masa</Form.Label>
					<Input type="number" {...attrs} bind:value={$formData.masa} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
		</div>
	</div>
	<Form.Field {form} name="napomena">
		<Form.Control let:attrs>
			<Form.Label>Napomena</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.napomena} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<div class="my-2 flex w-full justify-center">
		<Form.Button>Kreiraj Pošiljku</Form.Button>
	</div>
</form>
