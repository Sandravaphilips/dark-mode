import React from "react";
// import useDarkMode from "../hooks/useDarkMode";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData, strokeValue }) => {
  // const [darkMode, ] = useDarkMode('value', false);
  // const [strokeColor, setStrokeColor] = useState('')
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
  .filter(data => data);
  
  // useEffect(() => {
  //   // debugger
  //   const body = document.querySelector('body');
  //   (body.className === 'dark-mode') ? setStrokeColor('#d884c6') : setStrokeColor('#8884d8')
  // }, [])
  // let strokeValue = darkMode ?'#d884c6' : '#8884d8';
  // console.log(strokeValue)
  return (
    <LineChart width={1100} height={300} data={formattedData}>
      <Line type= "monotone" dataKey="value" stroke={strokeValue} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
