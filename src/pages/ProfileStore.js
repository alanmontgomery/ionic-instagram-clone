import { Store } from "pullstate";

export const ProfileStore = new Store({
    
    profile: {
        
        id: 1,
        firstname: "Alan",
        surname: "Montgomery",
        avatar: "/assets/alan.jpg",
        followers: 0,
        following: 0
    },
    posts: [

    ],
    feed: [

    ]
});

export const addProfilePost = (newPost) => {

    ProfileStore.update(s => { s.posts = [ ...s.posts, newPost ]; });
}