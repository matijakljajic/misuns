import { getTicketById, getTicketMessagesById } from '$lib/server/db/tickets';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const ticket = await getTicketById(Number(params.ticket_id));
	if (!ticket) {
		error(404, 'Ticket not found');
	}

	const messages = await getTicketMessagesById(ticket.id);
	if (!messages) {
		error(404, 'Messages not found');
	}

	return {
		ticket: ticket,
		messages: messages
	};
};
