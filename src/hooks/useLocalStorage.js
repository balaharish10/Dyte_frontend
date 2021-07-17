import { useEffect,useState } from "react";
import React from 'react'
const prefix=`PROJECTS-`

export default function useLocalStorage(key,initialvalue) {
    const prefixedkey=prefix + key
    const[value,setvalue]=React.useState(()=>{ 
        const jsonvalue=localStorage.getItem(prefixedkey)
        if(jsonvalue!=null) return JSON.parse(jsonvalue)
        if(typeof initialvalue===`function`) return initialvalue()
        else return initialvalue

    })
    useEffect(()=>{
localStorage.setItem(prefixedkey,JSON.stringify(value))
    },[prefixedkey,value])
    return [value,setvalue]
}
