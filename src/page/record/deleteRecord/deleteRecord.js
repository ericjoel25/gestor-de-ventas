
import { renderRegisterViewData } from "../../../components/shareComponents/registerViewData.js";
import { showHeader } from '../../../components/shareComponents/showHeader.js'
import { printDiv } from '../../../components/shareComponents/printDiv.js';
import { updateRecord } from "../update/updateRecord.js";
import { getData } from "../../../components/shareComponents/getData.js";


export function DeleteRecord(doc){

    let old_data = []
    let buttons = doc.querySelectorAll('#data-register-delete-btn');
    const modal = doc.getElementById("delete_modal");
    const modalBody = doc.getElementsByClassName('delete_modal_body')[0]
    const delete_button = doc.getElementById('delete_btn');
    const close_button = doc.getElementById('cancel_delete_btn');
    let Container = doc.getElementById('record-info');
  
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

    getData(old_data);

   /*(async function Get_Info() {
        let get_old_info = localStorage.getItem('Erica_Fashion_Data');
        let info = await JSON.parse(get_old_info)

       if(info !==null){
        old_data.unshift(...info.Info);
       }
    }
    )()*/


  
    /** / Get_Info this funtion get the information from the localStorage  */


  //



    
  async function save_new_info(arr) {

        let data = {
            Info: []
        }
    
        data.Info.unshift(...arr)
    
        // await Neutralino.storage.setData('userDetails', JSON.stringify(data));
      localStorage.setItem('Erica_Fashion_Data', JSON.stringify(data));
    
     Container.innerHTML = ``
     data.Info.map((sells) => {

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

    let search = old_data.filter((item) => {
            const resolve = old_data[index].id !== item.id

            return resolve;

        })

        delete_button.onclick = function () {
            save_new_info(search).then(() => {
                    DeleteRecord(doc, old_data)
                    updateRecord(doc)
                    printDiv(old_data)
                })
            modal.style.display = "none"


        }

    })


})
    
 
showHeader()


}