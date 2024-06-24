// import type { ClientType } from '$lib/types/client';
import { and, eq } from 'drizzle-orm';
// import { PositionsEnum } from '../../types/positions';
import { db } from './db';
import { addresses, persons } from './schema';

// const clients: ClientType[] = [
// 	{
// 		id: 1,
// 		email: 'client1@example.org',
// 		fname: 'Client',
// 		lname: '1',
// 		phone: '1234567890',
// 		addr_street: 'Lasla Gala',
// 		addr_number: 13,
// 		addr_city: 'Novi Sad',
// 		addr_country: 'Serbia',
// 		addr_zip: '21000',
// 		position: PositionsEnum.client,
// 		packages: []
// 	},
// 	{
// 		id: 2,
// 		email: 'client2@example.org',
// 		fname: 'Client',
// 		lname: '2',
// 		phone: '1234567890',
// 		addr_street: 'Lasla Gala',
// 		addr_number: 13,
// 		addr_city: 'Novi Sad',
// 		addr_country: 'Serbia',
// 		addr_zip: '21000',
// 		position: PositionsEnum.client,
// 		packages: []
// 	},
// 	{
// 		id: 3,
// 		email: 'client3@example.org',
// 		fname: 'Client',
// 		lname: '3',
// 		phone: '1234567890',
// 		addr_street: 'Lasla Gala',
// 		addr_number: 13,
// 		addr_city: 'Novi Sad',
// 		addr_country: 'Serbia',
// 		addr_zip: '21000',
// 		position: PositionsEnum.admin,
// 		packages: []
// 	}
// ];

export async function getClients() {
	return await db.select().from(persons);
}

export async function getClientById(id: number) {
	const found = await db.select().from(persons).where(eq(persons.id, id));
	return found ? found[0] : null;
}

export async function getClientByName(fname: string, lname: string) {
	const found = await db
		.select()
		.from(persons)
		.where(and(eq(persons.fname, fname), eq(persons.lname, lname)));
	return found ? found[0] : null;
}

export async function getClientExample() {
	return getClientById(1);
}

export async function getClientExample2() {
	return getClientById(2);
}

type NewPerson = typeof persons.$inferInsert;
type NewAddress = typeof addresses.$inferInsert;
export async function insertClient(p: NewPerson, a: NewAddress) {
	await db.transaction(async (tx) => {
		const address_id = await tx.insert(addresses).values(a).returning({ insertedId: addresses.id });
		if (!address_id || address_id.length === 0) {
			throw new Error('Failed to insert address');
		}
		p.address = address_id[0].insertedId;
		await tx.insert(persons).values(p);
	});
}

export async function getClientAddressById(id: number) {
	const found = await db.select().from(addresses).where(eq(addresses.id, id));
	return found ? found[0] : null;
}
