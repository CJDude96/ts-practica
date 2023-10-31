import { useState } from "react";

const Contador = () => {
  const [contar, setContar] = useState<number>(0);

  return (
    <>
      <h3 className="display-6">Contador: {contar} </h3>

      <div className="d-flex flex-row gap-3">
        <button
          className="btn btn-danger"
          onClick={() => setContar(contar - 1)}
        >
          -1
        </button>
        <button
          className="btn btn-success"
          onClick={() => setContar(contar + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default Contador;
