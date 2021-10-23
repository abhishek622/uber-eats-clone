import React, { useEffect, useState } from "react";
import {
	View,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	ScrollView,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItems, {
	localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);

	const YELP_API_KEY =
		"4dZCKbCpx36-4lqky5gvtsDtdMN6urpB0CBdiF7XGp620H5jaxgmIXSZUqGKpjWdjtK_UeFDtmshgjtjwx_BGU4GyU-XMWWPYclh76Kxiw06HKg9XMkJnCiMJqVxYXYx";

	const getRestaurantsFromYelp = () => {
		const yelpUrl =
			"https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};
		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) => setRestaurantData(json.businesses));
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ backgroundColor: "#fff", padding: 15 }}>
				<HeaderTab />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
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
