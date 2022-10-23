import { renderRegisterViewData } from "../../../components/shareComponents/registerViewData.js";
import { showHeader } from "../../../components/shareComponents/showHeader.js";
import { printDiv } from "../../../components/shareComponents/printDiv.js";
import {infoTableStyle} from './infoTableStyle.js';
import { registerViewDataTable } from "../../../components/shareComponents/registerViewDataTable.js";



export function showRegisterData(document) {

    
    /**
     *  getInfo() this function get the information from the localStorage
     *  And render to the InfoContainer
     */ 

async function getRegisterData() {
    
    let show = false
    let data_ventas = [];
    let Container = document.getElementById('InfoContainer');
    let data = localStorage.getItem('Erica_Fashion_Data');
    const showTablebotton = document.getElementById('changeTable');
    const showListTable = document.getElementById('showListTable');
    const showScard = document.getElementById('showScard');



    if (data !== null) {
        let info = await JSON.parse(data)
        data_ventas.unshift(...info.Info)
    }



    showTablebotton.addEventListener('click', ()=>{
   
        const tableContainer = document.getElementsByClassName('render-info-as-table-container')[0]

        if(show){
          
            tableContainer.style.display='flex'
            showListTable.style.display='none'
            showScard.style.display='block'
           

        }else{
            tableContainer.style.display='none'
            showListTable.style.display='block'
            showScard.style.display='none'
            //Container.innerHTML = ``
        }

        show = !show
      
    })


   

   
    Container.innerHTML = infoTableStyle()
 
    data_ventas.slice(0, 9).map((sells) => {
        const tableboy = document.getElementById('render-info-as-table-body'); 
        tableboy.innerHTML += registerViewDataTable(sells);
        Container.innerHTML += renderRegisterViewData(sells);
    

  })




  showHeader()
  printDiv(data_ventas)

        //data-register-container

      
   return data_ventas
  
 }




return {
        getRegisterData

    }


}