import React from 'react';
import Cards from './Cards';
import CountryPicker from './CountryPicker';
import Charts from './Charts';
import {fetchData} from "../APIs/covidDataTracker";

class Tracker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:{},
      country: ''
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  async componentDidMount() {
    const resData = await fetchData();
    this.setState({data: resData});
  }

  async handleCountryChange (country) {
    const resData = await fetchData(country);
    this.setState({data: resData, country: country});
  }

  render()  {
    const {data, country} = this.state;
     return (
       <div>
          <Cards data={data}/>
          <CountryPicker handleCountryChange = {this.handleCountryChange}/>
          <Charts data={data} country={country}/>
       </div>   
     );
  }
}

export default Tracker;
