
const html =(Item)=>Item[0]

export default function viewRecord(){
    return html`
       <main class="record-container">
           <header class="header-record">
             <select id="searchOption" name="searchOption"  >
                 <option>Recibo</option>
                 <option>Cliente</option>
             </select>
             <input class="search" />
             <button class="searchButton" >Buscar</button>
           </header>
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
                        <button id="cancel-btn-register-update-from">Cancelar</button>
                        <button id="save-btn-register-update-from">Guardar</button>
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
                    <button id="save-btn-update-table">Guardar</button>
                </div>
            </div>
            </div>
            <!--/ The Modal The Modal of saving information -->
            
           <section id="record-info">

           </section>
          
       </main>
    `
}