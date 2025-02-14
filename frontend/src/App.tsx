
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Singup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path = "/signup" element= {<Singup/>}/>
            <Route path = "/" element= {<Signin/>}/>
            <Route path = "/blog/:id" element= {<Blog/>}/>
            <Route path = "/blogs" element= {<Blogs/>}/>
            <Route path = "/publish" element= {<Publish/>}/>

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App