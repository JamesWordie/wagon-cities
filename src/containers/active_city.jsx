import React from 'react';

class ActiveCity extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    { getActiveCity: getActiveCity },
    dispatch
  })
};

const mapStateToProps = (state) => {
  return { city: state.activeCity }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
