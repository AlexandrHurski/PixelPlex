import React from 'react'
import {NavLink} from 'react-router-dom'

export default class ArticlesHeader extends React.Component{
    render(){
        return(
            <div className='row' style={{margin:'15px'}}>
                <h1 className='float-left col '>Articles</h1>
                <NavLink to='/articles/create'><button className='col-12 btn btn-outline-secondary float-right'>CREATE</button></NavLink>
            </div>
        )
    }
}