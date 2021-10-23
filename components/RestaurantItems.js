import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const localRestaurants = [
	{
		name: "Beachside Bar",
		image_url:
			"http://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-12.jpg",
		categories: ["Cafe", "Bar"],
		price: "$",
		reviews: 1224,
		rating: 4.5,
	},
	{
		name: "Benihana",
		image_url:
			"https://www.ntu.ac.uk/__data/assets/image/0021/404931/junk-food.jpg",
		categories: ["Cafe", "Bar"],
		price: "$",
		reviews: 1244,
		rating: 3.7,
	},
	{
		name: "India's Grill",
		image_url:
			"http://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-2.jpg",
		categories: ["Indian", "Bar"],
		price: "$",
		reviews: 700,
		rating: 4.9,
	},
];

export default function RestaurantItems(props) {
	return (
		<TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
			{props.restaurantData.map((restaurant, index) => (
				<View
					key={index}
					style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}
				>
					<RestaurantImage image={restaurant.image_url} />
					<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
				</View>
			))}
		</TouchableOpacity>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			source={{
				uri: props.image,
			}}
			style={{ width: "100%", height: 180 }}
		/>
		<TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
			<MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: 10,
			alignItems: "center",
		}}
	>
		<View>
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
			<Text style={{ fontSize: 13, color: "gray" }}>30-40 min</Text>
		</View>
		<View
			style={{
				backgroundColor: "#eee",
				height: 30,
				width: 30,
				alignItems: "center",
				borderRadius: 15,
				justifyContent: "center",
			}}
		>
			<Text>{props.rating}</Text>
		</View>
	</View>
);
