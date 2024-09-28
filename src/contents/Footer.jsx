import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    const instagram = <FontAwesomeIcon icon={faInstagram} size='lg'/>
    const facebook = <FontAwesomeIcon icon={faSquareFacebook} size='lg'/>
    const email = <FontAwesomeIcon icon={faEnvelope} size='lg'/>
    
    return(
        <>
            <div className="bg-black w-full font-serif text-white   ">
                <div className="px-3">
                    <div className='md:grid md:grid-cols-3'>
                        <div className=''>
                            Contact :<br/>
                            Email : galihrizkyfahrezy@gmail.com<br/>
                            Phone : +6281298208096
                        </div>

                        <div>
                            Find us :
                            <div className='flex flex-wrap gap-3 text-3xl'>
                                <div className='hover:text-pink-500'>
                                    {instagram}
                                </div>
                                <div className='hover:text-blue-500'>
                                    {facebook}
                                </div>
                                <div className='hover:text-slate-300'>
                                    {email}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}