export type TicketType = {
	id: number;
	title: string;
	reason_for_closing: string;
	messages: {
		author: string;
		content: string;
	}[];
};
