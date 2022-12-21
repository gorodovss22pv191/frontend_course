import React, {Component} from "react";
import ProductService from "../../services/ProductService";
import './List.css';

interface IState {
    products: any[]
}

class ListProducts extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductService.getProducts()
            .then((res) => {
                const products = res.data;
                this.setState({products});
            });
    }

    render() {
        return (
            <div>
                {this.state.products.map(
                    product =>
                        <div className="ContentBlock">
                            <div className="ContentTitle">
                                {product.title}
                                <br/>
                                <br/>
                            </div>
                            <div className="ContentImage">
                                <img src={product.filename} alt=""/>
                            </div>
                            <div className="ContentDescription">
                                <br/>
                                {product.description}
                            </div>
                        </div>
                )}
            </div>
        );
    }
}

export default ListProducts;