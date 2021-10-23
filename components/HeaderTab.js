import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderTab = (props) => {
	return (
		<View style={{ flexDirection: "row", alignSelf: "center" }}>
			<HeaderButton
				text="Delivery"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
		</View>
	);
};

const HeaderButton = (props) => {
	const { text, setActiveTab, activeTab } = props;
	return (
		<TouchableOpacity
			style={{
				backgroundColor: activeTab === text ? "black" : "white",
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30,
			}}
			onPress={() => setActiveTab(text)}
		>
			<Text
				style={{
					color: activeTab === text ? "white" : "black",
					fontSize: 15,
					fontWeight: "bold",
				}}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default HeaderTab;
