import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import { HomeCard, CustomHeader } from "../../components";

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <CustomHeader />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Your best match</Text>
            <Text style={styles.sec_title}>Your best match!</Text>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  title: {
    color: "silver",
    fontSize: 23,
    marginHorizontal: 22,
    marginTop: 20

  },
  container: {
    flex: 1,
    backgroundColor: "#192130",
  },

  scrollView: {
    flex: 1,
  },
  sec_title:{
    color: 'silver',
    fontSize: 14,
    marginHorizontal: 22,
    marginBottom: 23
  }
});

export default HomeScreen;
