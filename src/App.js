import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='App-intro'>

          <Router>
            <div>
              <nav>
                <Link to='/'>Home</Link>{ ' ··· '}
                <Link to='/about'>About</Link>{ ' ··· '}
                <Link to='/profile'>Profile</Link>
              </nav>
              <Route exact path='/' component={
                () => (
                  <Home description={'This is the homepage'} users={['a', 'b', 'c', 'd']} />
                )
              } />

              <Route path='/about' component={
                () => (
                  <About description={'This is the about page'} />
                )
              } />

              <Route exact path='/profile' component={
                () => (
                  <Profile description={'This is the profile page'} />
                )
              } />

            </div>
          </Router>

        </div>
      </div>
    )
  }
                }

export default App
