import ImageSlider from "./slidesh";
import imago from './imagesData'
import tree from './images/tree.png'
import apple from './images/apple.png'
import sun from './images/contrast.png'
import water from './images/drop.png'

function Home(){
    return(
        <div className="home">
            <div className="slidingo">
               <ImageSlider images={imago}/>
            </div>
            <br/>
           
            <div className="Kinda">
               
                <h1 className="what">What we do</h1>
                <p>Our mission is to inspire and empower individuals to take action for a sustainable future.
                     Through our environmental-based website, we strive to educate, engage, and mobilize a global community of change-makers 
                     dedicated to protecting and preserving our planet.
                      We aim to foster a deep understanding of the interconnectedness between humans and the environment, encouraging responsible and 
                      conscious actions that promote environmental conservation, address climate change, and support the well-being of all living beings.</p>
                      </div>
             
                <div className="desk">  
                     <h2>Forest</h2>
                    <h2>Farmer</h2>
                    <h2>Water</h2>
                    <h2>Solar</h2>
                </div>

                <div className="desko">
                    <img src={tree} className="ico"/>
                    <img src={apple} className="ico"/>
                    <img src={water} className="ico"/>
                    <img src={sun} className="ico"/>
                </div>

                <div className="deski">  
                    <h4>Creating urban & <br/> rural forests</h4>
                    <h4>Planting fruit trees </h4>
                    <h4>Rejuvenating lakes <br/> and water bodies</h4>
                    <h4>Installing solar lamps<br/>  in villages</h4>
                </div>

            </div>

    )
}
export default Home;