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

const PROPERTY_NAME = 'PROPERTY_NAME'
const PROPERTY_DESC = 'PROPERTY_DESC'
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

export function updatePropertyName(name){
    return{
        type: PROPERTY_NAME,
        payload: name
    }
}

//--------Reducer--------// 

function reducer(state=initialState, action){
    switch(action.type){
        case PROPERTY_NAME:
            return Object.assign({},state,{propertyName: action.payload})
    }
}

export default reducer