import {createBrowserRouter} from 'react-router-dom'
import ShowAllTeam from './Team/showAllTeam.jsx'
import Slider from './Slider/slider.jsx'

const route=createBrowserRouter([
    {path:'/',element:<Slider/>},
    {path:'/teams',element:<ShowAllTeam/>}
  ])

export default route;