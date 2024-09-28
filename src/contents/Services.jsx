import { faBridge, faLightbulb, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Service(){
    const construction = <FontAwesomeIcon icon={faBridge} size='lg'/>
    const electricity = <FontAwesomeIcon icon={faLightbulb} size='lg'/>
    const water = <FontAwesomeIcon icon={faWater} size='lg'/>
    const classCard = 'group w-32 h-32 border-2 bg-white rounded-md flex flex-wrap text-center justify-center items-center z-20 hover:bg-amber-400 duration-200'
    const classCardBg = 'absolute text-slate-300 -z-10 text-5xl';

    return(
        <>
            <div>
                <div className="container mx-auto font-serif">
                    <h2 className="text-center text-3xl font-bold py-3">
                        Service
                    </h2>

                    <div className="flex flex-wrap gap-2 justify-center">
                        <div className={classCard}>
                            <div className='group-hover:text-slate-500 absolute text-slate-300 -z-10 text-5xl'>
                                {construction}
                            </div>
                            <p className='font-bold text-md'>
                                Construction
                            </p>
                        </div>

                        <div className={classCard}>
                            <div className='group-hover:text-yellow-300 absolute text-slate-300 -z-10 text-5xl'>
                                {electricity}
                            </div>
                            <p className='font-bold text-md'>
                                Electricity
                            </p>
                        </div>

                        <div className={classCard}>
                            <div className='group-hover:text-blue-400 absolute text-slate-300 -z-10 text-5xl'>
                                {water}
                            </div>
                            <p className='font-bold text-md'>
                                water
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}