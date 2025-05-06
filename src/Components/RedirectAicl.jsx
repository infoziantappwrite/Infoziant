import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectAicl = () => {
    const navigate = useNavigate();
        
        useEffect(() => {

            window.location.href = "https://aicl.infoziant.com"; 
            
        }, []);

        
}

export default RedirectAicl