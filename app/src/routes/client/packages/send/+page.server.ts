import type { PageServerLoad } from './$types.js';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { insertPackage } from '$lib/server/db/packages.js';
import { error } from '@sveltejs/kit';
import { getClientById, getClientByName } from '$lib/server/db/clients.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		// TODO: Get me from cookie
		const sender = await getClientById(1);
		if (!sender) {
			throw error(400, 'Sender not found');
		}

		const data = await request.formData();
		const fname = data.get('fname')?.toString();
		const lname = data.get('lname')?.toString();
		const costS = data.get('cost')?.toString();
		const massS = data.get('mass')?.toString();
		if (!fname || !lname || !costS || !massS) {
			throw error(400, 'Missing required fields');
		}
		const cost = parseFloat(costS);
		const mass = parseFloat(massS);
		const note = data.get('note')?.toString() || '';

		const receiver = await getClientByName(fname, lname);
		if (!receiver) {
			throw error(400, 'Receiever not found');
		}

		insertPackage({
			sender: sender.id,
			receiver: receiver.id,
			cost: cost,
			mass: mass,
			note: note,
			status: 'nedodeljen'
		});
	}
} satisfies Actions;
