import FlatContainer from '../components/home/FlatContainer'
import Navbar from "../components/header/navbar/Navbar.jsx";
import NavbarNew from "../components/header/navbar/NavbarNew.jsx";
import FlatsContainer from "../components/home/FlatsContainer.jsx";

const Home = () => {
  return (
    <section className="max-w-[118.75rem] my-0 mx-auto pb-6 h-full">
        <NavbarNew/>

        <FlatsContainer/>
      {/*<FlatContainer className="z-[-9999]" />*/}
    </section>
  );
}

export default Home;
