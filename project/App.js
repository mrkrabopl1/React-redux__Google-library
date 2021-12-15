import React from 'react';
import './App.css';

import {SearchEngineComponent} from "./searchEngine/searchEngineComponent";
import {Route, Router, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import PageItem from 'react-bootstrap/PageItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {SearchEngineProps} from "./type/searchEngineType";

function App() {

  return (
<BrowserRouter>


        <div className="App">



       <SearchEngineComponent/>






      </div>
</BrowserRouter>
  );
}

export default App;
// https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
//     axios.get("https://www.googleapis.com/books/v1/volumes?q=Flowers for Algernon+inauthor:keyes&key=AIzaSyDTRetRzKxyBM8myOWvti_W6J34B8HlN_A").
//     then(resp=>console.log(resp.data))