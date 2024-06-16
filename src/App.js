import React from 'react';
import './App.css';

function App() {
  const invoiceItems = Array.from({ length: 12 }, (_, index) => (
    <div className="invoice-item" key={index}>
      <input type="number" />
      <input type="text" />
      <input type="number"  />
      <input type="number"  />
    </div>
  ));

  return (
    <>
    <div className='Links1'>
    <nav className='links'>
      <ul>
          <li><a href="#" >FACTURA A</a></li>
          <li><a href="#" >FACTURA B</a></li>
          <li><a href="#" >FACTURA C</a></li>
      </ul>
    </nav>
    </div>
    <div className='A'>
    </div>
    <div className="invoice-container">
    <header>
      <div className="invoice-header">
        <h1>FACTURA</h1>
        <div className='Letra'>
          <h1>A</h1>
        </div>
        <div className="header-info">
          <div>
            <span>FECHA:</span>
            <input type="date" />
          </div>
            <div className='border'>
            <div>
            <span>CUIT:</span>
            <input type="text" placeholder="Ej: 20-16009082-1" />
          </div>
          <div>
            <span>Ingresos Brutos: CM: </span>
            <input type="text" placeholder="Ej: 2092-845703-9" />
          </div>
          <div>
            <span>Inicio de Actividades:</span>
            <input type="text" placeholder="Ej: Abril 2009" />
          </div>
            </div>
         
        </div>
      </div>
    </header>

    <section className="invoice-body">
      <div className="client-info">
        <div className='border2'>
        <div>
          <label>Señor(es):</label>
          <input type="text" />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" />
        </div>
        <div>
          <label>Loc.:</label>
          <input type="text" />
        </div>
        </div>
      </div>

      <div className="sale-conditions">
        <div>
          <label>Condiciones de Venta:</label>
          <select>
            <option value="contado">Contado</option>
            <option value="cta_cte">Cta. Cte.</option>
          </select>
        </div>
        <div>
          <label>CUIT: </label>
          <input type="text" />
        </div>
        <div className='padding-arriba'>
          <label>IVA: </label> <p>Responsable Inscripto</p>
        </div>
        <div className='padding-arriba'> 
          <label>Remito N°: </label>
          <input type="text" />
        </div>
      </div>

      <div className="invoice-details">
        <div className="invoice-header">
          <div>Cantidad</div>
          <div>Descripción</div>
          <div>Precio Unitario</div>
          <div>Importe</div>
        </div>
        {invoiceItems}
      </div>
    </section>

    <footer>
      <div className="invoice-footer">
        <div>
          <label>Sub-Total:</label>
          <input type="number" />
        </div>
        <div>
          <label>I.V.A. Inscripto:</label>
          <input type="number" />
        </div>
        <div>
          <label>TOTAL $:</label>
          <input type="number" />
        </div>
      </div>
    </footer>
  </div>
  </>
);
}

export default App;