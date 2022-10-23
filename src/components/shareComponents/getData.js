
export async function getData(old_data) {

    let get_old_info = localStorage.getItem('Erica_Fashion_Data');
    let info = await JSON.parse(get_old_info)
    
    if(info !==null){
        old_data.unshift(...info.Info);
    }
    

}