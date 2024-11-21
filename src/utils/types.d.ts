export interface UserInterface {
    name: string,
    avatar: string,
} 

export interface StatsInterface {
    followers: number,
    following: number,
} 


export interface TwitterContextValue {
    user: UserInterface, 
    changeAvatar: (avatar: string | null) => void,  
    changeName: (name: string | null) => void, 
    stats: StatsInterface, 
    changeFollowers: (followers: number) => void, 
    changeFollowing: (following: number) => void
}
