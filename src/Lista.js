import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faTrash} from '@fortawesome/free-solid-svg-icons';
import './index.css';

export const Lista = ({item,setTotal,total, deleteItem}) => {
    const{id,value,price,cantidad}=item
    
	const [contador,setContador] = useState(cantidad)
    
    const onCantidad= (cantidad,tipo) =>{
        if(cantidad >= 0){
            let subtotal
        	if(tipo === "+1"){
            	subtotal = total+price
            
        	}
        	else{
            	subtotal = total-price
            
        	}
            setContador(cantidad)
            setTotal(subtotal)
        }
    }
    
    
    return (
        <div className='item-container'>
					<div className='item-name'>
					<>
					<span>{value}</span><br></br>
					<span className="price">${price}</span>
					</>
					</div>
					<div className='quantity'>
						<button onClick={()=> onCantidad(contador-1,"-1")}>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<span>{contador} </span>
						<button onClick={()=> onCantidad(contador+1,"+1")}>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
						<button onClick={() => deleteItem(id,contador*price)}>
							<FontAwesomeIcon icon={faTrash}/>
						</button>
					</div>
				</div>
    )
}