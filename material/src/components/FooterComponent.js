import {
    Typography,
    BottomNavigation,
    BottomNavigationAction
} from "@mui/material";

import {Restore, Favorite, LocationOn, Folder} from "@mui/icons-material";
import React from 'react';


function FooterComponent() {
    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <footer>
            <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<Restore/>}/>
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<Favorite/>}/>
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOn/>}/>
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<Folder/>}/>
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">Web Lesson js Material UI site</Typography>
        </footer>
    )
}

export default FooterComponent;