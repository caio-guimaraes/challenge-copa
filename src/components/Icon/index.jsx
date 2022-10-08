import { ReactComponent as arrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as arrowRight } from './svgs/arrow-right.svg'
import { ReactComponent as back } from './svgs/back.svg'

const icons = {
    arrowLeft,
    arrowRight,
    back,
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element { ...props } />
}