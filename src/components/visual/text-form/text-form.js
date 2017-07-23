import React from 'react';
import './text-form.css';

const TextForm = props => (
    <form onSubmit={props.submit}>
        <input type='text' onChange={props.change} placeholder={props.placeholder} />
        <input type='submit' value='Go' />
    </form>
)

export default TextForm;
