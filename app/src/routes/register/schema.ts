import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	fname: z.string().min(1).max(64),
	lname: z.string().min(1).max(64),
	phone: z.string().min(9).max(20),
	address: z.string().min(1).max(128),
	password: z.string().min(8).max(128)
});

export type FormSchema = typeof formSchema;
