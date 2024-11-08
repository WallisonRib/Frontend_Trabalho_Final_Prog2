import { useState, useCallback } from "react";
import AppContext from "./AppContext";
import propTypes from 'prop-types';

function Provider({ children }) {

    const [products, setProducts] = useState([]);
    const [carregando, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [refreshTop3, setRefreshTop3] = useState(false); // New state for top 3 refresh trigger

    // Function to toggle the top 3 refresh state
    const triggerFetchTop3 = useCallback(() => {
        setRefreshTop3((prev) => !prev); // Toggles to trigger a re-fetch
    }, []);

    const value = {
        products,
        setProducts,
        carregando, 
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        refreshTop3,        // Expose refreshTop3 state
        triggerFetchTop3,   // Expose trigger function
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;
