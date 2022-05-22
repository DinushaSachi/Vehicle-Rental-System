import React, { Component } from 'react'
import axios from 'axios'

const initialState ={
        medicinename:"",
        volume:"",
        quantity:"",
        unit:"",
        medicinenameError:"", 
        volumeError:"",
        quantityError:"",
        unitError:"",
    }

export default class CreateMedi extends Component {

    constructor(props){
        super(props);
        this.state = initialState;
    };

    handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    //validation for filed not filled
    validate = () => {
        let medicinenameError = "";
        let volumeError = "";
        let quantityError = "";
        let unitError = "";

        if(!this.state.medicinename){
            medicinenameError = 'Mediine cannot be blanked';
        }
        if(!this.state.volumeError){
            volumeError = 'Volume cannot be blanked';
        }
        if(!this.state.quantityError){
            quantityError = 'Quantity cannot be blanked';
        }
        if(!this.state.unitError){
            unitError = 'unit cannot be blanked';
        }
       

        if(medicinenameError || volumeError || quantityError || unitError){
            this.setState({medicinenameError, volumeError, quantityError, unitError});
            return false;
        }

        return true;
    }

    //sent data to console log
    onSubmit = (e) => {


        e.preventDefault();

        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
        
        //clear the form
        this.setState(initialState);
        }

        const {medicinename,volume,quantity,unit} = this.state;

        const data ={
            medicinename:medicinename,
            volume:volume,
            quantity:quantity,
            unit:unit,
        }

        console.log(data)

    //sent data to database post method
        axios.post("/medicine/save",data).then((res) =>{
            alert("Medicine Added Successfully")
            if(res.data.suceess){
                this.setState(
                    {
                        medicinename:"",
                        volume:"",
                        quantity:"",
                        unit:""
                    }
                ) 
            }
        })

    }


    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto" novalidate>
                <h1 className="h3 mb-3 font-weight-normal">Add Medicine</h1>
                    <form className="needs-validation">
                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label className="form-label"style={{marginBottom:'5px'}}>Medicine Name</label>
                            <input 
                            type="text"
                            className="form-control is-valid"
                            name="medicinename"
                            placeholder = "Enter Medicine Name"
                            value={this.state.medicinename}
                            onChange={this.handleInputChange}
                            />
                           <div style={{fontSize:12, color:"red"}}>{this.state.medicinenameError}</div>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Medicine Volume</label>
                            <input type="text"
                            className="form-control"
                            name="volume"
                            placeholder = "Enter Medicine Volume"
                            value={this.state.volume}
                            onChange={this.handleInputChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.volumeError}</div>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Medicine Quantity</label>
                            <input type="text"
                            className="form-control"
                            name="quantity"
                            placeholder = "Enter Medicine Qty."
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.quantityError}</div>
                        </div>

                        <div className="from-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Medicine Unit</label>
                            <input type="text"
                            className="form-control"
                            name="unit"
                            placeholder = "Enter Medicine Unit"
                            value={this.state.unit}
                            onChange={this.handleInputChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.unitError}</div>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Submit
                        </button>
                    </form>
            </div>

        );
    }
}
