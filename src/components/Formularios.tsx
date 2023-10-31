import { useForm } from "../hooks/useForm";

const Formularios = () => {
  
  const {formulario,handleChange} = useForm({
    email: "test@test.com",
    password: "123456"
  })  

  return (
    <>
      <h3 className="display-6">Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={formulario.email}
        onChange={e => handleChange(e.target.value, "email") }
      />
      <input
        type="password"
        className="form-control"
        placeholder="Contraseña"
        value={formulario.password}
        onChange={e => handleChange(e.target.value, "password") }
      />

      <code>
        <pre>
            {JSON.stringify( formulario, null, 2)}
        </pre>
      </code>
    </>
  );
};

export default Formularios;
