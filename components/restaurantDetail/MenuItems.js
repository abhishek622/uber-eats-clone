import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
	{
		title: "Lasagna",
		description: "White butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image:
			"https://cdn.diys.com/wp-content/uploads/2018/08/vegetarian-lasagna.jpg",
	},
	{
		title: "Tandoori Chicken",
		description: "Amazing Indian dish with tenderloin chicken off the sizzle",
		price: "$19.20",
		image:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
	},
	{
		title: "Chilaquiles",
		description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
		price: "$14.50",
		image:
			"https://i.pinimg.com/originals/4b/9d/38/4b9d38111156b6502689f0b8c8fcf865.jpg",
	},
	{
		title: "Chicken caesar salad",
		description: "One can never go wrong with a chicken caesar salad",
		price: "$21.50",
		image:
			"https://paradisogarden.thedomeng.com/wp-content/uploads/2019/12/chicken-caesar-salad.jpg",
	},
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$31.50",
		image:
			"https://inspirationseek.com/wp-content/uploads/2016/02/Lasagna-Pictures_02.jpg",
	},
];

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "bold",
	},
});

export default function MenuItems({ restaurantName }) {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				...item,
				restaurantName: restaurantName,
				checkboxValue: checkboxValue,
			},
		});

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItems.items
	);
	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemStyle}>
						<BouncyCheckbox
							iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
							fillColor="green"
							isChecked={isFoodInCart(food, cartItems)}
							onPress={(checkboxValue) => selectItem(food, checkboxValue)}
						/>
						<FoodInfo food={food} />
						<FoodImage food={food} />
					</View>
					<Divider
						width={0.5}
						orientation="vertical"
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
		</ScrollView>
	);
}

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{ width: 100, height: 100, borderRadius: 8 }}
		/>
	</View>
);
