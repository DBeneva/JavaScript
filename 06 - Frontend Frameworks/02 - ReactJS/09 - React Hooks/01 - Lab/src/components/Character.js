import { useContext } from "react/cjs/react.development";
import AuthContext from "../contexts/АuthContext";

const Character = ({
    name
}) => {
    const { addHobby } = useContext(AuthContext);

    return (
        <li onClick={() => addHobby(name)}>{name}</li>
    );
};

export default Character;