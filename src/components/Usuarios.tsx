import { useUsers } from "../hooks/useUsers";
import { Usuario } from "../interfaces/reqRes.interface";

const Usuarios = () => {
  const { list, nextPage, backPage } = useUsers();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ width: 80, borderRadius: 50 }}
          />
        </td>
        <td className="align-middle">
          {usuario.last_name}, {usuario.first_name}
        </td>
        <td className="align-middle">{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3 className="display-6">Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{list.map(renderItem)}</tbody>
      </table>

      <button className="btn btn-danger me-2" onClick={backPage}>
        Atras
      </button>

      <button className="btn btn-primary" onClick={nextPage}>
        Siguiente
      </button>
    </>
  );
};

export default Usuarios;
