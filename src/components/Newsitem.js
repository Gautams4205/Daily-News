import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, discription, imageurl, url, author, date, source } =
      this.props;
    return (
      <div className="card">
        <div style={{display:"flex", justifyContent:"end", position:"absolute",right:"0%"}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={imageurl ? imageurl : "https://picsum.photos/200/150"}
          className="card-img-top"
          alt="Url is not available"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              .
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    );
  }
}
