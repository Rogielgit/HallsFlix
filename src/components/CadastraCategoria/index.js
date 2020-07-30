import React, { useState } from "react";
import DefaultPage from "../DefaultPage";
import { Link } from 'react-router-dom';
import FormField from "../FormField";

function CadastraCategoria() {

    const valuesCategory = {
        categoryName: 'xxxxx',
        description: 'xxxx',
        color: 'red'

}

    const [caterorias, setValues] = useState(valuesCategory);    



  
  const setValue = (key, value) => {

    setValues({
        ...valuesCategory,
        [key]: value,
    });
  }

  const handleChanges = (event) => {
      setValue(
          event.target.getAttribute('name'),
          event.target.value

      )

  }

    return (
        <div>
            <DefaultPage>
                <h1>Cadastro de Categoria :  </h1>

                <form onSubmit={(event) => {                
                    event.preventDefault();
                    
                    //setValues([...caterorias, nomeCaterorias])
                }}>
{/* 
                    <label>
                        Nome da Categoria:
                         <input type="text" defaultValue={valuesCategory.categoryName} 
                         name='category'
                         value={valuesCategory.categoryName}
                         onChange={handleChanges}
                        />
                    </label> */}

                    <FormField 
                    text="Nome Categoria: "                    
                    value={valuesCategory.categoryName}
                    nameType="category"
                    type='text'
                    onChange={handleChanges}>
                    </FormField>

                    <FormField 
                    text="Descrição: "                    
                    value={valuesCategory.description}
                    nameType="description"
                    type='description'
                    onChange={handleChanges}>
                    </FormField>


                    <FormField 
                    text="Cor: "                    
                    value={valuesCategory.color}
                    onChange={handleChanges}
                    nameType="cor"
                    type="color">
                    </FormField>
                    <button>
                        Cadastrar
                   </button>
                </form>


                {/* <ul>
                    {caterorias.map((item, index) => (
                        <li key={`${item} ${index}` } >{item}</li>))}
                </ul> */}

                <Link to="/">
                    Ir para home
                </Link>


            </DefaultPage>
        </div>
    );
}

export default CadastraCategoria;