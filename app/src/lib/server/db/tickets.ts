import type { TicketType } from '$lib/types/ticket';

const tickets: TicketType[] = [
	{
		id: 1,
		title: 'Paket 1',
		reason_for_closing: 'Random'
	},
	{
		id: 2,
		title: 'Paket 2',
		reason_for_closing: 'Random 2'
	},
	{
		id: 3,
		title: 'Paket 3',
		reason_for_closing: ''
	}
];

export function getTickets(): TicketType[] {
	return tickets;
}

export function getTicketById(id: number): TicketType | undefined {
	return tickets.find((d) => d.id === id);
}
