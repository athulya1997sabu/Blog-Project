import BlogList from './BlogList';
import Image from '../Image';
import Footer from '../components/Footer';


const Home = () => {

    return ( 
        <div className="home">
            <Image/>
           <BlogList/> 
           <Footer/>
        </div>
     );
}

export default Home;