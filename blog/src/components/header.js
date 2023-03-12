import * as React from "react"
import { propTypes } from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Outer = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const H1 = styled.h1`
  margin: 0px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover
  {
    color: lightgray;
  }
`

const Header = ({ siteTitle }) => 
(
  <Outer>
    <H1>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </H1>
  </Outer>
)

hesder.propTypes=
{
  siteTitle: propTypes.string,
}

Header.defaultProps = 
{
  siteTitle:``,
}

export default Header
