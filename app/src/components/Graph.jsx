import {
    ResponsiveContainer ,
    LineChart ,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
   } from 'recharts'

 
 const Graph = ({data}) => {
  

   return (
     
      <ResponsiveContainer width="80%" aspect={3}>
       <LineChart data={data} >
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="pv"/>
         <YAxis dataKey="uv"/>
         <Tooltip/>
         <Line type="monotone" dataKey="amt" stroke='red' />
         <Line type="monotone" dataKey="uv"  stroke='green'/>
       </LineChart>
     </ResponsiveContainer>
     
   )
 }
 
 export default Graph