import { Instant } from "../Instant/Instant.js"


export function registerViewDataTable(data){

    const {format} =Instant()

   return `
   <tr>
      <td class='render-info-as-table-td'>
       <i class="fa-solid fa-user"></i>
       ${data.customer}
       </td>
      <td class='render-info-as-table-td'>${format(data.date, 'fecha','es','medium')}</td>
      <td class='render-info-as-table-td'>${data.id}</td>
      <td class='render-info-as-table-td'>$${data.sellCostTotal}</td>
      <td> 
        <button id='data-register-delete-btn'>
          <i class="fa-solid fa-trash"></i>
       </button>
      </td>

    <td> 
      <button id='data-register-update-btn'>
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </td>

    <td> 
    <button id='print-btn'>
      <i class="fa-solid fa-print"></i>
    </button>  
   </td>

     
   </tr>
   
   ` 
}