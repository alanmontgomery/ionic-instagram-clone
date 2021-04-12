
import { IonAvatar, IonIcon, IonRouterLink } from "@ionic/react";
import { addCircleOutline, bookmarkOutline, chatbubbleOutline, ellipsisVertical, heart, heartOutline, paperPlaneOutline } from "ionicons/icons";
import { likePost } from "../pages/PostStore";
import { ProfilesStore } from "../pages/ProfilesStore";
import { ProfileStore } from "../pages/ProfileStore";
import styles from "./Feed.module.scss";

const Feed = props => {

    const { posts } = props;
    const profile = ProfileStore.useState(s => s.profile);
    const profiles = ProfilesStore.useState(s => s.profiles);

    const addLike = (event, postID, liked) => {
        
        likePost(event, postID, liked);
    }

    return (

        <div className={ styles.postsContainer }>
            { posts.map((post, index) => {

                const postProfile = profiles.filter(p => p.id === post.profile_id)[0];

                return (

                    <div key={ index } className={ styles.postContainer }>
                        <div className={ styles.postProfile }>
                            <div className={ styles.postProfileInfo }>
                                
                                <IonRouterLink routerLink={ `/profile/${ postProfile.id }`}>
                                    <IonAvatar>
                                        <img alt="post avatar" src={ postProfile.avatar } />
                                    </IonAvatar>
                                </IonRouterLink>

                                <IonRouterLink routerLink={ `/profile/${ postProfile.id }`}>
                                    <p>{ postProfile.username }</p>
                                </IonRouterLink>
                            </div>

                            <div className={ styles.postProfileMore }>
                                <IonIcon icon={ ellipsisVertical } />
                            </div>
                        </div>

                        <div className={ styles.postImage } style={{ backgroundImage: `url(${ post.image })`, backgroundPosition: "center, center", backgroundSize: "cover" }}>
                            <IonIcon id={ `postLike_${ post.id }`} className={ `animated__animated animate__heartBeat ${ styles.postImageLike }` } icon={ heart } color="light" />
                        </div>

                        <div className={ styles.postActionsContainer }>
                            <div className={ styles.postActions }>
                                <IonIcon className="animate__animated" color={ post.liked ? "danger" : "dark" } icon={ post.liked ? heart : heartOutline } onClick={ e => addLike(e, post.id, post.liked) } />
                                <IonIcon icon={ chatbubbleOutline } />
                                <IonIcon icon={ paperPlaneOutline } />
                            </div>

                            <div className={ styles.postBookmark }>
                                <IonIcon icon={ bookmarkOutline } />
                            </div>
                        </div>

                        <div className={ styles.postLikesContainer }>
                            <p>Liked by <span className={ styles.postLikedName }>alanmontgomery</span> and <span className={ styles.postLikedName }>2 others</span></p>
                        </div>

                        <div className={ styles.postCaption }>
                            <p><span className={ styles.postName }>
                                <IonRouterLink routerLink={ `/profile/${ postProfile.id }`}>
                                    { postProfile.username }
                                </IonRouterLink>
                                </span> { post.caption }</p>
                        </div>

                        <div className={ styles.postComments }>
                            <p>View all { post.comments.length } comments</p>
                        </div>

                        <div className={ styles.postAddComment }>
                            <div className={ styles.postAddCommentProfile }>
                                <IonAvatar>
                                    <img alt="add comment avatar" src={ profile.avatar } />
                                </IonAvatar>
                                <p className="ion-margin-left">Add a comment...</p>
                            </div>

                            <div className={ styles.postAddCommentActions }>
                                <IonIcon icon={ heart } color="danger" />
                                <IonIcon icon={ addCircleOutline } color="medium" />
                            </div>
                        </div>

                        <div className={ styles.postTime }>
                            <p>{ post.time }</p>
                        </div>
                    </div>
                );
            })}
        </div>  
    );
}

export default Feed;