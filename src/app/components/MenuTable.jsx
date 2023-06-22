export default function MenuTable() {
  return (
    <table className="">
  <thead>
    <tr>
      <th>Plato</th>
      <th>Precio Pequeño</th>
      <th>Precio Mediano</th>
      <th>Precio Grande</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>pizza de peperoni</td>
      <td>12.00</td>
      <td>10.00</td>
      <td>7.00</td>
    </tr>
    <tr>
      <td>pizza de queso</td>
      <td>10.00</td>
      <td>9.00</td>
      <td>6.50</td>
    </tr>
    <tr>
      <td>pizza de piña</td>
      <td>12.00</td>
      <td>10.00</td>
      <td>7.00</td>
    </tr>
    <tr>
      <td>papas fritas</td>
      <td>5.00</td>
      <td>3.50</td>
      <td></td>
    </tr>
    <tr>
      <td>ensalada griega</td>
      <td>7.00</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colSpan="4">Toppings:</td>
    </tr>
    <tr>
      <td>queso extra</td>
      <td>2.00</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>champiñones</td>
      <td>1.50</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>chorizo</td>
      <td>3.00</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>tocino canadiense</td>
      <td>3.50</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Salsa AI</td>
      <td>1.50</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>pimientos</td>
      <td>2.00</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colSpan="4">Bebidas:</td>
    </tr>
    <tr>
      <td>coca cola</td>
      <td>3.00</td>
      <td>2.00</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>duende</td>
      <td>3.00</td>
      <td>2.00</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>agua embotellada</td>
      <td>3.00</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

  )
}