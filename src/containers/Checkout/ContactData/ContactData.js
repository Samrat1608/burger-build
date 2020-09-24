import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            pinCode:'',
        },
        loading:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            Customer: {
                name: 'Shubham Ingole',
                address: {
                    street : 'TestStreet',
                    pinCode: '444404',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false,});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading:false});
                console.log(error)
            });
    }
    render() {
        let form =(
            <form>
            <input className={classes.Input} type='text' name="name" placeholder="your name" />
            <input className={classes.Input} type='email' name="email" placeholder="your email" />
            <input className={classes.Input} type='text' name="street" placeholder="Street" />
            <input className={classes.Input} type='text' name="pincode" placeholder="Postal code" />
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if(this.state.loading) {
            form =<Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;