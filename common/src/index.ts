import z from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    userName: z.string().min(3).optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6), 
})



export const blogInput = z.object({
    title: z.string().min(3),
    content: z.string().min(6),
})


export const updateBlogInput = z.object({
    title : z.string().min(3),
    content: z.string().min(6),
    id     :    z.string()
})



export type signupInputFinal = z.infer<typeof signupInput>
export type signinInputFinal = z.infer<typeof signinInput>
export type blogInputFinal = z.infer<typeof blogInput>
export type updateBlogInputFinal = z.infer<typeof updateBlogInput>
