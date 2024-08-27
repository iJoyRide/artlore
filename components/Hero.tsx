import BlurIn from "./magicui/blur-in"
import WordRotate from "./magicui/word-rotate"
import { VelocityScroll } from "./magicui/scroll-based-velocity"

const Hero = () => {
    return(
        <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
            <div className="flex flex-col">
                <div>
                    <BlurIn word="THE ART LORE" className="text-4xl font-bold text-black dark:text-white"/>
                </div>
                
                <div className="w-[50vw]">
                    <VelocityScroll
                    text="Creativity Starts Here"
                    default_velocity={3}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-stone-600 drop-shadow-sm dark:text-slate-400 md:text-4xl md:leading-[5rem]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero