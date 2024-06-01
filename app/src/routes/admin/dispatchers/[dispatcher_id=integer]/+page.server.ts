import { getDispatcherById } from '$lib/server/db/dispatchers';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const dispatcher = getDispatcherById(Number(params.dispatcher_id));
	if (!dispatcher) {
		error(404, 'Dispatcher not found');
	}

	return {
		dispatcher: dispatcher
	};
};
