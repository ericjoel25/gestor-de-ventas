import { getData } from "../../../components/shareComponents/getData.js"; 
import { renderRegisterViewData } from "../../../components/shareComponents/registerViewData.js";
import { showHeader } from "../../../components/shareComponents/showHeader.js";
import { printDiv } from "../../../components/shareComponents/printDiv.js";
import { updateRecord } from "../update/updateRecord.js";
import { DeleteRecord } from "../deleteRecord/deleteRecord.js";

export function searchRecord(doc){

   const data=[]

   const searchButton = doc.getElementsByClassName('searchButton')[0]
   const input = doc.getElementsByClassName('search')[0]
   const searchOption = doc.getElementById('searchOption')
   const container = doc.getElementById('record-info')

   getData(data);
   
   function seach(value, type){
      
       if(value ===''){
           return;
        }


       let resolve =data.filter((item)=>{
            let res = item[type] == value

            return res;
       }) 


      container.innerHTML =''
      resolve.map((lista)=>{
         
        container.innerHTML +=renderRegisterViewData(lista);

      })


      showHeader()
      printDiv(resolve)
      updateRecord(doc)
      DeleteRecord(doc)
      input.value=''
   }

   searchButton.onclick=function(){
  
    console.log(input.value ==='')
    console.log(searchOption.value)
    let type = searchOption.value==='Recibo'?'id':'customer';
    seach(input.value, type)
 
   }
  
}