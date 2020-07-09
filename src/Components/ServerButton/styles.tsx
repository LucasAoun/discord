import styled from 'styled-components'
import {Props} from '.'

export const Button = styled.button<Props>`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;

    width:48px;
    height:48px;
    border-radius:50%;

    margin-bottom:8px;
    background-color:${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)' };

    position:relative;
    cursor:pointer;

    > img{
       height:35px;
    }

    &::before{
        width:9px;
        height:9px;
        position:absolute;
        left:-17px;
        top: (50% - 4.5px);
        background-color: var(--white);
        border-radius:50%;

        content:'';
        display:${(props) => (props.hasNotification ? 'inline' : 'none')};

    }
    &::after{
        background-color: var(--notification);
        width:auto;
        height:16px;
        padding:0px 4px;
        position:absolute;
        bottom:-4px;
        right:-4px;
        border-radius: 10px;
        text-align: right;
        font-size:13px;
        font-weight:bold;
        color: var(--white);
        content:'${props => props.mentions && props.mentions}';
        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};

    }
    transition:1s;
    
    &.active, &:hover{
        border-radius:16px;
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
        transition:0.7s;
        background-color:${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`