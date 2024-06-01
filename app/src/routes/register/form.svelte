<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Description } from 'formsnap';
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
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input type="email" {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="fname">
		<Form.Control let:attrs>
			<Form.Label>Ime</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.fname} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="lname">
		<Form.Control let:attrs>
			<Form.Label>Prezime</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.lname} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="phone">
		<Form.Control let:attrs>
			<Form.Label>Telefon</Form.Label>
			<Input type="tel" {...attrs} bind:value={$formData.phone} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="addr_street">
		<Form.Control let:attrs>
			<Form.Label>Ulica</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.addr_street} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="addr_number">
		<Form.Control let:attrs>
			<Form.Label>Broj ulice</Form.Label>
			<Input type="number" {...attrs} bind:value={$formData.addr_number} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="addr_city">
		<Form.Control let:attrs>
			<Form.Label>Grad</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.addr_city} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="addr_country">
		<Form.Control let:attrs>
			<Form.Label>Država</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.addr_country} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="addr_zip">
		<Form.Control let:attrs>
			<Form.Label>Poštanski broj</Form.Label>
			<Input type="number" {...attrs} bind:value={$formData.addr_zip} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Šifra</Form.Label>
			<Input type="password" {...attrs} bind:value={$formData.password} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<p class="my-2">
		Već imate nalog? <a class="hover:underline" href="/login">Prijava</a>
	</p>
	<Form.Button>Registracija</Form.Button>
</form>
