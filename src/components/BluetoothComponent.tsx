// BluetoothComponent.tsx
import React, { useState } from 'react';

const BluetoothComponent: React.FC = () => {
    const [devices, setDevices] = useState<BluetoothDevice[]>([]);

    const requestBluetoothDevices = async () => {
        try {
            const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['battery_service'], // Servicio requerido para acceder más adelante.
            });

            setDevices([device]);
        } catch (error) {
            console.error('Error requesting Bluetooth devices:', error);
        }
    };

    const handleButtonClick = () => {
        requestBluetoothDevices();
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Solicitar dispositivos Bluetooth</button>
            {devices.length > 0 ? (
                <ul>
                    {devices.map((device, index) => (
                        <li key={index}>Conectado a: {device.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Conectando a dispositivos Bluetooth...</p>
            )}
        </div>
    );
};

export default BluetoothComponent;
