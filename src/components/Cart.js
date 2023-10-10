import React from 'react'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice';
import EmptyBag from "../images/emptyBag.png"

function Cart() {

    const productCart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        //dispatch a remove action
        dispatch(remove(id));
    }


    const cartItems = productCart.map(product => (
        <div className="col-md-6" style={{marginBottom: "10px"}}>
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
                    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove From Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    

  return (
    <div className='Cart'>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
      <div className="row">{cartItems}</div>
        ) : (
        <div>
        <img
        src={EmptyBag}
        alt="Empty Cart"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h3>No Items To Show</h3>
        </div>    
        )}
    </div>
  )
}

export default Cart