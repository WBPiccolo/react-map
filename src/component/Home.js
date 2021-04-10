
import { useHistory } from 'react-router-dom';
import AnagraficaManager from './AnagraficaManager'


function Home () {
    let history = useHistory();

    const saveAndGo = (data) =>{
        history.push('/map/'+data.name)
    }

    return(
        <AnagraficaManager onSave={saveAndGo}/>
    );
}

export default Home;
