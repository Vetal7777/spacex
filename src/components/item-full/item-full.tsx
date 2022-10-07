import styles from './item-full.module.css';
import DragonHeader from "../dragon-header/dragon-header";
import Slider from "../slider/slider";
import Description from "../description/description";
import Params from "../params/params";
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import DragonI from "../../models/dragon";
import {AiFillHome} from "react-icons/ai";

export default function ItemFull():JSX.Element{
    const params = useParams();
    const id = params.id;
    const dragon = useAppSelector(({dragonSlice}) => dragonSlice.dragons.find(dragon => dragon.id === id)) as DragonI;
    return (
        <>
            <div className={styles.container}>
                <DragonHeader dragon={dragon}/>
                <Slider dragon={dragon}/>
                <Description dragon={dragon}/>
                <Params dragon={dragon}/>
                <NavLink
                    to={'/home'}
                    children={<AiFillHome style={{fill: "white",maxWidth:'20px',maxHeight:'20px'}}/>}
                    className={styles.home}
                />
            </div>
        </>
    )
}