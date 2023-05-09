import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  Image,
  TextAreaContainer,
  IconsContainer,
  Button,
  TextArea,
  ContentContainer,
  Heading,
  IconItem,
} from './styledComponents'

const editor = 'https://assets.ccbp.in/frontend/react-js/text-editor-img.png'
class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  changeBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  changeItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  changeUmderline = () => {
    this.setState(prev => ({isUnderline: !prev.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldmode = isBold ? '#faff00' : '#f1f5f9'
    const italicmode = isItalic ? '#faff00' : '#f1f5f9'
    const underlinemode = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <AppContainer>
        <TextEditorContainer>
          <ContentContainer>
            <Heading>Text Editor</Heading>
            <Image src={editor} alt="text editor" />
          </ContentContainer>
          <TextAreaContainer>
            <IconsContainer>
              <IconItem>
                <Button
                  type="button"
                  data-testid="bold"
                  color={boldmode}
                  onClick={this.changeBold}
                >
                  <VscBold size={25} />
                </Button>
              </IconItem>
              <IconItem>
                <Button
                  type="button"
                  data-testid="italic"
                  color={italicmode}
                  onClick={this.changeItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </IconItem>
              <IconItem>
                <Button
                  type="button"
                  data-testid="underline"
                  color={underlinemode}
                  onClick={this.changeUmderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </IconItem>
            </IconsContainer>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </TextAreaContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
