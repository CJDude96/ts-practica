
const Funciones = () => {

    const sumar = (a: number, b:number):number => {
        return a + b
    }
 

  return (
    <>
        <h3 className="display-6">Funciones</h3>
        <span>Funcion sumar ():number :</span>
        <span>El resultado es {sumar(1, 5)}</span>
    </>
  )
}

export default Funciones