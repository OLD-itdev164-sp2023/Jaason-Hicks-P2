import React from 'react'
import mainHeaderImage from './images/Mascot.png'
import { Search } from 'styled-icons/feather'

const images = 
{
    mainHeaderImage
}

const icons = 
{
    Search: <Search />
}

const theme = 
{
    spacem: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: 
    {
        blues: 
        {
            0: 'hsl(234, 100%, 100%)',
            1: 'hsl(234, 100%, 95%)',
            2: 'hsl(234, 100%, 85%)',
            3: 'hsl(234, 100%, 75%)',
            4: 'hsl(234, 100%, 65%)',
            5: 'hsl(234, 100%, 55%)',
            6: 'hsl(234, 100%, 45%)',
            7: 'hsl(234, 100%, 35%)',
            8: 'hsl(234, 100%, 25%)',
            9: 'hsl(234, 100%, 15%)',
            10: 'hsl(234, 100%, 5%)',
        }
    }
}

const variants = 
{
    iconButton: 
    {
        primary: 
        {
            color: theme.colors.blues[8]
        },
        contrast:
        {
            color: theme.colors.blues[0]
        }
    },
    header: 
    {
        primary: 
        {
            backgroundColor: theme.colors.blues[5]
        }
    }
}

export const Blue = {...theme, variants, images, icons }
//'#87cefa'