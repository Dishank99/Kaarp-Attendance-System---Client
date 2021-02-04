import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export function Check({onPressHandler}) {
    return (
        <TouchableOpacity>
            <Icon
                name="check"
                type="feather"
                size={15}
                color="green"
                reverse
                raised
            />
        </TouchableOpacity>
    );
}

export function Cross({onPressHandler}) {
    return (
        <TouchableOpacity>
            <Icon
                name="x"
                type="feather"
                size={15}
                color="red"
                reverse
                raised
            />
        </TouchableOpacity>
    );
}
