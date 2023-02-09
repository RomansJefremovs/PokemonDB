import {SliderItemProps} from "@/common/types/SliderItem.types";
import {Card, Image, Text} from "@nextui-org/react";
import PokemonLogo from '../../assets/Pokémon_logo.png'

const SliderItem = ({className, img,title}:SliderItemProps) => {

    return(
        <Card css={{
            ai:"center"
        }} className={className} >
            <Card.Image src={img.src}/>
            <Text size={'$2xl'}>{title}</Text>
        </Card>
    )
}
export default SliderItem