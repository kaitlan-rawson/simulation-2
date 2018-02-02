//--------Imported Stuff---------//
import React from 'react'
import { Route, Switch } from 'react-router-dom'

//--------JS Imports---------//
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Step1 from './components/Step1/Step1'
import Step2 from './components/Step2/Step2'
import Step3 from './components/Step3/Step3'
import Step4 from './components/Step4/Step4'
import Step5 from './components/Step5/Step5'

export default (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/wizard/1' component = {Step1}/>
        <Route path = '/wizard/2' component = {Step2}/>
        <Route path = '/wizard/3' component = {Step3}/>
        <Route path = '/wizard/4' component = {Step4}/>
        <Route path = '/wizard/5' component = {Step5}/>
    </Switch>
)