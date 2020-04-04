import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // State del custom hook
  const [state, setState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      onChange={(e) => setState(e.target.value)}
      value={state}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
