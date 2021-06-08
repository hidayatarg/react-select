import React, { Component } from 'react'
import styled from "styled-components";

const Main = styled.div`
`;

const DropDownContainer = styled.div`
    width: 200px;
    position: absolute;
    margin-left: 25px;
`;

const DropDownHeader = styled.div`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 1.3rem;
    color: #3faffa;
    user-select: none;
    cursor: pointer;
`;

const DropDownListContainer = styled.div`
    position: absolute;
    z-index: 100;
    width: 200px;
`;

const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
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
        color: black;
        background: yellow
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
    position: absolute;
    top: 42%;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid red;

`;

const ArrowUp = styled.div`
    position: absolute;
    top: 35%;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid red;

`;



export default class Select extends Component {

    state = {
        selectedItem: "",
        isOpen: false,
        defaultSelected: this.props.defaultSelected || 'Select'
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

    render() {
        // console.log('gelen props: ', this.props);
        return (
            <Main>
            <DropDownContainer>
              <DropDownHeader onClick={this.toggling}>
                {this.state.selectedItem || this.state.defaultSelected}
                <Arrow>{
                    this.state.isOpen ? 
                     <ArrowUp/>
                    : <ArrowDown/>
                
                }</Arrow>
              </DropDownHeader>
              { 
                this.state.isOpen &&
                <DropDownListContainer>
                  <DropDownList>
                    {this.props.options.map((option, i) => (
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
