import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'


const Main = styled.div([], {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  '& a': {
    color: 'inherit'
  }
}, color);

Main.defaultProps = {
  color: 'background', 
  bg: 'text'
}

const TitleBar = styled.div`
  flex-shrink: 1;
  padding: 18px;
`;

const Content = styled.div`
  flex-grow: 1;
  background-color: #dfdfdf;
  justify-content: center;
  display: flex;
`;

const Column = styled.div([], {
  padding: '18px',
  color: '#0e0e0e',
  flexBasis: '50%',
  alignItems: 'baseline'
}, color)

const Desc = styled.div`
  font-size: .8rem;
`;

const Columns = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  if (kids.length % 2 !== 0) {
    console.error('Please pair up the elements with title and description')
  }

  const components = kids.reduce((result, el, idx) => {
    if(idx === 0) {
      result.title = el
    }
    if(idx ===1) {
      result.description = el
    }
    if(idx > 1 && idx % 2 === 0) {
      result.columns.push({
        title: el
      })
    }

    if(idx > 1 && idx % 2 !== 0) {
      const t = result.columns[result.columns.length - 1];
      if(t) {
        t.description = el;
      }
    }
    return result;
  }, {columns: []});

  return (
    <Main>
      <TitleBar>
        {components.title}
        <Desc style={{marginTop: '-1rem'}}>
          {components.description}
        </Desc>
      </TitleBar>
      <Content>
        {components.columns.map((column, idx) => (
          <Column key={`column${idx}`}>
            {column.title}
            <Desc>
              {column.description}
            </Desc>
          </Column>
        ))};
      </Content>
    </Main>
  )
}

export default Columns;
