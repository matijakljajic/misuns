import type { PackageType } from '$lib/types/package';
import { PackageStatusEnum } from '../../types/packagestatus';
import { getClientExample, getClientExample2 } from './clients';

const packages: PackageType[] = [
	{
		id: 1,
		value: 2000,
		mass: 100,
		note: 'Lomljivo',
		status: PackageStatusEnum.delivered,
		sender: getClientExample(),
		recipient: getClientExample2()
	},
	{
		id: 2,
		value: 0,
		mass: 50,
		note: 'Nemam.',
		status: PackageStatusEnum.picked_up,
		sender: getClientExample(),
		recipient: getClientExample2()
	},
	{
		id: 3,
		value: 500,
		mass: 1000,
		note: '',
		status: PackageStatusEnum.returned,
		sender: getClientExample(),
		recipient: getClientExample2()
	}
];

export function getPackages(): PackageType[] {
	return packages;
}

export function getPackageById(id: number): PackageType | undefined {
	return packages.find((d) => d.id === id);
}
