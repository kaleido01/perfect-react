import React, { Component } from "react";
import Aux from "./../../hoc/_Aux";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchaseable: false,
		purchasing: false
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients).reduce((result, idKey) => {
			return (result += ingredients[idKey]);
		}, 0);
		if (sum === 0) {
			this.setState({ purchaseable: false });
		} else {
			this.setState({ purchaseable: true });
		}
		console.log(this.state.purchaseable);
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		const updatedCounted = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCounted;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState(
			{ totalPrice: newPrice, ingredients: updatedIngredients },
			this.updatePurchaseState(updatedIngredients)
		);
	};
	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCounted = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCounted;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};
	purchaseContinueHandler = () => {
		alert("you contuinue");
	};

	render() {
		const { ingredients, totalPrice, purchaseable, purchasing } = this.state;
		const disabledInfo = {
			...ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
					<OrderSummary
						ingredients={ingredients}
						price={totalPrice.toFixed(2)}
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinue={this.purchaseContinueHandler}
					/>
				</Modal>
				<Burger ingredients={ingredients} />
				<BuildControls
					price={totalPrice}
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					purchaseable={purchaseable}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
