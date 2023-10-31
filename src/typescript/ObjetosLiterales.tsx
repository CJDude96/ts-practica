interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion
}

interface Direccion {
    pais: string,
    casa: number
}


const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Carlos Jesus",
    edad: 26,
    direccion: {
      pais: "Venezuela",
      casa: 200,
    },
  };

  return (
    <>
      <h3 className="display-6">Objetos Literales e Interfaces</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;
