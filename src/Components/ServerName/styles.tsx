import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
    display:flex;
    background-color: var(--secondary);
    align-items:center;
    justify-content:space-between;
    padding:0px 11px 0px 16px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index:2;
`

export const Title = styled.h1`
    font-size:14px;
    font-weight:bold;
    color:var(--white);

`

export const ExpandIcon = styled(ExpandMore)`
    width:26px;
    height:26px;
    color: var(--white);
    cursor:pointer;

`
