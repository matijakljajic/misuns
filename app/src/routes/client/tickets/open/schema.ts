import { z } from 'zod';

export const formSchema = z.object({
	title: z.string().min(1).max(128),
	firstMessage: z.string().min(1).max(4096)
});

export type FormSchema = typeof formSchema;
