

function html(a) {
    return a[0]
}


export default function viewRegister() {

    return html`
        <main class='register-container'>
            <header class='register-header'>
                <button class='register-header-btn'>+</button>
               
             <span id="changeTable" >      
                <i id='showScard' class="fa-solid fa-table"></i>
                <i id='showListTable' class="fa-solid fa-rectangle-list"></i>
              </span>
            
                
                
            </header>
        
            <!-- Modal content -->
            <div class="register-modal-content">
        
                <div class="register-modal-body animate">
        
                    <form id="register-form">
        
                        <label for="Nombre Cliente" id='title-register-form'>Nombre Cliente:</label>
                        <input type="text" id="input-register-form" name="Nombre Cliente">
        
                        <label for="Producto" id='title-register-form'>Producto:</label>
                        <select id="input-register-form" class="selectIpunt">
                            <option>Vestido</option>
                            <option>Top</option>
                            <option>Pantalón</option>
                            <option>Zapatilla tenis</option>
                            <option>Correa</option>
                            <option>Falda</option>
                            <option>Traje de baño</option>
                        </select>
                        <!--  <input type="text" id="input-register-form" name="Producto"> -->
        
                        <label for="Costo De Venta" id='title-register-form'>Costo De Venta:</label>
                        <input type="text" id="input-register-form" name="Costo De Venta">
        
                        <label for="Costo De Compra" id='title-register-form'>Costo De Compra:</label>
                        <input type="text" id="input-register-form" name="Costo De Compra">
        
                        <label for="Cantidad" id='title-register-form'>Cantidad:</label>
                        <input type="text" id="input-register-form" name="Cantidad">
                    </form>
        
                    <div id='register-btn-form-container'>
                        <button id="cancel-btn-register-from" class="btn-hover">Cerrar</button>
                        <button id="save-btn-register-from" class="btn-hover">Agregar</button>
                    </div>
        
                </div>
        
                <div class="register-bill animate">
        
                    <table id='bill_table'>
        
                        <thead class="bill-table-header">
                            <tr>
                                <th>Nombre</th>
                                <th>Producto</th>
                                <th>Costo de venta</th>
                                <th>Consto de compra</th>
                                <th>Unidades</th>
                                <th> Borrar</th>
                               
                            </tr>
                        </thead>
        
                        <tbody id='bill_table_body'>
        
                        </tbody>
        
                    </table>
                    <button id="save-btn-table" class="btn-hover">Guardar</button>
                </div>
        
            </div>
            <!--/ The Modal The Modal of saving information -->
        
        
        
            <!-- Modal update -->
            <div class="register-update-modal-content">
                <div class="register-update-modal-body animate">
        
                    <form id="register-update-form">
                        <label for="Articulo" id='title-register-update-form'>Nombre Cliente:</label>
                        <input type="text" id="input-register-update-form" name="Nombre Cliente">
        
                        <label for="Articulo" id='title-register-update-form'>Producto:</label>
                        <input type="text" id="input-register-update-form" name="Articulo">
        
                        <label for="Costo" id='title-register-update-form'>Costo De Venta:</label>
                        <input type="text" id="input-register-update-form" name="Costo De Venta">
        
                        <label for="Costo" id='title-register-update-form'>Costo De Compra:</label>
                        <input type="text" id="input-register-update-form" name="Costo De Compra">
        
                        <label for="Cantidad" id='title-register-update-form'>Cantidad:</label>
                        <input type="text" id="input-register-update-form" name="Cantidad">
                    </form>
        
                    <div id='register-update-btn-form-container'>
                        <button id="cancel-btn-register-update-from" class="btn-hover">Cancelar</button>
                        <button id="save-btn-register-update-from" class="btn-hover">Guardar</button>
                    </div>
        
                </div>
        
                <div class="register-bill animate">
        
                    <table id='bill_table'>
        
                        <thead class="bill-table-header">
                            <tr>
                                <th>Nombre</th>
                                <th>Producto</th>
                                <th>Costo de venta</th>
                                <th>Consto de compra</th>
                                <th>Unidades</th>
                                <th> Borrar</th>
                                <th>Actualizar </th>
                            </tr>
                        </thead>
        
                        <tbody id='bill_update_table_body'>
        
                        </tbody>
        
                    </table>
                    <button id="save-btn-update-table" class="btn-hover">Guardar</button>
                </div>
            </div>
            </div>
            <!--/ The Modal The Modal of saving information -->
        
        
        
            <!-- Detele Delete Modal-->
            <div id="delete_modal">
                <div class="delete_modal_content">
                    <div class="delete_modal_body animate">
        
                        <div class="delete_text_container">
                            <h3>¿Esta seguro que desea borrar esta información? </h3>
                        </div>
        
                        <div class='delete_btn_container'>
                            <button id="cancel_delete_btn">Descartar</button>
                            <button id="delete_btn">Borrar</button>
                        </div>
        
                    </div>
                </div>
            </div>
            <!-- /Delete Modal -->
        
            <div id='InfoContainer2'></div>
        
            <div id='InfoContainer'></div>
        </main>
    `
}


/**
 * 
 * 
 */