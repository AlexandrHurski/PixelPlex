import React from 'react'
import Logo from './Logo'

export default class Header extends React.Component{
    render(){
        return(
            <div className='navbar-header' style={{backgroundColor:'gray',marginBottom:'50px'}}>
                <Logo/>
            </div>
        )
    }
}