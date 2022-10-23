
export default function showDashboardInfo(document) {


  const today_table = document.querySelectorAll('.today_table-body')[0];
  const box2_selling = document.querySelectorAll('.box2-selling');
  const box2_monthy = document.querySelectorAll('.box2-monthy');
  const monthly_table = document.querySelectorAll('.monthly_table-body')[0];

  let Data = []

  let data = localStorage.getItem('Erica_Fashion_Data');
  let respone = JSON.parse(data);

  if(respone !== null){
    Data.push(...respone.Info)
  }

  let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]
  let Day = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  

  function verify(item) {

    const today = new Date()
    const dayOfWeek = today.getDay();
    const dayOfMonth = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const next = dayOfMonth - dayOfWeek;
    const end =  dayOfMonth + (6 - dayOfWeek)

    const time = new Date(item)
    const timeDate = time.getDate()
    const timeMonth = time.getMonth()
    const timeYear = time.getFullYear()


   // console.log(next, timeDate, end)

    if (next <= timeDate && timeDate <= end && month === timeMonth && timeYear === year) {
      return true;
    }else if( month + 1== timeMonth && timeDate == 1 && timeYear === year) {
      //console.log('ok')
      return true;
     
    }

   


  }

  function verify2(item) {

    const year = new Date().getFullYear();
    const timeYear = new Date(item).getFullYear();

    if (year === timeYear) return true;


  }



  function numberFormat(n){
    if(n!==''){

      let resolve = new Intl.NumberFormat('es-Mx').format(n); 
      
      return resolve;

    }else{

      return ''; 
  
  }


    
}




  // ''; 


 async function renderFirstTable() {

    let weekData = new Array(7)
    let n = 0;

    function inicial(day) {

      if (weekData[day] === undefined) {
        weekData[day] = {
          date: Data[0].date,
          uniTotal: 0,
          sellCostTotal: 0,
          purchaseCostTotal: 0,
          win: 0

        }

      }

    }


    for (let item of Data) {

      let day = new Date(item.date).getDay()

      if (verify(item.date)) {

        inicial(day);

          weekData[day].date = item.date,
          weekData[day].uniTotal += item.uniTotal,
          weekData[day].sellCostTotal += item.sellCostTotal,
          weekData[day].purchaseCostTotal += item.purchaseCostTotal
          weekData[day].win += (item.sellCostTotal - item.purchaseCostTotal)

      }

    }


    let Total = weekData.reduce((a, b) => {
      a.win = a.win + b.win;

      return a

    }, { win: 0 })


  
    let porcent = 100 / Total.win;
  
    myAnimation(weekData, porcent, box2_selling)

    for (let list of weekData) {


      if (list !== undefined) {

        let day = new Date(list.date).getDay()
        const long = (list.win * porcent)-5

        today_table.innerHTML += `
                  <tr>
                    <td>${Day[day]}</td>
                    <td>${list.uniTotal}</td>
                    <td>$${numberFormat(list.sellCostTotal)}</td>
                    <td>$${numberFormat(list.purchaseCostTotal)}</td>
                    <td>$${numberFormat(list.win)}</td>
                  </tr>`

        //console.log(weekData[n])
        } else {
          today_table.innerHTML += `
            <tr>
              <td>${Day[n]}</td>
              <td>0</td>
              <td>$0</td>
              <td>$0</td>
              <td>$0</td>
            </tr>`
         box2_selling[n].innerText = `0%`
      }


      n++;

    }

    return 'done'
  }

  function registerMothlyData() {


    let monthly = new Array(12);
   

    function inicial(month) {

      if (monthly[month] === undefined) {
        monthly[month] = {
          date: Data[0].date,
          uniTotal: 0,
          sellCostTotal: 0,
          purchaseCostTotal: 0,
          win: 0

        }

      }

    }


    for (let list of Data) {
      let month = new Date(list.date).getMonth()

      if (verify2(list.date)) {

        inicial(month);
          monthly[month].date = list.date,
          monthly[month].uniTotal += list.uniTotal,
          monthly[month].sellCostTotal += list.sellCostTotal,
          monthly[month].purchaseCostTotal += list.purchaseCostTotal
          monthly[month].win += (list.sellCostTotal - list.purchaseCostTotal)

      }
      // console.log(month)
    }


    let Total = monthly.reduce((a, b) => {
      a.win = a.win + b.win;

      return a

    }, { win: 0 })


    let porcent = 100 / Total.win;

 
    myAnimation(monthly, porcent, box2_monthy)
    
    let index = 0;
    for (let list of monthly) {
   
      if (list !== undefined) {

        let month = new Date(list.date).getMonth();

        monthly_table.innerHTML += `
              <tr>
                <td>${months[month]}</td>
                <td>${numberFormat(list.uniTotal)}</td>
                <td>${numberFormat(list.sellCostTotal)}</td>
                <td>${numberFormat(list.purchaseCostTotal)}</td>
                <td>${numberFormat(list.win)}</td>
              </tr>`
       /* box2_monthy[month].style.height = `${(list.win * porcent) - 4}%`
        box2_monthy[month].style.backgroundColor = '#405F6C';
        box2_monthy[month].innerText = `${(list.win * porcent).toFixed(1)}%`*/

       // console.log(list.win)
      } else {
        monthly_table.innerHTML += `
          <tr>
            <td>${months[index]}</td>
            <td>${0}</td>
            <td>${0}</td>
            <td>${0}</td>
            <td>${0}</td>
          </tr>`

        box2_monthy[index].innerText='0%'

      }

     //console.log(index)
 
      index++;
     
    }
  }


  function myAnimation(Data, porcent, elementTobeAnimete){

    let scale =1
    let valor = []
    let num= []
    let next= 0
  
    Data.forEach((element, index) => {
       if(element !== undefined){
        let h = (element.win * porcent).toFixed(0)
      
        valor.push({index, h})
        num.push(0)

      }

    });
   


    
     
    let animation = setInterval(()=>{

      if ( valor.length === next) {

          clearInterval(animation)
         

        }

      if(valor.length > next){

        if(valor[next].h == num[next]){
           //n =0
          // console.log(num[next])
          scale= 0
          next +=1

       }

      if (valor.length !== next) {

        elementTobeAnimete[valor[next].index].style.height =`${scale-1}%`
        elementTobeAnimete[valor[next].index].style.backgroundColor = '#405F6C';
        elementTobeAnimete[valor[next].index].innerText = `${(scale)}%`

        }

        scale+= 1
        num[next]+=1
      }  

    

    },10)

  
  }


registerMothlyData()
renderFirstTable()

}