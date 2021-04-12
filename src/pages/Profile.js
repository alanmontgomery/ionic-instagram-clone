import { IonBackButton, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { addCircleOutline, arrowBackOutline, bookmarksOutline, chevronDown, ellipsisVertical, gridOutline, menuOutline, personOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
import styles from './Profile.module.scss';

import { ProfilesStore } from './ProfilesStore';
import { ProfileStore } from './ProfileStore';

const Profile = () => {

    const params = useParams();
    const profiles = ProfilesStore.useState(s => s.profiles);
    const currentProfile = ProfileStore.useState(s => s.profile);
    const [ profile, setProfile ] = useState(false);

    useIonViewWillEnter(() => {

        const profileID = params.id;
        const tempProfile = profiles.filter(p => parseInt(p.id) === parseInt(profileID))[0];
        setProfile(tempProfile);
    });

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">

                        { profile.id === currentProfile.id ?
                            <p className={ styles.username }>
                                { profile.username }
                                <IonIcon icon={ chevronDown } />
                            </p>
                        :
                            <>
                                <IonBackButton icon={ arrowBackOutline } color="dark" text="" />
                                <p className={ styles.username } style={{ marginLeft: "1.5rem" }}>
                                    { profile.username }
                                </p>
                            </>
                        }
					</IonButtons>

					<IonButtons slot="end">
						{ profile.id === currentProfile.id ?
                            <>
                                <IonButton color="dark">
                                    <IonIcon icon={ addCircleOutline } />
                                </IonButton>
                                <IonButton color="dark">
                                    <IonIcon icon={ menuOutline } />
                                </IonButton>
                            </>
                        :
                            <IonButton color="dark">
                                <IonIcon icon={ ellipsisVertical } />
                            </IonButton>
                        }
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
                <IonGrid>
                    <IonRow className="ion-text-center ion-justify-content-between ion-align-self-center ion-align-items-center">
                        <IonCol size="4">
                            <img src={ profile.avatar } alt="profile avatar" className={ styles.profileAvatar } />
                        </IonCol>

                        <IonCol>
                            <IonRow className="ion-text-center ion-justify-content-between ion-align-items-center ion-align-self-center ion-align">
                                <IonCol size="4" className="ion-text-center">
                                    <IonCardTitle className={ styles.value }>
                                        { profile.posts && profile.posts.length }
                                    </IonCardTitle>
                                    <IonCardSubtitle className={ styles.label }>Posts</IonCardSubtitle>
                                </IonCol>

                                <IonCol size="4" className="ion-text-center">
                                    <IonCardTitle className={ styles.value }>
                                        { profile.followers }
                                    </IonCardTitle>
                                    <IonCardSubtitle className={ styles.label }>Followers</IonCardSubtitle>
                                </IonCol>

                                <IonCol size="4" className="ion-text-center">
                                    <IonCardTitle className={ styles.value }>
                                        { profile.following }
                                    </IonCardTitle>
                                    <IonCardSubtitle className={ styles.label }>Following</IonCardSubtitle>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12" className={ styles.profileInfo }>
                            
                            <p className={ styles.profileUsername }>{ profile.firstname } { profile.surname }</p>
                            <p className={ styles.profileTitle }>{ profile.title }</p>
                            <p className={ styles.profileBio }>{ profile.bio }</p>
                            <a className={ styles.profileLink } href={ profile.link }>{ profile.link }</a>
                        </IonCol>
                    </IonRow>                    
                        
                    <IonRow className={ styles.profileActions }>
                        <IonCol size="5">
                            <IonButton expand="block" color="primary">Follow</IonButton>
                        </IonCol>

                        <IonCol size="5">
                            <IonButton className={ styles.lightButton } fill="outline" expand="block">Message</IonButton>
                        </IonCol>

                        <IonCol size="2">
                            <IonButton className={ styles.lightButton } fill="outline">
                                <IonIcon icon={ chevronDown } />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonRow className="ion-text-center ion-justify-content-center ion-align-items-center ion-align-self-center">
                    <IonCol size="6" className="ion-justify-content-center ion-align-items-center ion-align-self-center" style={{ borderBottom: "2px solid black", marginBottom: "2px" }}>
                        <IonIcon style={{ fontSize: "1.5rem" }} icon={ gridOutline } />
                    </IonCol>

                    <IonCol size="6" className="ion-justify-content-center ion-align-items-center ion-align-self-center">
                        <IonIcon style={{ fontSize: "1.5rem" }} icon={ bookmarksOutline } />
                    </IonCol>
                </IonRow>

                <IonRow className="ion-no-padding ion-no-margin">
                    { profile.posts && profile.posts.map((post, index) => {

                        return (
                            <IonCol className={ styles.postCol } key={ index } size="4">
                                <img alt="post" src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            </IonCol>
                        )
                    })}
                </IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Profile;
