import { getDispatchers } from '$lib/server/db/dispatchers';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const dispatchers = getDispatchers();
	if (!dispatchers) {
		error(404, 'Dispatchers not found');
	}

	return {
		dispatchers: dispatchers
	};
};
