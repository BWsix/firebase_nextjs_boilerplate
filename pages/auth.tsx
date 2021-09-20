import firebase from "firebaseApps/clientApp";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function SignInScreen() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}
