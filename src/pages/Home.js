import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { addCircleOutline, heartOutline, paperPlaneOutline } from 'ionicons/icons';
import Feed from '../components/Feed';
import Stories from '../components/Stories';
import { PostStore } from './PostStore';
import { ProfilesStore } from './ProfilesStore';

const Home = () => {

	const profiles = ProfilesStore.useState(s => s.profiles);
	const posts = PostStore.useState(s => s.posts);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<img alt="main logo" src="/assets/logo.png" style={{ width: "7rem" }} />
					</IonButtons>

					<IonButtons slot="end">
						<IonButton color="dark">
							<IonIcon icon={ addCircleOutline } />
						</IonButton>
						<IonButton color="dark">
							<IonIcon icon={ heartOutline } />
						</IonButton>

						<IonButton color="dark">
							<IonIcon icon={ paperPlaneOutline } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<Stories profiles={ profiles } />
				<Feed posts={ posts } />
			</IonContent>
		</IonPage>
	);
};

export default Home;
