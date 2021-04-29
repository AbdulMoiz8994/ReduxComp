// import react-redux
import {connect} from 'react-redux'
import {ADDCART} from '../Service/Actions/Action'
import Home from '../Components/Home';
// export {Home} from '../Components/Home';

// we will make a function which will save our data in store
const mapDispatchToProps=(dispatch) =>({
       addToCardHandler: (data) => dispatch(ADDCART(data))
})
const mapStateToProps=(state) =>({
   Data: state
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

