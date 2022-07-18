import List from "../components/List/List";
import Welcome from "../components/Welcome/Welcome";

const routes = [
  {path:'/', element:<Welcome />, name:'Home'},
  {path:'/list', element:<List />, name:'List'},
]

export default routes;