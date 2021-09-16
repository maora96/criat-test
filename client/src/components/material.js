import React from "react";

const Material = (props) => {
    const { material, openModal, openDeleteModal, setId} = props;
    return (
        <>
        <div className="card">
            <img src={process.env.PUBLIC_URL + "images/" + material.thumb} alt="material" className="thumb"/>
            <div className="card-content">
                <div className="card-header">
                    <span>{material.name}</span>
                    <span>{material.brand}</span>
                </div>
                <span className="description">{material.description}</span>
                <div className="card-footer">
                    <div className="footer-container">
                        <button onClick={() => {
                            setId(material.id)
                            openModal(true)
                        }}>editar</button><button onClick={() => {
                            setId(material.id)
                            openDeleteModal(true)
                        }}>deletar</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Material;