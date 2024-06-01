import { PackageStatusEnum } from './packagestatus';

export type PackageType = {
	id: number;
	value: number;
	mass: number;
	note: string;
	status: PackageStatusEnum;
};
