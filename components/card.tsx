"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import {Button, ButtonGroup} from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import * as icons from 'react-ionicons'

interface IconProps {
    icon: string;
}
interface CardProps {
    icon: string,
    title: string,
    desc: string,
    link: string,
    buttonDesc: string;
}


const iconLogic = ({icon}: IconProps) => {
    if(icon === "WarningOutline") {return (<icons.WarningOutline height="25px" color={'#FFFFFF'}/>)}
    if(icon === 'AirplaneOutline') { return(<icons.AirplaneOutline height="25px" color={'#FFFFFF'}/>)}
    if(icon === 'BonfireOutline') { return(<icons.BonfireOutline height="25px" color={'#FFFFFF'}/>)}
    if(icon === 'DocumentTextOutline') { return(<icons.DocumentTextOutline height="25px" color={'#FFFFFF'}/>)}
    if(icon === 'GlobeOutline') { return(<icons.GlobeOutline height="25px" color={'#FFFFFF'}/>)}
return (<div></div>)
}

export const PageCard = ({ icon, title, desc, link, buttonDesc }: CardProps) => {
    return (
        <Card className="max-w-[400px] font-sans">
            <CardHeader className="flex gap-3">
                <div className="flex flex-row">
                <div className="pt-1">{iconLogic({icon})}</div>
                    <p className="text-lg pl-1 pt-0.5">{title}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{desc}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link showAnchorIcon href={link}>
                 {buttonDesc}
                </Link>
            </CardFooter>
        </Card>
    )
};

