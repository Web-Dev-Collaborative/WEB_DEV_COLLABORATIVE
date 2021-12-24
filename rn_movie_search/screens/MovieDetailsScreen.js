import React from 'react'
import { StyleSheet, Button, Image, Text, View } from 'react-native'

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    label: {
      textAlign: 'center',
    },
    lastLabel: {
      marginBottom: 25,
    },
    image: {
      width: 300, 
      height: 400, 
      margin: 10, 
      padding: 4, 
    },
    center: {
      alignSelf: "center", 
      justifyContent: "center",
    }
})

export default class MovieDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: `Details - ${navigation.getParam("Title")}`
      }
    }

    constructor(props) {
      super(props)
      this.state = {
        ...props.navigation.state.params
      }
    }
  
    render() {
      return (
        <View style={styles.screen}>
          { this.props.navigation.getParam("Poster") === 'N/A' ? 
            <Text style={[styles.center, styles.label, styles.lastLabel]}>- No Poster Available -</Text> :
            <Image source={{uri: `${this.props.navigation.getParam("Poster")}`}} style={[styles.image, styles.center]} />
          }
          <Text style={styles.label}>Title - {this.props.navigation.getParam("Title")}</Text>
          <Text style={styles.label}>Release Year - {this.props.navigation.getParam("Year")}</Text>
          <Text style={[styles.label, styles.lastLabel]}>IMdB ID - {this.props.navigation.getParam("imdbID")}</Text>
          <Button title="Return to Search" onPress={() => this.props.navigation.goBack()} />
        </View>
      )
    }
  } 