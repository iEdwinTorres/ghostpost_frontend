import React from "react";
import "./App.css";
import Posts from "./components/Posts.js";
import Roasts from "./components/Roasts";
import Boasts from "./components/Boasts";
import Popular from "./components/Popular";
import creatpost from "./components/createform";
import Welcome from "./components/welcome";
import Navbar from "./components/navbar";

import { Route } from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Welcome {...props} name="homepage"/>
                    )}
                />
                <Route path="/posts" component={Posts} />
                <Route path="/roasts" component={Roasts} />
                <Route path="/boasts" component={Boasts} />
                <Route path="/popular" component={Popular} />
                <Route path="/createpost" component={creatpost} />
            </div>
        );
    }
}

export default App;
