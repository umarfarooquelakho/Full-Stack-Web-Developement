import React from 'react'
import Navigation from '../components/nav/Navigation'
import Card from '../components/card/Card'
import styles from './Home.module.css'

export default function Home() {
  const smapleData = [
    {name : "Umar" , email : "lakhomuzamil@gmail.com" , review : "Highly Recommended" , rating : 5},
    {name : "Hasnain" , email : "hasnain@gmail.com" , review : "Good System" , rating : 4},
    {name : "Daniyal" , email : "daniyal@gmail.com" , review : "Best System ever Use" , rating : 5},
    {name : "Kashif" , email : "kashifali@gmail.com" , review : "Good Product" , rating : 4},
    {name : "Habib" , email : "habibullah@gmail.com" , review : "Highly Recommended" , rating : 5},
  ]
  return (
    <>
        <Navigation />
        <h1 className={styles.title}>Welcome to Home Page</h1>
        
        <div className={styles.customers}>
          {smapleData.map((item , index) =>( 
            <Card key={index} data={item} />
          ))}
        </div>
    </>
  )
}
