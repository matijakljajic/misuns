import { PackageStatusEnum } from './packagestatus';
import type { ClientType } from './client';

export type PackageType = {
	id: number;
	value: number;
	mass: number;
	note: string;
	status: PackageStatusEnum;
	sender: ClientType;
	recipient: ClientType;
};
