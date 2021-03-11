// Create a component <Articles> which lists all of the articles. Using ReactRouter, it should show when you go to /news

import { Component } from 'react';
import axios from "../axios";


class Articles extends Component {
    constructor(props) {

        super(props);

        this.state = { // initial state
            loaded:false,
            articles:[],
            };

            // this.handleClick = this.handleClick.bind(this);
        }
    
    componentDidMount() {
        axios.get("/articles").then(({data}) => {
            let articles = data.data;

            this.setState({
                articles: articles,
                loaded: true,
            })
        });
    }

        
    render() {

        let { articles, loaded } = this.state; // deconstructing?

        return !loaded? <p>Loading...</p> : (
            <>
                <h2 className="">Articles</h2>
                <ul className="list-group">
                    { articles.map(article => (
                        <li key={ article.id } className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="list-group list-group-horizontal">{ article.title }</p>
                            <ul className="list-group list-group-horizontal badge bg-primary rounded-pill">
                                { article.tags.map(tag =>{
                                    return <p>{ tag }</p>
                                }) }
                            </ul>
                        </li>
                    ))}    
                </ul>
            </>
        )
    }
}


export default Articles;