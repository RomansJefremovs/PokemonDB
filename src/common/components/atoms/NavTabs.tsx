import React, {useState} from "react";
import {Navbar, Text} from "@nextui-org/react";
import PokemonLogo from '../../assets/Pokémon_logo.png'
import Image from "next/image";

const NavTabs = () => {
    const [isActive, setIsActive] = useState<boolean>()
    const handleClickChange = () =>{
        setIsActive(!isActive)
    }

    return (
        <Navbar  variant={'sticky'}>
            <Navbar.Brand>
                <Image src={PokemonLogo} alt={'PokemonDB'} width={'120'} height={'50'}/>
                <Text css={{
                    paddingTop:'$15'
                }}  weight={'extrabold'}>DB</Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight
                            hideIn="xs"
                            variant="highlight"
                            activeColor="default">
                <Navbar.Link  href="#">Features</Navbar.Link>
                <Navbar.Link href="#">
                    Customers
                </Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export default NavTabs