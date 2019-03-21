import React, { Component } from 'react';

import styles from './style';
import { isEmpty } from 'src/utils';
import Auth from 'src/providers/Auth';
import CONSTANTS from 'src/App.constants';
import Modal from "src/components/AppModal";
import ButtonLoading from 'src/components/ButtonLoading';

import { AsyncStorage, Image, TouchableOpacity  } from 'react-native';
import { Button, Container, Content, Label, Icon, Input, Item, Text, Toast, View } from 'native-base';

const  jwt_decode = require('jwt-decode');

class Login extends Component {

	state = {
		email: 'frodo@yahoo.com',
		password: '1234567890',
	    loading: false,
	    showPassword: false,
	    showPasswordModal : false
	};

	componentDidMount(){
		
	}

	handleLoading = () => {

		this.setState(previousState => {
			return {
				loading: !previousState.loading
			};
		});
	}

	onSubmitButtonPress = async () => {
		if(this.state.loading)
			return false;

		this.handleLoading();

		try{
			var items = {
	            email: this.state.email,
	            password: this.state.password
	        }

	        var res = await Auth.login(items);

            if (isEmpty(res))
                throw new Error('email or password incorrect');

            await AsyncStorage.setItem(CONSTANTS.CONFIG.JWT_KEY, JSON.stringify(res));
            await this.props.setUser(jwt_decode(res));

            this.handleLoading();
			
			this.props.navigation.navigate('Main');

		}catch(err){

			console.log(err);

			Toast.show({
                text: "email or password incorrect!",
                buttonText: "Okay"
            });
			this.handleLoading();
		}
	}

	render() {
		return (
			<Container>
				<Image source={require('src/assets/images/bg-login.png')} style={styles.background} />
				<Content contentContainerStyle={styles.content}>
					<View style={styles.body}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{CONSTANTS.CONFIG.APP_NAME}</Text>
							<View style={styles.divider} />
							<Text style={styles.subtitle}></Text>
			      		</View>


			      		<View style={styles.form}>
			      			
			      			<Item floatingLabel style={styles.item}>
								<Label style={styles.label}>Email</Label>
								<Input 
									onChangeText={(email) => this.setState({email})}
			                        value={this.state.email}
			                    />
				            </Item>

				            <Item floatingLabel style={styles.label}>
								<Label style={styles.label}>Password</Label>
								<Input 
									secureTextEntry={!this.state.showPassword}
									onChangeText={(password) => this.setState({password})}
			                        value={this.state.password}
			                    />
			                    <Icon 
			                    	active 
			                    	name={this.state.showPassword? 'eye' : 'eye-off' }
			                    	style={styles.label} 
			                    	onPress={() => this.setState({showPassword : !this.state.showPassword})} 
			                    />
				            </Item>

				            <View style={styles.fpContainer}>
								<Button transparent onPress={() => this.setState({showPasswordModal: true})} style={{alignSelf: 'flex-end'}}>
									<Text style={styles.fpText}>Forgot Password?</Text>
								</Button>
							</View>

				            <View style={styles.buttonContainer}>
					            <ButtonLoading rounded theme="primary" block isLoading={this.state.loading} onPress={this.onSubmitButtonPress}>
									<Text>Sign In</Text>
								</ButtonLoading>
							</View>

							
			      		</View>
			      	</View>

		      		<View style={styles.footer}>
		            	<Button transparent onPress={() => this.props.navigation.navigate('Register')}>
							<Text uppercase={false} style={styles.footerText}>Dont have an account?   <Text style={styles.footerLink}>REGISTER</Text> </Text>
						</Button>
		            </View>
				</Content>

				<Modal title='Forgot Password?' isVisible={this.state.showPasswordModal} onClose={() => this.setState({showPasswordModal: false})}>  
					<View style={{flex: 1, alignItems: 'center', marginVertical: 20, paddingHorizontal : 10}}>
			    		<Text style={{textAlign: 'center', marginBottom: 10}}>
			    			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			    		</Text>

			    		<Text style={{textAlign: 'center' }}>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			    		</Text>
			        </View>
			    </Modal>
			</Container>
		);
	}
}

export default Login;