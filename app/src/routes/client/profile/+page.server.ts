import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getClientAddressById, getClientById } from '$lib/server/db/clients';

export const load: PageServerLoad = async () => {
	// TODO: Get me from cookie
	const sender = await getClientById(1);
	if (!sender) {
		throw error(400, 'Sender not found');
	}

	const address = await getClientAddressById(sender.id);
	if (!address) {
		throw error(400, 'Sender address not found');
	}

	return {
		sender: sender,
		address: address
	};
};
