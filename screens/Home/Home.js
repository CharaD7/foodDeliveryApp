import React from 'react';
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
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Text>Home</Text>
		</View>
	)
}

export default Home;
