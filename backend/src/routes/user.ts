import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";
import z from "zod"
import { signupInput} from "@ethernos/medium-common";
import { signinInput} from "@ethernos/medium-common";
export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string
    }
}>()

userRouter.post("/signup",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success}= signupInput.safeParse(body)
    if (!success){
        c.status(411)
        return c.json({
            success:false,
            msg:"Invalid credentials"
        })
    }
    const user = await prisma.user.create({
        data:{
            email:body.email,
            password:body.password,
            userName:body.userName 
        },
        select:{
            id:true,
            email: true,
            userName:true,

        }
    })
    if (!user){
            c.status(400)
            return c.json({
                success:false,
                msg:"Error while creating user"
            })
    }
    const token = await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({
        success:true,
        msg:"User created successfully",
        user,
        token
      })
})

userRouter.post("/signin",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success}= signinInput.safeParse(body)
    console.log("success: ",success)
    if (!success){
        c.status(411)
        return c.json({
            success:false,
            msg:"Invalid credentials"
        })
    }

    const user = await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password,
        },
       select:{
        id:true,
        email:true,
        userName:true
       }
    })
    if (!user){
            c.status(400)
            return c.json({
                success:false,
                msg:"No such user exist"
            })
    }
    const token = await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({
        success:true,
        msg:"User Logged In successfully",
        user,
        token
      })
})


