import { getCourierById } from '$lib/server/db/couriers';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const courier = getCourierById(Number(params.courier_id));
	if (!courier) {
		error(404, 'courier not found');
	}

	return {
		packages: courier.packages
	};
};
