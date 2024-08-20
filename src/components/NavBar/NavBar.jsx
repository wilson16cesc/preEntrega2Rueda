import logo from '../../img/cosas.png';
import CardWidget from './CardWidget';
import ItemListContainer from './ItemListContainer';

const NavBar = () =>{

    return(
      <div> 
        <nav class="bg-gray-800 py-6 relative">
          <div class="container mx-auto flex">
              <div class="flex flex-grow">
                <img src={logo} alt="logo" width="50" height="50" />
              </div>
              
              <div class="flex flex-grow justify-between">
                <div>
                      <a href="#" class="text-white lg:mr-7">Inicio</a>
                      <a href="#" class="text-white lg:mr-7">Plasticos</a>
                      <a href="#" class="text-white lg:mr-7">Ropa</a> 
                      <a href="#" class="text-white ">Papelieria</a>
                </div>
                <div>
                    <CardWidget/>
                </div>
              </div>  
          </div>
       </nav>
       <ItemListContainer/>
     </div>
    
    )
}

export default NavBar;