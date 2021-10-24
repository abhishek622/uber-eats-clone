import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar({ cityHandler }) {
	const [text, onChangeText] = useState(null);
	return (
		<View style={{ marginTop: 15, flexDirection: "row" }}>
			<View
				style={{
					backgroundColor: "#eee",
					borderRadius: 50,
					flexDirection: "row",
					alignItems: "center",
					marginRight: 10,
					flexDirection: "row",
					flex: 1,
					alignItems: "center",
					paddingHorizontal: 4,
					paddingVertical: 8,
				}}
			>
				<View style={{ marginLeft: 4 }}>
					<Ionicons name="location-sharp" size={24} />
				</View>
				<View style={{ flex: 1 }}>
					<TextInput
						style={{
							backgroundColor: "#eee",
							borderRadius: 20,
							fontWeight: "bold",
							marginLeft: 7,
						}}
						onChangeText={onChangeText}
						value={text}
						placeholder="Search"
					/>
				</View>
				<Pressable
					style={{
						marginRight: 8,
						backgroundColor: "white",
						padding: 9,
						borderRadius: 30,
						shadowColor: "#7a7a7a",
						shadowOffset: { width: -2, height: 4 },
						shadowOpacity: 0.2,
						shadowRadius: 3,
						elevation: 3,
					}}
					onPress={() => cityHandler(text)}
				>
					<Text style={{ fontWeight: "bold" }}>Search</Text>
				</Pressable>
			</View>
			{/* <GooglePlacesAutocomplete
				onPress={(data, details = null) => {
					const city = data;
					cityHandler(city);
				}}
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "bold",
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<Pressable
						style={{
							flexDirection: "row",
							marginRight: 8,
							backgroundColor: "white",
							padding: 9,
							borderRadius: 30,
							alignItems: "center",
						}}

						onPress={() => cityHandler(city)}
						
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</Pressable>
				)}
			/> */}
		</View>
	);
}
