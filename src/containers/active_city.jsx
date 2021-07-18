import React from 'react';
import { connect } from 'react-redux';

class ActiveCity extends React.Component {
  render() {
    console.log(this.props.activeCity)
    return (
      <div>Hello</div>
    );
  }
};

const mapStateToProps = state => {
  return { activeCity: state.activeCity }
}

export default connect(mapStateToProps)(ActiveCity);
