export default function products(props){

    const tes = <div> hello world</div>
    return(
        <>
            <div className="w-52 h-52 border-2 border-black rounded-md my-5">
                <div className="w-full overflow-hidden rounded-md flex justify-items-center">
                    <img src={props.img} className="h-32"/>
                </div>
                <h3 className="mx-2 font-bold">
                    {props.name}
                </h3>
                <h4 className="mx-2 text-sm text-amber-700 font-bold">
                    {props.location}
                </h4>
                
            </div>
        </>
    );
}