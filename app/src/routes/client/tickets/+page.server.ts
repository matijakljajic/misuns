import { getTickets } from '$lib/server/db/tickets';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const tickets = getTickets();
	if (!tickets) {
		error(404, 'Tickets not found');
	}

	return {
		tickets: tickets
	};
};
