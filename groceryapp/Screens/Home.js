import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Userlist from '../components/Userlist';
import SearchInput, {createFilter} from 'react-native-search-filter';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

// amrik biscuits
// sobhit suppliers
// singh grocery
// anup Breverages
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    company: 'Amrik biscuits',
    location: 'Varnashi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    company: 'Sobhit suppliers',
    location: 'Varnashi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    company: 'Singh grocery',
    location: 'Varnashi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    company: 'Anup Breverages',
    location: 'Varnashi',
  },
];

const renderItem = ({item}) => (
  <Userlist company={item.company} location={item.location} />
);
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchText: '',
      selectedId: -1,
      data: [],
      filteredData: [],
    };
  }
  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  search = searchText => {
    this.setState({searchText: searchText});

    let filteredData = DATA.filter(function (item) {
      return item.company.includes(searchText);
    });

    this.setState({filteredData: filteredData});
  };
  render() {
    return (
      <SafeAreaView>
        <Icon
          name="list"
          size={30}
          color="#30D5C7"
          style={{marginLeft: 10, marginTop: 20}}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <Image
          source={require('../Assets/OK_logo.png')}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Search..."
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.search}
          value={this.state.searchText}
        />

        <FlatList
          data={
            this.state.filteredData && this.state.filteredData.length > 0
              ? this.state.filteredData
              : DATA
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
});
