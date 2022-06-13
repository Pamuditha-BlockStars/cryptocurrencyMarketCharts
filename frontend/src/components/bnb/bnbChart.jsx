import React, { Component } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area} from 'recharts';

class BnbChart extends React.Component {

    constructor(props){
        super(props);

        this.getData = this.getData.bind(this);

        this.state = {
            BNB:[],
            Price_one: 0,
            Price_last: 0
        };
    }

    //get BNB prices in DB
    getData(e){
        axios.get('http://localhost:3001/getbnb')
            .then(async res => {
                await this.setState({BNB: res.data});
                const length = res.data.length-1;

                this.state.Price_one = res.data[0];
                this.state.Price_last = res.data[length];

                for(let i = 0; i>= length; i++){

                    if(this.state.Price_one > res.data[i]){
                        this.state.Price_one = res.data[i];
                    }

                    if(this.state.Price_last < res.data[i]){
                        this.state.Price_last = res.data[i];
                    }
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getData();
    }

    render() {

        return(
            <div className='Chart'>
                <AreaChart width={1200} height={430} data={this.state.BNB}
                           margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#043959" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#043959" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" />
                    <YAxis type="number" domain={[this.state.Price_one, this.state.Price_last]}/>
                    <Tooltip />
                    <Legend align="left" verticalAlign="top" height={40}/>
                    <Area type="monotone" dataKey="BNBprice" stroke="#043959" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
        );
    }
}

export default BnbChart;
