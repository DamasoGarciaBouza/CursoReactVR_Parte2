import React, { useState } from 'react'

const Componente1 = ({ year }) => {

  const [yearNow, setYearNow] = useState(year);

  const siguiente = e => setYearNow(yearNow + 1);

  const anterior = e => setYearNow(yearNow - 1);

  return (
    <div>
      <h4>Año actual: {yearNow}</h4>
      <button onClick={siguiente}>SIGUIENTE</button>
      &nbsp;
      <button onClick={anterior}>ANTERIOR</button>
    </div>
  )
}

export default Componente1;
