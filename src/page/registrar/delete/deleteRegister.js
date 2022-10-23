
import {updateRegister} from '../update/updateRegister.js';
import { renderRegisterViewData } from "../../../components/shareComponents/registerViewData.js";
import { showHeader } from '../../../components/shareComponents/showHeader.js';
import { infoTableStyle } from '../renderRegister/infoTableStyle.js';
import { registerViewDataTable } from '../../../components/shareComponents/registerViewDataTable.js';
import { printDiv } from '../../../components/shareComponents/printDiv.js';
import { getData } from '../../../components/shareComponents/getData.js';


export function DeleteRegister(doc){

    let old_data = []
    let show = false
    let buttons = doc.querySelectorAll('#data-register-delete-btn');
    const modal = doc.getElementById("delete_modal");
    const modalBody = doc.getElementsByClassName('delete_modal_body')[0]
    const delete_button = doc.getElementById('delete_btn');
    const close_button = doc.getElementById('cancel_delete_btn');
    let Container = doc.getElementById('InfoContainer');
    const showTablebotton = doc.getElementById('changeTable');




    /**
   * This close the detele modal 
   */
    close_button.onclick = () => {
      
        modalBody.classList.add('animate2'); 
        
        setTimeout(()=>{

            modalBody.classList.remove('animate2');
            modal.style.display ="none";
             
        },500)
        
     }
     
    /*
    * / This close the detele modal 
    */
 
    /** Get_Info this funtion get the information from the localStorage  */

   /*(async function Get_Info() {
        let get_old_info = localStorage.getItem('Erica_Fashion_Data');
        let info = await JSON.parse(get_old_info)

        old_data.unshift(...info.Info);
    }
    )()*/
    getData(old_data)

  
    /** / Get_Info this funtion get the information from the localStorage  */


  //



    
  async function save_new_info(arr) {

        let data = {
            Info: []
        }
    
        data.Info.unshift(...arr)
    
        // await Neutralino.storage.setData('userDetails', JSON.stringify(data));
      localStorage.setItem('Erica_Fashion_Data', JSON.stringify(data));

  
      
      Container.innerHTML = infoTableStyle();
      //  Container.innerHTML = ``
     showTablebotton.addEventListener('click', ()=>{
  
        const tableContainer = doc.getElementsByClassName('render-info-as-table-container')[0]
        const showListTable = doc.getElementById('showListTable');
        const showScard = doc.getElementById('showScard');
        
        if(show){
            tableContainer.style.display='flex'
            showListTable.style.display='none'
            showScard.style.display='block'
           
        }else{
            tableContainer.style.display='none'
            showListTable.style.display='block'
            showScard.style.display='none'
        }
        show = !show
      })
        data.Info.map((sells) => {
            const tableboy = doc.getElementById('render-info-as-table-body');

            tableboy.innerHTML += registerViewDataTable(sells);

            Container.innerHTML += renderRegisterViewData(sells)
    })
    
    }
    
  
    
/* 
    save_new_info() this function save the new information without the one to be delate.
    And render new HTML 
*/

    buttons.forEach((button, index) => {

    button.addEventListener('click', () => {

    modal.style.display ='flex';

    const halfLong = buttons.length/2
    const virifyClass = button.className ==='card-delete-btn'; 
    const position = virifyClass? parseFloat(index)- halfLong: index
   

    let search = old_data.filter((item) => {
            const resolve = old_data[position].id !== item.id

            return resolve;

        })

        delete_button.onclick = function () {
            save_new_info(search).then(() => {
                    DeleteRegister(doc, old_data)
                    updateRegister(doc)
                    printDiv(old_data)
                })
            modal.style.display = "none"


        }

    })


})
    
 
showHeader()


}