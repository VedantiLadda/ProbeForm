import React from 'react';
import { Provider } from 'react-redux';
import { store } from './client/store';
import { Main } from './connect';

function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;