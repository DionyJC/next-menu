"use client"

import React, { useState } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { recipes } from "../data";

const Search = ({setName,setData}) => {
  const [recetas, setrecetas] = useState(null);
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('chicken')

  const onSearch = async (e) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    console.log(res)
    if (!res.ok) {
      return;
    }
    const data = await res.json()
    setData(data)
    
  }

  const handleAnimalChange = (value) => {
    setrecetas(value);
  };

  return (
    <div className="flex justify-center items-center mt-5 md:mt-10 mb-4 gap-4">
      <Select
        label="Platos"
        placeholder="Seleccione un Plato"
        selectionMode="single" // Cambiado a "single"
        className="w-52 md:max-w-xs mt-3"
        value={category}
        onChange={(e)=>{
            setCategory(e.target.value)
            setName(e.target.value)
           
            }}
      >
        {recipes.map((recipe) => (
          <SelectItem key={recipe.value} value={recipe.value} className="w-full">
            {recipe.label}
          </SelectItem>
        ))}
      </Select>

   
      

      
    </div>
  );
};

export default Search;
