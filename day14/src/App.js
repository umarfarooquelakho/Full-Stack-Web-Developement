import React from 'react'
import Hero from './Hero'
import CustomButton from './CustomButton'
import './App.css'
import profile from './profile.jpg'

// export default function App() {
//   let login = true;
//   let styles = {
//     color : "white",
//     backgroundColor : "green",
//     padding : "1rem 3rem",
//     margin : "10px",
//     borderRadius : "10px",
//     fontSize : "24px",
//     fontWeight : "500",
//   }
//   let btn1 = {...styles};
//   btn1.backgroundColor="white";
//   btn1.color="black";
//   btn1.border="2px solid black"
//   return (
//     <div>
//       <h1>App Component</h1>
//       <Hero name = "John Doe" login={login} age={19} welcome={true}/>
//       <CustomButton title={"Login"} styles = {styles}/>
//       <CustomButton title={"Signup"} styles={btn1}/>
//       <CustomButton styles={btn1}/>
//     </div>
//   )
// }

// export default function App() {
//   const user = {
//     name : "Heddy Lamar",
//     imageUrl : 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
//     imageSize : 90,
//   }
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img 
//       className='avatar'
//       src={user.imageUrl} 
//       alt={'image of' + user.name} 
//       style={{
//         width : user.imageSize,
//         height : user.imageSize,
//         borderRadius : '50%'
//       }}/>
//     </>
//   )
// }

// const product = [
//   {title : 'Cabbage' , isFruit : false , id : 1},
//   {title : 'Garlic' , isFruit : false , id : 2},
//   {title : 'Apple' , isFruit : true , id : 3},
//   {title : 'Banana' , isFruit : true , id : 4}
// ];

// export default function App() {
//   const listItems = product.map(product =>
//     <li
//       key = {product.id}
//       style = {{
//         color : product.isFruit? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
   
// )
// }

export default function App() {
  return (
    <>
      <div className='heading'>
        <h1 className='headUmar'>Umar Farooque Lakho</h1>
        <p className='para'>I'm Student Of Software Engineering in Mehran University Of Engineering And Technology Jamshoro</p>
      </div>
      <h3 className='headingskill'>Skills</h3>
      <ul className='Skills'>
        <li className='skill'>Full Stack Web Development</li>
        <li className='skill'>Mobile App Development</li>
        <li className='skill'>Java Developer</li>
        <li className='skill'>C++ Developer</li>
        <li className='skill'>UI / UX Designer</li>
      </ul>
      <img src={profile} alt='Profile Pic' className='profile' />
    </>
  )
}