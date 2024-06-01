import { getPackages } from '$lib/server/db/packages'
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const packages = getPackages();
	if (!packages) {
		error(404, 'Packages not found');
	}

	return {
		packages: packages
	};
};
