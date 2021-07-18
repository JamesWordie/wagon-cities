import React from 'react';
import City from './city'
import { connect } from 'react-redux';
import { getCities } from '../actions';
import { bindActionCreators } from 'redux';

class CityList extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </ul>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {getCities: getCities},
    dispatch
  );
}

const mapStateToProps = (state) => {
  return { cities: state.cities }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
