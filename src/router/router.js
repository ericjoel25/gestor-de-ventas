

export class Router {
    constructor(paths){

      this.paths = paths;
      this.initRouter()
    }

    initRouter(){

        let {location:{pathname}} = window
       // let URI = hash ===''?'home':hash
        const URI= pathname ==='/'?'Tablero': pathname ==='/index.html'?'Tablero':'Tablero'      
          
        //console.log(URI)
     
        this.load(URI.replace('#',''))
       
    }

   load(pages='Tablero'){
    
        const page =pages
        const paths = this.paths; 
        let {path, template} = paths[page]
        const $CONTAINER = document.getElementById('routes')
        $CONTAINER.innerHTML=template

        //console.log(paths)
    
       // window.history.pushState({}, 'Done', path)
       // window.history.replaceState({}, 'Done', path)
        window.location.hash=page 
       
       
       
       
    }
}