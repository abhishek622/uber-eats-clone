import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function ViewCart() {
	const items = useSelector((state) => state.cartReducer.selectedItems.items);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	// const totalUSD = total.toLocaleString("en-US", {
	// 	style: "currency",
	// 	currency: "USD",
	// });
	//console.log(total);

	return (
		<>
			{total ? (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "center",
						position: "absolute",
						bottom: 40,
						zIndex: 999,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								marginTop: 20,
								backgroundColor: "black",
								flexDirection: "row",
								justifyContent: "flex-end",
								padding: 15,
								borderRadius: 30,
								width: 300,
								position: "relative",
							}}
						>
							<Text style={{ color: "#fff", fontSize: 20, marginRight: 20 }}>
								View Cart
							</Text>
							<Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
								$ {total}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
}
