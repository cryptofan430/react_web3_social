// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { LatestDrop } from '../pages/LatestDrop';
import { ZipCodesPage } from '../pages/ZipCodesPage';
import { Previous } from '../pages/Previous';
import { After } from '../pages/giveaway';
// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/drop' component={LatestDrop} />
                <Route path='/pre' component={Previous} />
                <Route path='/after' component={After} />
                <Redirect to="/" />
            </Switch>            
        </Fragment>
    </BrowserRouter>
);