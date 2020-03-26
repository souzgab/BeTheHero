import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsIncident:{
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    detailsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    detailsValue:{
        marginTop: 8,
        fontSize: 14,
        marginBottom: 10,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    contactBox:{
        padding: 24,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 8,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },
    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions:{
        marginTop: 16,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
    

});