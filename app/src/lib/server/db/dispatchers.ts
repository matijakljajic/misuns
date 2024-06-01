import type { DispatcherType } from '$lib/types/dispatcher';
import { PositionsEnum } from '../../types/positions';

const dispatchers: DispatcherType[] = [
	{
		id: 1,
		email: 'dis1@example.org',
		fname: 'Dispatcher',
		lname: '1',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.dispatcher
	},
	{
		id: 2,
		email: 'dis2@example.org',
		fname: 'Dispatcher',
		lname: '2',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.dispatcher
	},
	{
		id: 3,
		email: 'dis3@example.org',
		fname: 'Dispatcher',
		lname: '3',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.admin
	}
];

export function getDispatchers(): DispatcherType[] {
	return dispatchers;
}

export function getDispatcherById(id: number): DispatcherType | undefined {
	return dispatchers.find((d) => d.id === id);
}
