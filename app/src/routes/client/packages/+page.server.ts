import { getPackages } from '$lib/server/db/packages';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getClientById } from '$lib/server/db/clients';

export const load: PageServerLoad = async () => {
	const sender = await getClientById(1);
	if (!sender) {
		error(400, 'Sender not found');
	}

	const packages = await getPackages(sender.id);
	if (!packages) {
		error(404, 'Packages not found');
	}

	return {
		packages: packages
	};
};
