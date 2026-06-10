import { z } from "zod";

export const searchSchema = z.object({
    search: z
        .string()
        .trim()
        .max(100)
});

export type SearchSchema = z.infer<typeof searchSchema>;
