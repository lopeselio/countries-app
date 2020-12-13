import React, { Component } from "react"
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'

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
     return fetch('https://restcountries.eu/rest/v2/all?fields=region')
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              isloading: false,
              data: responseJson
          })
        //   console.log(responseJson)
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
        console.log(unique)

        

        const ListItem = ({ title }) => (
        <View>
            <Text>{title}</Text>
            ...
        </View>
        );

        // const name = unique.map((country, key) => {
        //     return (<View key={key} style={styles.item}><Text>{country.region}</Text></View>);
        // })


        return (
            // <View style={styles.container}>{name}</View>
            <FlatList
            data={this.state.unique}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <ListItem
                    title={item}
                />
            )}
            />
        )
       
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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