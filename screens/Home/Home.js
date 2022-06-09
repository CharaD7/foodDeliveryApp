import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList
} from 'react-native';
import { FONTS, SIZES, COLORS, dummyData, icons } from "../../constants";

const Home = () => {

	const [selectedCategoryId, setSelectedCategoryId] = useState(1);
	const [selectedMenuType, setSelectedMenuType] = useState(1);
	const [menuList, setMenuList] = useState([]);

	function renderSearch() {
		return (
			<View
				style={{
					flexDirection : 'row',
					height : 40,
					alignItems : 'center',
					marginHorizontal : SIZES.padding,
					marginVertical : SIZES.base,
					paddingHorizontal : SIZES.radius,
					borderRadius : SIZES.radius,
					backgroundColor : COLORS.lightGray2
				}}
			>
			
			{/* Icon */}
			<Image 
				source={icons.search}
				style={{
					height : 20,
					width : 20,
					tintColor : COLORS.black
				}}
			/>
			
			{/* Text Input */}
			<TextInput 
				style={{
					flex : 1,
					marginLeft : SIZES.radius,
					marginVertical : -5,
					...FONTS.body3
				}}
				placeholder="search food..."
			/>
			
			{/* Filter */}
			<TouchableOpacity
				onPress={() => {}}
			>
				<Image 
					source={icons.filter}
					style={{
						height : 20,
						width : 20,
						tintColor : COLORS.black
					}}
				/>
			</TouchableOpacity>
			
			</View>
		)
	}

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			{/* Search */}
			{renderSearch()}


			{/* List */}
		</View>
	)
}

export default Home;
