import React, { Fragment } from 'react'
import styled from 'styled-components'


const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 70px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #fff;
  padding: 24px;
  color: #000;
`;

const TitleContainer = styled.div`
  text-align: left;
  overflow: hidden;
  min-width: 100%;
  position: absolute;
  top: 100%;
  transform: rotate(-90deg);
  transform-origin: top left;
  color: #fff;
  background-color: #007bff;
  padding: 0 20px;
`;

const SideTitle = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const numberOfChildren = kids.length
  return (
    <LayoutContainer>
      <Aside>
        <TitleContainer>
          {kids[0]}
        </TitleContainer>
      </Aside>
      <Main>
        {kids.filter((k,idx) => idx > 0).map(k => (k))}
      </Main>
    </LayoutContainer>
  )
}

export default SideTitle 
