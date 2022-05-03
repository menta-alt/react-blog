import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const SearchBlog = lazy(() => import('@/pages/Articles/SearchBlog'))
const Tag = lazy(() => import('@/pages/Articles/Tag'))
const Classes = lazy(() => import('@/pages/Articles/Classes'))
const Message = lazy(() => import('@/pages/Message'))
const Log = lazy(() => import('@/pages/Log'))
const Works = lazy(() => import('@/pages/Works'))
const AboutMe = lazy(() => import('@/pages/About/AboutMe'))
const AboutSite = lazy(() => import('@/pages/About/AboutSite'))
const Home = lazy(() => import('@/pages/Home'))
const ArticleDetails = lazy(() => import('@/pages/ArticleDetails/'))


const routes = [
  {
    path:'/articles',
    element: <Home/>,
  }, 
  {
    path:'/articles/details/:id',
    element: <ArticleDetails/>,
    exact: true
  },
  {
    path:'/search',
    element: <SearchBlog/>,
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
    element: <Navigate to="/articles"/>
  },
  // {
  //   path: '/articles',
  //   element: <Navigate to="/articles/recent"/>
  // }
]

export default routes