import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList
} from 'react-native';

// Constants
import { FONTS, SIZES, COLORS, dummyData, icons } from "../../constants";

// Custom components
import { HorizontalFoodCard } from "../../components";

// Section
const Section = ({ title, onPress, children }) => {
	return (
		<View>
			{/* Header */}
			<View
				style={{
					flexDirection : 'row',
					marginHorizontal : SIZES.padding,
					marginTop : 30,
					marginBottom : 20
				}}
			>
				<Text style={{ flex : 1, ...FONTS.h3 }}>
					{title}
				</Text>

				<TouchableOpacity onPress={onPress}>
					<Text style={{ colro : COLORS.primary, ...FONTS.body3 }}>Show All</Text>
				</TouchableOpacity>
			</View>

			{/* Content */}
			{children}
		</View>
	)
}

const Home = () => {

	const [selectedCategoryId, setSelectedCategoryId] = useState(1);
	const [selectedMenuType, setSelectedMenuType] = useState(1);
	const [recommends, setRecommends] = useState([]);
	const [menuList, setMenuList] = useState([]);

	useEffect(() => {
		handleChangeCategory(selectedCategoryId, selectedMenuType)
	}, [])

	// Category handler
	function handleChangeCategory(categoryId, menuTypeId) {
		// retrieve the recommended menu
		let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended");

		// set the recommended menu based on the category id
		setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)));

		// find menu based on menuTypeId
		let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);

		// set the menu based on the categoryId
		setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)));

	}

	// Render section
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

	function renderMenuTypes() {
		return (
			<FlatList
				horizontal
				data={dummyData.menu}
				keyExtractor={item => `${item.id}`}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					marginTop : 30,
					marginBottom : 20
				}}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={{
							marginLeft : SIZES.padding,
							marginRight : index == dummyData.menu.length - 1 ? SIZES.padding : 0
						}}
						onPress={() => {
							setSelectedMenuType(item.id)
							handleChangeCategory(selectedCategoryId, item.id)
						}}
					>
						<Text
							style={{
								color : selectedMenuType == item.id ? COLORS.primary : COLORS.black,
								...FONTS.h3
							}}
						>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
		)
	}

	function renderRecommendedSection() {
		return (
			<Section
				title="Recommended"
				onPress={() => console.log('Show all recommended')}
			>
				<FlatList
					data={recommends}
					keyExtractor={item => `${item.id}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<HorizontalFoodCard
							containerStyle={{
								height : 180,
								width : SIZES.width * 0.85,
								marginLeft : index == 0 ? SIZES.padding : 18,
								marginRight : index == recommends.length - 1 ? SIZES.padding : 0,
								paddingRight : SIZES.radius,
								alignItems : 'center'
							}}
							imageStyle={{
								marginTop : 35,
								height : 150,
								width : 150
							}}
							item={item}
							onPress={() => console.log('HorizontalFoodCard')}
						/>
					)}
				/>
			</Section>
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
			<FlatList
				data={menuList}
				keyExtractor={(item) => `${item.id}`}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Recommended Section */}
						{renderRecommendedSection()}

						{/* Menu type */}
						{renderMenuTypes()}
					</View>
				}
				renderItem={({item, index}) =>{
					return (
						<HorizontalFoodCard
							containerStyle={{
								height : 130,
								alignItems: 'center',
								marginHorizontal : SIZES.padding,
								marginBottom : SIZES.radius
							}}
							imageStyle={{
								marginTop : 20,
								height : 110,
								width : 110
							}}
							item={item}
							onPress={() => console.log("HorizontalFoodCard")}
						/>
					)
				}}
			/>
		</View>
	)
}

export default Home;
