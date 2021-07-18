import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getActiveCity } from '../actions';

class City extends React.Component {
  handleClick = (city) => {
    this.props.getActiveCity(this.props.city);
    console.log(this.props)
  };

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </li>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getActiveCity: getActiveCity },
    dispatch
  )
};

const mapStateToProps = (state) => {
  return { activeCity: state.activeCity }
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
