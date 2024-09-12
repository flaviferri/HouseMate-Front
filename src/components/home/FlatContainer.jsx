import { PropTypes } from "prop-types";
import { useNavigate  } from 'react-router-dom';
import EditIcon from "../buttons/EditIcon";
import DeleteIcon from "../buttons/DeleteIcon";

const FlatContainer = ({id, photo, name, country, createdBy, actualUser, isLoggedIn}) => {
	const navigate = useNavigate();
	
	const handleRedirect = () => {
		navigate(`/detail/${name}`, { state: { data: id} })

	}

	const handleDeleteSuccess=()=>{window.location.reload(true);};

	return (
		<section className="relative text-blue bg-yellow rounded-[1.25rem]">
			<button onClick={handleRedirect} className={`absolute right-0 p-2 ${!isLoggedIn ? "hidden" : "block"}`}>
            </button>
		
			<section className="flex justify-between items-center px-5 py-4 leading-none">
					<section className="label">
							<h3 className="font-bold text-[1.563rem] mb-1">{name}</h3>
							<p className="text-[1.25rem]">{country}</p>
					</section>
					<section className={`icons flex justify-between gap-[0.625rem] ${createdBy == actualUser ? "block" : "hidden"}`}>
						<EditIcon id={id} name={name}/>
						<DeleteIcon id={id} onDeleteSuccess={handleDeleteSuccess} />
					</section>
			</section>
		</section>
    );
};

FlatContainer.propTypes = {
	id: PropTypes.number,
	photo: PropTypes.string,
	name: PropTypes.string,
	country: PropTypes.string,
	createdBy: PropTypes.number,
	actualUser: PropTypes.number,
	isLoggedIn: PropTypes.bool
  };

export default FlatContainer;
