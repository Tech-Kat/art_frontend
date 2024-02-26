import Image from 'react-bootstrap/esm/Image';
import JoseArtPic from '../assets/JoseArtPic.jpeg'

const Home = () => {
    return (
        <div>
            <Image className="landingPic" src={JoseArtPic} alt="landing pic"/>
            <h2>"Empowering Creativity, Connecting Hearts: Our mission at Kendra's Art Gallery is to curate and showcase a diverse collection of exceptional paintings from talented artists worldwide. By providing a seamless platform for art enthusiasts to discover, appreciate, and acquire unique pieces, we aim to foster a global community that celebrates creativity and promotes the transformative power of art in enriching lives."</h2>
        </div>
    )
}

export default Home;