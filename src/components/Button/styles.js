import styled from "styled-components";

export const Button = styled.button`
border: ${ props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
background: ${ props => 
    props.theme === 'primary' 
    ? 'linear-gradient(180deg, #fe7e5d, #FF6378 100%)' 
    : 'transparent' };
border-radius: 30px;
cursor: pointer;

&:hover {
    opacity: ${ props => props.theme === 'primary' ? '0.8' : '0.6'};
    background: ${ props => 
    props.theme === 'primary' 
    ? 'linear-gradient(180deg, #fe7e5d, #FF6378 100%)' 
    : 'linear-gradient(180deg, #ffc0a9 0, #ffb5a6 16.67%, #ffa9a2 33.33%, #f29d9d 50%, #de9297 66.67%, #cc8891 83.33%, #bb7f8b 100%)' };
}
&:active {
    opacity: 0.5;
}
`