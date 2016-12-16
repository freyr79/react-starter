import styles from './index.scss';
import React, { Component } from 'react';
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
