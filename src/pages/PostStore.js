import { Store } from "pullstate";

export const PostStore = new Store({
    
    posts: [

        {
            id: 1,
            image: "https://ionic.io/img/ioniconf/ioniconf-open-graph.png",
            caption: "Ioniconf 2021! Register Now!",
            likes: 73,
            liked: false,
            profile_id: 6,
            time: "1 hour ago",
            comments: [
                
                {
                    profile_id: 3,
                    comment: "Test"
                }
            ]
        },

        {
            id: 2,
            image: "https://creativetacos.com/wp-content/uploads/2019/08/Free-Chipper-Personal-Finance-App-Kit.jpg",
            caption: "Ionic React Hub! UI Components, Templates, Clones and more!",
            likes: 73,
            liked: true,
            profile_id: 1,
            time: "1 hour ago",
            comments: [
                
                {
                    profile_id: 3,
                    comment: "Test"
                },
                {
                    profile_id: 3,
                    comment: "Test"
                },
                {
                    profile_id: 3,
                    comment: "Test"
                }
            ]
        },

        {
            id: 3,
            image: "https://cdn.buttercms.com/AIcP6e8FRx6fgsKa7bvy",
            caption: "Join the first ever Ionic Event!",
            likes: 73,
            liked: false,
            profile_id: 4,
            time: "2 hours ago",
            comments: [
                
                {
                    profile_id: 1,
                    comment: "Test"
                },
                {
                    profile_id: 2,
                    comment: "Test"
                }
            ]
        },

        {
            id: 4,
            image: "https://ionicframework.com/img/meta/ionic-framework-og.png",
            caption: "Build cross platform mobile apps with the Ionic Framework!",
            likes: 73,
            liked: false,
            profile_id: 2,
            time: "3 hours ago",
            comments: [
                
                {
                    profile_id: 1,
                    comment: "Test"
                },
                {
                    profile_id: 2,
                    comment: "Test"
                }
            ]
        }
    ]
});

export const likePost = (event, postID, liked) => {

    event.target.classList.add("animate__heartBeat");
    
    if (!liked) {
        
        document.getElementById(`postLike_${ postID }`).style.display = "inline";
    }

    setTimeout(() => {
        
        event.target.classList.remove("animate__heartBeat");
        document.getElementById(`postLike_${ postID }`).style.display = "none";
    }, 850);

    PostStore.update(s => { 
        s.posts.find((p, index) => (parseInt(p.id) === parseInt(postID)) ? s.posts[index].liked = (liked ? false : true) : false ) 
    });

    if (liked) {

        PostStore.update(s => { 
            s.posts.find((p, index) => (parseInt(p.id) === parseInt(postID)) ? s.posts[index].likes = s.posts[index].likes++ : false ) 
        });
    } else {

        PostStore.update(s => { 
            s.posts.find((p, index) => (parseInt(p.id) === parseInt(postID)) ? s.posts[index].likes = s.posts[index].likes-- : false ) 
        });
    }
}

export const addPost = (newPost) => {

    PostStore.update(s => { s.posts = [ ...s.posts, newPost ]; });
}

export const addCommentToPost = (newComment, postID) => {

    PostStore.update(s => { 
        s.posts.find((p, index) => (parseInt(p.id) === parseInt(postID)) ? s.posts[index].comments = [ ...s.posts[index].comments, newComment ] : false ) 
    });
}