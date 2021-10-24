import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

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

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={foods} />
			<ViewCart navigation={navigation} />
		</View>
	);
}
