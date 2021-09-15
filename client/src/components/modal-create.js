import React from "react";
import { Formik } from 'formik';

function ModalCreate(props) {
    const {closeModal} = props;
    return <>
    
    <div className="modal-bg">
        <div className="modal-container">
            <div className="modal-title">
                <h2>Adicionar material</h2>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="modal-body">
                <Formik
                    initialValues={{
                        "name": '',
                        "description": "",
                        "brand": "",
                        "thumb": "",
                        "isActive": true
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                     }, 400);
       }}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <label>Nome</label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />

            <label>Marca</label>
           <select
                name="brand"
                value={values.brand}
                 onChange={handleChange}
                onBlur={handleChange}
            >
                <option value="" label="Selecione marca" />
                <option value="PORTOBELLO" label="Portobello" />
                <option value="Main" label="Main" />
                <option value="Side" label="Side" />
            </select>


            <label>Descrição</label>
           <textarea
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />

           <div className="checkbox-input">
               <label>Está ativo?</label>
                <input type="checkbox" name="isActive" value={values.isActive} onChange={handleChange}
                onBlur={handleChange}></input>

           </div>

           <label>Thumb</label>
           <input type="file" name="thumb" value={values.thumb}></input>

           <div className="modal-footer">
                <button onClick={() => closeModal(false)}>Cancelar</button>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </div>
         </form>
       )}
     </Formik>
            </div>
            
        </div>

    </div>
    
    </>
}

export default ModalCreate;