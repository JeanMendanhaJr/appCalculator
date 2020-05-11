import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initalState = {
    displayValue: '0',
    clearDisplay: false,
    opeation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    
    state = { ...initalState}

    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory(){
        this.setState({...initalState});
    }

    setOperation(operation){
        if (this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true})
        } else{ 
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            try{ 
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            }   catch(e){
                values[0] = this.state.values[0];
            }
            
            values[1] = 0;
            
            this.setState({
                displayValue: values[0],
                opeation: equals ? null: operation,
                current: equals? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
        
    }

    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n
            this.setState({ displayValue, clearDisplay: false});
        
        if (n !== '.'){
            const i = this.state.current;
            const newValues = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValues;
            this.setState({ values });
            console.log(values);
        }
    }

    render () {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" clicl={this.addDigit}/>
                <Button label="8" clicl={this.addDigit}/>
                <Button label="9" clicl={this.addDigit}/>
                <Button label="*" clicl={this.setOperation} operation/>
                <Button label="4" clicl={this.addDigit}/>
                <Button label="5" clicl={this.addDigit}/>
                <Button label="6" clicl={this.addDigit}/>
                <Button label="-" clicl={this.setOperation}operation/>
                <Button label="1" clicl={this.addDigit}/>
                <Button label="2" clicl={this.addDigit}/>
                <Button label="3" clicl={this.addDigit}/>
                <Button label="+" clicl={this.setOperation} operation/>
                <Button label="0" clicl={this.addDigit} double/>
                <Button label="." clicl={this.addDigit}/>
                <Button label="=" clicl={this.setOperation} operation/>
                </div>
        )
    }
}