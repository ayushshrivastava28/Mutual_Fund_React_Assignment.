import React, { Component } from 'react'
import './card.styles.scss'


export class MutualFundCard extends Component {

    constructor(props){
        super(props);
        this.state={
            selected:false
        }
    }

    componentDidMount(){
        if(this.props.selectedForComparision.filter(fund => fund.id === this.props.id).length === 1){
            this.setState({
                selected:true
            })
        }
        else{
            this.setState({
                selected:false
            })
        }
    }

    selectForComparision = () => {

        if(this.state.selected){
            this.setState((prevState) => ({selected: false}));
            this.props.removeFromComparision(this.props);
        }
        else{
            this.setState((prevState) => ({selected: true}));
            this.props.bringInForComparision(this.props);
        }
    }
    

    render() {
        const { name, FundType, oneyearReturn, threeyearReturn, fiveyearReturn} = this.props;
        
        return (
            <div className='mutual-fund-card'>
                <div className='header'>
                    <div className='name'>
                        <h4>{name}</h4>
                        <h3 className='name' style={{fontWeight:"normal"}}>{FundType} Mid Cap</h3>
                    </div>
                    
                    <div className='select'>
                        <div 
                            className='radio' 
                            style={{background:(this.state.selected?'blue':'#fff')}}
                            onClick={this.selectForComparision}>

                        </div>
                    </div>
                </div>
        
                <div className='content'>
                    <span>Scheme</span>
                    <span>Average 3yr Rolling Return</span>
                    <span>3Y Standard Deviation</span>
                    <span>1Y Return</span>
                    
                    <span>{FundType}</span>
                    {(fiveyearReturn)? <span style={{color:'green'}}>{fiveyearReturn}</span>: <span style={{color:'red'}}>'N/A'</span>}
                    {(threeyearReturn)? <span style={{color:'green'}}>{threeyearReturn}</span>: <span style={{color:'red'}}>'N/A'</span>}
                    {(oneyearReturn)? <span style={{color:'green'}}>{oneyearReturn}</span>: <span style={{color:'red'}}>'N/A'</span>}
                    
                </div>
                <div className='footer'>
                    <div className='min-subscription'>
                        <h3 style={{fontWeight:"normal"}}>&#83785;Performance Details</h3>
                    </div>
                    <div className='select'>
                        <p>Click To Select: <button style={{background:(this.state.selected?'pale':'#fff')}}
                            onClick={this.selectForComparision}>+

                        </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MutualFundCard
