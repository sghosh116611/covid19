import React, {useState, useEffect} from "react";
import {fetchDailyData} from "../APIs/covidDataTracker";
import {Line, Bar} from "react-chartjs-2";

class Charts extends React.Component{
    state = {
        dailyData: []
    };
    
    async componentDidMount() {
        const dailyDataFetched = await fetchDailyData();
        this.setState({dailyData: dailyDataFetched});
        //console.log(this.state);
        
    };
    
    render(){
        const {dailyData} = this.state;
        const {data,country} = this.props;
        const {confirmed,recovered,deaths} = data;
        console.log(confirmed);
        return(
            <div>
            {!country ?
            (dailyData.length ? <Line 
                    data={
                        {
                        labels: dailyData.map(({date})=>(date)),
                        datasets:[{
                            label:"Infected",
                            data: dailyData.map(({confirmed}) => (confirmed)),
                            borderColor: '#3333ff',
                            fill: true
                        },{
                            labels:"Deaths",
                            data: dailyData.map(({deaths}) => (deaths)),
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0,5)',
                            fill: true
                        }]
                    }}
                /> : null ) :
                (data.confirmed ? <Bar 
                    data = {{
                        labels:['Infected','Recovered','Deaths'],
                        datasets: [{
                            label:'People',
                            backgroundColor:['rgba(0,0.255.0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                            data:[confirmed.value,recovered.value,deaths.value]
                        }]
                    }}
                    options={{
                        legend:{display:false},
                        title: {display:true, text: `Current state in ${country}`}
                    }}
                /> : null)
            }
            </div>
        );
    }
    
}

export default Charts;