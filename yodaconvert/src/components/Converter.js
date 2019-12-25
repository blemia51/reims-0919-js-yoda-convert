import React, {Component} from "react";
import '../App.css'
import Nav from './Nav'
import Modal from './Modal'
import ModalHelp from './ModalHelp'
import Highlighter from 'react-highlight-words';
import { save } from 'save-file';
import parse from 'html-react-parser';
const md = require('markdown-it')({
  html: true,
	breaks: false,
})//npm install markdown-it --save
var hljs = require('highlight.js') //npm install highlight.js


class Converter extends Component {
    constructor (props) {
        super(props)
        this.state={
            inputText:'',
            outputText:'',
            counter: 0,
						isShowing: false,
						isShowingHelp: false,
            input: '',
            isPreviewSelected :false,
            previewButton:'Preview'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


  handleInputChange(e) {
    const newText = e.target.value
    const htmlText = md.render(e.target.value)
    const preview = parse(htmlText)
		this.countWords()
		//this.hilight()
    this.setState({ 
      inputText: newText,
			outputText: htmlText,
			render: preview
    })
  }

  handlePreviewChange = () => {
    this.setState({
      isPreviewSelected: !this.state.isPreviewSelected,
      previewButton: (this.state.isPreviewSelected?'Preview':'Html')
    })
    
  }

  openModalHandler = () => {
    this.setState({
				isShowing: true,
				isShowingHelp: false
    });
}

  closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}

  openModalHandlerHelp = () => {
	  this.setState({
		  isShowing: false,
			isShowingHelp: true
	});
}

  closeModalHandlerHelp = () => {
	  this.setState({
			isShowingHelp: false
	});
}

  hilight() {
	  const term='test'// search query we want to highlight in results 
    const results= this.state.outputText // search results
		const res=results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
		console.log(res)
		this.setState({
			outputText: res
		})
	}

  countWords() {
    
      let table = this.state.inputText.split(/[\s|.|,|'|:|;|?|!|~|*|#|(|)|-|_|<|>]+/g);
      let count = table.length 
      this.setState({
        counter: count,
      })  
    }
  
  searchField = event => {
    this.setState({ input: event.target.value })
  }

  onSearch = () => {
    let count = 0;
    let result;
    let input = this.state.input;
    let outputText = this.state.outputText;
    let table = outputText
      .split(/<\/?[a-z0-9]*>/g)
      .join('')
      .split(/[\s\.|\,|'|:|;|?|!|#]+/g);
    if (table[table.length - 1] === '') {
      table.splice(table.length - 1, 1);
    }
    for (let i = 0; i < table.length; i++) {
      if (input === table[i]) {
        count++;
      }
    }
    result = count;
    return result;
  }

  fileExport = () => save(this.state.outputText, "fichier.html");

  render () {
    return (

      <div className='main' style={{marginTop:'30px'}}>
        <header className="navbar">
          <Nav
            onSearch={this.onSearch}
            searchField={this.searchField}
            input={this.state.input}
            counter={this.state.counter}
          />
        </header>

        <div className="textContainer"> 
          <textarea className="input-text" name="inputText" rows="30" cols="50" resize='none' value={this.state.inputText} onChange={this.handleInputChange}>    
          </textarea>
      
          <div className='html-editor'>
            {this.state.isPreviewSelected?
            <div>{this.state.render}</div>:
				  	<Highlighter 
					  highlightClassName='textEditors'styled-components
						highlightStyle={{color:'red',fontSize:'12px'}}
            autoEscape={true}
            searchWords={[this.state.input]}
            textToHighlight={this.state.outputText}
            />}
				  </div>
			  </div>

				<div className='button-container'>
				  <button className="open-modal-btn" onClick={this.openModalHandler}>MarkDown Tips</button>
          <button className="open-modal-btn" onClick={this.openModalHandlerHelp}>MarkDown Help</button>
          <button className='open-modal-btn' onClick={this.handlePreviewChange}>{this.state.previewButton}</button>
          <button onClick={this.fileExport} className="open-modal-btn">Save</button>
          <button className='open-modal-btn' onClick={this.handleInputChange}>Reset</button>
				</div> 
					 
        <div>
          { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
            <Modal                
              className="modal"
              show={this.state.isShowing}
              close={this.closeModalHandler}>
            </Modal>
        </div>

				<div>
          { this.state.isShowingHelp ? <div onClick={this.closeModalHandlerHelp} className="back-drop"></div> : null }
            <ModalHelp
              className="modal"
              show={this.state.isShowingHelp}
              close={this.closeModalHandlerHelp}>
            </ModalHelp>
        </div>  
						
      </div>
    )}
  }

export default Converter;
