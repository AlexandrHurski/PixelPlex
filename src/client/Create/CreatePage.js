import React from 'react'
import axios from 'axios'

export default class CreatePage extends React.Component{
    constructor(){
        super()
        this.state={
            articleTitle:'',
            articleBody:''
        }
    }
    redirectToMain = () => {
        this.props.history.push('/')
    }
    changeDatas = (e) => this.setState({[e.target.id]:e.target.value})
    createArticle = (e) => {
        e.preventDefault()
        const dateNow = new Date().toString()
        const body = {
            title:this.state.articleTitle,
            body:this.state.articleBody,
            created_at:dateNow,
            updated_at:dateNow
        }
        axios.post('http://localhost:8080/v1/articles',body)
            .then(res => console.log(res.data))
            .then( () => this.redirectToMain())
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div className='container'>
                <h1>Articles / create</h1>
                <h5>Title:</h5>
                <input className='form-control'id='articleTitle' onChange={this.changeDatas}></input>
                <p>Title is required</p>
                <h5>Body:</h5>
                <textarea className='form-control' rows='8' id='articleBody'placeholder='Article body...' onChange={this.changeDatas}></textarea>
                <div style={{margin:'30px'}}>
                    <button className='btn btn-outline-secondary' onClick={this.createArticle}>Create</button>
                    <button className='btn btn-outline-secondary' onClick={this.redirectToMain}>Cancel</button>
                </div>
            </div>
        )
    }
}