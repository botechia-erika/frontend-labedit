import React from 'react'
import '../../../assets/css/bootstrap.min.css.map'
export const CashBalance = () => {
  return (
    <div>
<h2 className="jumbotrom-xl">Movimentos de Conta</h2>
<form>
<input type='number' min="0" name="monto" id="monto"/>

<select id="tipoMonto" name="categoria">
    <option value=""></option>
</select>
</form>
    </div>
  )
}
