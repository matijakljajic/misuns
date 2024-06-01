import { z } from 'zod';

export const formSchema = z.object({
	fname: z.string().min(1).max(64),
	lname: z.string().min(1).max(64),
	otkup: z.number().int().positive(),
	masa: z.number().int().positive(),
	napomena: z.string().min(0).max(128)
});

export type FormSchema = typeof formSchema;
