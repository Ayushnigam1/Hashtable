import { ReactNode } from "react"

export interface HeroProps {
    background?: string;
    children: ReactNode;
}

export const Hero = (props: HeroProps) => {
    return <>
        <div className="h-[600px] flex bg-cover bg-center flexm justify-center items-center bg-sky-100 dark:bg-gray-800"
            style={{
                backgroundImage: `url(${props.background})`,
            }}>
                {props.children}
        </div>
    </>
}
