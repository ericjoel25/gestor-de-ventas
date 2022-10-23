

 export function showHeader() {

    const InfoContainer = document.querySelectorAll('#data-register-container');
    const arrow = document.querySelectorAll('#arrow');
    for (let i = 0; i < InfoContainer.length; i++) {


        arrow[i].addEventListener('click', () => {

            //alert(i)
            const header = document.querySelectorAll('#data-register-btn-header');
            header[i].style.display = 'flex'
            arrow[i].style.display = 'none'
        })

        InfoContainer[i].addEventListener('dblclick', () => {

            //alert(i)
            const header = document.querySelectorAll('#data-register-btn-header');
            header[i].style.display = 'none'
            arrow[i].style.display = 'inline'
        })
    }


}