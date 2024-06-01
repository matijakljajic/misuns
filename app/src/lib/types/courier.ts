import type { PackageType } from './package';
import { PositionsEnum } from './positions';

export type CourierType = {
	id: number;
	email: string;
	fname: string;
	lname: string;
	phone: string;
	addr_street: string;
	addr_number: number;
	addr_city: string;
	addr_country: string;
	addr_zip: string;
	position: PositionsEnum;
	packages: PackageType[];
	ratings: {
		id: number;
		rating: number;
	}[];
};
