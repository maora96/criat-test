import React from "react";

const Material = (props) => {
    const { material, openModal} = props;
    return (
        <>
        <div className="card">
            <img src={material.thumb} alt="material" className="thumb"/>
            <div className="card-content">
                <div className="card-header">
                    <span>{material.name}</span>
                    <span>{material.brand}</span>
                </div>
                <span className="description">{material.description}</span>
                <div className="card-footer">
                    <div className="footer-container">
                        <button onClick={() => {
                            openModal(true)
                        }}>editar</button> |<button>deletar</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Material;