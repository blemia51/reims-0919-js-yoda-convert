import React, {Component} from "react";
import '../App.css';

class HelpSyntax extends Component {
  constructor (props) {
    super(props)
    this.state={
      helpSyntax:[],
      helpSyntaxExtended: []
      
  }
}

  componentDidMount() {
    fetch('http://localhost:8000/api/helpSyntax')
    .then(res => res.json())
    .then(data =>
      this.setState({
        helpSyntax: data.cheat_sheet[0].basic_syntax,
        helpSyntaxExtended: data.cheat_sheet[1].extended_syntax
    }))
    

    
  }

  render() {
    return (
      <div>
        {this.state.helpSyntax.map(res => {
          return <div className='help-syntax'>
              <div>{res.element}</div>
              <div>{res.syntax}</div>
            </div>})}

        {this.state.helpSyntaxExtended.map(res =>{
          return <div className='help-syntax'>
              <div>{res.element}</div>
              <div>{res.syntax}</div>
            </div>})}

      </div>
    )
  }
  
}
export default HelpSyntax
