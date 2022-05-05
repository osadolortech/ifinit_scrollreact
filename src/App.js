import React, { useState, useEffect, useRef } from "react";
import './App.css'
import Calm from './animals/calm_cat.jpg'
import Cat from './animals/crazy_cat.jpg'
import Dog from './animals/crazy_dog.jpg'
// import Piglet from './animals/piglet.jpg'
// import Sloth from './animals/sloth.jpg'
// import Squre from './animals/squre.jpg'



const App = () =>{

    // const list = document.querySelector('.image')

    const [page,setpage] = useState(1)
    const [ifinit,setifinit] = useState({List:[Calm,Cat,Dog]})
    // const [photo, setphoto] = useState('')
    // const [item,setitems] = useState([
    //     {
    //     id: 1,
    //     image: Calm,
    //     name: "Calm Cat"
    //     },
    //     {
    //         id: 2,
    //         image: Dog,
    //         name: "Sleppy Dog"
    //     },
    //     {
    //         id: 3,
    //         image: Cat,
    //         name: "Crazy Cat"
    //     },
    //     {
    //         id: 4,
    //         image: Piglet,
    //         name: "Piglet"
    //     },
    //     {
    //         id: 5,
    //         image: Sloth,
    //         name: "Sloth"
    //     },
    //     {
    //         id: 6,
    //         image: Squre,
    //         name: "Squre"
    //     }
        
    // ])
const loader = useRef(null)

const menuscroll = (TINS) =>{
    const target = TINS[0]
    if(target.isIntersecting){
        setpage((page)=> page + 1)
    }
}

useEffect(()=>{
    let options = {
        root: null,
        rootMargin: "20px",
        threshold: 1.0
    }

    const user = new IntersectionObserver(menuscroll,options);
    if(loader.current){
        user.observe(loader.current)
    }
}, [])

useEffect(()=>{
    const newList = ifinit.List.concat([Calm,Cat,Dog])
    
    setifinit({
        List: newList
    })
},[page])

// const filter = (e) =>{
//     const keyword = e.target.value 
//     setphoto(keyword)
// }

// let imagesearch = item.filter(user=>{
//     return Object.keys(user).some(key=> 
//             user[key].toString().toLowerCase().includes(photo.toString().toLowerCase())
//         )
// })


    return (
        <div className="project-container">
            <header className="header">

                <div className="nav_container"> 
                    <input type="checkbox" className="toggle_nav" for="toggle"></input> 
                    <div className="hambuger"></div>

                    <nav className="nav">
                    
                        <a href="#Home">Home</a>
                        <a href="#Gallary">Gallary</a>
                        <a href="#Contacts">Contacts</a>
                        <a href="#About">About</a>
                    {/* <input className="input" type="text" placeholder="type to seach" value={photo} onChange={filter.bind(this)} /> */}
                    </nav>
                </div>
            </header>
           {ifinit.List.map((post, index) => {
               return(
                <div className="scroll">
               <img src={post} alt="animal"/>
               {/* <h4 className="nametag">{it.name}</h4> */}
               </div>
              
            
               )
           })}
            <div ref={loader}>
                <h3>Loading...</h3>
                </div>
           
        </div>
    )
}
export default App