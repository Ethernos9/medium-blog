import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";
import { Bindings } from "hono/types";
import z from "zod"
import { blogInput } from "@ethernos/medium-common";
import { updateBlogInput } from "@ethernos/medium-common";
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()


blogRouter.use('/*',async (c,next)=>{    
    const jwt = c.req.header("authorization")
    try {
    
     const token = jwt?.split(' ')[1]
     if (!token) {
        c.status(401);
        return c.json({
        success:false,
        msg:"unauthorized"
    })}
    console.log(c.env.JWT_SECRET)
    
    const decodeToken = await verify(token,c.env.JWT_SECRET)
    
    if (!decodeToken){
        c.status(401);
        return c.json({
            success:false,
            msg:"not authorized"
        })
    }
    //@ts-ignore
    c.set('userId',decodeToken.id)
    
   await next();
    } catch (error) {
        console.log(error)
        c.status(500)
        return c.json({
            success: false,
            msg: "User not logged in"
        })
    }
   
})


blogRouter.post('/',async(c)=>{
  
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {   
        const userId = c.get('userId')
        const body = await c.req.json()
        const {success}= blogInput.safeParse(body)
        console.log("success: ",success)
        if (!success){
            c.status(411)
            return c.json({
                success:false,
                msg:"Invalid credentials"
            })
        }
        const post = await prisma.post.create({
         data:{
            title:body.title,
            content:body.content,
            authorId : userId
            // authorId:  "37ec23b7-4a05-4244-ac44-a81178d95b17",  
         }
        })
        if(!post){
            c.status(400)
            return c.json({
                success:false,

            
            })
        }
        return c.json({
            success:true,
            id: post.id,
            post
        });
    } catch (error) {
        console.log(error)
    }
    
    
})

blogRouter.put("/",async(c)=>{
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    const {success}= updateBlogInput.safeParse(body)
    console.log("success: ",success)
    if (!success){
        c.status(411)
        return c.json({
            success:false,
            msg:"Invalid credentials"
        })
    }
    const post = await prisma.post.update({
        where:{
            id:body.id,
            authorId:userId
        },
        data:{
            title: body.title,
            content:body.content
        }
      })
      return c.json({
        success: true,
        post,
        message: "post updated successfully"
      });
})

// Todo: add pagination
blogRouter.get('/bulk', async (c) => {
	
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	try {
        let blogs = await prisma.post.findMany()
        console.log("blogs : ", blogs)
        return c.json({
            blogs
           });
    } catch (error) {
          console.log(error)
    }


})


blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})
