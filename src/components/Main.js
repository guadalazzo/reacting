import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Counter';
import GithubCards from './Githubcards';
import Game from './Game';
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Counter}/>
            <Route path='/githubcards' component={GithubCards}/>
            <Route path='/game' component={Game}/>
        </Switch>
    </main>
)

export default Main;