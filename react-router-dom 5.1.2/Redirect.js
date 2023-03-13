//https://v5.reactrouter.com/web/api/Redirect

<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
////////////////////////////////////////////////////////////////////
<Redirect to="/somewhere/else" />
////////////////////////////////////////////////////////////////////
//push: bool
//When true, redirecting will push a new entry onto the history instead of replacing the current one.
  <Redirect push to="/somewhere/else" />
