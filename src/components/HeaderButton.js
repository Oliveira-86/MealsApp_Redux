import React from 'react';

import { Ionicons } from '@expo/vector-icons';

const HeaderButton = (props) => {
    return (
        <Ionicons.Button {...props} 
            name={props.name}
            size={props.size}
            color={props.color}
            backgroundColor='white'
            style={props.style}
        />
    );
};

export default HeaderButton;
