import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap-v5';
import Rating from './Rating';

const Filters = () => {
    const [rate, setRate] = useState(2)
  return (
    <div className="filters">
        <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="filter"
                    type="radio"
                    id={'inline-1'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="filter"
                    type="radio"
                    id={'inline-2'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="include Out Of Stock"
                    name="filter"
                    type="checkbox"
                    id={'inline-3'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="filter"
                    type="checkbox"
                    id={'inline-4'}
                />
            </span>
            <span>
                <label style={{paddinRight: '10px'}}>Rating: </label>
                <Rating 
                rating={rate}
                onClick={(i) => setRate(i+1)}
                style={{ cursor:'pointer'}}/>   
            </span>
            <Button variant="light">Clear Filters</Button>
    </div>
    
  );
};

export default Filters;