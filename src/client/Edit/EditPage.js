import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class EditPage extends React.Component{
    constructor(){
        super()
        this.state={
            articleTitle:'',
            articleBody:''
        }
    }
    redirectToMain = () => {
        this.props.history.push('/')
        this.props.clearEditable()
    }
    changeDatas = (e) => this.setState({[e.target.id]:e.target.value})
    updateArticle = (e) => {
        e.preventDefault()
        const updateDate = new Date().toString()
        const url = `http://localhost:8080/v1/articles/${this.props.state.editableId}`
        const body = {
            title:this.state.articleTitle,
            body:this.state.articleBody,
            updated_at:updateDate
        }
        axios.put(url,body)
            .then(res => {
                console.log(res.data)
            })
            .then( () => this.redirectToMain())
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div className='container'>
                <h1>Articles / edit</h1>
                <h5>Title:</h5>
                <input className='form-control'id='articleTitle' onChange={this.changeDatas}></input>
                <p>Title is required</p>
                <h5>Body:</h5>
                <textarea className='form-control' rows='8' id='articleBody'placeholder='Article body...' onChange={this.changeDatas}></textarea>
                <div style={{margin:'30px'}}>
                    <button className='btn btn-outline-secondary' onClick={this.updateArticle}>Update</button>
                    <button className='btn btn-outline-secondary' onClick={this.redirectToMain}>Cancel</button>
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
        clearEditable:() => dispatch({type:'CLEAR_EDITABLE'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPage)