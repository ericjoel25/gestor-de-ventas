

const html = (a) => a[0]

export function infoTableStyle(data) {

    return html`
    <section class="render-info-as-table-container">
    
        <aside class="render-info-as-table-body">
            <table class='render-info-as-table'>
    
                <thead class="render-info-as-table-header">
                    <tr class="render-info-as-table-tr">
                        <th class="render-info-as-table-th">Cliente</th>
                        <th class="render-info-as-table-th">Fecha</th>
                        <th class="render-info-as-table-th">No. Recibo</th>
                        <th class="render-info-as-table-th">Total</th>
                        <th class="render-info-as-table-th"> Borrar</th>
                        <th class="render-info-as-table-th">Actualizar</th>
                        <th class="render-info-as-table-th">Imprimir</th>
                    </tr>
                </thead>
    
                <tbody id='render-info-as-table-body'>
    
                </tbody>
    
            </table>
        </aside>
    
    
    
    </section>
    
   `

}

/**
  
 
 */