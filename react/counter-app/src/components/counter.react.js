import React, { Component } from "react";

class Counter extends Component {
    getBadgeClasses() {
      let classes = "badge m-2 badge-"
      if (this.props.counter.count === 0) {
        classes += "warning";
      } else {
        classes += "primary";
      }

      return classes;
    }

    getBadgeContent() {
      if (this.props.counter.count === 0) {
        return 'Zero';
      } else {
        return this.props.counter.count;
      }
    }

    render() {
        return (
          <React.Fragment>
            <ul>
              <div className="row">
                <div className="col-1">
                  <span className={this.getBadgeClasses()}>{this.getBadgeContent()}</span>
                </div>
                <div className="col">
                  <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-primary">
                    +
                  </button>
                  <button 
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-primary mx-2"
                    disabled={this.props.counter.count === 0 ? "disabled": ""}>
                    -
                  </button>
                  <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-small">
                    Delete
                  </button>  
                </div>
              </div>
            </ul>
          </React.Fragment>
        );
    }
}

export default Counter;
