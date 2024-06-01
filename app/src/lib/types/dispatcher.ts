import { PositionsEnum } from './positions';

export type DispatcherType = {
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
};
