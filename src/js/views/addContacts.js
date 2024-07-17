import React from "react";
import "../../styles/addcontacts.css"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContacts = () => {
    const [nombreCompleto, setNombreCompleto] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.addContact(nombreCompleto, email, direccion, telefono)
        setNombreCompleto("")
        setTelefono("")
        setEmail("")
        setDireccion("")
        navigate("/")
    }

    return (
        <>
            <h1>Add Contacts</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre completo</label>
                    <input value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} type="text" className="form-control form-element" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Teléfono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="number" className="form-control form-element" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">e-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-element" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Dirección</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control form-element" />
                </div>

                <button type="submit" className="btn btn-primary form-element">Guardar</button>
            </form>
        </>
    )
}
export default AddContacts;