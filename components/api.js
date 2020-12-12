import React, { Component } from "react"
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'

class Api extends Component {
    state = {
        data: [],
        isLoading: true,
    }

    componentDidMount() {
        this.fetchData()
        // fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;borders;flag").then((response) => response.json())
        // .then(JSON.stringify())
        // .then((responseJson) => {
        //     this.setState({
        //         data: responseJson,
        //         isLoading: false
        //     })
        //     console.log(responseJson)
        // })
    }

    fetchData = async () => {
        const response = await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;borders; flag")
        const json = await response.json();
        const myData = JSON.stringify(json)

        console.log(json)
        this.setState({ data: myData, isLoading: false})
    }

    // _renderItem = (item) => {
    //     <Text>`${item.name}  ${item.capital}</Text>

    // }

    render() {
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating />
                </View>

            )
        }else{
            return (
                <View style={styles.container}>
                    {/* <Text>Hey</Text> */}
                    <Text>{this.state.data}</Text>
                    {/* <FlatList
                        data={this.state.data}
                        // keyExtractor={item => item.index_id.toString()}
                        renderItem={this._renderItem}
                        // keyExtractor={(item,index) => index.toString()}
                        keyExtractor={(item, index) => index.toString()}

                    />                */}
                </View>
            )

        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f5fcff'
    }
})

export default Api