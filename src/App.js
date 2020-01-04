import React from 'react';
import logo from './images/cat-logo.gif'
import './styles/global.scss';

const tags = ['serious', 'grumpy', 'sleeping', 'white', 'happy', 'old', 'fat', 'cute', 'fail', 'stupid', 'funny', 'gif']

function CatCard(props) {
  return (
    <section class="card-cat card">
    <img class="cat-image" alt="cat" src={"https://cataas.com/cat/" + tags[props.tagNum]}/>
    <div class="cat-tag">{tags[props.tagNum]}</div>
  </section> 

  );
}

function App() {
  return (
    <div className="App">
      <header class="main-nav" id="nav">
        <img alt="logo"src={logo} />
        <h1>My cat website</h1>
        <p>We’re all cat lovers. That’s why we’re here. But have you ever stopped to wonder why we find cats so incredible loveable?</p>
        <p>With Valentine’s Day just around the corner, it seemed the perfect time to explore our fascination with our self-domesticated feline friends.</p>
      </header>
      <main class="home">
        {tags.map((value, index) => {
          return <CatCard tagNum={index} />
        })}
      </main>
      <footer>
        <small>all rights reserved to cats @2019</small>
      </footer>
    </div>
  );
}

export default App;