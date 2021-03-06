import React from 'react';
import { Provider, connect } from 'react-redux';

import { selectView } from './reducers';
import createStore from './store';
import { getTemplate } from './templates/Template';

const Container = ({ view }) => {
  const T = getTemplate(view.template);
  return <T {...view} />;
};

const mapStateToProps = state => ({
  view: selectView(state)
});

const ConnectedContainer = connect(mapStateToProps)(Container);

const store = createStore();

const App = () => (
  <Provider store={store}>
    <ConnectedContainer />
  </Provider>
);

export default App;
