import React from 'react'
import ArticlesHeader from './ArticlesHeader/ArticlesHeader'
import queryString from 'query-string'
import axios from 'axios'
import {connect} from 'react-redux'
import TableItem from './ArticlesTable/TableItem'
import TableHeader from './ArticlesTable/TableHeader'
import Modal from '../Modal/Modal'

class Articles extends React.Component{
    constructor(){
        super()
        this.state={
            articles:[],
            totalPages:undefined
        }
    }
    changePage = (event) => {
        event.preventDefault()
        const limitURL = queryString.parse(this.props.location.search).limit ===undefined ? '' : `&limit=${queryString.parse(this.props.location.search).limit}`
        const url = 'http://localhost:8080/v1/articles?'+`page=${event.target.id}`+limitURL
        axios.get(url)
            .then(res => {
                this.setState({
                    articles:res.data.docs,
                    totalPages:Math.ceil(res.data.count / res.data.limit)
                })
            })
    }
    componentDidMount(){
        const url = 'http://localhost:8080/v1/articles'+this.props.location.search
        axios.get(url)
            .then(res => {
                this.setState({
                    articles:res.data.docs,
                    totalPages:Math.ceil(res.data.count /res.data.limit)
                })
            })
    }     
    render(){
        const pages=[]
        for(let i =1;i <= this.state.totalPages;i++){
            pages.push(i)
        }
        const renderPages = pages.map( number => {
            return (
                <a key ={number} id={number} style={{margin:'10px'}} onClick={this.changePage}> {number} </a>
            )
        })
        return (
            <div className='container'>
                <ArticlesHeader/>
                <TableHeader/>
                {this.state.articles.map(el => {
                    return <TableItem key = {el._id} id={el._id} title = {el.title} body = {el.body} />
                })}
                <div style={{textAlign:'center'}}>{renderPages}</div>
                {this.props.state.showModal ? <Modal/> : null}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        state:state
    }
}

export default connect(mapStateToProps)(Articles)