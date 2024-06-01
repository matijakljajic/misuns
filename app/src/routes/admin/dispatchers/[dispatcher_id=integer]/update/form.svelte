<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import type { DispatcherType } from '$lib/types/dispatcher';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let dispatcher: DispatcherType;
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	$formData.email = dispatcher.email;
	$formData.fname = dispatcher.fname;
	$formData.lname = dispatcher.lname;
	$formData.phone = dispatcher.phone;
	$formData.addr_street = dispatcher.addr_street;
	$formData.addr_number = dispatcher.addr_number;
	$formData.addr_city = dispatcher.addr_city;
	$formData.addr_country = dispatcher.addr_country;
	$formData.addr_zip = dispatcher.addr_zip;
	$formData.password = '';
</script>

<form method="POST" use:enhance>
	<div class="flex space-x-2">
		<div>
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
		</div>
		<div>
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
		</div>
	</div>
	<div class="my-2 flex w-full justify-center">
		<Form.Button>Ažuriraj dispečera</Form.Button>
	</div>
</form>
