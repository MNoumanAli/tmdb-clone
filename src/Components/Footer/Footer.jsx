import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='f-container'>
            <div className='f-container-div'>
                <div className='f-title'>
                    <p>The</p>
                    <p>Movie</p>
                    <p>DB</p>
                </div>

                <div className='join-cmt-btn'>
                    <p>Join The Community</p>
                </div>
            </div>

            <div className='f-container-div'>
                <p className='footer-heading'>The Basics</p>
                <p>About TMDB</p>
                <p>Contact Us</p>
                <p>Suppoprt For API</p>
                <p>System Status</p>
            </div>

            <div className='f-container-div'>
                <p className='footer-heading'>Get Invloved</p>
                <p>Contribution</p>
                <p>Add New Movie</p>
                <p>Add New TV Show</p>
            </div>
            <div className='f-container-div'>
                <p className='footer-heading'>Community</p>
                <p>Guidlines</p>
                <p>Discussion</p>
                <p>LeaderBoard</p>
                <p>Twitter</p>
            </div>
            <div className='f-container-div'>
                <p className='footer-heading'>Legal</p>
                <p>Term of Use</p>
                <p>API Term of Use</p>
                <p>Provacy Policy</p>
            </div>
        </div>     
    </div>
  )
}
