<template>
    <div class="" style="overflow-x: hidden;">
        <div class="text-white py-5" style=" background-color:var(--primary-color) ;padding-bottom: 6rem !important;"
            v-observe>
            <h1 class="text-center mb-0 fw-bold">Contact Page</h1>
            <p class="small mb-0 text-capitalize text-center">The secret of getting ahead, is getting started</p>
        </div>

        <div class="container bg-white rounded-top-5 py-5" style="margin-top: -40px;" v-observe>
            <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
            <div class="row mb-5">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card h-100">
                        <div class="card-body text-start">
                            <h4 class="card-title mb-4">VISIT OUR FLAGSHIP STORE</h4>
                            <p>For Bulk Wedding Hampers, Sweet Boxes, Occasional Gifting or any and Corporate Orders
                                Contactus for Best Prices</p>
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-telephone-fill text-primary me-3"></i>
                                <a href="tel:+919311384385" class="text-decoration-none">+91-9311384385</a>
                            </div>

                            <div class="d-flex align-items-start mb-3">
                                <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                                <p class="mb-0">
                                    Plot No. 15A, Shop No.9, LGF Geeta Bhawan, Opp. Punjabi Bagh Club Club Road, West
                                    Punjabi Bagh New Delhi - 110026 </p>
                            </div>

                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-envelope-fill text-primary me-3"></i>
                                <a href="mailto:barfisharfee@gmail.com"
                                    class="text-decoration-none">barfisharfee@gmail.com</a>
                            </div>

                            <div class="mt-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d77.1234!3d28.5678!2z!"
                                    class="w-100" height="200" style="border:0;" allowfullscreen="" loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body text-start">
                            <h4 class="card-title mb-4">Please Note</h4>
                            <p>
                                All our Sweets, Savories and Gift Hampers are Freshly prepared on Pre - Order using the
                                best quality Ingredients i.e. Sugar, Desi Khand, Jaggery
                                , Honey & variety offlours , mixeddry- fruits / nuts , Desi Ghee and more . .
                                If any person All ergic to the Contents of our Products, we recommend
                                them not to consume it, we shall not be responsible for the same
                                Keep all our Sweet Boxes / Savories / Hampers in Cool / Room Temperatures
                                and not in Direct Sunlight
                                All Milk / Khoya Sweets should be consumed within 4 - 5 Days
                                Rates in the Menu can be changed at any point of time without any prior information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactSection',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            errors: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            contact: [
                { name: 'info@carolieto.it', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '918383991845', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                { name: '918383991845', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'GR-51, Ganpatidham Industrial Area, Delhi Rohtak Road, Vill. Sankhol, Bahadurgarh, Distt. Jhajjar, Haryana - 124507, India', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
            ],
        }
    },
    methods: {
        validateForm() {
            let isValid = true
            this.errors = {
                name: '',
                email: '',
                phone: '',
                message: ''
            }

            if (!this.formData.name.trim()) {
                this.errors.name = 'Name is required'
                isValid = false
            }

            if (!this.formData.email.trim()) {
                this.errors.email = 'Email is required'
                isValid = false
            } else if (!this.validateEmail(this.formData.email)) {
                this.errors.email = 'Please enter a valid email'
                isValid = false
            }

            if (!this.formData.phone.trim()) {
                this.errors.phone = 'Phone is required'
                isValid = false
            }

            if (!this.formData.message.trim()) {
                this.errors.message = 'Message is required'
                isValid = false
            }

            return isValid
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return re.test(email)
        },
        handleSubmit() {
            if (this.validateForm()) {
                // Handle form submission
                console.log('Form submitted:', this.formData)
                // Reset form after successful submission
                this.formData = {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }
            }
        },
        handleIconClick(action) {
            const phoneNumber = '+918383991845';
            const emailAddress = 'info@carolieto.it';
            const location = 'GR-51, Ganpatidham Industrial Area, Delhi Rohtak Road, Vill. Sankhol, Bahadurgarh, Distt. Jhajjar, Haryana - 124507, India';

            switch (action) {
                case 'openEmail':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
                case 'openDialer':
                    window.location.href = `tel:${phoneNumber}`;
                    break;
                case 'openWhatsapp':
                    window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
                    break;
                case 'openMaps':
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                    break;
                default:
                    break;
            }
        },
    }
}
</script>

<style scoped>
.card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bi {
    font-size: 1.2rem;
}

.form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-primary {
    background-color: #0056b3;
    border: none;
    padding: 0.5rem 2rem;
}

.btn-primary:hover {
    background-color: #004494;
}
</style>