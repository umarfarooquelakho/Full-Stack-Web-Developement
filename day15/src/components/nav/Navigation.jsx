import React from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
    let list = ["Home" , "About" , "Service" , "Contact"];
  return (
    <>
        <ul className={styles.listItems}>
            {list.map((item)=> (
                <li key={item} className={styles.listItem}>{item}</li>
            ))}
        </ul>
    </>
  )
}
