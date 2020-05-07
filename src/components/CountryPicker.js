import React from "react";
import {fetchcountries} from "../APIs/covidDataTracker";
import { FormControl, NativeSelect } from "@material-ui/core";

class CountryPicker extends React.Component{
    state = {
        countries: []
    };

    async componentDidMount(){
        const countries = await fetchcountries();
        this.setState({countries});
    }

    render(){
        const {countries} = this.state;
        return(
        <div>
            <FormControl>
                <NativeSelect defaultValue = "" onChange = {(e) => this.props.handleCountryChange(e.target.value) }>
                    <option value="">Global</option>
                    {countries.map((country,i) => <option key = {i} value={country.name}>{country.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
        );
    }
    
}

export default CountryPicker;