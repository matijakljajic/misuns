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
			<Form.Label>First name</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.fname} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="lname">
		<Form.Control let:attrs>
			<Form.Label>Last name</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.lname} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="phone">
		<Form.Control let:attrs>
			<Form.Label>Phone number</Form.Label>
			<Input type="tel" {...attrs} bind:value={$formData.phone} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="address">
		<Form.Control let:attrs>
			<Form.Label>Address</Form.Label>
			<Input type="text" {...attrs} bind:value={$formData.address} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password</Form.Label>
			<Input type="password" {...attrs} bind:value={$formData.password} />
		</Form.Control>
		<Form.Description />
		<Form.FieldErrors />
	</Form.Field>
	<p class="my-2">
		Already have an account? <a class="hover:underline" href="/login">Login</a>
	</p>
	<Form.Button>Register</Form.Button>
</form>
