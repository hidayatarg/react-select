import React, { Component } from 'react'
import styled from "styled-components";

const Main = styled.div`
`;

const DropDownContainer = styled.div`
    ${'' /* width: 200px; */}
    position: absolute;
    margin-left: 25px;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #8f9bb3;
  user-select: none;
  cursor: pointer;
  &:selected {
  background-color: yellow;
  }
`;

const DropDownInput = styled.input`
  font-weight: 500;
  font-size: 1.3rem;
  color: #8f9bb3;
  border: none;
  outline: none;
`;

const DropDownListContainer = styled.div`
    position: absolute;
    z-index: 100;
    width: 200px;
  height: 48px;
 
  background-color: #f9f9f9;
`;

// Applied to all drop downs childrens
const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #222b45;
    font-size: 1.3rem;
    font-weight: 500;
    /* &:first-child {
        padding-top: 0.8em;
    } */

    
`;

const ListItem = styled.li`
    list-style: none;
    padding: 0.8em 0;
    user-select: none;
    &:hover {
        color: white;
        background: #1a4784
    }
    cursor: pointer;
    margin-left: -20px;

    
`;

const Arrow = styled.div`
    width: 30px;
    height: 71%;
    margin: 0;
    padding: 0;
    display: inline-block;
    /* background: #aaaaaa; */
    position: absolute;
    right: 0;
    top: 0;
`;

const ArrowDown = styled.div`
    border: solid #8f9bb3;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: 50%;
`;

const ArrowUp = styled.div`
    border: solid #8f9bb3;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-top: 60%;

`;



export default class Select extends Component {

  state = {
    selectedItem: "",
    isOpen: false,
    defaultSelected: this.props.defaultSelected || 'Select',

  };

  toggling = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onOptionClicked = value => () => {
    this.setState({
      selectedItem: value,
      isOpen: false
    });
    console.log(value);
  };

  onChangeText = event => {
    // console.log('gelen: ', event.target.value);
    this.setState({ selectedItem: event.target.value })
    console.log('gelen: ', this.state.selectedItem);
    this.props.options.filter(item => item.value === event.target.value);
  }

  render() {
    const selectedItem = this.props.options.filter(
      option => {
        return option.value.toLowerCase().indexOf(
          this.state.selectedItem.toLowerCase()
        ) !== -1
      }
    );

    return (
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={this.toggling}>
            <DropDownInput onClick={this.toggling} style={{ color: 'black' }}
              onChange={this.onChangeText}
              placeholder={this.state.defaultSelected}
              value={this.state.selectedItem}

            />
            {/* {this.state.selectedItem || this.state.defaultSelected} */}
            <Arrow>
              {
                this.state.isOpen
                  ? <ArrowUp />
                  : <ArrowDown />
              }
            </Arrow>
          </DropDownHeader>
          {
            this.state.isOpen &&
            <DropDownListContainer>
              <DropDownList>
                {selectedItem.map((option, i) => (
                  <ListItem
                    onClick={this.onOptionClicked(option.value)}
                    key={i}>
                    {option.value}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          }
        </DropDownContainer>
      </Main>
    )
  }
}
