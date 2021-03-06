import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
  padding-top:100px;
`;

const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
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
  width: 10.5em;
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
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  user-select: none;
  &:hover {
    color: #fd9e46;
  }
  cursor: pointer;
`;

const options = [
  {
    value: "Mangoes",
  },
  {
    value: "Orange",
  },
  {
    value: "Apple",
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(value);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Mangoes"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option, i) => (
                <ListItem onClick={onOptionClicked(option.value)} key={i}>
                  {option.value}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}