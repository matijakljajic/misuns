// import type { TicketType } from '$lib/types/ticket';
import { eq } from 'drizzle-orm';
import { db } from './db';
import { tickets } from './schema';

// const tickets: TicketType[] = [
// 	{
// 		id: 1,
// 		title: 'Paket 1',
// 		reason_for_closing: 'Random',
// 		messages: [
// 			{
// 				author: 'John Doe',
// 				content: 'Hello there'
// 			},
// 			{
// 				author: 'Jane Doe',
// 				content: 'General Kenobi'
// 			},
// 			{
// 				author: 'John Doe',
// 				content: 'You are a bold one'
// 			}
// 		]
// 	},
// 	{
// 		id: 2,
// 		title: 'Paket 2',
// 		reason_for_closing: 'Random 2',
// 		messages: [
// 			{
// 				author: 'John Doe',
// 				content: 'Hello there'
// 			},
// 			{
// 				author: 'Jane Doe',
// 				content: 'General Kenobi'
// 			},
// 			{
// 				author: 'John Doe',
// 				content: 'You are a bold one'
// 			}
// 		]
// 	},
// 	{
// 		id: 3,
// 		title: 'Paket 3',
// 		reason_for_closing: '',
// 		messages: [
// 			{
// 				author: 'John Doe',
// 				content: 'Hello there'
// 			},
// 			{
// 				author: 'Jane Doe',
// 				content: 'General Kenobi'
// 			},
// 			{
// 				author: 'John Doe',
// 				content: 'You are a bold one'
// 			}
// 		]
// 	}
// ];

export async function getTickets(senderId: number) {
	return await db.select().from(tickets).where(eq(tickets.sender, senderId));
}

export async function getTicketById(id: number) {
	const found = await db.select().from(tickets).where(eq(tickets.id, id));
	return found ? found[0] : null;
}
