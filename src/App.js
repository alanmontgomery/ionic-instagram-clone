import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bagOutline, ellipse, home, personOutline, play, playCircleOutline, search, searchOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ProfileStore } from './pages/ProfileStore';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';

const App = () => {

  const profile = ProfileStore.useState(s => s.profile);

  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/myprofile">
            <MyProfile />
          </Route>

          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={searchOutline} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={playCircleOutline} />
          </IonTabButton>

          <IonTabButton tab="tab4" href="/tab3">
            <IonIcon icon={bagOutline} />
          </IonTabButton>

          <IonTabButton tab="tab5" href="/myprofile">
            <img alt="tab avatar" src={ profile.avatar } />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}

export default App;
