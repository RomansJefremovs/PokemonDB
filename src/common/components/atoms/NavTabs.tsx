import React, {useState} from "react";
import {Input, Navbar, Text} from "@nextui-org/react";
import PokemonLogo from '../../assets/Pokémon_logo.png'
import Image from "next/image";
import {SearchIcon} from "@/common/assets/searchIcon";


const NavTabs = () => {
    const [isActive, setIsActive] = useState<boolean>()
    const handleClickChange = () =>{
        setIsActive(!isActive)
    }

    return (
        <Navbar css={{
            w:"100%"
        }} variant={'sticky'}>
            <Navbar.Brand>
                <Image src={PokemonLogo} alt={'PokemonDB'} width={'120'} height={'50'}/>
                <Text h4 css={{
                    paddingTop:'$15',
                    // w:'25%',
                    jc:"space-between",
                }}  weight={'extrabold'}>DB</Text>
            </Navbar.Brand>
            <Navbar.Content
                            css={{
                                w:'75%',
                                jc:"space-between",
                            }}
            >
                   <Navbar.Item
                       css={{
                           w:"500px",
                           "@smMax": {
                               mw:"300px",
                               w: "100%",
                               jc: "center",
                           }
                       }}
                   >
                       <Input
                           clearable
                           contentLeft={
                               <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
                           }
                           contentLeftStyling={false}
                           css={{
                               w: "100%",
                               "@xsMax": {
                                   mw: "300px",
                               },
                               "& .nextui-input-content--left": {
                                   h: "100%",
                                   ml: "$4",
                                   dflex: "center",
                               },
                           }}
                           placeholder="Search..."
                       />
                   </Navbar.Item>
                <Navbar.Content
                    enableCursorHighlight
                    hideIn="sm"
                    variant="highlight"
                    activeColor="default"
                >
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">
                        Pokemons
                    </Navbar.Link>
                    <Navbar.Link   href="#">Cards</Navbar.Link>
                    <Navbar.Link   href="#">Sets</Navbar.Link>
                </Navbar.Content>
               </Navbar.Content>
        </Navbar>
    )
}

export default NavTabs