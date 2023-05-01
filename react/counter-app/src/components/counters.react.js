import React, { Component } from 'react';
import Counter from './counter.react';

class Counters extends Component {
    render() { 
        const {counters, onDelete, onIncrement, onDecrement, onReset} = this.props;
        return (
            <React.Fragment>
                <button 
                  className="btn btn-primary btn-small m-2"
                  onClick={onReset}
                >
                    Reset
                </button>
                { counters.map( 
                    counter => (
                        <Counter 
                          key={counter.id} 
                          onIncrement={onIncrement}
                          onDecrement={onDecrement}
                          onDelete={onDelete}
                          counter={counter} />
                    )
                ) }
            </React.Fragment>
        );
    }
}
 
export default Counters;