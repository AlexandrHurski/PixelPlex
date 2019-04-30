import React from 'react'
import Layout from './Layout/Layout'
import Articles from './Articles/Articles'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import CreatePage from './Create/CreatePage'
import {Provider} from 'react-redux'
import store from './State/store'
import EditPage from './Edit/EditPage'

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Layout>
                            <Route exact path='/' render={ () => <Redirect to='/articles'/>}/>
                            <Route exact path='/articles' component={Articles}/>
                            <Route exact path='/articles/create' component ={CreatePage} />
                            <Route exact path='/articles/edit' component ={EditPage} />
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}