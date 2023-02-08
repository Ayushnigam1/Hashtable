import { ReactNode } from "react"

export interface HeroProps {
    background?: string;
    children: ReactNode;
    length:string;
}

export const Hero = (props: HeroProps) => {
    return <>
        <div
            className={` h-[300px] ${
                props.length != undefined ? props.length : "md:h-[600px]"
              } px-4 flex bg-cover bg-center flex-col justify-center items-center bg-sky-200 dark:bg-gray-800 gap-3`}
            style={{
                backgroundImage: `url(${props.background})`,
            }}>
            {props.children}
        </div>
    </>
}
