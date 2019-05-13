import React from "react";

import Aux from "./../../../hoc/_Aux";
import Button from "./../../UI/Button/Button";

const OrderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
		<li key={igKey}>
			<span style={{ textTransform: "capitalize" }}>{igKey}</span>:
			{props.ingredients[igKey]}
		</li>
	));
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with following ingredients :</p>

			<ul>{ingredientSummary}</ul>
			<p>Continue to CheckOut?</p>
			<Button btnType="Danger" clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinue}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
