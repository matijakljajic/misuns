import type { PackageType } from '$lib/types/package';
import { PackageStatusEnum } from '../../types/packagestatus';

const packages: PackageType[] = [
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
];

export function getPackages(): PackageType[] {
	return packages;
}

export function getPackageById(id: number): PackageType | undefined {
	return packages.find((d) => d.id === id);
}
