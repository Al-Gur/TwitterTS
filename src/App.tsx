import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {UserInterface} from "./utils/types.d.ts";
import {StatsInterface} from "./utils/types.d.ts";
import {TwitterContextValue} from "./utils/types.d.ts";
import {TwitterContext} from "./utils/context.ts";


function App() {
    const [user, setUser] = useState<UserInterface>({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState<StatsInterface>({
        followers: 0,
        following: 0
    });

    const changeAvatar = (avatar: string | null) => {
	setUser( prevState => ({...prevState, avatar: avatar || prevState.avatar}) );
    }

    const changeName = (name: string | null) => {
	setUser( prevState => ({...prevState, name: name || prevState.name}) );
    }

    const changeFollowers = (followers: number) => {
     	if (followers >= 0)
          setStats( prevState => ({...prevState, followers }) );
    } 

    const changeFollowing = (following: number) => {
     	if (following >= 0)
          setStats( prevState => ({...prevState, following }) );
    } 

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, changeAvatar,  changeName, stats, changeFollowers, changeFollowing
            } as TwitterContextValue}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
