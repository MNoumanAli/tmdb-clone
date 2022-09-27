import React from 'react'

function NavBar() {
  return (
    <div className='navbar-container'>
        <nav className='navbar'>
            <p className='title'>TMDB</p>
            <p>Movies</p>
            <p>TvShows</p>
            <p>People</p>
            <p>More</p>
        </nav>
        <div className='log-sign'>
            <p>Login</p>
            <p>SignUp</p>
        </div>
    </div>
  )
}

export default NavBar