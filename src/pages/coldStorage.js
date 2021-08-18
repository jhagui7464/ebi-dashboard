import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'

function coldStorage() {
    document.title = "Cold Storage"
    return (
        <div className='coldStorage'>
            <Navbar title = 'Cold Storage'/>

        </div>
    )
}

export default coldStorage

