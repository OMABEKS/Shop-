import React from 'react';
import {observer} from "mobx-react-lite";
import {Card,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Basket.css'



const Basket = observer(() => {
    const items=JSON.parse(localStorage.getItem("products"))||[];
    
    function changeProductCount (count , id) {
      if (count <= 0){
        count = 1
      }
      
      };

    return (
        <div className='basket-container'>
            {items.map(function (object,index) {
                let device=JSON.parse(object);
                return (
                  <div className='card-basket'>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + device.img}/>
                        <Card.Body>
                            <Card.Title>{device.price}</Card.Title>
                            <Card.Text>
                                {device.name}
                            </Card.Text>
                            <Link to="/orderForm">  <Button variant="primary">Оформить заказ</Button></Link>
                           
                        </Card.Body>
                    </Card>
                  </div>
                )
                
            })}
                     <div className='card-container'>
             <div className="card2">
                        <h2>Итого</h2>
                        <p className="price">Товары $19.99</p>
                        <p>Доставка</p>
                        <p>Дата</p>
                        <p>Оплата</p>
                        <Link to="/orderForm">
                        <p><Button>Оплатить заказ</Button></p>
                        </Link>
                       <p> <input type="checkbox"/> Cогласен с условиями Правил пользования торговой площадкой и правилами возврата </p>
                      </div>
                      </div>
           
              <div className='form-popup'>
                <form>
                <h3>Способ доставки</h3>
                <p>Пункт выдачи</p>
                <p>Стоимость доставки</p>
                <p>Доставка</p>

                </form>

              </div>
        </div>
    );
});

export default Basket;