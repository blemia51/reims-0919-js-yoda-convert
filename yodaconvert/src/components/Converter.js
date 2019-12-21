import React, {Component} from "react";
import '../App.css';
import ButtonConvDel from './Button.jsx';
import Modal from './Modal'
const MarkdownIt = require('markdown-it'), md = new MarkdownIt();//npm install markdown-it --save
var hljs = require('highlight.js') //npm install highlight.js


class Converter extends Component {
    constructor (props) {
        super(props)
        this.state={
            inputText:'',
            outputText:'',
            counter: 0,
            isShowing: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showOutPut = this.showOutPut.bind(this);
    }


  handleInputChange(e) {
    const newText = e.target.value
    const htmlTexte = md.render(e.target.value)
    this.setState({ 
      inputText: newText,
      outputText: htmlTexte,
    })
  }

  openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}

  showOutPut(){
    this.setState({
      outputText :md.render(this.state.inputText)

  })}

  highlightedCode(e) {
    return hljs.highlightAuto(e).value
   

  }

  countWords() {
    {
      let table = this.state.inputText.split(/[.|,|?|!|;|#|*|-|' ']/g)
      let count = table.length 
      this.setState({
        counter: count,
      })  
    }
  }
    
  render () {
    return (
      <div>
        <div className="textContainer">
          
            
            <textarea className="input-text" name="inputText" rows="30" cols="50" resize='none' value={this.state.inputText} onChange={this.handleInputChange}>    
            </textarea>
      
            <textarea className="output-text" name="outputText" rows="30" cols="50" resize='none' value={this.state.outputText} readonly >
            </textarea>
           
        </div>
        <ButtonConvDel convert={this.showOutPut} delet = {this.handleInputChange } />
           {/* <button >test
            </button>
           {hljs.highlight('html', '<span>Hello World!</span>').value}*/}
        <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>MarkDown Tips</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>

                </Modal>
            </div>
            </div>


    )
}}

export default Converter;
