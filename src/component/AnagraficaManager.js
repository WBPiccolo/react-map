import { useState } from 'react'

const AnagraficaManager = ({onSave}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!email || !name || !surname) {
            alert('Per Favore inserisci tutti i campi');
            return;
        } 
        onSave({ name, surname, email })
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nome</label>
                <input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Cognome</label>
                <input type='text' placeholder='Cognome' value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Avanti' />
        </form>
    );
}

export default AnagraficaManager;
