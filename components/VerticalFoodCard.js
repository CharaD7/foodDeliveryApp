import { TouchableOpacity, Image, View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width : 200,
        padding : SIZES.radius,
        alignItems : 'center',
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.lightGray2,
        ...containerStyle
      }}
    >
      {/* Calories and Favourite */}
      <View style={{ flexDirection : 'row' }}>
        {/* Calories */}
        <View style={{ flexDirection : 'row', flex : 1 }}>
          <Image
            source={icons.calories}
            style={{
              width : 30,
              height : 30
            }}
          />
          <Text style={{ color : COLORS.darkGray2, ...FONTS.body5 }}>{item.calories} Calories</Text>
        </View>

        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            width : 20,
            height : 30,
            tintColor : item.isFavourite ? COLORS.primary : COLORS.gray
          }}
        />
      </View>

      {/* Image */}
      <View
        style={{
          height : 150,
          width : 150,
          alignItems : 'center',
          justifyContent : 'center'
        }}
      >
        <Image
          source={item.image}
          style={{
            height : "100",
            width : "100"
          }}
        />
      </View>
      {/* Info */}
    </TouchableOpacity>
  )
}

export default VerticalFoodCard;
