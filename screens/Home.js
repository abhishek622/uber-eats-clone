import React, { useEffect, useState } from "react";
import {
	View,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTab from "../components/home/HeaderTab";
import RestaurantItems, {
	localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const Home = ({ navigation }) => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState("San Francisco");
	const [activeTab, setActiveTab] = useState("Delivery");

	const YELP_API_KEY =
		"4dZCKbCpx36-4lqky5gvtsDtdMN6urpB0CBdiF7XGp620H5jaxgmIXSZUqGKpjWdjtK_UeFDtmshgjtjwx_BGU4GyU-XMWWPYclh76Kxiw06HKg9XMkJnCiMJqVxYXYx";

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};
		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ backgroundColor: "#fff", padding: 15 }}>
				<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems
					restaurantData={restaurantData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
		backgroundColor: "#eee",
		flex: 1,
	},
});

export default Home;
