import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  ResultCard
} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="MovieAppFinal"
        credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
      >
        <div className="navbar">
          <div className="logo">
            Movie Catalog
          </div>
          <DataSearch
            className="datasearch"
            componentId="mainSearch"
            dataField={["original_title", "original_title.search", "authors", "authors.search"]}
            queryFormat="and"
            placeholder="Search"
            innerClass={{
              "input": "searchbox",
              "list": "suggestionlist"
            }}
            autosuggest={false}
            iconPosition="left"
            filterLabel="search"
          />
        </div>
        <div className={"display"}>
          <div className={"mainBar"}>
            <ResultCard
              componentId="results"
              dataField="original_title"
              react={{
                "and": ["mainSearch", "ratingsFilter", "publishFilter", "authorFilter"]
              }}
              pagination={true}
              size={8}
              onData={(res)=>(
                {
                  "image": "https://image.tmdb.org/t/p/w500" +
                    res.poster_path,
                  "title": res.original_title || " ",
                  "description": 
                  "<span margin-right:5px;'>Date: " + res.release_date + "</span><br/><br/><div class='result-author' title='" + res.imdb_id + "'>imdb_id " + res.imdb_id + "</div><div class='result-author' title='" + res.genres_data + "'>Type " + res.genres_data + "</div>",
                  "url": "https://google.com/search?q=" + res.original_title
                }
              )}
              className="result-data"
              innerClass={{
                "image": "result-image",
                "resultStats": "result-stats"
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
