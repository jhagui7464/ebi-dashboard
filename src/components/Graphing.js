import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {data} from "./graphMockData";
import "../styles/Graphing.css"

class Graphing extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 20000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let chartThatChanges = data[this.state.textIdx % data.length];

    return (
      <div>
        <h1 className="graphingTitle">{chartThatChanges.customer}</h1>
        <LineChart
          width={600}
          height={300}
          data={chartThatChanges.stats}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="cost" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

export default Graphing;
