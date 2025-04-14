import { useOutletContext } from "react-router";

import { OutletUserContext, User } from '../../../types/UserType';
import useSpecificCodeSnippets from "../../../hooks/useSpecificCodeSnippets";


export default function MyCodes(){
    const {userInfo,} = useOutletContext<OutletUserContext>();
    const {snippets, status, loading} = useSpecificCodeSnippets((userInfo as User).idOfPostedCodes);
    return
}