import React from 'react'
import { DEC, INC, RES } from './Action'

const Reducer = (store={count:0},action) => {
 
    switch(action.type)
    {
        case INC :
            return{
                ...store,
                count:store.count+1
            }
            break

        case DEC :
            return{
                ...store,
                count:store.count-1
            }
            break

        case RES :
            return{
                ...store,
                count:0
            }
            break

            default :return{...store}
    }
    return store
}

export default Reducer