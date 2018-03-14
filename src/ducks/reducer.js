import axios from 'axios'

const initialState = {
    propertyName: '',
    propertyDesc: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    desiredRent: 0,
    listings: [],

}

//--------Action Keepers--------// 

const PROPERTY_NAME_DESC = 'PROPERTY_NAME_DESC'
const ADDRESS = 'ADDRESS'
const CITY = 'CITY'
const STATE = 'STATE'
const ZIP = 'ZIP'
const IMAGE_URL = 'IMAGE_URL'
const LOAN_AMOUNT = 'LOAN_AMOUNT'
const MONTHLY_MORTGAGE = 'MONTHLY_MORTGAGE'
const DESIRED_RENT = 'DESIRED_RENT'
const LISTINGS = 'LISTINGS'


//--------Action Creators--------// 

export function updatePropertyNameDesc(name,desc){
    return{
        type: PROPERTY_NAME_DESC,
        payload: axios.post('/api/updatePropNameDesc', {propertyName: name, propertyDesc: desc})
        .then(res=>{
            return res
        })
    }
}


//--------Reducer--------// 

function reducer(state=initialState, action){
    switch(action.type){
        case PROPERTY_NAME_DESC + '_FULFILLED':
            return Object.assign({},state,{propertyName: action.payload})
        default: 
            return state
    }
}

export default reducer