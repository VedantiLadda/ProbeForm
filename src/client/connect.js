import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allActions from './actions';
import Root from "./router";


function mapStateToProps(store){
    return{

    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators(allActions, dispatcher);
}

export var Main = connect(mapStateToProps, mapDispatchToProps)(Root);