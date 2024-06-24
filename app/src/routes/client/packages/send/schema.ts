import { z } from 'zod';

export const formSchema = z.object({
	fname: z.string().min(1).max(64),
	lname: z.string().min(1).max(64),
	cost: z.string().min(1).max(64),
	mass: z.string().min(1).max(64),
	note: z.string().min(0).max(128)
});

export type FormSchema = typeof formSchema;
