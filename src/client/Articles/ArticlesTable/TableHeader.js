import React from 'react'

export default class TableHeader extends React.Component{
    render(){
        return (
            <div className='row' >
                <div className='col-3' style={{height:'30px',backgroundColor:'gray',border:'1px solid black'}}>id</div>
                <div className='col-3' style={{height:'30px',backgroundColor:'gray',border:'1px solid black'}}>Title</div>
                <div className='col-3' style={{height:'30px',backgroundColor:'gray',border:'1px solid black'}}>Body</div>
                <div className='col-3' style={{height:'30px',backgroundColor:'gray',border:'1px solid black'}}></div>
            </div>
        )
    }
}