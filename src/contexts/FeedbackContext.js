import React, { createContext, useState } from 'react'

export const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {

    const ch = "Bonjour"
    const [list, setList] = useState([])
    const [all_list, setAllList] = useState([])
    const send = (e, newFeed) => {
        e.preventDefault();
        console.log("send work", newFeed)
        /*  setList([{...newFeed , id:list.length+1} , ...list]) */
        /* si la liste est vide */

        if (newFeed.id) {
            //edit

            // methode 1 
            // setList(list.map((element)=> element.id !== newFeed.id ?  element : newFeed))

            //methode 2  : 
            let p = list.findIndex((element) => element.id == newFeed.id)
            let newlist = list
            newlist[p] = newFeed
            console.log(newlist)
            setList([...newlist])
            setAllList([...list])

        } else {
            setList([{ ...newFeed, id: list.length > 0 ? list[0].id + 1 : 1 }, ...list])
            setAllList([{ ...newFeed, id: list.length > 0 ? list[0].id + 1 : 1 }, ...list])

        }
    }

    const deleteFeedback = (id) => {

        setList(list.filter((element) => element.id !== id))
        setAllList([...list])
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
