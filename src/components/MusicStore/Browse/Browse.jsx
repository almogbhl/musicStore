import React, { Component } from "react";
import styled from "styled-components";
import TopBar from "./TopBar/TopBar";
import List from "./List/List";

class Browse extends Component {
  state = {
    originalData: null,
    displayedData: null,
    title: ""
  };

  // update state with the data
  componentDidMount() {
    const { type, data } = this.props;
  
    this.setState({
      originalData: data,
      displayedData: data,
      title: type
    });
  }

  // update state with the data after duplicate / deleting item
  componentDidUpdate(prevProps) {
    const { data } = this.props;
    
    if (data !== prevProps.data) {
      this.setState({
        originalData: data,
        displayedData: data
     });
    }
  }

  // update the displayed list after filtering in search bar
  updateList = data => {
    this.setState({
      displayedData: data
    });
  };
  // reset the displayedData list to the all the items
  restList = () => {
    this.setState({
      displayedData: this.state.originalData
    });
  };

  render() {
    const { title, originalData, displayedData } = this.state;

    if (originalData != null) {
      return (
        <Container>
          <TopBar
            title={title}
            originalData={originalData}
            on_filter={data => this.updateList(data)}
            resetList={this.restList}
          />
          <List data={displayedData} view={title} />
        </Container>
      );
    } else {
      return "loading...";
    }
  }
}

export default Browse;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-width: 280px;
  margin: 3rem 4rem;

  @media (min-width: 700px) {
    min-width: 700px;
    width: 100%;
    padding: 3rem 8rem;
  }
  @media (min-width: 921px) {
    max-width: 930px;
    padding: 3rem 10rem;
  }

`;
