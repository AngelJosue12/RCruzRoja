import React from 'react';

const checkPasswordStrength = (password, minChar) => {
    const lowcase = /[a-z]/.test(password);
    const uppcase = /[A-Z]/.test(password);
    const numbers = /\d/.test(password);
    const special = /[^a-zA-Z\d]/.test(password);

    let strength = 0;

    if (password.length >= minChar) {
        strength++;
    }

    if (lowcase) {
        strength++;
    }

    if (uppcase) {
        strength++;
    }

    if (numbers) {
        strength++;
    }

    if (special) {
        strength++;
    }

    return strength;
};

export const NivelSeguridad = ({ password }) => {
    const strength = checkPasswordStrength(password, 8);

    const getStrengthColor = () => {
        switch (strength) {
            case 0:
            case 1:
                return 'red'; // Débil
            case 2:
            case 3:
                return 'orange'; // Moderado
            case 4:
                return 'blue'; // Fuerte
            case 5:
                return 'green'; // Muy fuerte
            default:
        }
    };

    const getStrengthText = () => {
        switch (strength) {
            case 0:
            case 1:
                return ''; // Débil
            case 2:
            case 3:
                return ''; // Moderado
            case 4:
                return ''; // Fuerte
            case 5:
                return ''; // Muy fuerte
            default:
        }
    };

    return (
        <div style={{ marginBottom: '-20px', marginTop: '10px', textAlign:'center' }}>
            <div
                style={{
                    width: `${(strength / 5) * 100}%`,
                    height: '6px',
                    backgroundColor: getStrengthColor(),
                    marginBottom: '-21px',
                    borderRadius:'5px'
                }}
            />
          
        </div>
    );
};