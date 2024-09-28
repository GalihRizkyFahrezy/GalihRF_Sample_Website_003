import { faMagnifyingGlass, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export default function Navbar(){

    const wrench = <FontAwesomeIcon icon={faWrench} size='lg'/>
    const search = <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" size="lg" />

    const [account, setAccount] = useState(false);

    console.log(account)
    return(
        <>
            <div className="bg-yellow-300 h-10 font-bold font-serif fixed w-full">
                <div className="container mx-auto flex justify-evenly h-full items-center">
                    <a href="" className="">
                        {wrench} HomeSample.co
                    </a>
                    
                    <div className="w-3/5 flex justify-evenly">

                        <form>
                            <input type='text' className='mx-3 px-3 rounded-full outline-none' placeholder='Looking for something?'/>
                            <input type='submit' value='Search'/>
                        </form>

                        <div>
                            <button onClick={() => account ? setAccount(false) : setAccount(true)}>
                                Account
                            </button>
                            <div className={account ? 'fixed' : 'hidden'}>
                                <div className='border-2 w-full flex flex-col p-3 bg-slate-100 rounded-md'>
                                    <img src='https://placehold.co/100' className='rounded-full p-3'/>
                                    <a href=''>
                                        Account
                                    </a>
                                    <a href=''>
                                        Settings
                                    </a>
                                    <a href=''>
                                        Ballance
                                    </a>
                                    <a className='border-t-2 border-black' href=''>
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
}