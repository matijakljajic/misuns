import type { ClientType } from '$lib/types/client';
import { PositionsEnum } from '../../types/positions';

const clients: ClientType[] = [
	{
		id: 1,
		email: 'client1@example.org',
		fname: 'Client',
		lname: '1',
		phone: '1234567890',
		addr_street: 'Lasla Gala',
		addr_number: 13,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.client,
		packages: []
	},
	{
		id: 2,
		email: 'client2@example.org',
		fname: 'Client',
		lname: '2',
		phone: '1234567890',
		addr_street: 'Lasla Gala',
		addr_number: 13,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.client,
		packages: []
	},
	{
		id: 3,
		email: 'client3@example.org',
		fname: 'Client',
		lname: '3',
		phone: '1234567890',
		addr_street: 'Lasla Gala',
		addr_number: 13,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.admin,
		packages: []
	}
];

export function getClients(): ClientType[] {
	return clients;
}

export function getClientById(id: number): ClientType | undefined {
	return clients.find((d) => d.id === id);
}

export function getClientExample(): ClientType {
	return clients[0];
}

export function getClientExample2(): ClientType {
	return clients[1];
}
