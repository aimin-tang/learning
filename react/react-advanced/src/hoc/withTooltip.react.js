import React from 'react';

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    }

    mouseOver = () => this.setState({ showTooltip: true});
    mouseOut = () => this.setState({ showTooltip: false});

    render() {
      console.log('withTooltip!')
      return (
        <div onMouseOver={this.mouseOver} onMouseout={this.mouseOut}>
          <p>With Tooltip ...</p>
          <Component 
            {...this.props}
            showTooltip={this.state.showTooltip}/>
        </div>
      )
    }
  }
}

export default withTooltip;
