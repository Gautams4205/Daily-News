import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pagesize: 8,
    country: "in",
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
  }
  async updateNews() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9b22eaf3714e413387317c5820014272&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePreviousclick = async () => {
    this.updateNews();
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextclick = async () => {
    this.updateNews();
    this.setState({
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">DailyNew-  Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsitem
                  title={element.title}
                  discription={element.description}
                  imageurl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
  static propTypes = {
    country: PropTypes.string,
  };
}

export default News;
