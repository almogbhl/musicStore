import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteItem, duplicateItem } from "./Card.action";
import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";
import "@material/react-button/dist/button.css";

class Card extends Component {
  state = {
    isHover: false
  };


  onItemEnter = () => {
    this.setState({
      isHover: true
    });
  };

  onItemLeave = () => {
    this.setState({
      isHover: false
    });
  };

  // dispatch an action - duplicateItem
  duplicateItem = () => {
    const { view, do_duplicateItem, data } = this.props;
    do_duplicateItem(view, data);
  };

  // dispatch an action - do_deleteItem
  deleteItem = () => {
    const { view, do_deleteItem, index } = this.props;
    do_deleteItem(view, index);
  };

  render() {
    const view = this.props.view;
    const isHover = this.state.isHover;

    const {
      genre,
      artist_image,
      artist_name,
      name,
      image,
      tracks_number,
      quantity_in_stock,
      quantity
    } = this.props.data;

    return (
      <Item
        ref="item"
        shape={view}
        onMouseEnter={this.onItemEnter}
        onMouseLeave={this.onItemLeave}
      >
        <BackImg src={image} alt="artist cover" />
        <GreyBackground shape={view} isHover={isHover}>
          <CenterBox isHover={isHover}>
            <Button
              onClick={this.duplicateItem}
              raised
              style={{ marginRight: "2rem", borderRadius: "100px" }}
            >
              <MaterialIcon role="button" icon="file_copy" />
            </Button>
            <Button
              onClick={this.deleteItem}
              raised
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "100px"
              }}
            >
              DELETE
            </Button>
          </CenterBox>
        </GreyBackground>
        <Top shape={view}>
          <Genre shape={view}>{genre}</Genre>
          <ArtistImage src={artist_image} alt="artist" />
        </Top>
        <Middle>
          <ArtistName>{artist_name}</ArtistName>
          <Name>{name}</Name>
        </Middle>
        <Bottom shape={view}>
          <TracksNum shape={view}>{tracks_number}</TracksNum>
          <Quantity>{`${quantity_in_stock}/${quantity}`}</Quantity>
        </Bottom>
      </Item>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    do_deleteItem: (list, name) => dispatch(deleteItem(list, name)),
    do_duplicateItem: (list, item) => dispatch(duplicateItem(list, item))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Card);

const Item = styled.li`
  position: relative;
  font-family: "Varela Round";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 280px;
  max-width: 280px;
  height: ${props => (props.shape === "CDs" ? "280px" : "300px")};
  /* background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  border-radius: ${props => (props.shape === "CDs" ? "50%" : "18px")};
  margin: 2rem 0px;
  box-shadow: 0 10px 30px 0 rgba(207, 217, 230, 0.5), 10px 10px 30px 0 #e8ecf1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0px;
  }

  @media (min-width: 700px) {
    width: calc(50% - 4rem);
  }
  @media (min-width: 900px) {
    width: calc(33.333% - 4rem);
  }
`;

const BackImg = styled.img`
  position: absolute;
  top: 0;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  min-width: 100%;
`;

const GreyBackground = styled.div`
  position: absolute;
  border-radius: ${props => (props.shape === "CDs" ? "50%" : "18px")};
  width: 100%;
  height: 100%;
  top: 0;
  background: ${props =>
    props.isHover
    ? "rgba(128,128,128,.9)"
    : "linear-gradient(rgba(69, 69, 69, 0.6) 0%,rgba(0, 0, 0, 0.5) 100%)"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => (props.isHover ? 1000 : 2)};
`;

const CenterBox = styled.div`
  display: flex;
  visibility: ${props => (props.isHover ? "visible" : "hidden")};
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  z-index: 99;
  padding: 0px 1.5rem;
  flex-basis: 25%;
  border-radius: 18px;
  display: flex;
  justify-content: ${props =>
    props.shape === "CDs" ? "center" : "space-between"};
  align-items: center;
  color: white;
`;
const Middle = styled.div`
  z-index: 99;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled(Top)``;

const Genre = styled.div`
  font-size: 1.2rem;
  margin-right: ${props => (props.shape === "CDs" ? "3rem" : "0px")};
`;
const ArtistImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const TracksNum = styled.div`
  border-radius: 50%;
  font-size: 1.5rem;
  background-color: hsla(0, 0%, 85.1%, 0.5);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${props => (props.shape === "CDs" ? "3rem" : "0px")};
`;
const Quantity = styled.div`
  border-radius: 40%;
  font-size: 1.1rem;
  background-color: hsla(0, 0%, 85.1%, 0.5);
  width: 3.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArtistName = styled.h2`
  font-size: 3rem;
  color: white;
`;

const Name = styled.p`
  font-size: 1.5rem;
`;
