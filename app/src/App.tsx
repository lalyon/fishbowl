import GameRoutes from "components/GameRoutes"
import Home from "pages/Home"
import * as React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routes from "./routes"

function App() {
  React.useEffect(() => {
    window.document.title = "Fishbowl"
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route
          path={routes.game.root}
          render={({ match }) => {
            return (
              <GameRoutes
                joinCode={match.params.joinCode.toUpperCase()}
              ></GameRoutes>
            )
          }}
        />
        <Route path="*">
          <Redirect to={routes.root}></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
