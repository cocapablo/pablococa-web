import React, { useState, useId } from 'react'
import { useFilters } from "./hooks/useFilters.js";
import "./Filters.css";

//Las categorias se pueden obtener con las APIS 'https://dummyjson.com/products/categories' y 'https://dummyjson.com/products/category-list'

export function Filters() {
    const divStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center"
    }

    const {filters, setFilters} = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    
    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))    
    }

    return (
        <section className='filters'>
            <div style={divStyle}>
                <label htmlFor={minPriceFilterId}>Precio mínimo</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                >
                </input>
                <span>${filters.minPrice}</span>
            </div>

            <div style={divStyle}>
                <label htmlFor={categoryFilterId}>Categoría</label>   
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="groceries">Groceries</option>
                    <option value="beauty">Beauty</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                </select>
            </div>
        </section>
    )
}

