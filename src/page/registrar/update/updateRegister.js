import { DeleteRegister } from "../delete/deleteRegister.js";
import { renderRegisterViewData } from "../../../components/shareComponents/registerViewData.js";
import { getData } from "../../../components/shareComponents/getData.js";
import { printDiv } from "../../../components/shareComponents/printDiv.js";
import { infoTableStyle } from "../renderRegister/infoTableStyle.js";
import { registerViewDataTable } from "../../../components/shareComponents/registerViewDataTable.js";
import { showHeader } from "../../../components/shareComponents/showHeader.js";


export function updateRegister(doc) {


  let old_data = []
  let show = false
  let table_Data = [];

  const tableBody = doc.getElementById('bill_update_table_body');
  const updateButtons = doc.querySelectorAll('#data-register-update-btn');
  const openUpdateModal = doc.getElementsByClassName('register-update-modal-content')[0];
  let Container = doc.getElementById('InfoContainer');
  const btnTable = doc.getElementById('save-btn-update-table');
  const showTablebotton = doc.getElementById('changeTable');

  /*(async function Get_Info() {
    let get_old_info = localStorage.getItem('Erica_Fashion_Data');
    let info = await JSON.parse(get_old_info)

    old_data.unshift(...info.Info);
  }
  )()*/


  getData(old_data);



  async function updateInfo() {

    let data = {
      Info: []
    }

    let resolve = table_Data.reduce((prev, next) => {
      prev.id = next.id;
      prev.date = next.date;
      prev.day = next.day;
      prev.customer = next.customer;
      prev.product += next.product + ' ';
      prev.sellCost += next.sellCost + ' ';
      prev.purchaseCost += next.purchaseCost + ' ';
      prev.uni += next.uni + ' ';
      prev.sellCostTotal += (parseFloat(next.sellCost * next.uni));
      prev.purchaseCostTotal += parseFloat(next.purchaseCost * next.uni);
      prev.uniTotal += parseFloat(next.uni.trim());

      return prev;

    }, {
      id: '', date: '', day: '', customer: '', product: '', sellCost: '',
      purchaseCost: '', uni: '', sellCostTotal: 0,
      purchaseCostTotal: 0, uniTotal: 0

    })

    const getDataWithoutOldOne = old_data.filter((item) => {

      const res = resolve.id !== item.id

      return res
    })


    data.Info.unshift(resolve, ...getDataWithoutOldOne)

    localStorage.setItem('Erica_Fashion_Data', JSON.stringify(data));


    Container.innerHTML = infoTableStyle()

    showTablebotton.addEventListener('click', ()=>{
  
      const tableContainer = doc.getElementsByClassName('render-info-as-table-container')[0]
      const showListTable = doc.getElementById('showListTable');
      const showScard = doc.getElementById('showScard');
      
      if(show){
          tableContainer.style.display='flex'
          showListTable.style.display='none'
          showScard.style.display='block'
          Container.innerHTML = infoTableStyle()
         
      }else{
          tableContainer.style.display='none'
          showListTable.style.display='block'
          showScard.style.display='none'
         
      }
      show = !show
    })

    data.Info.map((lista) => {

      const tableboy = doc.getElementById('render-info-as-table-body');

      tableboy.innerHTML += registerViewDataTable(lista);

      Container.innerHTML += renderRegisterViewData(lista); 

     

    })  

   
    printDiv(data.Info)
    table_Data = []

  }


  function handleUpdateButton(document) {
    let update_table_btn = document.querySelectorAll('#update-table');


    update_table_btn.forEach((btn, index) => {

      btn.onclick = () => {
        let formData = document.querySelectorAll('#input-register-update-form');
        const btnSave = document.getElementById('save-btn-register-update-from');

        formData = [
          formData[0].value = table_Data[index].customer,
          formData[1].value = table_Data[index].product,
          formData[2].value = table_Data[index].sellCost,
          formData[3].value = table_Data[index].purchaseCost,
          formData[4].value = table_Data[index].uni
        ]

        btnSave.onclick = function () {
          addUpdateInfo(index, document);

        }

      }




    })

  }

  function handleDeteleButton(document) {

    let delete_table_btn = document.querySelectorAll('#delete-table');


    delete_table_btn.forEach((btn, index) => {

      btn.onclick = () => {

       removeUpdateInfo(index, document);

      }




    })

  }


  /**
   * removeUpdateInfo() is use to remove infor from the table.
   */

  function removeUpdateInfo(Index, doc) {

    tableBody.innerHTML = ``


    const remove = table_Data.filter((list, index) => {
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
        <td><i id='delete-table' class="fa-solid fa-trash"></i> </td>
        <td> <i id='update-table' class="fa-solid fa-pen-to-square"></i> </td>
      </tr> `
    }

    handleDeteleButton(doc)
    table_Data = remove;
    handleUpdateButton(doc)
    //console.log(remove)


  }


  /*
   * addUpdateInfo() is use to add infor or value to the input
   */
  function addUpdateInfo(index, doc) {

    let formData2 = doc.querySelectorAll('#input-register-update-form');

    table_Data[index].customer = formData2[0].value
    table_Data[index].product = formData2[1].value
    table_Data[index].sellCost = formData2[2].value
    table_Data[index].purchaseCost = formData2[3].value
    table_Data[index].uni = formData2[4].value

    tableBody.innerHTML = ``
    for (let list of table_Data) {
      tableBody.innerHTML += `
      <tr>
        <td>${list.customer}</td>
        <td>${list.product}</td>
        <td>${list.sellCost}</td>
        <td>${list.purchaseCost}</td>
        <td>${list.uni}</td>
        <td><i id='delete-table' class="fa-solid fa-trash"></i> </td>
        <td> <i id='update-table' class="fa-solid fa-pen-to-square"></i> </td>
      </tr> `
    }

    handleUpdateButton(doc);
    handleDeteleButton(doc)

    formData2 = [
      formData2[0].value = '',
      formData2[1].value = '',
      formData2[2].value = '',
      formData2[3].value = '',
      formData2[4].value = '',

    ]


  }


  /*
   *  updateButtons is use to identify the button. 
   */

  updateButtons.forEach((button, index) => {

   


    button.addEventListener('click', () => {
     
      openUpdateModal.style.display = 'flex';
      const btnCancel = doc.getElementById('cancel-btn-register-update-from');

      const halfLong = updateButtons.length/2
      const virifyClass = button.className ==='card-btn'; 
      const position = virifyClass? parseFloat(index)- halfLong: index
     
      let search = old_data.filter((item) => {
        const resolve = old_data[position].id === item.id

        return resolve;

      })
  
   

      /**
       * Change string to array to be able to set that informa in an object
       */

      const products = search[0].product.split(' ');
      const purchaseCosts = search[0].purchaseCost.split(' ');
      const sellCosts = search[0].sellCost.split(' ');
      const unis = search[0].uni.split(' ');

  
      tableBody.innerHTML = ``;

      /*
        This for() is use to render the info to the table. 
      */
      for (let index in products) {
        if (products[index] !== '') {

          table_Data.push({
            id: search[0].id,
            date: search[0].date,
            day: search[0].day,
            customer: search[0].customer,
            product: products[index],
            sellCost: sellCosts[index],
            purchaseCost: purchaseCosts[index],
            uni: unis[index]

          })


          tableBody.innerHTML += `
              <tr>
              <td>${search[0].customer}</td>
              <td>${products[index]}</td>
              <td>${sellCosts[index]}</td>
              <td>${purchaseCosts[index]}</td>
              <td>${unis[index]}</td>
              <td><i id='delete-table' class="fa-solid fa-trash"></i> </td>
              <td> <i id='update-table' class="fa-solid fa-pen-to-square"></i> </td>
    
              </tr> `

        }

      }


      /* Initialize the functions 
       * handleUpdateButton() and  
       * handleDeteleButton() 
       */

      handleUpdateButton(doc);
      handleDeteleButton(doc);

      btnTable.onclick = function () {

        updateInfo().then(() => {

          /* Call the fuction DeleteRegister() and updateRegister()
             again to be able to update or dalete more Item.
          */

          DeleteRegister(doc)
          updateRegister(doc)


        })

        openUpdateModal.style.display = "none"


      }




      btnCancel.onclick = function () {
        openUpdateModal.style.display = 'none';
        table_Data = []
      }


    })
  })




}