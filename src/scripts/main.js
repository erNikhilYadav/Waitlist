import axios from 'axios';

// API Configuration
const API_CONFIG = {
    baseURL: 'https://go-backend-chma.onrender.com',
    endpoint: '/api/waitlist',
    headers: {
        'Content-Type': 'application/json'
    }
};

// DOM Elements
const elements = {
    form: document.getElementById('waitlistForm'),
    successMessage: document.getElementById('successMessage'),
    nameInput: document.getElementById('name'),
    emailInput: document.getElementById('email')
};

// Form Handler
class WaitlistForm {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        elements.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const formData = {
            name: elements.nameInput.value,
            email: elements.emailInput.value
        };

        try {
            await this.submitForm(formData);
            this.showSuccessMessage();
            this.resetForm();
        } catch (error) {
            this.handleError(error);
        }
    }

    async submitForm(formData) {
        const response = await axios.post(
            API_CONFIG.baseURL + API_CONFIG.endpoint,
            formData,
            { headers: API_CONFIG.headers }
        );

        if (!response.status === 200) {
            throw new Error('Network response was not ok');
        }

        return response.data;
    }

    showSuccessMessage() {
        elements.form.style.display = 'none';
        elements.successMessage.classList.remove('hidden');
    }

    resetForm() {
        elements.form.reset();
    }

    handleError(error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your information. Please try again.');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new WaitlistForm();
}); 