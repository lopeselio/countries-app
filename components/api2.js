import React, { Component } from "react"
import { Alert, FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements';

class Api extends Component {
    // state = {
    //     data: [],
    //     isLoading: true,
    // }

    // componentDidMount() {
    //     this.fetchData()
    // }
    constructor(props){
        super(props);
        this.state = {
            isloading: true,
            data: []
        }
    }
    componentDidMount(){
     return fetch('https://restcountries.eu/rest/v2/all?fields=region;name;capital;flag')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              isloading: false,
              data: responseJson
          })
          console.log(responseJson)
      })
    }

    render() {
        const { isloading, data } = this.state
        if(isloading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating />
                </View>

            )
        }
        
        const unique = [...new Set(data.map(item => item.region))];
        
        const ListItem = ({ title}) => (
        <View style={styles.item}>
            <Button
                title={title}
                onPress={() => this.props.navigation.navigate('Countries')}
                type="outline"
            />
        </View>
        );

        // const name = unique.map((country, key) => {
        //     return (<View key={key} style={styles.item}><Text>{country.region}</Text></View>);
        // })


        return (
            // <View style={styles.container}>{name}</View>
            <View style={styles.container}>
            <FlatList
            data={unique.filter(Boolean)}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
                <ListItem
                    title={item}
                />
            )}
            />
            </View>
        )
       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Api