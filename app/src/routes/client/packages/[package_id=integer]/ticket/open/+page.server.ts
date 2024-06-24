import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { getClientById, getClientByName } from '$lib/server/db/clients.js';
import { error, type Actions } from '@sveltejs/kit';
import { insertTicket } from '$lib/server/db/tickets.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async ({ request, params }) => {
		// TODO: Get me from cookie
		const sender = await getClientById(1);
		if (!sender) {
			throw error(400, 'Sender not found');
		}

		const data = await request.formData();
		const title = data.get('title')?.toString();
		if (!title) {
			throw error(400, 'Title is required');
		}

		const msg = data.get('firstMessage')?.toString();
		if (!msg) {
			throw error(400, 'First message is required');
		}

		insertTicket(sender.id, title, msg);
	}
} satisfies Actions;
