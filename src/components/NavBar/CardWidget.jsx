import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CardWidget = ()=>{

    return(
    <div class="text-white border py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-800">
        Tus Compras {" "}  
        <FontAwesomeIcon icon={faBell} />{" "}
        <i>2</i>

        
    </div>
    )
}

export default CardWidget;