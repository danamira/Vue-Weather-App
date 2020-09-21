import HelloWorld from "@/components/HelloWorld";
import About from '@/components/About'
import City from '@/components/City'
export default [
    {path:'/',component:HelloWorld},
    {path:'/about',component: About},
    {path:'/city/:city',component:City }

]