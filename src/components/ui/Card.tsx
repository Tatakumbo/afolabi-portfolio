import type { ReactNode } from "react";
type CardProps = {
    children: ReactNode
}

function ImageFrame() {

    return (
        <>
            <div className="relative p-3 h-50 my-2">
                <div className="absolute bottom-0 right-0 h-8 w-8 border-r border-b border-black"></div>
                <div className="absolute top-0 left-0 h-8 w-8 border-l border-t border-l border-black"></div>
                <img src="public\images\hero.jpg" alt="hero image" className="object-cover w-full h-full" />
                {/*remember to write HoOPE in teh picture */}
                <img src="public\images\Afo tue tue.jpg" alt="fola pic" className="size-23 rounded-full border-1 object-cover absolute bottom-0 left-8 translate-y-[50px]" />
            </div>

        </>
    )
}

function Card({ children }: CardProps) {

    return (
        <div className="max-w-180 items-right mt-17 flex flex-col gap-5 ">
            {children}
        </div>
    )
}

export { ImageFrame, Card };