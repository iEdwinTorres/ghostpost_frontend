import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                            GhostPost
                    </Typography>
                    <ul className="Navigation">
                        <li>
                            <Link to="/posts">All Post</Link>
                        </li>
                        <li>
                            <Link to="/roasts">Roasts</Link>
                        </li>
                        <li>
                            <Link to="/boasts">Boasts</Link>
                        </li>
                        <li>
                            <Link to="/popular">Most Popular</Link>
                        </li>
                        <li>
                            <Link to="/createpost">Create Post</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    );
}
