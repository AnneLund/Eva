import Footer from './Footer'   
import Sidebar from './Sidebar'
import Leafs from './Leafs'


const Layout = ({ children }) => {

return(
<div id='App'>

<Sidebar 
width={"100%"} 
right 
pageWrapId={"page-wrap"} 
outerContainerId={"App"} 
/>

<Leafs/>
  {children}  
<Footer/>
</div>
    )
  }

export default Layout;