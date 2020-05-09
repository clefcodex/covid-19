import React, { Component } from 'react';
import { Cards, CountryPicker } from './components';


class App extends Component {

	constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {  	
  		fetch('https://covid19.mathdro.id/api')
  		.then(response => response.json())
  		.then(dataGot => this.setState({ data: dataGot }))
  }
  




		render() {
			const { data } = this.state;				
			return(
				<div>
					<Cards data={data} />
          <CountryPicker />
				</div>
			);
	}
}


export default App;