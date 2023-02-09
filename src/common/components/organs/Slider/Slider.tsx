import { useState } from 'react'
import { cx } from '@emotion/css'

import * as styles from '../Slider/styles'
import SliderItem from "@/common/components/atoms/SliderItem";
import PokemonLogo from "@/common/assets/Pokémon_logo.png";

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
const Carousel = () => {
    const [sides, setSides] = useState(initialSides)

    const updateCurrent = (direction: 1 | -1) => {
        let sortedSides = getSortedSides(direction, sides)
        setSides(sortedSides)
    }
// @ts-ignore
    const renderSides = () => {
        // @ts-ignore

        return sides.map((className: string, index) => (
            // @ts-ignore
            // <div key={index} className={cx(styles.side, styles[className])} />
            <SliderItem className={cx(styles.side, styles[className])} img={PokemonLogo}  title={'Charizard'}/>
        ))
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <div className={styles.hexagon}>{renderSides()}</div>
                </div>
            </div>
            <button onClick={() => updateCurrent(1)}>Left</button>
            <button onClick={() => updateCurrent(-1)}>Right</button>
        </div>
    )
}

export default Carousel
