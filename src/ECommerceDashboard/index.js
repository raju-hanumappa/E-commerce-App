import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import popup from 'sweetalert'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Dashboard() {

  const [data,setData]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sample-api-deploy.vercel.app/users');
        setData(response.data);
      } catch (error) {
        popup("oops!", "Couldn't able to fetch the data, Please Try Again Later!", "error");
        console.error('Error fetching data:', error);
      }
    };
    
  
    fetchData();
  }, []);

  return (
    <div className='dashboard'>
      <div className='dashboard-heading'>E-commerce Dashboard</div>

      <div className='line-chart_and_bar-chart'>
        <ResponsiveContainer className='line-chart'>
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 0
            }}

          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
            <Line type="monotone" dataKey="users" stroke="#ffc658" fill="#ffc658" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>


        <ResponsiveContainer className='bar-chart'>
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
            <Bar dataKey="users" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='pie-charts'>
        <ResponsiveContainer className='pie-chart-one'>
          <div className='pie-chart-one-heading'>Sales : </div>
          <PieChart>
            <Pie
              dataKey="sales"
              isAnimationActive={false}
              data={data}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer className='pie-chart-two'>
          <div className='pie-chart-two-heading'>Revenue : </div>
          <PieChart>
            <Pie
              dataKey="revenue"
              isAnimationActive={false}
              data={data}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer className='pie-chart-three'>
          <div className='pie-chart-three-heading'>Users : </div>

          <PieChart>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              outerRadius={80}
              fill="#ffc658"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
