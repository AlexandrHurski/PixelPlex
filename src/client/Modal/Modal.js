import React from 'react'
import './Modal.css'
import {connect} from 'react-redux'
import axios from 'axios'

class ModalComp extends React.Component{
    constructor(){
        super()
        this.state={
            title:undefined,
            body:undefined,
            created:undefined,
            updated:undefined
        }
    }
    componentDidMount(){
        const url = 'http://localhost:8080/v1/articles/'+this.props.state.chosenId
        axios.get(url)
            // .then(res => console.log(res.data))
            .then(res => {
                this.setState({
                    title:res.data.title,
                    body:res.data.body,
                    created:res.data.created_at,
                    updated:res.data.updated_at
                })
            })
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div className='Modal'>
                <div>
                    Title:{this.state.title}
                    <div className='CloseComp' onClick={this.props.closeModal}>X</div>
                    <hr></hr>
                </div>
                <div>
                    Body:{this.state.body}
                </div>
                <div>
                    <hr></hr>
                    <div>
                        <p>Created:{this.state.created}</p>
                        <p>Updated:{this.state.updated}</p>
                    </div>
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
        closeModal:() => dispatch({type:'CLOSE_MODAL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalComp)