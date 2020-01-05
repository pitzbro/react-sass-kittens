import React from 'react';
import logo from './images/cat-logo.gif'
import './styles/global.scss';

const tags = ['serious', 'grumpy', 'sleeping', 'white', 'happy', 'old', 'fat', 'cute', 'fail', 'stupid', 'funny', 'gif']

function CatCard(props) {
  return (
    <section className="card-cat card square-ratio">
    <img className="cat-image" alt="cat" src={"https://cataas.com/cat/" + tags[props.tagNum]}/>
    <div className="cat-tag flex justify-center align-center">{tags[props.tagNum]}</div>
  </section> 

  );
}

function App() {
  return (
    <div className="app app-container">
      <header className="main-header container flex column align-center justify-center" id="nav">
        <img className="logo" alt="logo"src={logo} />
        <h1>My cat website</h1>
        <p>We’re all cat lovers. That’s why we’re here. But have you ever stopped to wonder why we find cats so incredible loveable?</p>
        <p>With Valentine’s Day just around the corner, it seemed the perfect time to explore our fascination with our self-domesticated feline friends.</p>
      </header>
      <main className="home container cards-container">
        {tags.map((value, index) => {
          return <CatCard tagNum={index} />
        })}
      </main>
      <footer>
        <small className="container">all rights reserved to cats @2019</small>
      </footer>
    </div>
  );
}

export default App;