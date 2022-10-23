
import { Instant } from "../Instant/Instant.js";

export function renderRegisterViewData(data){

    const {format}= Instant()
   
     
    function numberFormat(n){
   
       if(n!==''){
   
           let resolve = new Intl.NumberFormat('es-Mx').format(n)
           return resolve;
   
       }else{
   
           return ''; 
   
       }
           
       }   
   
    function renderTd(uni, product, sellCost){
           
           const Product= product.split(' ')
           const Uni = uni.split(' ')
           const SellCost= sellCost.split(' ') 
       
           let render =``; 
       
           for (let index in Product){
       
               render +=`
               <tr>
                   <td id='info-td'>${numberFormat(Uni[index])}</td>
                   <td id='info-td'>${Product[index]}</td>
                   <td id='info-td'>${numberFormat(SellCost[index])}</td>
       
               </tr>   
               `
          
           }
        
       
           return render; 
           /**<td>${sells.uni}</td>
           <td>${sells.product}</td>
           <td>${sells.sellCost}</td> */
           
       
       }  
   
       
       return `
       <section id='data-register-container'>
       <div id='data-register-btn-header'>
           <button id='data-register-delete-btn' class='card-delete-btn'>
             <i class="fa-solid fa-trash"></i>
           </button>
           <button id='data-register-update-btn' class='card-btn'>
             <i class="fa-solid fa-pen-to-square"></i>
           </button>
           <button id='print'>
             <i class="fa-solid fa-print"></i>
           </button>
       </div>
   
       <header id='info-header'>        
         <p id='info-header-text'><i id='arrow' class="fa-solid fa-chevron-down"></i> Erica Fashion</p>
         <p id='info-header-title2'><span id='info-header-title'>Fecha:</span> ${format(data.date, 'fecha', 'es', 'medium', 'short')}</p>
         <p id='info-header-title2'><span id='info-header-title'>Cliente:</span> ${data.customer}</p>
         <p id='info-header-title2'><span id='info-header-title'>No. Recibo:</span> ${data.id}</p>
       </header>
       
       <div id='data-register-body'>
           <table id='info-table'>
               <tr>
                   <th id='info-th'>Unidades</th>
                   <th id='info-th'>Producto</th>
                   <th id='info-th'>Costo</th>
               </tr>  
   
               ${renderTd(data.uni, data.product, data.sellCost)}
          
           </table> 
           <footer id='data-footer'>
             <p  id='info-total-text'>Total: <span>${numberFormat(data.sellCostTotal)}</span></p>
           </footer>
       </div>
     </section> `
   
   }