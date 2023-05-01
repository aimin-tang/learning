import './App.css';
import Counters from './components/counters.react';
import NavBar from './components/navbar.react';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
        { id: 1, count: 1},
        { id: 2, count: 2},
        { id: 3, count: 3},
        { id: 4, count: 4},
    ]
  } 

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const idx = counters.indexOf(counter);
      counters[idx] = {...this.state.counters[idx]};
      counters[idx].count += 1;
      this.setState({ counters });
  }

  handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const idx = counters.indexOf(counter);
      counters[idx] = {...this.state.counters[idx]};
      counters[idx].count -= 1;
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      this.setState({ 
          counters: this.state.counters.filter( 
              counter => counter.id !== counterId
      )});
  }

  handleReset = () => {
      const counters = this.state.counters.map( c => {
          c.count = 0;
          return c;
      });
      this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          lenCounters={this.state.counters.filter(c => c.count > 0).length}
        />
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
