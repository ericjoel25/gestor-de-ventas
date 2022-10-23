
import {renderRegisterViewData} from '../../../components/shareComponents/registerViewData.js'
import { showHeader } from "../../../components/shareComponents/showHeader.js";
import { printDiv } from '../../../components/shareComponents/printDiv.js';

export default function showRecordInfo(document){


async function getRecordData() {
    
    let data_ventas = []
    const record_info = document.getElementById('record-info')
    let data = localStorage.getItem('Erica_Fashion_Data');


    if (data !== null) {
        let info = await JSON.parse(data)
        data_ventas.unshift(...info.Info)
    }

    
     
//record_info.innerHTML = ``
    
data_ventas.map((sells) => {
           
    record_info.innerHTML += renderRegisterViewData(sells)
                       
})
    
           

showHeader()
printDiv(data_ventas)    

 //data-register-container
      
    
 return data_ventas
    
}


  

return{
 getRecordData
}

    
    
}