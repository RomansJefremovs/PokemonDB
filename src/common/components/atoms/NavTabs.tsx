import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Orbitron} from "@next/font/google";
import {createMuiTheme, styled} from '@mui/material/styles';
import {ThemeProvider} from "@mui/system";
const orbitron = Orbitron({
    weight:'900',
    style:"normal",
    subsets:['latin']})
const theme = createMuiTheme({
//
})
const NavTabs = () => {
    const [value, setValue] = React.useState(3);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const style = {
        color:"black",
        '&.Mui-selected': {
            color: 'black'
        }
    }

    return (

            <Tabs sx={{}}  value={value} onChange={handleChange}
            >
                <Tab className={orbitron.className} label="Home" sx={style} />
                <Tab className={orbitron.className} label="Cards" sx={style}  />
                <Tab className={orbitron.className} label="Sets" sx={style} />
                <Tab className={orbitron.className} label="Pokemons" sx={style} />
            </Tabs>
    );
}

export default NavTabs