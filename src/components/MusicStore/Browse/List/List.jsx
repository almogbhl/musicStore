import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

const List = ({ data, view }) => {
  return (
    <CardBox>
      <CardList draggable="true">
        {data.map((item, index) => (
          <Card key={item.name} data={item} view={view} index={index}/>
        ))}
      </CardList>
    </CardBox>
  );
};

export default List;

const CardBox = styled.div`
  overflow: scroll;
  margin-left: 2rem;

  [draggable="true"] {
    cursor: move;
  }

  &::-webkit-scrollbar {
    height: 0px;
  }

  @media (min-width: 700px) {
    overflow: hidden;

    [draggable="true"] {
      cursor: auto;
    }
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 300px;

  @media (min-width: 700px) {
    width: 100%;
  }

  @media (min-width: 921px) {
    width: 921px;
    max-width: 921px;
  }
`;
