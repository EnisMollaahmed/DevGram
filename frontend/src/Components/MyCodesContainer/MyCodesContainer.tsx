
import { useOutletContext } from "react-router";
//import { User } from "../../types/UserType";

export default function MyCodesContainer(){
    const user = useOutletContext();
    console.log(user)
}