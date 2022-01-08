import React from 'react';
import { Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {Button , Input} from "react-bootstrap"
import "./OrderForm.css"
export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="row mt-5">
            <div className="col-75">
                <div className="container d-flex justify-content-center">
            <Form className='w-25 d-flex flex-column align-content-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="input-form">
                    <Form.Field>
                        <input
                            style={{width:"100%"}}
                            placeholder='Имя'
                            type="text"
                            {...register("name", { required: true, maxLength: 11 })}
                        />
                    </Form.Field>
                    {errors.lastName &&  <div className={"error"}><p style={{color:"red"}} className="text-error">Пожалуйста, укажите Имя</p></div>}
                </div>
                <div className="input-form">
                    <Form.Field>
                        <input
                            style={{width:"100%"}}
                            placeholder='Фамилия'
                            type="text"
                            {...register("lastName", { required: true, maxLength: 11 })}
                        />
                    </Form.Field>
                    {errors.lastName &&  <div className={"error"}><p style={{color:"red"}} className="text-error">Пожалуйста, укажите Фамилию</p></div>}
                </div>
                <div className="input-form">

                <Form.Field>
                    <input
                          style={{width:"100%"}}
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <div className={"error"}> <p style={{color:"red"}} className="text-error">Пожалуйста, укажите Email</p></div>}
                </div>

                <div className="input-form">
                <Form.Field>
                    <input
                         style={{width:"100%"}}
                        placeholder='Адрес'
                        type="address"
                        {...register("address",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email &&  <div className={"error"}><p style={{color:"red"}} className="text-error">Пожалуйста, укажите адрес</p></div>}
                </div>

                <div className="input-form">
                <Form.Field>
                    <input
                         style={{width:"100%"}}
                        placeholder='Номер'
                        type="tel"
                        {...register("number", {
                            required: true,
                            pattern: /^[0-9\b]+$/
                        })}/>
                </Form.Field>
                    {errors.number &&   <div className={"error"}><p style={{color:"red"}} className="text-error">Пожалуйста, укажите номер телефона</p></div>}
                </div>
                <br/>
                <Button className={"btn btn-warning"} type='submit'>Отправить</Button>
            </Form>
                </div>
            </div>
        </div>
    )
}