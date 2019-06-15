import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchStoreData } from "./MusicStore.action";
import Browse from "./Browse/Browse";

class Store extends Component {
  state = {
    recordsData: null,
    cdsData: null
  };

  // dispatch an action
  // fetch the data
  componentDidMount() {
    this.props.do_fetchStoreData();
  }

  // update the state every time the props gets update
  componentDidUpdate(prevProps) {
    const { vinyl_records, cds } = this.props;
    
    // the initial update from redux store after fetching getting the data
    if (vinyl_records !== prevProps.vinyl_records && cds !== prevProps.cds) {
      this.setState({
        recordsData: vinyl_records,
        cdsData: cds
      });
    }
    // vinyl_records update list - duplicate / deleting item
    if (vinyl_records !== prevProps.vinyl_records) {
      this.setState({ recordsData: vinyl_records });
    }
    // cds update list - duplicate / deleting item
    if (cds !== prevProps.cds) {
      this.setState({ cdsData: cds });
    }
  }

  render() {
    const { recordsData, cdsData } = this.state;

    if (recordsData != null) {
      return (
        <Container>
          <Browse type="Vinyl Records" data={recordsData} />
          <Browse type="CDs" data={cdsData} />
        </Container>
      );
    } else {
      return <Loader type="Oval" color="black" height="100" width="100" />;
    }
  }
}

function mapStateToProps(state) {
  return {
    vinyl_records: state.musicStore.vinyl_records,
    cds: state.musicStore.cds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    do_fetchStoreData: () => dispatch(fetchStoreData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
