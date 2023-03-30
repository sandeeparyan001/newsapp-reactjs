import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defautProps = {
     country:'in',
     category:'general'
  }
  static propTypes = {
     country:PropTypes.string,
     category:PropTypes.string
 }
// bottom button logic
  HandleToNext=async()=> {
    console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=248c9c7bb5e04b3cbcf7f947c2f2aba3&page=${this.state.page+1}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData)

        
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
    })
  }
  HandleToPrev=async()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=248c9c7bb5e04b3cbcf7f947c2f2aba3&page=${this.state.page-1}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
       // console.log(parsedData)
        
      this.setState({
        page:this.state.page - 1,
        articles: parsedData.articles,
        loading:false
    })
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
       document.title = `NewsApp-${this.capitalizeFirstLetter(this.props.category)}`;
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=248c9c7bb5e04b3cbcf7f947c2f2aba3&page=1`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles: parsedData.articles,loading:false})
    }
  render() {
    return (
      <div className='container my-3'>
         <h2 className='mb-3 text-center'>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
         {this.state.loading && <Spinner/>}
         <div className="row">
    
            {!this.state.loading&&this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            })}
              
         </div>
         <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1}type="button" className="btn btn-success" onClick={this.HandleToPrev}>&larr; Previous</button>
              <button type="button" className="btn btn-success" onClick={this.HandleToNext}>Next &rarr;</button>
         </div>
       
      </div>
    )
  }
}

export default News
