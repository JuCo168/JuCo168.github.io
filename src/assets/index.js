import doggoFull from './doggo-full.png'
import doggoSmall from './doggo-small.png'
import arrowUp from "./arrow-up.svg"
import resume from "./Resume 2.2.pdf"
import profile from './profile.png'
import bundestag from './slides/bundestag.jpg'
import gundam from './slides/gundam.jpg'
import pc from './slides/pc.jpg'
import peiwenie from './slides/peiwenie.jpg'

export {
    doggoFull,
    doggoSmall,
    arrowUp,
    resume,
    profile
}

export const slides = [
    {
        image: bundestag,
        desc: 'The Reichstag building in Berlin!',
        pos: 'bottom',
        px: 70
    },
    {
        image: gundam,
        desc: 'RX-79-2 from a Bandai pop-up store in San Diego',
        pos: 'bottom',
        px: 50
    },
    {
        image: pc,
        desc: 'NCASE M1 | 5600X | EVGA FTW3 3060Ti',
        pos: 'top',
        px: 75
    },
    {
        image: peiwenie,
        desc: '@peiwenie!',
        pos: 'bottom',
        px: 0
    }
]