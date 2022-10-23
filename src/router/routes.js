
import ViewDashboard from "../page/Dashboard/viewDashboard.js"; 
import viewRegister from "../page/registrar/renderRegister/viewRegister.js";
import viewRecord from "../page/record/renderRecord/viewRecord.js";


export const PATHS = {
    Tablero: {
        path: "/",
        template: ViewDashboard(),
    },
    Registrar: {
        path: "/Registro_Venta",
        template: viewRegister(),
    },
    Registro: {
        path: "/info",
        template: viewRecord(),
    },

}

