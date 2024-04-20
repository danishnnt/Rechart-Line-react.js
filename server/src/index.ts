import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.get("/", (req, res) => {
 
  const graphdata = [
    {
      day : 1,
      name: 'Page A',
      uv: 1200,
      pv: 2400,
      amt: 2400,
    },
    {
      day : 2,
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      day : 3,
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      day : 4,
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      day : 5,
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      day : 6,
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      day : 7,
      name: 'Page G',
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
    {
      day : 8,
      name: 'Page A',
      uv: 1200,
      pv: 2400,
      amt: 2400,
    },
    {
      day : 9,
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      day : 10,
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      day : 11,
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      day : 12,
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      day : 13,
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      day : 14,
      name: 'Page G',
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
    {
      day : 15,
      name: 'Page A',
      uv: 1200,
      pv: 2400,
      amt: 2400,
    },
    {
      day : 16,
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      day : 17,
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      day : 18,
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      day : 19,
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      day : 20,
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      day : 21,
      name: 'Page G',
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
  ];

  res.json(graphdata);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
