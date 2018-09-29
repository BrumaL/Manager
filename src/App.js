import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDRsmBOPuGSrptyuTzP6jijvt9z7W_iJ0I',
            authDomain: 'manager-19984.firebaseapp.com',
            databaseURL: 'https://manager-19984.firebaseio.com',
            projectId: 'manager-19984',
            storageBucket: 'manager-19984.appspot.com',
            messagingSenderId: '716898372117'
          };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
