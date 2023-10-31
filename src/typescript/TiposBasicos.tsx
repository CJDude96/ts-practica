const TiposBasicos = () => {
  const nombre: string = "Carlos";
  const edad: number = 26;
  const activo: boolean = true;
  const poderes: string[] = ["velocidad", "fuerza"];

  return (
    <>
      <h3 className="display-6">Tipos basicos</h3>
      <div className="d-flex flex-row p-3 gap-5 border justify-content-center align-items-center">
        <p className="m-0">
          <strong>String:</strong> {nombre}
        </p>
        <p className="m-0">
          <strong>Number:</strong> {edad}
        </p>
        <p className="m-0">
          <strong>Boolean:</strong> {activo ? "true" : "false"}
        </p>
        <p className="m-0">
          <strong>Array[]:</strong> {poderes.join(", ")}
        </p>
      </div>
    </>
  );
};

export default TiposBasicos;
