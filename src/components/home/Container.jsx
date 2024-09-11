import { useState, useEffect } from "react";
import FlatContainer from "./FlatContainer"
import PreviusHome from "../home/PreviusHome";
import { useAuth } from "../../hooks/useAuth";

const Container = () => {
    const userAuth = useAuth().isAuthenticated;
    const actualUser = parseInt(localStorage.getItem("user"));
    const itemsPerPage = 8;
    const [actualPage, setActualPage] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
    const [destinations, setDestinations] = useState([])
    const [noDestinations, setNoDestinations] = useState(false);

    const updatePageNumber = (page) => {
        setActualPage(page);
    };

    useEffect(() => {
        fetchDestinations();
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const fetchDestinations = async () => {
        try {
            const response = await fetch('http://localhost:4001/flats');
            if (!response.ok) {
                throw new Error('Failed to fetch flats');
            }
            const data = await response.json();
            setDestinations(data);
            setNoDestinations(false);
        } catch {
            setNoDestinations(true);
        }
    };

    const lastElementIndex = actualPage * itemsPerPage;
    const firstElementIndex = lastElementIndex - itemsPerPage;
    const actualItems = isLargeScreen ? destinations.slice(firstElementIndex, lastElementIndex) : destinations;

    return (
      <section className="flex flex-col">
        { noDestinations && (
      <img src="/assets/file.jpg" alt="logo" className="logo" />
                )}
        <section className="section-grid">
          {actualItems?.map((des) => (
            <FlatContainer
              key={des.id} 
              id={des.id} 
              photo={des.image}
              name={des.name}
              country={des.country}
              createdBy={des.id_user}
              actualUser={actualUser}
              isLoggedIn={userAuth}
            />
          ))}
        </section>
        <section
          className={`flex justify-center ${
            destinations.length <= 8 || !isLargeScreen ? "hidden" : "block"
          }`}
        >
          <PreviusHome
            page={actualPage}
            onClick={updatePageNumber}
            totalPages={destinations.length / itemsPerPage}
          />
        </section>
      </section>
    );
}

export default Container
