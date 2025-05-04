import Image from "next/legacy/image";


export const HeroImg = () => {
    return (
        <div>
            <Image
                src="/newcity-beta.png"
                alt="Blended Image"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black"></div>
        </div>
    )
}