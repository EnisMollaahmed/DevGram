import { useUser } from "../../pages/ProfilePage";
import { User } from "../../types/UserType";

export default function MyCodesContainer(){
    const user:User = useUser();
    console.log(user)
}