import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`

export const TextEditorContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #1b1c22;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  justify-content: flex-start;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`

export const Image = styled.img`
  height: 300px;
  width: 80%;
  margin-top: 50px;
`
export const TextAreaContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  margin: 10px;
  border-radius: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  outline: none;
  width: 100%;
  flex-grow: 1;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding: 10px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`

export const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  border-bottom: 1px solid #334155;
  padding: 10px 0;
  list-style: none;
  margin-top: 0;
`
export const IconItem = styled.li``

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin: 5px;
  color: ${props => props.color};
`
