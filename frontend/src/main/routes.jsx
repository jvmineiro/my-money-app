import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import authOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={authOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)
