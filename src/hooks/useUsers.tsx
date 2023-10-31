import { useState, useRef, useEffect } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface";
import { reqResApi } from "../api/reqRes";

export const useUsers = () => {
  const [list, setList] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);
  const totalPage = useRef(0);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: { page: paginaRef.current },
    });

    totalPage.current = resp.data.total_pages

    if (resp.data.data.length > 0 ) {
      setList(resp.data.data);
    }
  };

  const nextPage = () => {
    if(paginaRef.current < totalPage.current){
        paginaRef.current += 1
        cargarUsuarios()
    }else {
        alert("No hay mas registros");
      }
  }

  const backPage = () => {
    if(paginaRef.current > 1){
        paginaRef.current -= 1
        cargarUsuarios()
    }
  }

  return {
    list,
    nextPage,
    backPage
  };
};
