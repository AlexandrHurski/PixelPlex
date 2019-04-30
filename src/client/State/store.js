import {createStore} from 'redux'

const initState = {
    showModal:false,
    chosenId:undefined,
    editableId:undefined,
    reload:false
}

const reducer = (state=initState,action) => {
    switch(action.type){
        case 'SHOW_MODAL':
            return {
                ...state,
                showModal:true,
                chosenId:action.element.id
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                showModal:false,
                chosenId:undefined
            }
        case 'MAKE_EDITABLE':
            return{
                ...state,
                editableId:action.element.id
            }
        case 'CLEAR_EDITABLE':
            return{
                ...state,
                editableId:undefined
            }
        default :
            return state
    }
}

const store = createStore(reducer)
export default store