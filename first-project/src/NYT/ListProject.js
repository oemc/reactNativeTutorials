import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import BookItem from './BookItem';
import NYT from './NYT'

export default class ListProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this._refreshData();
    }

    _refreshData = () => {
        this.setState({
            data: this._addKeysToBooks(NYT.fetchBooks()) 
        });
    }

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, {key: book.title});
        });
    }

    _renderItem = data => {
        return (
            <BookItem coverURL= {data.item.book_image}
                      title={data.item.key}
                      author={data.item.author}/>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data}
                          renderItem={this._renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    row: { 
        fontSize: 24, 
        padding: 42, 
        borderWidth: 1, 
        borderColor: "#DDDDDD" 
    }
});