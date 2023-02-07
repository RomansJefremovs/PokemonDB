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
        <Navbar  variant={'sticky'}>
            <Navbar.Brand>
                <Image src={PokemonLogo} alt={'PokemonDB'} width={'120'} height={'50'}/>
                <Text css={{
                    paddingTop:'$15'
                }}  weight={'extrabold'}>DB</Text>
            </Navbar.Brand>
            <Navbar.Content
                css={{
                    "@xsMax": {
                        w: "100%",
                        jc: "space-between",
                    },
                }}
            >
                <Navbar.Item
                    css={{
                        "@xsMax": {
                            w: "100%",
                            jc: "center",
                        },
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
            </Navbar.Content>
            <Navbar.Content enableCursorHighlight
                            hideIn="xs"
                            variant="highlight"
                            activeColor="default">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link href="#">
                    Customers
                </Navbar.Link>
                <Navbar.Link   href="#">Pricing</Navbar.Link>
                <Navbar.Link   href="#">Company</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export default NavTabs