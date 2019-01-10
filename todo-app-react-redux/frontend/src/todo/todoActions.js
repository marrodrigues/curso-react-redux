import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const add = description => {
    return dispatch => {
        Axios.post(URL, { description } )
            .then(res => dispatch({type: 'TODO_ADDED', payload: res.data }))
            .then(res => dispatch(search()))
    }
}

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const markAsDone = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(res => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(res => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        Axios.delete(`${URL}/${todo._id}`)
            .then(res => dispatch(search()))
    }
}

export const search = () => {
    const req = Axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'TODO_SEARCHED',
        payload: req
    }    
}    

