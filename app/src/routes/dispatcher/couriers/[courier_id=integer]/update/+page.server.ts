import type { PageServerLoad } from './$types.js';
import { getCourierById } from '$lib/server/db/couriers';
import { error } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ params }) => {
	const courier = getCourierById(Number(params.courier_id));
	if (!courier) {
		error(404, 'Courier not found');
	}

	return {
		courier: courier,
		form: await superValidate(zod(formSchema))
	};
};
