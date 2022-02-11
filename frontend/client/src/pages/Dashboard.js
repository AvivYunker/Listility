import { useEffect } from 'react'

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000')
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <h1>Dashboard Page</h1>
};

export default Dashboard;
