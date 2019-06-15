import React, { Component } from "react";
import styled from "styled-components";
import { Headline1 } from "@material/react-typography";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Button from "@material/react-button";
import "@material/react-text-field/dist/text-field.css";
import "@material/react-button/dist/button.css";

class TopBar extends Component {
  state = {
    value: "",
    textFieldWidth: "calc(50% - 10px)",
    buttonWidth: "calc(25% - 10px)"
  };

  // adding resize event
  // calc
  componentDidMount() {
    this.calcWidth();
    window.addEventListener("resize", this.calcWidth);
  }
  // removing resize event
  componentWillUnmount() {
    window.removeEventListener("resize", this.calcWidth);
  }

  // calculate the window width and by that split the width of the header 
  calcWidth = () => {
    const width = window.innerWidth;

    if (width >= 700) {
      this.setState({
        textFieldWidth: "calc(70% - 10px)",
        buttonWidth: "calc(15% - 10px)"
      });
    }
  };

  // filtering the list by the name or the artist name and send the data as a call back
  updateList = () => {
    const { originalData , on_filter } = this.props;
    let txt = this.state.value;

    let filtered_list = originalData.filter( item => {
     return item.artist_name.toLowerCase().includes(txt.toLowerCase()) || item.name.toLowerCase().includes(txt.toLowerCase())
    })

    on_filter(filtered_list)
}

  // on reset the data clear the input value
  onResetList = () => {
    const { resetList } = this.props;

    resetList();
    this.setState({value: ""});
  }

  render() {
    const { title } = this.props;
    const { textFieldWidth, buttonWidth} = this.state;

    const styles = {
      textField: {
        backgroundColor: "white",
        fontSize: "2rem",
        width: textFieldWidth
      },
      form: {
        padding: "0px 0px 0px 0px",
        fontFamily: "Varela Round",
        fontSize: "1.2rem",
        borderColor: "hsla(0, 0%, 85.1%, 0.5)"
      },
      button: {
        width: buttonWidth,
        fontSize: "1.1rem",
        borderRadius: "100px",
        letterSpacing: "1px",
        marginTop: "16px",
        backgroundColor: "#1d5fd8"
      }
    };

    return (
      <Header>
        <Headline1>{title}</Headline1>
        <Box>
          <TextField
            style={styles.textField}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              placeholder={title}
              style={styles.form}
              value={this.state.value}
              onChange={e => this.setState({ value: e.currentTarget.value })}
            />
          </TextField>
          <Button raised style={styles.button} onClick={this.updateList}>
            SEARCH
          </Button>
          <Button
          onClick={this.onResetList}
            outlined
            style={{
              ...styles.button,
              backgroundColor: "white",
              borderColor: "hsla(0, 0%, 85.1%, 0.5)",
              color: "rgba(0, 0, 0, 0.85)"
            }}
          >
            RESET
          </Button>
        </Box>
      </Header>
    );
  }
}

export default TopBar;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 700px;

  @media (min-width: 921px) {
    width: 921px;
    max-width: 921px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;
