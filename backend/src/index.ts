import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blogs'
const app = new Hono<{
     Bindings:{
      DATABASE_URL: string;
      JWT_SECRET:string
    
     }
}>()
app.use('/*',cors())
app.route ('/api/v1/user',userRouter)
app.route ('/api/v1/blog',blogRouter)







// app.use('api/v1/blog/*',async(c,next)=>{
//   const header =  c.req.header("authorization")|| ""
//   const response = await verify(header,c.env.JWT_SECRET)
//   console.log(response)
//   if (!response.id){
//     c.status(401)
//     return c.json({
//       msg:"Invalid authorization"
//     })
//   } 
//   // c.set('userId', response.id)
//   next()
  
// })


// app.get('/blog', (c) => {
//   const prisma = new PrismaClient({
//     //@ts-ignore
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
//   return c.text('get particular blog!')
// })
 
// app.put('/blog/:id', (c) => {
//   return c.text('update blog')
// })


// app.post("/api/v1/signup",async(c)=>{
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

//   const body = await c.req.json()
//   const user =  await prisma.user.create({
//        data:{
//          email: body.email,
//          password: body.password,
//          userName: body.userName
//           }
//    })
//    console.log(user)
//    const token =  await sign({id:user.id},c.env.JWT_SECRET)
//      return c.json({
//          message: "Sign up",
//          user:user,
//          token: token,
//          url: "/auth/google"
//      })
// })
// app.post("/api/v1/signin",async(c)=>{
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
// const body = await c.req.json()
//   const user = await prisma.user.findUnique({
//     where :{
//       email:body.email,
//       password:body.password
//     },
//     select:{
//         id:true,
//         email:true,
//         userName:true,
//         // posts:{
//         //   select:{
//         //     id:true,
//         //     title:true,
//         //     createdAt:true
//         //   }
//         // }
  
//     }
//   })
//   if (!user){
//     c.status(403);
//     return c.json({message:"Invalid email or password"})
//   }
//   const token =await sign({id :user.id},c.env.JWT_SECRET)
//      return c.json({
//          message: "Sign in",
//          user :user,
//          token : token,
//          url: "/auth/google"
//      })
// })
// app.post("/blog",(c)=>{
//      return c.json({
//          message: "post blog",
//          url: "/auth/google"
//      })
// })



export default app
