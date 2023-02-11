import close from './close.svg'
import doggoFull from './doggo-full.png'
import doggoSmall from './doggo-small.png'
import menu from './menu.svg'
import arrowUp from "./arrow-up.svg"
import resume from "./Resume 2.2.pdf"
import bundestag from './slides/bundestag.jpg'
import gundam from './slides/gundam.jpg'
import pc from './slides/pc.jpg'
import peiwenie from './slides/peiwenie.jpg'

export {
    close,
    doggoFull,
    doggoSmall,
    menu,
    arrowUp,
    resume
}

export const slides = [
    {
        image: bundestag,
        label: 'Reichstag Building',
        desc: 'The Reichstag building in Berlin!',
        pos: 'bottom',
        px: 70
    },
    {
        image: gundam,
        label: 'RX-79-2',
        desc: 'From a Bandai pop-up store in San Diego',
        pos: 'bottom',
        px: 50
    },
    {
        image: pc,
        label: 'My custom-built PC',
        desc: 'NCASE M1 | 5600X | EVGA FTW3 3060Ti',
        pos: 'top',
        px: 75
    },
    {
        image: peiwenie,
        label: 'My partner',
        desc: '@peiwenie!',
        pos: 'bottom',
        px: 0
    }
]