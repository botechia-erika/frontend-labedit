import React from 'react'

export const CashBalance = () => {
  return (
    <div>
<h2>Movimentos de Conta</h2>
<form>
<input type='number' min="0" name="monto" id="monto"/>

<select id="tipoMonto" name="categoria">
    <option value=""></option>
</select>
</form>
    </div>
  )
}
