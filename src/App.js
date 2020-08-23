import React from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import SearchPage from "./pages/Search/Search.page";
import ComparisonPage from "./pages/Comparision/Comparision.page";
import data from "./data/funds.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mutualFunds: [],
      currentRoute: "search",
      selectedForComparision: [],
      currentSearchInput: ""
    };
  }

  changeRoute = (route) => {
    this.setState({
      currentRoute: route
    });
  };

  componentDidMount = () => {
    this.setState({
      mutualFunds: data.result.funds
    });
  };

  getSearchInput = (text) => {
    console.log("Data is ",data);
        this.setState({
          mutualFunds: data.result.funds.filter(dat=>(dat.name).toUpperCase().indexOf(text.toUpperCase())!==-1),
          currentSearchInput: text
        },()=>{
          console.log(this.state.mutualFunds)
        });
      }

  bringInForComparision = (mutualFund) => {
    let array = this.state.selectedForComparision;

    array.push(mutualFund);

    this.setState({
      selectedForComparision: array
    });
  };

  removeFromComparision = (mutualFund) => {
    let array = this.state.selectedForComparision.filter(
      (fund) => fund.id !== mutualFund.id
    );

    this.setState({
      selectedForComparision: array
    });
  };

  render() {
    const {
      mutualFunds,
      currentRoute,
      selectedForComparision,
      currentSearchInput
    } = this.state;

    let currentPage = null;

    if (currentRoute === "search") {
      currentPage = (
        <SearchPage
          currentSearchInput={currentSearchInput}
          getSearchInput={this.getSearchInput}
          mutualFundsList={mutualFunds}
          selectedForComparision={selectedForComparision}
          bringInForComparision={this.bringInForComparision}
          removeFromComparision={this.removeFromComparision}
        />
      );
    } else if (currentRoute === "compare") {
      currentPage = (
        <ComparisonPage fundsToBeCompared={this.state.selectedForComparision} />
      );
    }

    return (
      <div className="App">
        <Navbar changeRoute={this.changeRoute} temp={this.state.selectedForComparision}/>
        {currentPage}
      </div>
    );
  }
}

export default App;
