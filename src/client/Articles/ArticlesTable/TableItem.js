import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class TableItem extends React.Component{
    viewArticle = () => {
        this.props.showModal(this.props)
    }
    makeEditableFunc = () => {
        this.props.makeEditable(this.props)
    }
    render(){        
        return (
            <div className='row'>
                <div className='col-3' style={{height:'40px',backgroundColor:'white',border:'1px solid black'}}>{this.props.id}</div>
                <div className='col-3' style={{height:'40px',backgroundColor:'white',border:'1px solid black'}}>{this.props.title}</div>
                <div className='col-3' style={{height:'40px',backgroundColor:'white',border:'1px solid black'}}>{this.props.body}</div>
                <div className='col-3' style={{height:'40px',backgroundColor:'white',border:'1px solid black'}}>
                    <NavLink to='/articles/edit'><button onClick = {this.makeEditableFunc } className='btn btn-outline-secondary' style={{marginRight:'30px'}} >Edit</button></NavLink>
                    <button className='btn btn-outline-secondary' onClick={this.viewArticle}>View</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state:state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showModal:(el) => dispatch({type:'SHOW_MODAL',element:el}),
        makeEditable:(el) => dispatch({type:'MAKE_EDITABLE',element:el})
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(TableItem)