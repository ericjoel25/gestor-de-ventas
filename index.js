import {Router} from './src/router/router.js';
import { PATHS } from './src/router/routes.js';
import { handleForm } from './src/page/registrar/renderRegister/handleFrom.js';
import {showRegisterData} from './src/page/registrar/renderRegister/showRegisterData.js';
import { updateRegister } from './src/page/registrar/update/updateRegister.js';
import showDashboardInfo from './src/page/Dashboard/showDashboardInfo.js';
import showRecordInfo from './src/page/record/renderRecord/showRecordInfo.js';
import { DeleteRegister } from './src/page/registrar/delete/deleteRegister.js';
import { DeleteRecord } from './src/page/record/deleteRecord/deleteRecord.js';
import { updateRecord } from './src/page/record/update/updateRecord.js';
import { searchRecord } from './src/page/record/seach/searchRecord.js';



const ROUTER = new Router(PATHS);


const buttons = document.querySelectorAll('#button')

const d = document

const {getRegisterData} =showRegisterData(d);
const {getRecordData}=showRecordInfo(d)



function vefiryLocalStore() {
   let data ={
      Info:[]
      }

      let get_old_info = localStorage.getItem('Erica_Fashion_Data');
      let info =JSON.parse(get_old_info)
      
      if(info === null){
         localStorage.setItem('Erica_Fashion_Data', JSON.stringify(data));
      }
     
   
   }


   vefiryLocalStore()

 function navigation(){
   
   //showDashboardInfo(d); 
   
  
   const {hash} = window.location; 

      if(hash ==='#Tablero'){

         showDashboardInfo(d)

      }

      if(hash ===' #Registrar'){

         handleForm(d)
         getRegisterData().then(()=> {
            DeleteRegister(d)
            updateRegister(d)
         })


      }

      if(location ==='#Registro'){
     
         getRecordData().then(()=>{
            DeleteRecord(d)
            updateRecord(d)
            searchRecord()
         })
          btnColor(index)
       }

   function btnColor(index){

      // const btnName =btn.textContent
   
       if(index === 0){
         buttons[0].style.backgroundColor='#042D55';
         buttons[1].style.backgroundColor='#678998';
         buttons[2].style.backgroundColor='#678998';
 
       }

       if(index ===1){
         buttons[1].style.backgroundColor='#042D55';
         buttons[0].style.backgroundColor='#678998';
         buttons[2].style.backgroundColor='#678998';
       }

       if(index ===2){
         buttons[2].style.backgroundColor='#042D55';
         buttons[1].style.backgroundColor='#678998';
         buttons[0].style.backgroundColor='#678998';
       }
        //console.log(btnName, index)      
  
 }

 buttons.forEach((button, index) => {
   const {hash} = window.location; 

   button.addEventListener('click', (e)=>{
     
      const location =button.getAttribute(`data-${e.target.className}`)
      
      ROUTER.load(location); 

    if(location ==='Tablero'){
       showDashboardInfo(d)
       btnColor(index)
      // button.style.backgroundColor='blue';
    }

    if(location ==='Registrar'){
       handleForm(d)
     
       getRegisterData().then((data)=> {
          DeleteRegister(d)
          updateRegister(d)
       
       })

       btnColor(index)
    }

    if(location ==='Registro'){
     
      getRecordData().then(()=>{
         DeleteRecord(d)
         updateRecord(d)
         searchRecord(d)
      })
       btnColor(index)
    }
    
   })
 });
 

}


navigation()