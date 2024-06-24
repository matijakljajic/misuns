// import type { PackageType } from '$lib/types/package';
import { eq } from 'drizzle-orm';
import { db } from './db';
import { packages } from './schema';
// import { PackageStatusEnum } from '../../types/packagestatus';
// import { getClientExample, getClientExample2 } from './clients';

// const packages: PackageType[] = [
// 	{
// 		id: 1,
// 		value: 2000,
// 		mass: 100,
// 		note: 'Lomljivo',
// 		status: PackageStatusEnum.delivered,
// 		sender: getClientExample(),
// 		recipient: getClientExample2()
// 	},
// 	{
// 		id: 2,
// 		value: 0,
// 		mass: 50,
// 		note: 'Nemam.',
// 		status: PackageStatusEnum.picked_up,
// 		sender: getClientExample(),
// 		recipient: getClientExample2()
// 	},
// 	{
// 		id: 3,
// 		value: 500,
// 		mass: 1000,
// 		note: '',
// 		status: PackageStatusEnum.returned,
// 		sender: getClientExample(),
// 		recipient: getClientExample2()
// 	}
// ];

export async function getPackages(senderId: number) {
	return await db.select().from(packages).where(eq(packages.sender, senderId));
}

export async function getPackageById(id: number) {
	const found = await db.select().from(packages).where(eq(packages.id, id));
	return found ? found[0] : null;
}

type NewPackage = typeof packages.$inferInsert;
export async function insertPackage(p: NewPackage) {
	return await db.insert(packages).values(p);
}
