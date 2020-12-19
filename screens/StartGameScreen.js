import React,{useState} from 'react';
import { View, StyleSheet, Text, Button ,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/color'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNumber] =useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g),'');
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber)|| chosenNumber <= 0|| chosenNumber>99) {
            Alert.alert('Invalid number',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
            setConfirmed(true)
            setSelectedNumber(chosenNumber)
            setEnteredValue('')
        
    }
    let confirmOutput
    if (confirmed) {
        confirmOutput = <Card style={styles.sumarryContainer}>
            <Text>You selected</Text>
            <NumberContainer>
            {selectedNumber}
            </NumberContainer>
            <Button title={ 'START GAME'}/>
           
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>
                The Game Screen !
            </Text>
            <Card style={styles.inputContainer}>
            <Text> Select a Number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} color={Colors.accent} title="Reset" onPress={resetInputHandler} />
                    <Button style={styles.button} color={Colors.primary}  title="Confirm" onPress={confirmInputHandler} />
                </View>
            </Card>
     
            {confirmOutput}

            </View>
            </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen: {
        
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical:10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        elevation: 5,
        borderRadius:10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal:15
    },
    button: {
        width:100
    },
    input: {
        width: 50,
        textAlign:'center'
    },
    sumarryContainer: {
        marginTop:20
    }
});
export default StartGameScreen