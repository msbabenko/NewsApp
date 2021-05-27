import React from "react";
import {Card, Divider, Image} from 'react-native-elements';
import { Text, View, StyleSheet } from "react-native";

// -- Profile Screen render
export const NewsScreen = () => {

  // -- List of News
  const array = [
    {
      key: 1,
      title: 'Diana interview: PM concerned after inquiry into BBC deceit',
      src: 'Around the BBC',
      img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/15FE/production/_118603650_gettyimages-740435969.jpg',
      description: 'The BBC should take "every possible step" to ensure that nothing like its deceit of the Princess of Wales to secure an interview ever happens again, Prime Minister Boris Johnson has said.'
    },
    {
      key: 2,
      title: 'Lady Gaga had a \'psychotic break\' after sexual assault left her pregnant',
      src: 'Around the BBC',
      img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1648F/production/_118597219_gaga.png',
      description: 'Lady Gaga has revealed she suffered a breakdown as a result of sexual assault that led to pregnancy.'
    },
    {
      key: 3,
      title: 'Africa\'s week in pictures: 14-20 May 2021',
      src: 'Around the BBC',
      img_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/4F9B/production/_118597302_68c88aa2-d90e-40d4-9e16-39af6d28bd6d.jpg',
      description: 'A selection of the week\'s best photos from across the continent and beyond'
    },
  
  ]

  const defaultImg =
  'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

  const Newslist = () => {
    return array.map((list) => {
      return (
        <Card
        key={list.key}
        featuredTitle={list.title}
        featuredTitleStyle={styles.featuredTitleStyle}
        source={{
          uri: list.img_url || defaultImg
        }}
      >
        
        <Text style={{ marginBottom: 10 }}>
          {list.description || 'Read More..'}
        </Text>
        <Divider style={{ backgroundColor: '#dfe6e9' }} />
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text style={styles.noteStyle}>{list.src}</Text>
         
        </View>
      </Card>
      );
    });
  };

  return  <View  style={styles.container}>{Newslist()}</View>; 
};

const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
 
    featuredTitleStyle: {
      marginHorizontal: 5,
      textShadowColor: '#00000f',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3
    },
    noteStyle: {
      margin: 5,
      fontStyle: 'italic',
      color: '#b2bec3',
      fontSize: 10
    }
});