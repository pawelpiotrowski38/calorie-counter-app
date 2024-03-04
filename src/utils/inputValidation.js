export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
        return 'Email required';
    }
    if (!emailRegex.test(email)) {
        return 'Invalid email';
    }

    return ''
}

export function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)/;

    if (password.length === 0) {
        return 'Password required';
    }
    if (password.length < 8 || password.length > 20) {
        return 'Password must be between 8 and 20 characters long';
    }
    if (!passwordRegex.test(password)) {
        return 'Password must have at least one uppercase letter and one number';
    }

    return '';
}

export function validateRepeatPassword(password, repeatPassword) {
    if (repeatPassword.length === 0) {
        return 'Repeat password required';
    }
    if (password !== repeatPassword) {
        return 'Passwords do not match';
    }

    return '';
}
