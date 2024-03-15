import React from "react";
import { useForm } from "react-hook-form";
import "../hojas-estilo/Formulario.css";
import ListarPlatillos from '..componentes/ListarPlatillos';


const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div className="contenedor-formulario">
        <img className="imagen-formulario"
            src={require("../imagenes/platillo-6.png")} alt="foto de formulario" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Formulario Nuevo Platillo</h2>
            <div>
                <label className="form-">Nombre Platillo: </label>
                <input type="text" {...register("nombre")} />
            </div>
            <div>
                <label>Descripcion: </label>
                <input type="text" {...register("descripcion")} />
            </div>
            <div>
                <label> Categoria: </label>
                <select {...register("categoria")}>
                    <option value="es">Especial</option>
                    <option value="co">Corriente</option>
                </select>
            </div>
            <div>
                <label>Valor platillo: </label>
                <input type="int" {...register("valor platillo")} />
            </div>
            <input type="submit" value=" Enviar" />

        </form>

    </div>

}
export default Formulario;
