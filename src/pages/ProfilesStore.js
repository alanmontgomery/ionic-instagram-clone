import { Store } from "pullstate";

export const ProfilesStore = new Store({
    
    profiles: [
        {
        
            id: 1,
            firstname: "Alan",
            surname: "Montgomery",
            username: "alanmontgomery",
            title: "Mobile Team Lead",
            bio: "Full Stack 🤓 Mobile Team Lead/Senior React Dev",
            link: "alanmontgomery.co.uk",
            avatar: "/assets/alan.jpg",
            followers: "1,470",
            following: "230",
            posts: [
                {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
            ]
        },
        {
        
            id: 2,
            firstname: "Max",
            surname: "Lynch",
            username: "maxlynch",
            title: "CEO Ionic",
            bio: "Co-founder/CEO @ionicframework. Created @capacitorjs. Gamer. @ManUtd fan.",
            link: "maxlynch.com",
            avatar: "https://pbs.twimg.com/profile_images/1318970727173885953/bln98FNj_400x400.jpg",
            followers: "21.1K",
            following: "1,200",
            posts: [
                {},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 3,
            firstname: "Ben",
            surname: "Sperry",
            username: "bensperry",
            title: "CDO Ionic",
            bio: "Co-founder / CDO @ionicframework. Creator of @ionicons. Product designer. Pixel junkie. Forest explorer.",
            link: "bensperry.com",
            avatar: "https://pbs.twimg.com/profile_images/1328390491126308864/jHHgl5Dm_400x400.jpg",
            followers: "800",
            following: "700",
            posts: [
                {},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 4,
            firstname: "Matt",
            surname: "Netkow",
            username: "mattnetkow",
            title: "Head of Product Marketing",
            bio: "I help web developers build cross-platform Web Native apps. @IonicFramework: Head of Product Marketing",
            link: "webnative.tech",
            avatar: "https://pbs.twimg.com/profile_images/1323383930150621187/GKc0nVzi_400x400.jpg",
            followers: "1,200",
            following: "900",
            posts: [
                {},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 5,
            firstname: "Liam",
            surname: "DeBeasi",
            username: "liamdebeasi",
            title: "Software Engineer",
            bio: "Software Engineer at @ionicframework",
            link: "liamdebeasi.com",            
            avatar: "https://pbs.twimg.com/profile_images/1105953692669366273/ZNK4lRAJ_400x400.jpg",
            followers: "871",
            following: "510",
            posts: [
                {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 6,
            firstname: "Mike",
            surname: "Hartington",
            username: "mikehartington",
            title: "Senior Dev Rel",
            bio: "Google Developer Expert. Mediocre at best. he/him. npx mhartington",
            link: "mhartington.io",
            avatar: "https://pbs.twimg.com/profile_images/1084993841898446849/DJ8XtR6L_400x400.jpg",
            followers: "12.3K",
            following: "2,200",
            posts: [
                {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 7,
            firstname: "Adam",
            surname: "Bradley",
            username: "adambradley",
            title: "Director of Technology",
            bio: "Proud dad, husband, veteran & dogs best friend. Typos are my own",
            link: "ionicframework.com",
            avatar: "https://pbs.twimg.com/profile_images/909075942320025600/hfYqicUk_400x400.jpg",
            followers: "613",
            following: "571",
            posts: [
                {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
            ]
        },
        {
            id: 8,
            firstname: "Brody",
            surname: "Kidd",
            username: "brodykidd",
            title: "Enterprise Account Manager",
            bio: "Enterprise Account Manager | @ionicframework | @getcapacitor | @stenciljs",
            link: "ionicframework.com",
            avatar: "https://pbs.twimg.com/profile_images/477539679567228928/JObyaUW__400x400.jpeg",
            followers: "677",
            following: "219",
            posts: [
                {},{},{},{},{},{},{}
            ]
        }
    ]
});

export const addProfilePost = (newPost) => {

    ProfilesStore.update(s => { s.posts = [ ...s.posts, newPost ]; });
}