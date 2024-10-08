import { getTicketById } from '$lib/server/db/tickets';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const ticket = getTicketById(Number(params.ticket_id));
	if (!ticket) {
		error(404, 'Ticket not found');
	}

	return {
		ticket: ticket
	};
};
