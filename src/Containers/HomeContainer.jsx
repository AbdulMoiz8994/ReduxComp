import Home from '../Components/Home';
import {connect} from 'react-redux'
import {Action,RemoveAction} from '../Services/Action/Action'

// This function send the data in store
const mapDispatchToppProps=(dispatch) =>({
    addToCard: data => dispatch(Action(data)),
    removeTOCard: data => dispatch(RemoveAction(data))
})

// This function send data from where the request will come it could be any components etc
const mapStateToProps=(state) =>({
    // Data: state.Reducer
})
export default connect(mapStateToProps,mapDispatchToppProps)(Home)

// export default Home;
