// Create a component <Article id={ number }> which shows a specific article based on its id. It should show when you go to /news/{id}
// Update your <Articles> component to link through to <Article>

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
        axios.get("/articles/id").then(({data}) => {
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
                                    return <p>{ tag.split(/\s*,\s*/) }</p>
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