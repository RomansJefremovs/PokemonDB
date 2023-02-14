import {SliderItemProps} from "@/common/types/SliderItem.types";
import {Card, Image, Text} from "@nextui-org/react";
import PokemonLogo from '../../assets/Pokémon_logo.png'

const SliderItem = ({className, img,title}:SliderItemProps) => {

    return(
        <div className={className}>
            <Card css={{
                // width:"100%",
                ai:"center"
            }} >

                <Text size={'$2xl'}>{title}</Text>
            </Card>
        </div>
    )
}
export default SliderItem