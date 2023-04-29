import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from './IconButton'

export const BuyButton = props => 
(
    <button>BUY</button>
)

BuyButton.propTypes = 
{
    variant: PropTypes.string
}