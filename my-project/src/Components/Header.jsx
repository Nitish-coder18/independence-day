import image from '../assets/indiaMain.png';
import NavBar from './NavBar';


const Header = () => {
    return <>
    <div>
        <NavBar />
        <div className='flex flex-row justify-center items-center m-19 max-w-10xl gap-50'>
            <div>
                <h1 className='text-5xl mb-4 font-bold text-orange-500'>Digital Freedom Gallery </h1>
                <p className='text-3xl mb-19 font-light text-white'> Code a Vision. Design the Nation</p>
                <p className='text-2xl mb-19 font-light text-green-600'>A web tribute to India's past, <br />    present, and digital future</p>
            </div>
            <div>
                <img className='size-120 rounded-xl'
                src={image} alt="" />
            </div>
        </div>
    </div>
    </> ;
}

export default Header;