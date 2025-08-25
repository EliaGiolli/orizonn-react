import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().email("invalid email"),
    password: z.string().min(6, "password must contain at least 6 characters"),
    confirmPswd: z.string()
}).refine((data) => data.password === data.confirmPswd, {
    message: 'passwords do not match',
    path: ["confirmPswd"]
})

//refine() allows us to create custom validation for 2 or more fields