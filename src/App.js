import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'

const App = () => {
    return (
        <Router>
            <Route path='/' exact ><Home /></Route>
            <Route path='/chat'><Chat /></Route>
        </Router>
    )
}

export default App;
