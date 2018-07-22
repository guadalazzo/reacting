import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Counter';
import GithubCards from './Githubcards';
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Counter}/>
            <Route path='/githubcards' component={GithubCards}/>
        </Switch>
    </main>
)

export default Main;