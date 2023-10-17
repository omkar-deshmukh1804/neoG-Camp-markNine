import { useEffect, useState } from 'react'
import './App.css'
import dummyData from './test.json'
import Card from './components/Card'
import Header from './components/Header'

import heroImage from '../public/hero.png'

function App() {

  const [food, setFood] = useState([])
  const [currentMenu, setCurrentMenu] = useState("")
  const [currentURL, setCurrentURL] = useState("https://api.spoonacular.com/recipes/complexSearch?cuisine=african&number=21&apiKey=20101bf63e5f4714a7952ceaca2aef7e")


  const menuOptions = [{id:0,name: "African"},{id:1,name: "Asian"},{id:2,name: "American"},{id:3,name: "British"},{id:4,name: "Cajun"},{id:5,name: "Caribbean"},{id:6,name: "Chinese"},{id:7,name: "Eastern European"},{id:8,name: "European"},{id:9,name: "French"},{id:10,name: "German"},{id:11,name: "Greek"},{id:12,name: "Indian"},{id:13,name: "Irish"},{id:14,name: "Italian"},{id:15,name: "Japanese"},{id:16,name: "Jewish"},{id:17,name: "Korean"},{id:18,name: "Latin American"},{id:19,name: "Mediterranean"},{id:20,name: "Mexican"},{id:21,name: "Middle Eastern"},{id:22,name: "Nordic"},{id:23,name: "Southern"},{id:24,name: "Spanish"},{id:25,name: "Thai"},{id:26,name: "Vietnamese"}]
  
  useEffect(() => {
    fetchData()
  }, [currentURL])

   async function fetchData () {
    fetch(currentURL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setFood([...data.results])
      })
    
  }

  const handleMenuChange = (getId) => {
    let getMenuItemFromLocal = menuOptions.filter((item, index) => item.id == getId)[0]
    let menuName = getMenuItemFromLocal.name.toLowerCase()
    let newURL = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${menuName}&number=21&apiKey=20101bf63e5f4714a7952ceaca2aef7e`
    setCurrentURL(newURL)

  }

  return (
    <>
      <div className='main--container'></div>
      <div className='bg-text'>
        <h1 className='intro--text'>SourDough</h1>
      </div>

      <Header menuOptions={menuOptions} handleMenuChange={handleMenuChange} />
      <Card food={food} />
      
    </>
  )
}

export default App
