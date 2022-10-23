

function html(a) {
    return a[0]
}


export default function ViewDashboard() {

    return html`
        <section class="dashboard-container">
            <div class="dashboard-box">
                <div class="selling-daily">
                    <table id='dashboard-today_table'>
        
                        <thead class="today_table-header">
                            <tr>
                                <th>Día</th>
                                <th>Ventas</th>
                                <th>Total</th>
                                <th>Inversión</th>
                                <th>Ganancia</th>
                               
                            </tr>
                        </thead>
        
                        <tbody class="today_table-body">
                           
                        </tbody>
        
                    </table>

                     <p class="selling-daily-title">Datos Semanales</p>
        
                </div>
             
                <div class="selling-daily-graph">
                    <div class="box-selling">
                        <p class="box2-selling-Text">Domingo</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Lunes</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Martes</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Miércoles</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Jueves</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Viernes</p>
                        <span class="box2-selling"></span>
                    </div>
                    <div class="box-selling">
                        <p class="box2-selling-Text">Sábado</p>
                        <span class="box2-selling"></span>
                    </div>
                </div>
            </div>
        
            <div class="dashboard-box2">
                <div class="selling-monthly">
                    <table id='dashboard-today_table'>
        
                        <thead class="today_table-header">
                            <tr>
                                <th>Mes</th>
                                <th>Ventas</th>
                                <th>Total</th>
                                <th>Inversión</th>
                                <th>Ganancia</th>
                            </tr>
                        </thead>
        
                        <tbody class="monthly_table-body">
                          
                        </tbody>
        
                    </table>

                    <p class="selling-monthly-title">Datos Mensuales</p>
                </div>
         
                <div class="selling-monthy-graph">
                       <div class="box-monthy">
                            <p class="box2-monthy-Text">Ene</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Feb</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Mar</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Abr</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">May</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Jun</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Jul</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Ago</p>
                            <span class="box2-monthy"></span>
                        </div>

                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Sep</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Oct</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Nov</p>
                            <span class="box2-monthy"></span>
                        </div>
                        <div class="box-monthy">
                            <p class="box2-monthy-Text">Dic</p>
                            <span class="box2-monthy"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
   `
}