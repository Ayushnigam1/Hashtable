import { ReactNode } from "react"

export interface HeroProps {
    background?: string;
    children: ReactNode;
}

export const Hero = (props: HeroProps) => {
    return <>
        <div
            style={{
                height: '600px',
                backgroundImage: `url(${props.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {props.children}
        </div>
    </>
}
