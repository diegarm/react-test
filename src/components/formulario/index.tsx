import React from 'react';
import Botao from '../button'

class Formulario extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required>
                    </input>

                </div>
                <div>
                <label htmlFor="tarefa">Tempo</label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required>
                    </input>

                </div>
                <div>

                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario