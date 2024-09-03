import {createBrowserRouter} from 'react-router-dom'
import ShowAllTeam from './Team/showAllTeam.jsx'
import Slider from './Slider/slider.jsx'
import UseMemo from './Miscellaneous/useMemo.jsx'

const route=createBrowserRouter([
    {path:'/slider',element:<Slider/>},
    {path:'/',element:<ShowAllTeam/>},
    {path:'/useMemo',element:<UseMemo/>}
  ])

export default route;