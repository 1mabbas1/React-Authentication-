import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";

function App() {
  const AuthCtx = useContext(AuthContext);
  const loggedIn = AuthCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!loggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {loggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
