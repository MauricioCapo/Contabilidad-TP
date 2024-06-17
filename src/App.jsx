import React, { useState } from 'react';
import './App.css';
import App2 from './FacturaB.jsx'; // Asegúrate de importar tu componente FacturaB correctamente

function App() {
  const [showFacturaA, setShowFacturaA] = useState(true); // Estado para controlar la visibilidad de la factura A
  const [showFacturaB, setShowFacturaB] = useState(false); // Estado para controlar la visibilidad de la factura B

  const handleA = () => {
    setShowFacturaA(true);
    setShowFacturaB(false);
  };

  const handleB = () => {
    setShowFacturaA(false);
    setShowFacturaB(true);
  };

  const invoiceItems = Array.from({ length: 12 }, (_, index) => (
    <div className="invoice-item" key={index}>
      <input type="number" className="cantidad-input1" />
      <input type="text" className="descripcion-input1"/>
      <input type="number" className="precio-unitario-input1" />
      <input type="number" className="importe-input1" />
    </div>
  ));

  return (
    <>
    
      <div className='Links1'>
        <nav className='links'>
          <ul>
            <li><a href="#" onClick={handleA}>FACTURA "A"</a></li>
            <li><a href="#" onClick={handleB}>FACTURA "B"</a></li>
            <li><a href="#">FACTURA "C"</a></li>
          </ul>
        </nav>
      </div>
      {showFacturaA && (
        <div className='espacioH'>
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
                  <input type="text" className='input1' />
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
        </div>
      )}
      {showFacturaB && (
        <div>
          <App2 />
        </div>
      )}
      <footer>
        <div className='espacio-fo'> </div>
      </footer>
    </>
  );
}

export default App;