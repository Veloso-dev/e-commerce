import React from 'react'
import './style.sass'

const VerPedidos = () => {
  return (
    <>



<>
            <div id="userOrders">

                <h2 className="ordersText">Meus Pedidos</h2>
                <div className="ordersTable">

                    <div className="prdtOrder">
                        <div className='prdtBox'>
                            <div className="prdtImg"></div>
                            <spam className="prdtName">Nome do produto</spam>
                        </div>
                        <div className="orderData">
                            <p>Pedido</p>
                            <p className='pd'>"Insira o número do pedido"</p>
                            <p>Data de Compra</p>
                            <p className='pd'>"Insira a data de Compra"</p>
                            <p>Forma de pagamento</p>
                            <p className='pd'>"Insira a forma de pagamento"</p>
                        </div>
                    </div>
                    <div className="ordersPrice">
                        <p className='priceText'>Valor Total:</p>
                        <p className="totalCost">
                            "Insira o valor"
                        </p>
                    </div>

                </div>
            </div>
        </>
      



    </>
  )
}

export default VerPedidos