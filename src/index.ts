

import { Person } from './interfaces'


const inoutOutput = <T>(arg: T): T => {
    return arg

}

inoutOutput<string>('hi')
inoutOutput<number>(3)