import { getPackageById } from '$lib/server/db/packages';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const postalpackage = getPackageById(Number(params.package_id));
	if (!postalpackage) {
		error(404, 'Dispatcher not found');
	}

	return {
		postalpackage: postalpackage
	};
};
