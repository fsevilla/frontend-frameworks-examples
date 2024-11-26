const _personas = [
    { nombre: 'Juan', apellido: 'Perez', active: false },
    { nombre: 'Carlos', apellido: 'Sanchez', active: true }
]

const { useState } = React;

const Personas = () => {
    const [personas, setPersonas] = useState(_personas);

    const togglePersona = (idx) => {
        setPersonas((oldPersonas) => {
            oldPersonas[idx].active = !oldPersonas[idx].active;
            return [...oldPersonas];
        })
    }

    return (
        <ul>
            {
                personas.map((persona, idx) => {
                    return (
                        <li 
                            key={idx}
                            className={persona.active ? 'selected' : ''}
                            onClick={() => { togglePersona(idx) }}
                        >{persona.nombre} {persona.apellido}</li>
                    )
                })
            }
        </ul>
    )
}

const App = () => {
    return (
        <>
        <h1>Hola mundo</h1>
        <Personas />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);