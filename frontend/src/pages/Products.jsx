import React from 'react';
import {useParams} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useState, useEffect, useMemo} from 'react';

const Products = (props) => {

    const location = useLocation();

    const [category, setCategory] = useState('all');

    useEffect(() => {
        if ((location.state != null) && (location.state.category != category)){
            setCategory(location.state.category);
        }
    }, [location.state]);

    return <h1>{category}</h1>

};

export default Products;