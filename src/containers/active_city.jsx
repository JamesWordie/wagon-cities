import React from 'react';
import { connect } from 'react-redux';

class ActiveCity extends React.Component {
  render() {
    console.log(this.props.activeCity)
    if (this.props.activeCity !== null) {
      const activeCity = this.props.activeCity
      return (
        <div className='active-city'>
          <h3>{activeCity.name}</h3>
          <p>{activeCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`}
               alt={`${activeCity.name}`}
               style={{width: '100%', marginTop: '50px'}}
          />
        </div>
      );
    }
    return (
      <div>Hello</div>
    );
  }
};

const mapStateToProps = state => {
  return { activeCity: state.activeCity }
}

export default connect(mapStateToProps)(ActiveCity);
