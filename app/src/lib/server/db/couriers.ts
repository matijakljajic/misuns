import type { CourierType } from '$lib/types/courier';
import { PackageStatusEnum } from '$lib/types/packagestatus';
import { PositionsEnum } from '../../types/positions';

const couriers: CourierType[] = [
	{
		id: 1,
		email: 'courier1@example.org',
		fname: 'Courier',
		lname: '1',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.courier,
		packages: [
			{
				id: 1,
				value: 2000,
				mass: 100,
				note: 'Lomljivo',
				status: PackageStatusEnum.delivered
			},
			{
				id: 2,
				value: 0,
				mass: 50,
				note: 'Nemam.',
				status: PackageStatusEnum.picked_up
			},
			{
				id: 3,
				value: 500,
				mass: 1000,
				note: '',
				status: PackageStatusEnum.returned
			}
		],
		ratings: [
			{
				id: 1,
				rating: 5
			},
			{
				id: 2,
				rating: 4
			}
		]
	},
	{
		id: 2,
		email: 'courier2@example.org',
		fname: 'Courier',
		lname: '2',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.courier,
		packages: [
			{
				id: 1,
				value: 2000,
				mass: 100,
				note: 'Lomljivo',
				status: PackageStatusEnum.delivered
			},
			{
				id: 2,
				value: 0,
				mass: 50,
				note: 'Nemam.',
				status: PackageStatusEnum.picked_up
			},
			{
				id: 3,
				value: 500,
				mass: 1000,
				note: '',
				status: PackageStatusEnum.returned
			}
		],
		ratings: [
			{
				id: 1,
				rating: 3
			},
			{
				id: 2,
				rating: 2
			}
		]
	},
	{
		id: 3,
		email: 'courier3@example.org',
		fname: 'Courier',
		lname: '3',
		phone: '1234567890',
		addr_street: '1234 Main St',
		addr_number: 1,
		addr_city: 'Novi Sad',
		addr_country: 'Serbia',
		addr_zip: '21000',
		position: PositionsEnum.admin,
		packages: [
			{
				id: 1,
				value: 2000,
				mass: 100,
				note: 'Lomljivo',
				status: PackageStatusEnum.delivered
			},
			{
				id: 2,
				value: 0,
				mass: 50,
				note: 'Nemam.',
				status: PackageStatusEnum.picked_up
			},
			{
				id: 3,
				value: 500,
				mass: 1000,
				note: '',
				status: PackageStatusEnum.returned
			}
		],
		ratings: [
			{
				id: 1,
				rating: 5
			},
			{
				id: 2,
				rating: 5
			}
		]
	}
];

export function getCouriers(): CourierType[] {
	return couriers;
}

export function getCourierById(id: number): CourierType | undefined {
	return couriers.find((d) => d.id === id);
}
