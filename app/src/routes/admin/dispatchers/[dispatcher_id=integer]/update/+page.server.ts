import type { PageServerLoad } from './$types.js';
import { getDispatcherById } from '$lib/server/db/dispatchers';
import { error } from '@sveltejs/kit';

import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ params }) => {
	const dispatcher = getDispatcherById(Number(params.dispatcher_id));
	if (!dispatcher) {
		error(404, 'Dispatcher not found');
	}

	return {
		dispatcher: dispatcher,
		form: await superValidate(zod(formSchema))
	};
};
