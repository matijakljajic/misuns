import type { TicketType } from '$lib/types/ticket';

const tickets: TicketType[] = [
	{
		id: 1,
		title: 'Paket 1',
		reason_for_closing: 'Random',
		messages: [
			{
				author: 'John Doe',
				content: 'Hello there'
			},
			{
				author: 'Jane Doe',
				content: 'General Kenobi'
			},
			{
				author: 'John Doe',
				content: 'You are a bold one'
			}
		]
	},
	{
		id: 2,
		title: 'Paket 2',
		reason_for_closing: 'Random 2',
		messages: [
			{
				author: 'John Doe',
				content: 'Hello there'
			},
			{
				author: 'Jane Doe',
				content: 'General Kenobi'
			},
			{
				author: 'John Doe',
				content: 'You are a bold one'
			}
		]
	},
	{
		id: 3,
		title: 'Paket 3',
		reason_for_closing: '',
		messages: [
			{
				author: 'John Doe',
				content: 'Hello there'
			},
			{
				author: 'Jane Doe',
				content: 'General Kenobi'
			},
			{
				author: 'John Doe',
				content: 'You are a bold one'
			}
		]
	}
];

export function getTickets(): TicketType[] {
	return tickets;
}

export function getTicketById(id: number): TicketType | undefined {
	return tickets.find((d) => d.id === id);
}
