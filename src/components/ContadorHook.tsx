import useCounter from "../hooks/useCounter";

const ContadorHook = () => {
  
  const { valor, acumular} = useCounter(0)

  return (
    <>
      <h3 className="display-6">ContadorHook: {valor} </h3>

      <div className="d-flex flex-row gap-3">
        <button
          className="btn btn-danger"
          onClick={() => acumular(-1)}
        >
          -1
        </button>
        <button
          className="btn btn-success"
          onClick={() => acumular(1)}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default ContadorHook;
