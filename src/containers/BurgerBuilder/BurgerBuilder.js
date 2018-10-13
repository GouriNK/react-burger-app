import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {...};
  // }
  state =  {
    ingredients : {
      cheese : 1,
      salad : 3,
      bacon : 2,
      meat : 1
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;