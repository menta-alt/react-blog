import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Search = lazy(() => import('@/pages/Articles/Search'))
const Tag = lazy(() => import('@/pages/Articles/Tag'))
const Classes = lazy(() => import('@/pages/Articles/Classes'))
const Message = lazy(() => import('@/pages/Message'))
const Log = lazy(() => import('@/pages/Log'))
const Works = lazy(() => import('@/pages/Works'))
const AboutMe = lazy(() => import('@/pages/About/AboutMe'))
const AboutSite = lazy(() => import('@/pages/About/AboutSite'))
const Home = lazy(() => import('@/pages/Home'))
const HotContent = lazy(() => import('@/pages/Home/BlogContent/HotContent'))
const RecentContent = lazy(() => import('@/pages/Home/BlogContent/RecentContent'))


const routes = [
  {
    path:'/home/*',
    element: <Home/>,
    children: [
      {
        path:'articles/hot',
        element: <HotContent/>
      },
      {
        path:'articles/recent',
        element: <RecentContent/>
      }
    ]
  }, 
  {
    path:'/search',
    element: <Search/>,
  }, 
  {
    path:'/tag',
    element: <Tag/>,
  },
  {
    path:'/classes',
    element: <Classes/>,
  }, 
  {
    path:'/message',
    element: <Message/>
  },
  {
    path:'/log',
    element: <Log/>
  },
  {
    path:'/works',
    element: <Works/>
  },
  {
    path:'/aboutme',
    element: <AboutMe/>
  },
  {
    path:'/aboutsite',
    element: <AboutSite/>
  },
  {
    path: '/',
    element: <Navigate to="/home/articles/hot"/>
  },
  {
    path: '/home',
    element: <Navigate to="/home/articles/hot"/>
  }
]

export default routes