import React, {useState, useEffect} from 'react'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';

function Products() {

    const dispatch = useDispatch();

    const[products, getProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(result => getProducts(result))
    }, []);

    const addToCart = (product) => {
        //dispatch add action
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{marginBottom: "10px"}}>
            <Card key={product.id} className='h-100'> 
            <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width : "100px", height: "130px"}}/>
            </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text> 
                </Card.Body>
                <Card.Footer style={{background: "#fff"}}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    
  return (
    <div className='products'>
        <h1>Items To Buy</h1>
        {/* {JSON.stringify(products)} */}
        <div className="row">
            {cards}
        </div>
    </div>
  )
}

export default Products