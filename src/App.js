import React, { useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { Lista } from './Lista';



const App = () => {
	const [seleccion,setSeleccion] = useState(null)
	const [total,setTotal] = useState(0)
	const [items, setItems] = useState([])
	const deleteItem = (indice,totalItem) =>{
		const nuevosItems = items.filter(item=>item.id !== indice)
		setItems(nuevosItems)
		setTotal(total-totalItem)
		

	}

	const options = [
		{ id: 1, value: "Coca-Cola en lata", label: 'Coca-Cola en lata', price:0.50, cantidad: 0 },
		{ id: 2, value: 'Chocolate', label: 'Chocolate', price:1.50, cantidad:0},
		{ id: 3, value: 'Botella de aceite', label: 'Botella de aceite', price:2.00, cantidad:0 },
		{ id: 4, value: 'Botella de agua', label: 'Botella de agua', price:0.75, cantidad:0 }
	  ]

	const onSubmit = () =>{
		if(!seleccion){
			alert("No se ha seleccionado ningún item")

		}
		else{
			setItems([...items,seleccion])
		}
		
	}
	return (
			
		<div className='app-background'>		
			<div className='main-container'>
				<div className='title'>
				<FontAwesomeIcon icon={faShoppingCart} /><h3 className='ti'>Lista de compras</h3>
				</div>
				{/* Picker */}
				
				<div className='add-item-box'>
				<Select placeholder="Seleccione un item" options={options} className="picker" onChange={(options)=>setSeleccion(options)} />
				<button className="add" onClick={onSubmit}>+</button>

				</div>
				<div className='item-list'>
					{items.map((item)=><Lista item={item} key={item.id} setTotal={setTotal} total={total} deleteItem={deleteItem} />
					)}
				</div>
				<div className='total'>Total: ${total}</div>
			</div>
		</div>
	);
};

export default App;
