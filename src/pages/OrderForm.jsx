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
        <div className='form-container'>
            <Form className='w-25' onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Имя</label>
                    <input
                        style={{width:"100%"}}
                        placeholder='Имя'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p style={{color:"red"}} className="text-error">Пожалуйста введите Имя</p>}
                <Form.Field>
                    <label>Фамилия</label>
                    <input
                         style={{width:"100%"}}
                        placeholder='Фамилия'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 11 })}
                    />
                </Form.Field>
                {errors.lastName && <p style={{color:"red"}} className="text-error">Пожалуйста введите Фамилию</p>}
                <Form.Field>
                    <label>Email</label>
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
                {errors.email && <p style={{color:"red"}} className="text-error">Пожалуйста введите Email</p>}

                <Form.Field>
                    <label>Адрес</label>
                    <input
                         style={{width:"100%"}}
                        placeholder='Адрес'
                        type="adress"
                        {...register("adress",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p style={{color:"red"}} className="text-error">Пожалуйста введите Адрес</p>}

                <Form.Field>
                    <label>Номер</label>
                    <input
                         style={{width:"100%"}}
                        placeholder='Номер'
                        type="number"
                        {...register("number", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p style={{color:"red"}} className="text-error">Пожалуйста введите номер телефона</p>}
                <br/>
                <Button type='submit'>Отправить</Button>
            </Form>
        </div>
    )
}