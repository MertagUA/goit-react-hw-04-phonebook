import styled from "@emotion/styled";
import { theme } from "utils/theme";

export const Item = styled.li`
font-size: 18px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;`

export const Div = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: ${theme.color.black};`

export const ContactName = styled.p`
margin-right: 10px;`

export const DeleteButton = styled.button`
width: 120px;
height: 30px;
border: 1px solid ${theme.color.darkGrey};
border-radius: 10px;
padding: 5px;
font-size: 16px;
box-shadow: ${theme.boxShadow};
background-color: ${theme.color.white}`