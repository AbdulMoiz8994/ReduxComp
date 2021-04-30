import {connect} from 'react-redux'
// import {Action} from '../Services/Action/Action'
import {CartValue} from '../Components/CartValue'
// This function send the data in store
const mapDispatchToppProps=(dispatch) =>({
    // addToCard: data => dispatch(Action(data))
})
// This function  like store send data from where the request will come it could be any components etc
const mapStateToProps=(state) =>({
    Data: state.Reducer
})
export default connect(mapStateToProps,mapDispatchToppProps)(CartValue)
