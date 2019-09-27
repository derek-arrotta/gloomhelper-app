import React from 'react';
import './HomePage.css'

function HomePage() {
    return (
        <main role='main'>
            <section className='bodysection'>
                <h1>Table space is precious...</h1>
                <p className='home-content'>... so put away the paper! <strong>Gloomhelper</strong> is a companion web app to the board game <a href="https://boardgamegeek.com/boardgame/174430/gloomhaven" target="_blank" rel="noopener noreferrer">Gloomhaven</a>. Rather than tracking all characters and party stats on pieces of paper--and killing your erasers in the effort--create an account here to track and view stats between plays, on one handy screen.</p>
            </section>
            <section className='bodysection'>
                <h2>How It Works</h2>
                <ol className='home-content'>
                    <li>Get your party started with a new party sheet</li>
                    <li>Create character sheets for each player character</li>
                    <li>Create an account to return to your data at your next play</li>
                    <li>Focus on killing those monsters!</li>
                </ol>
            </section>
            <section className='bodysection'>
                <button className="home-button">Get Started</button>
                <button className="home-button">Demo</button>
            </section>
        </main>
    )
}

export default HomePage;