import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if ( dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return( <div></div> );
        }
    }

    render () {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {<Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    /* <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading> {dish.name} </Media>
                            <p> {dish.description} </p>
                        </Media>
                    </Media> */}
                </div>
            ); 
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                    {/* <Media list>
                        {menu}
                    </Media> */}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}

export default Menu;