import CONSTANTS from 'src/App.constants';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	headerBar:{
    	elevation: 0,
    	color: '#FFF',
    	shadowOpacity: 0 ,
    	borderBottomWidth: 0,
    	backgroundColor: CONSTANTS.COLORS.PRIMARY
	},

	headerIcon:{
		marginHorizontal: 20,
		fontSize: 19,
    	color: '#ffffff',
	},

	jumbotron: {
		top: 0,
		left: 0,
		right: 0,
		height: 150,
		position: 'absolute',
		paddingTop: 10,
		marginBottom: 10,
		paddingHorizontal: 20,
		backgroundColor: CONSTANTS.COLORS.PRIMARY
	},

	titleContainer: {
		marginTop: 10,
		marginBottom: 50
	},

	titleIcon: {
		color: '#fff',
		marginRight: 15,
	},

	title: {
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold'
	},

	subtitle: {
		fontSize: 14,
		color: '#fff',
		fontWeight: '300'
	},

	content: {
		flexGrow: 1,
		marginTop: 100,
	},

	form: {
		marginTop: 20,
		paddingVertical: 20,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		height: Dimensions.get('window').height - 250
	},

	item: {
		marginBottom: 30,
		alignItems: 'center',
	},

	listItem: {
		marginBottom: 30,
		flexDirection: 'row',
		paddingVertical: 15,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#cecece',
		justifyContent: 'space-between'
	},

	label:{
		fontSize: 14,
		color: '#000'
	},

	suffix: {
		fontSize: 12,
		color: '#ccc'
	},

	value: {
		//alignSelf: 'flex-start',
		fontSize: 16,
	},

	fab: {
		backgroundColor: CONSTANTS.COLORS.SECONDARY
	},

	terminalModal: {
		paddingHorizontal: 0,
	}

});

export default styles;
