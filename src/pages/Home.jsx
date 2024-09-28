import Footer from "../contents/Footer";
import Hero from "../contents/Hero";
import Navbar from "../contents/Navbar";
import Service from "../contents/Services";
import Products from "../contents/Products";

export default function Home(props){
    const items = props.api;
    console.log(items)
    const tes = <Products name='' location='jakarta'/>
    return(
        <>
            <Navbar/>
            <Hero/>
            <Service/>
            <div className="container mx-auto flex flex-wrap gap-3">
                {
                    items.map((item, index)=>
                    (<div>
                        <Products name={item.title} img={item.image}/>
                    </div>)
                    )
                    
                }
            </div>
            <Footer/>
        </>
    );
}