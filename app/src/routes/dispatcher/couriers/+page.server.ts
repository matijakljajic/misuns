import { getCouriers } from '$lib/server/db/couriers';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const couriers = getCouriers();
	if (!couriers) {
		error(404, 'couriers not found');
	}

	return {
		couriers: couriers
	};
};
