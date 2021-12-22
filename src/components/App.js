// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

import { AppRouter } from './routers/AppRouter';

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="app-container">
            <AppRouter />
        </div>
    </Provider>
);