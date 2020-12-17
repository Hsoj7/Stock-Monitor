import React from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import raw from '../../files/nasdaqlisted.txt';

// const fs = require('browserify-fs');

class Search_Company extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInput = this.handleInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state={value: e.target.value};
  }

  handleInput(e) {
    e.preventDefault();
    let userInput = this.state.value.toUpperCase();
    // alert('Input: ' + text);
    fetch(raw).then(r => r.text()).then(text => {
      // console.log('text decoded:', text);
      let searchRet = 0;
      searchRet = text.search(userInput);
      if(searchRet <= 0){
        alert('Symbol is not on the NASDAQ');
      } else {
        alert('Added ' + userInput + ' to your portfolio');
        // fs.writeFile('./portfolio.txt', 'TEST', function(err) {
        //   if(err) {
        //     console.log('ERROR: ' + err);
        //   }
        // });
        
        // const portfolio = '../../files/portfolio.txt';
        // fs.appendFile(portfolio, userInput, function (err) {
        //   if (err) throw err;
        //   console.log('should of saved');
        // });
      }
    });
  }

  render() {
    return (
      <div className='search_company_content'>
        <div><br/><br/><br/><br/></div>
        <h1 className='search_company'>Search Company</h1>
        <div><br/></div>
        <div>
          <center>
            <form onSubmit={this.handleInput}>
              <p className='p_custom'>Search for a company symbol. Ex: TSLA</p>
              <input type='text' onChange={this.updateInput}/>
              <div><br/></div>
              <Button className='custom-btn' type='submit'>Add</Button>
            </form>
          </center>
        </div>
      </div>
    ); 
  }
}

export default Search_Company;
