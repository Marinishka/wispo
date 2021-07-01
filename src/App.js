import React from 'react';
import Comparison from './components/comparison/comparison';
import PropTypes from 'prop-types';

function App({data}) {
  return (
    <div className="App">
      <Comparison data={data}/>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.object
};

export default App;
