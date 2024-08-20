import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import jarra from '../../img/jarra1.png';

const ItemListContainer = ()=>{

    return(

        <div class="flex flex-col items-start space-y-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="ruta/a/la/imagen1.jpg" alt="Producto 1" />
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Producto 1</div>
                <p class="text-gray-700 text-base">
                    Precio: $29.99
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Comprar ahora</span>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="ruta/a/la/imagen2.jpg" alt="Producto 2"/>
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Producto 2</div>
                <p class="text-gray-700 text-base">
                    Precio: $39.99
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Comprar ahora</span>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={jarra}alt="Producto 3" />
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Producto 3</div>
                <p class="text-gray-700 text-base">
                    Precio: $49.99
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Comprar ahora</span>
                </div>
            </div>
</div>



    )
}

export default ItemListContainer;