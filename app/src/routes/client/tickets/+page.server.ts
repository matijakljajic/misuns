import { getTickets } from '$lib/server/db/tickets';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getClientById } from '$lib/server/db/clients';

export const load: PageServerLoad = async () => {
	const sender = await getClientById(1);
	if (!sender) {
		error(404, 'Sender not found');
	}

	const tickets = await getTickets(sender.id);
	if (!tickets) {
		error(404, 'Tickets not found');
	}

	return {
		tickets: tickets
	};
};
