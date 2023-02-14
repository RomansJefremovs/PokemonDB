import {useEffect, useState} from 'react'
import { cx } from '@emotion/css'
import * as styles from '../Slider/styles'
import InitCard1 from "@/common/assets/SWSH3_EN_124.png";
import InitCard2 from "@/common/assets/SWSH6_EN_105.png";
import InitCard3 from "@/common/assets/SWSH12PT5_EN_46.png";
import InitCard4 from "@/common/assets/SWSH12PT5_EN_55.png";
import InitCard5 from "@/common/assets/SWSH12PT5GG_EN_GG24.png";
import InitCard6 from "@/common/assets/SWSH12PT5GG_EN_GG44.png";
import Left from "@/common/assets/left-arrow.png"
import Right from "@/common/assets/right-arrow.png"
import {Card as CardT} from "pokemon-tcg-sdk-typescript/dist/interfaces/card";
import {getCardsForHomePage} from "@/common/hooks/pokemonTCG";
import {StaticImageData} from "next/image";
import {Image, Container} from "@nextui-org/react";

const getSortedSides = (direction: 1 | -1, sides: string[]): string[] => {
    let sorted: string[] = []

    if (direction === 1) {
        const toMove = sides.pop() as string
        sorted = [toMove, ...sides.filter((side) => side !== toMove)]
    } else if (direction === -1) {
        const toMove = sides.shift() as string
        sorted = [...sides.filter((side) => side !== toMove), toMove]
    }

    return sorted
}

const initialSides = ['back', 'farLeft', 'left', 'front', 'right', 'farRight']
const initialCards = [InitCard1,InitCard2,InitCard3,InitCard4,InitCard5,InitCard6]
const Carousel = () => {
    const [sides, setSides] = useState(initialSides)
    const [cards, setCards] = useState<CardT[]>()
    const [initCards, setInitCards] = useState<StaticImageData[]>(initialCards)
    const updateCurrent = (direction: 1 | -1) => {
        let sortedSides = getSortedSides(direction, sides)
        setSides(sortedSides)
    }

    useEffect(()=>{
        getCardsForHomePage().then(data => setCards(data))
    },[])

    const renderSides = () => {
        let arrIndex = 0
        return sides.map((className: string, index) => {
            // @ts-ignore
            const sliderItemStyle = cx(styles.side, styles[className])
            // const cardData = cards != undefined ? cards[arrIndex] : false
            const sliderItemImage = cards == undefined ? initCards[arrIndex].src : cards[arrIndex].images.large
            arrIndex++
            return <Image key={index} className={sliderItemStyle} src={sliderItemImage}/>
        })
    }
    console.log(cards)
    return (
        <Container css={{
            width:"100%",
            height:"400px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <a  onClick={() => updateCurrent(1)} >
                <Image css={{width:"4rem"}} src={Left.src} />
            </a>
                <Container css={{perspective: "800px",
                    perspectiveOrigin: "center bottom",
                    transformStyle: "preserve-3d"}}>
                    <Container css={{  position: "relative",
                        width: "400px",
                        height: "200px",
                        transformStyle: "preserve-3d"}}>{renderSides()}</Container>
                </Container>
            <a onClick={() => updateCurrent(-1)}>
                <Image css={{width:"4rem"}} src={Right.src} />
            </a>
        </Container>
    )
}

export default Carousel
