import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import {useEffect, useState} from 'react'

function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem( 'grouping' ) || "Status")
  const [ordering, setOrdering] = useState(localStorage.getItem( 'ordering' ) || "Title")
  
  // initially defined to deal with the case of empty lists
  const statuses = [
    {
      name: 'Backlog',
      icon: '/mnt/data/Backlog.svg', // Replace with actual path or import
    },
    {
      name: 'Todo',
      icon: '/mnt/data/add.svg', // Replace with actual path or import
    },
    {
      name: 'In progress',
      icon: '/mnt/data/Img - Medium Priority.svg', // Replace with actual path or import
    },
    {
      name: 'Done',
      icon: '/mnt/data/Done.svg', // Replace with actual path or import
    },
    {
      name: 'Canceled',
      icon: '/mnt/data/Cancelled.svg', // Replace with actual path or import
    },
  ];

  // Priorities with levels and icons
  const priorities = [
    {
      level: 'Urgent',
      score: 4,
      icon: '/mnt/data/Img - High Priority.svg', // Replace with actual path or import
    },
    {
      level: 'High',
      score: 3,
      icon: '/mnt/data/Img - High Priority.svg', // Replace with actual path or import
    },
    {
      level: 'Medium',
      score: 2,
      icon: '/mnt/data/Img - Medium Priority.svg', // Replace with actual path or import
    },
    {
      level: 'Low',
      score: 1,
      icon: '/mnt/data/Img - Low Priority.svg', // Replace with actual path or import
    },
    {
      level: 'No priority',
      score: 0,
      icon: null, // No icon for no priority
    },
  ];

  // Sets the values for initial ordering and grouping
  useEffect(() => {
    setOrdering(localStorage.getItem('ordering') || "Title");
    localStorage.setItem("ordering", localStorage.getItem('ordering') || 'Title');
    setGrouping(localStorage.getItem('grouping') || "Status");
    localStorage.setItem("grouping", localStorage.getItem('grouping') || 'Status');
  }, []);


  // navbar for the control of view, dashboard displays the data in accordance for selected grouping and ordering
  return (
    <div className="App">
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering}/>
      <Dashboard statuses={statuses} priorities={priorities} priorityScores={priorityScores} grouping={grouping} ordering={ordering} />
    </div>  
  );
}

export default App;
