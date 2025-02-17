import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Settings from '../pages/Settings'
import Layout from '../Layouts/Layout'
import Live from '../pages/Live'
import Upcoming from '../pages/Upcoming'
import Users from '../pages/Users'
import YourBets from '../pages/YourBets'
import Result from '../pages/Result'
import Reports from '../pages/Reports'
import MatchInformation from '../components/LiveMatchInfo/MatchInformation'

const ProjectRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Live />}/>
              <Route path='/live' element={<Live />}/>
              <Route path='/Match/:id' element={<MatchInformation />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/settings' element={<Settings />}/>
              <Route path='/upcoming' element={<Upcoming />}/>
              <Route path='/results' element={<Result />}/>
              <Route path='/users' element={<Users />}/>
              <Route path='/yourbets' element={<YourBets />}/>
              <Route path='/reports' element={<Reports />}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default ProjectRoutes
