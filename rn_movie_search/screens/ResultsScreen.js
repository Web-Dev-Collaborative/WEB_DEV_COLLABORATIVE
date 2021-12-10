import React from 'react'
import { Button, FlatList,  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { searchMovies } from '../api'
import apiKey from '../key'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    center: {
        justifyContent: 'center',
        margin: 6,
    },
    results: {
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: "teal",
        borderStyle: "dashed",
        marginLeft: 6,
        marginRight: 6,
        padding: 4,
    },
    divider: {
        borderBottomWidth: 4,
        borderBottomColor: "teal",
        borderStyle: "solid",
        padding: 4,
        margin: 4,
    },
    search: {
        marginRight: 8,
        marginLeft: 8,
        padding: 4,
        backgroundColor: "#eee",
        height: 40, 
        borderColor: '#ccc', 
        borderWidth: 1,
    }
})

export default class ResultsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Search Movies`,
        }
    }

    // { searchResult: json, cachedMovies }
    constructor(props) {
        super(props)
        this.state = {
            searchInput: props.navigation.state.params.searchInput,
            searchResult: props.navigation.state.params.searchResult,
            cachedMovies: props.navigation.state.params.cachedMovies,
            resultPagesReceived: props.navigation.state.params.resultPagesReceived,
        }
    }

    getAdditionalData = async () => {
        const totalNumberOfPages = this.state.searchResult.totalResults / 10 // API returns 10 results per page
        const remainingPagesOfResults = Math.ceil(totalNumberOfPages - this.state.resultPagesReceived)
        if (remainingPagesOfResults >= 1) {
            try {
                const results = await searchMovies(this.state.searchInput, apiKey, this.state.resultPagesReceived)
                // { searchResult: json, cachedMovies, page: totalPagesReceived }
                this.setState({
                    cachedMovies: [...this.state.cachedMovies, ...results.cachedMovies],
                    resultPagesReceived: results.page
                })
            } catch (err) {
                console.error(err)
                throw new Error(err.message)
            }
        }
    }

    render() {
        return (
            this.state &&
            <ScrollView>
                <Text style={styles.divider}>{this.state.searchResult.totalResults || 0} results:</Text>

                <FlatList
                    data={this.state.cachedMovies}
                    ItemSeparatorComponent={SeparatorComponent}
                    ListEmptyComponent={() => <Text>No results for that search!</Text>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.push("MovieDetailsScreen", item)}
                            style={styles.results}
                            >
                            <Text>{index + 1}. {item.Title} [{item.Year}] </Text>
                        </TouchableOpacity>)}
                />

                {(((this.state.searchResult.totalResults / 10) - this.state.resultPagesReceived) > 0) &&
                    <Button
                        onPress={() => this.getAdditionalData()}
                        title="Load More Results"
                        color="#444"
                    />
                }
            </ScrollView>
        )
    }
}

const SeparatorComponent = props => {
    return (<View style={{marginBottom: 2,}} />)
}