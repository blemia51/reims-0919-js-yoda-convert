import React, {Component} from "react";
import '../App.css';

class BasicSyntax extends Component {
  constructor (props) {
    super(props)
    this.state={
      basicSyntax:[]
  }
}

  componentDidMount() {
    fetch('http://localhost:8000/api/basicSyntax')
    .then(res => res.json())
    .then(data =>
      this.setState({
        basicSyntax: data.basic_syntax
    }))
  }

  render() {
    console.log(this.state.basicSyntax)
    return (
      <div>
        {this.state.basicSyntax.map(res =>{
          return <div className='modal-syntax'>
            
              <div>{res.name}</div>
              <div>{res.examples[0].markdown}</div>
              <div> {res.examples[0].html}</div>

        
            </div>})}




      </div>
    )
  }
  
}
export default BasicSyntax
