import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from "../firebase";

export default function OrderCompleted() {
	const [lastOrder, setLastOrder] = useState({
		items: [
			{
				title: "Chilaquiles",
				description:
					"Chilaquiles with cheese and sauce. A delicious mexican dish",
				price: "$14.50",
				image:
					"https://i.pinimg.com/originals/4b/9d/38/4b9d38111156b6502689f0b8c8fcf865.jpg",
			},
		],
	});
	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItems
	);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	useEffect(() => {
		const db = firebase.firestore();
		const unsubscribe = db
			.collection("orders")
			.orderBy("createdAt", "desc")
			.limit(1)
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doc) => {
					setLastOrder(doc.data());
				});
			});

		return () => unsubscribe();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View
				style={{
					margin: 15,
					alignItems: "center",
					height: "100%",
					marginTop: 30,
				}}
			>
				<LottieView
					style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
					source={require("../assets/animations/check-mark.json")}
					autoPlay
					speed={0.5}
					loop={false}
				/>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
					}}
				>
					Your order at {restaurantName} has been placed for {total}
				</Text>
				<ScrollView showsVerticalScrollIndicator={false}>
					<MenuItems
						foods={lastOrder.items}
						hideCheckbox={true}
						marginLeft={10}
					/>
					<LottieView
						style={{ height: 200, alignSelf: "center" }}
						source={require("../assets/animations/cooking.json")}
						autoPlay
						speed={0.5}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
