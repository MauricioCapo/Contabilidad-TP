import React from 'react';
import './FacturaB.css';

function App2() {
    const invoiceItems = Array.from({ length: 12 }, (_, index) => (
        <div className="invoice-item" key={index}>
          <input type="number" className="cantidad-input"  />
          <input type="text" className="descripcion-input"  />
          <input type="number" className="precio-unitario-input"  />
          <input type="number" className="importe-input"  />
        </div>
      ));
    
      return (
        <div className="invoice-container">
          <header>
            <div className="header-left">
              <div className="header-title">
                <h2>Apellido y Nombre</h2>
                <p>Rubro / Matrícula (opcional)</p>
                <p>Dirección</p>
                <p>Tel. (opcional)</p>
                <p>e-mail (opcional)</p>
                <p>Web (opcional)</p>
              </div>
            </div>
            <div className='Letra'>
            <h1>B</h1>
            </div>
            <div className="header-right">
              <h1>FACTURA</h1>
              <p>Nº 0001 - 00</p>
              <div>
                <label className='fecha'>FECHA:</label>
                <input type="date" />
              </div>
              <div>
                <label>CUIT:</label>
                <input type="text" placeholder="30-71464172-3" />
              </div>
              <div>
                <label>INGR. BRUTOS:</label>
                <input type="text" placeholder="RG 30-71464172-3" />
              </div>
              <div>
                <label>INICIO DE ACT.:</label>
                <input type="text" placeholder="10/2014" />
              </div>
            </div>
          </header>
    
          <section className="invoice-body">
            <div className="client-info">
              <div>
                <label>Señor(es):</label>
                <input type="text" />
              </div>
              <div>
                <label>Dirección:</label>
                <input type="text" />
              </div>
              <div>
                <label>Localidad:</label>
                <input type="text" />
              </div>
            </div>
    
            <div className="tax-info">
              <div>
                <label>I.V.A.:</label>
                  <label className='espacio'>Cons. Final<input type="checkbox" /> </label>
                  <label className='espacio'> Exento<input type="checkbox" /></label>
                  <label className='espacio'> Monotributo<input type="checkbox" /></label>
                  <label className='espacio'>No Resp.<input type="checkbox" /> </label>
              </div>
              <div>
                <label>CUIT:</label>
                <input type="text" />
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
                <label>Remito Nº:</label>
                <input type="text" />
              </div>
            </div>
    
            <div className="invoice-details">
              <div className="invoice-header">
                <div>CANT.</div>
                <div>DESCRIPCIÓN</div>
                <div>P. UNITARIO</div>
                <div>IMPORTE</div>
              </div>
              {invoiceItems}
            </div>
          </section>
    
          <footer>
            <div className="invoice-footer">
              <div>
                <label>TOTAL $:</label>
                <input type="number" />
              </div>
              <div>
                <p>C.A.I. 42513082377220</p>
                <p>VTO. 15/01/2017</p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    
export default App2;