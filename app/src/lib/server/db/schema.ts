import { integer, text, real, sqliteTable } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const persons = sqliteTable('person', {
	id: integer('id').primaryKey(),
	fname: text('fname').notNull(),
	lname: text('lname').notNull(),
	phone: text('fname').notNull(),
	address: integer('address_id').references(() => addresses.id),
	email: text('email').notNull(),
	password: text('password').notNull()
});

export const employees = sqliteTable('employee', {
	id: integer('person_id')
		.references(() => persons.id)
		.primaryKey(),
	position: text('position').notNull()
});

export const addresses = sqliteTable('address', {
	id: integer('id').primaryKey(),
	street: text('street').notNull(),
	num: integer('num').notNull(),
	city: text('city').notNull(),
	country: text('country').notNull(),
	zip: integer('zip').notNull()
});

export const packages = sqliteTable('package', {
	id: integer('id').primaryKey(),
	sender: integer('sender_id')
		.references(() => persons.id)
		.notNull(),
	receiver: integer('receiver_id')
		.references(() => persons.id)
		.notNull(),
	cost: real('cost').notNull(),
	mass: real('mass').notNull(),
	note: text('note'),
	status: text('status').notNull()
});

export const tickets = sqliteTable('ticket', {
	id: integer('id').primaryKey(),
	sender: integer('sender_id')
		.references(() => persons.id)
		.notNull(),
	title: text('title').notNull(),
	reasonForClosing: text('reason_for_closing')
});

export const ticketsRelations = relations(tickets, ({ many }) => ({
	messages: many(ticketMessages)
}));

export const ticketMessages = sqliteTable('ticket_message', {
	id: integer('id').primaryKey(),
	ticket: integer('ticket_id')
		.references(() => tickets.id)
		.notNull(),
	content: text('content').notNull(),
	sender: integer('sender_id')
		.references(() => persons.id)
		.notNull()
});

// export const packageStatuses = sqliteTable('package_status', {
// 	id: integer('package_id')
// 		.references(() => packages.id)
// 		.primaryKey(),
// 	status: text('status').notNull()
// });
