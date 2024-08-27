import { useState } from 'react';
import classNames from 'classnames';


import jarra from '../../img/jarra1.png';

const ItemListContainer = ()=>{

    const [isTraslate, setIsTraslate] = useState(false);

    const cerrarCarrito = () => {
        setIsTraslate(!isTraslate);
       
    }

    const classesCarrito = classNames('fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out', {
        'translate-x-full': isTraslate,
      });

    return(

        <div class="flex justify-end">


            <div className={classesCarrito}>
            <div class="p-4 border-b">
                <h2 class="text-xl font-bold">Carrito de Compras</h2>
                <button class="text-red-500 hover:text-red-700 float-right" onClick={cerrarCarrito}>✖️</button>
            </div>
            <div class="p-4">
            
                <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img class="w-16 h-16 object-cover mr-4" src={jarra} alt="Producto 1" />
                    <div>
                    <h3 class="text-lg font-semibold">Producto 1</h3>
                    <p class="text-gray-600">Cantidad: 1</p>
                    </div>
                </div>
                <span class="text-gray-800 font-semibold">€29.99</span>
                </div>
                
                <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img class="w-16 h-16 object-cover mr-4" src="https://via.placeholder.com/64" alt="Producto 2" />
                    <div>
                    <h3 class="text-lg font-semibold">Producto 2</h3>
                    <p class="text-gray-600">Cantidad: 2</p>
                    </div>
                </div>
                <span class="text-gray-800 font-semibold">€49.99</span>
                </div>
                
                <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img class="w-16 h-16 object-cover mr-4" src="https://via.placeholder.com/64" alt="Producto 3" />
                    <div>
                    <h3 class="text-lg font-semibold">Producto 3</h3>
                    <p class="text-gray-600">Cantidad: 3</p>
                    </div>
                </div>
                <span class="text-gray-800 font-semibold">€19.99</span>
                </div>
            </div>
            <div class="p-4 border-t">
                <div class="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>€99.97</span>
                </div>
                <button class="mt-4 w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Ir a Pagar</button>
            </div>
            </div>

        </div>


    )
}

export default ItemListContainer;