import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';

const HeaderButton = (props) => {
    return (
        <Ionicons.Button {...props} 
            name={props.name}
            size={props.size}
            color={colors.primaryColor}
            backgroundColor='white'
            style={props.style}
            onPress={props.onPress}
        />
    );
};

export default HeaderButton;
