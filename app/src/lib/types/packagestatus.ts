// package status enum
export enum PackageStatusEnum {
	picked_up = 'Preuzet',
	delivered = 'Uručen',
	canceled = 'Otkazan',
	returning = 'ZaVraćanje',
	stored = 'Skladišten',
	returned = 'Vraćen',
	assigned = 'Dodeljen',
	unassigned = 'Nedodeljen'
}

export function getPackageStatusAsArray(): string[] {
	return Object.values(PackageStatusEnum);
}
