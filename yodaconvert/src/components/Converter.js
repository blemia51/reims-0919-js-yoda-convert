import React, {Component} from "react";
import '../App.css'
import Modal from './Modal'
import ModalHelp from './ModalHelp'
import Highlighter from 'react-highlight-words';
const md = require('markdown-it')({
  html: true,
  //linkify: true,
	//typographer: true,
	breaks: true,
	highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
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
						input: 'test'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


  handleInputChange(e) {
    const newText = e.target.value
		const htmlTexte = md.render(e.target.value)
		this.countWords()
		//this.hilight()
    this.setState({ 
      inputText: newText,
			outputText: htmlTexte,
			
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

  highlightedCode(e) {
    return hljs.highlightAuto(e).value
   

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
  
    
  render () {
    return (
      <div className='main'>
				
        <div className="textContainer">
          
            
          <textarea className="input-text" name="inputText" rows="30" cols="50" r esize='none' value={this.state.inputText} onChange={this.handleInputChange}>    
          </textarea>
      
          {/*<textarea className="output-text" name="outputText" rows="30" cols="50" resize='none' value={this.state.outputText} readonly >*/}
          <div className='html-editor'>
					  <Highlighter 
							highlightClassName='textEditors'
							highlightStyle={{color:'red',fontSize:'16px'}}
              autoEscape={true}
              searchWords={[this.state.input]}
              textToHighlight={this.state.outputText}
            />
					</div>
				</div>

					{/*</textarea>*/}
					<div className='button-container'>
				    <p>mots: {this.state.counter}</p>
				    <button className="open-modal-btn" onClick={this.openModalHandler}>MarkDown Tips</button>
            <button className="open-modal-btn" onClick={this.openModalHandlerHelp}>MarkDown Help</button>
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


    )
}}

export default Converter;
