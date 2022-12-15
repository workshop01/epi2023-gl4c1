import React, { createContext, useEffect, useState } from 'react'
import { json } from 'react-router-dom'

export const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {

    const ch = "Bonjour"
    const [list, setList] = useState([])
    const [all_list, setAllList] = useState([])


    useEffect(()=>{
        if(all_list.length === 0)
        afficher();
    } )
    const afficher = async()=>{
        const rep = await fetch('http://localhost:5001/getList')
        const data = await rep.json()
        console.log(data)
        setList(data)
        setAllList(data) // copie de la liste pour le filtrage
    }
    const send = async(e, newFeed) => {
        e.preventDefault();
        console.log("send work", newFeed)
        /*  setList([{...newFeed , id:list.length+1} , ...list]) */
        /* si la liste est vide */

        if (newFeed._id) {
            //edit

            // methode 1 
            // setList(list.map((element)=> element.id !== newFeed.id ?  element : newFeed))

            //methode 2  : 
            /* let p = list.findIndex((element) => element.id == newFeed.id)
            let newlist = list
            newlist[p] = newFeed
            console.log(newlist)
            setList([...newlist])
            setAllList([...list]) */
            const rep = await fetch('http://localhost:5001/updateFeedback/'+newFeed._id , {
                method : 'PUT',
                headers : {'Content-Type' : "application/json"},
                body : JSON.stringify(newFeed)
            })
            const data = await rep.json()
            console.log(data)
            afficher()
        } else {


            const rep = await fetch('http://localhost:5001/addFeedback' , {
                method : 'POST',
                headers : {'Content-Type' : "application/json"},
                body : JSON.stringify(newFeed)
            })
            const data = await rep.json()
            console.log(data)
            afficher()
           /*  setList([{ ...newFeed, id: list.length > 0 ? list[0].id + 1 : 1 }, ...list])
            setAllList([{ ...newFeed, id: list.length > 0 ? list[0].id + 1 : 1 }, ...list])
 */
        }
    }

    const deleteFeedback = async(id) => {

       /*  setList(list.filter((element) => element.id !== id))
        setAllList([...list]) */


        const rep = await fetch(`http://localhost:5001/removeFeedback/${id}` , {
            method : 'DELETE'
        })
        const data = await rep.json()
        console.log(data)
        afficher()
    }

    const [editedFeed, editFeed] = useState({})

    const edit = (feedback) => {
        editFeed(feedback)
        console.log(editedFeed)
    }
    const sort = () => {
        setList([...list.sort((a, b) => b.rating - a.rating)])
    }
    const filter = (value) => {
        console.log(all_list)
        setList(all_list.filter((element) => element.text.toLowerCase().includes(value.toLowerCase())))
    }
  return (
    
    <FeedbackContext.Provider value={{ch , list , send , deleteFeedback , edit , sort , filter , editedFeed}}>
            {children}
    </FeedbackContext.Provider>
  )
}
