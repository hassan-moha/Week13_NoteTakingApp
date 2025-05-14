import { z } from "zod";



export const noteSchema = z.object({
  title: z.string()
    .min(10, "Title must be at least 10 characters") // Minimum length increased to 10
    .max(50, "Title must be at most 50 characters"), // Maximum length remains 50
  content: z.string()
    .min(10, "Content must be at least 10 characters") // Minimum length increased to 10
    .max(500, "Content must be at most 500 characters"), // Maximum length remains 500
});


