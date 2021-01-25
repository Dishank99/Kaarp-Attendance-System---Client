import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Map({coords, addressString, nameOfEmployee}) {
    console.log('map rendered');
    return (
        <MapView style={styles.mapContainer}
            initialRegion={{
            ...coords,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
            }}
            key={ Date.now()}
        >
            <MapView.Marker
                key={ Date.now()}
                coordinate={coords}
                title={`${nameOfEmployee} is Here`}
                description={addressString}
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    mapContainer:{
        flex:1,
    },
});
