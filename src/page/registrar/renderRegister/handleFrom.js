import { showRegisterData } from "./showRegisterData.js";
import {DeleteRegister} from '../delete/deleteRegister.js';
import { updateRegister } from "../update/updateRegister.js";


export function handleForm(document){

   const { getRegisterData}=showRegisterData(document)

   let open = true;

   const btnOpen= document.getElementsByClassName('register-header-btn')[0];
   const modalBody=document.getElementsByClassName('register-modal-body')[0]
   const tableBody = document.getElementById('bill_table_body');
   const tableContainer =document.getElementsByClassName('register-bill')[0]
   const btnTable = document.getElementById('save-btn-table');
   const btnCancel= document.getElementById('cancel-btn-register-from');
   let btnSave = document.getElementById('save-btn-register-from');
   const modal = document.getElementsByClassName('register-modal-content')[0]; 
  
   let Data ={
    Info:[]
 }


 btnCancel.addEventListener('click', ()=>{
     
    let formData = document.querySelectorAll('#input-register-form');
      // modal.style.display = "none"; 
      if(!open){
        modalBody.classList.add('animate2'); 
        tableContainer.classList.add('animate2'); 
        
        setTimeout(()=>{
            modal.style.display='none';
        },500)

        open = true
      }


       getRegisterData().then(()=> {
            DeleteRegister(document)
            updateRegister(document)
        
        })

        formData =[
            formData[0].value='',
            formData[1].value='',
            formData[2].value='', 
            formData[3].value='',
            formData[4].value='',
           
         ]

        

       
    // getRegisterData().then(()=> Delete_Info(document))
  
   })



   btnSave.addEventListener('click', Save)


   // Open Save Modal
   btnOpen.onclick= function(){

     if(!open){
        modalBody.classList.add('animate2'); 
        tableContainer.classList.add('animate2'); 
        
       setTimeout(()=>{
         modal.style.display='none';
       },500)


     }else{
        modalBody.classList.remove('animate2');
        tableContainer.classList.remove('animate2'); 
        modal.style.display='flex'
     }
   
     open = !open

  
  }



 async function Save() { 

  let formData = document.querySelectorAll('#input-register-form');

   
  let getting_info =[{
      id:new Date().getTime(),
      date:new Date(),
      day:new Date().getDay(),
      customer:formData[0].value,
      product:formData[1].value,
      sellCost:formData[2].value,
      purchaseCost:formData[3].value,
      uni: formData[4].value
  }]

  tableBody.innerHTML=``

if(formData[0].value === ''|| formData[1].value === '' || 
    formData[2].value === '' || formData[3].value === '' || 
    formData[4].value=== '' ){

        let input = document.querySelectorAll('#input-register-form')
       
        if(formData[0].value === '') input[0].style.backgroundColor='#F29F76'
        if(formData[1].value === '') input[1].style.backgroundColor='#F29F76'
        if(formData[2].value === '') input[2].style.backgroundColor='#F29F76'
        if(formData[3].value === '') input[3].style.backgroundColor='#F29F76'
        if(formData[4].value === '') input[4].style.backgroundColor='#F29F76'
      
        
      return;
  }
  try {
      
      Data.Info.unshift(...getting_info) 

   } catch (error) {
       //console.log(error)

   }

Data.Info.map((item, index)=>{
   
    tableBody.innerHTML +=`
               <tr>
                <td>${item.customer}</td>
                <td>${item.product}</td>
                <td>${item.sellCost}</td>
                <td>${item.purchaseCost}</td>
                <td>${item.uni}</td>
                <td><i id='delete-table-info' class="fa-solid fa-trash"></i> </td>
               </tr>   
      `
      
  }) 
 
   formData =[
   // formData[0].value='',
    formData[1].value='',
    formData[2].value='', 
    formData[3].value='',
    formData[4].value='',
   
 ]
  
 handleDeteleButton(document);

}



function handleDeteleButton(document) {

  let delete_table_btn = document.querySelectorAll('#delete-table-info');


  delete_table_btn.forEach((btn, index) => {

    btn.onclick = () => {

     removeUpdateInfo(index, document);

    }




  })

}



function removeUpdateInfo(Index, doc) {

  tableBody.innerHTML = ``


  const remove = Data.Info.filter((list, index) => {
    const res = Index !== index

    return res
  })

  for (let list of remove) {
    tableBody.innerHTML += `
    <tr>
      <td>${list.customer}</td>
      <td>${list.product}</td>
      <td>${list.sellCost}</td>
      <td>${list.purchaseCost}</td>
      <td>${list.uni}</td>
      <td><i id='delete-table-info' class="fa-solid fa-trash"></i> </td>
     
    </tr> `
  }

  handleDeteleButton(doc)
  Data.Info = remove;

}


btnTable.onclick= async function(){

    let data ={
        Info:[]
        }
    
    let getData= localStorage.getItem('Erica_Fashion_Data');
    let info = await JSON.parse(getData)

      
    //data.Info.unshift(...info.Info)
    //console.log(Data.Info.length)
    
    if(Data.Info.length ===0) return; 
    
    let resolve = Data.Info.reduce((prev, next) =>{
        prev.id = next.id; 
        prev.date= next.date;
        prev.day= next.day;
        prev.customer=next.customer; 
        prev.product += next.product+' '; 
        prev.sellCost += next.sellCost+' '; 
        prev.purchaseCost += next.purchaseCost+' '; 
        prev.uni += next.uni+' '; 
        prev.sellCostTotal +=(parseFloat(next.sellCost * next.uni)); 
        prev.purchaseCostTotal += parseFloat(next.purchaseCost * next.uni); 
        prev.uniTotal += parseFloat(next.uni.trim()); 
    
        return prev; 
    
    },{id:'', date:'',day:'', customer:'', product:'', sellCost:'', 
    purchaseCost:'', uni:'', sellCostTotal:0, 
    purchaseCostTotal:0, uniTotal:0
    
    })
    

    if(info !==null){
      data.Info.unshift(resolve, ...info.Info)
    }
    

    localStorage.setItem('Erica_Fashion_Data', JSON.stringify(data));
    
    Data.Info=[]
    tableBody.innerHTML=``

    
}




}