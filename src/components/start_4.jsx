import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

const Start_4 = () => {
    const [ user, setUser ] = useState("Adesh");
    const [ user1, setUser1 ] = useState("Jadhav");
    return(
        <>
            <UserContext.Provider value={[user, user1]}>
                <Compo_1 />
            </UserContext.Provider>
        </>
    );
}

const Compo_1 = () => {
    return(
        <Compo_2/>
    );
}
const Compo_2 = () => {
    return(
        <Compo_3 />
    );
}
const Compo_3 = () => {
    const [user, user1] = useContext(UserContext);
    return(
        <h1>{user} {user1}</h1>
    );
}

export default Start_4