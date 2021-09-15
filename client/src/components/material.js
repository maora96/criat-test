import React from "react";

const Material = (props) => {
    const { material } = props;
    return (
        <>
        {material.thumb}
        {material.description}
        {material.brand}
        {material.active}
        {material.desactivatedAt}
        </>
    )
}

export default Material;