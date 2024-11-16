<template>
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <div class="text-white py-5" style=" background-color:var(--primary-color) ;padding-bottom: 6rem !important;"
        v-observe>
        <h1 class="text-center mb-0 fw-bold">Contact Page</h1>
        <p class="small mb-0 text-capitalize text-center">The secret of getting ahead, is getting started</p>
    </div> 

        <div class="container bg-white rounded-top-5 py-5" style="margin-top: -40px;" v-observe>
            <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
            <div class="row">
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/img/contactus.svg" style="width: 500px; max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 d-flex">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-between align-items-center border p-2 px-4">
                                <a class="text-dark d-flex gap-2 align-items-center text-decoration-none"
                                    :href="icon.url" target="_blank">
                                    <i :class="icon.icon" class=""></i>
                                    <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                                </a>
                                <img src="/img/right-arrow.svg" style="width: 30px;filter: invert(1);" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="" style="background-color: var(--primary-color)" v-observe>
            <div class="container">
                <div class="row p-3 gx-md-5">
                    <div class="col-12 col-md-6 pt-4 text-center">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="text-center mb-4">SEND US YOUR QUESTIONS!</h2>

                                <form @submit.prevent="handleSubmit">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class=" mb-3 form-floating">
                                                <input type="text" class="form-control" id="name" placeholder=""
                                                    v-model="formData.name" :class="{ 'is-invalid': errors.name }"
                                                    required>
                                                <div class="invalid-feedback">{{ errors.name }}</div>
                                                <label for="name">Name</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6 mb-3">
                                            <div class=" mb-3 form-floating">
                                                <input type="email" class="form-control" id="email" placeholder=""
                                                    v-model="formData.email" :class="{ 'is-invalid': errors.email }"
                                                    required>
                                                <div class="invalid-feedback">{{ errors.email }}</div>
                                                <label for="email" class="">Email</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12 mb-3">
                                            <div class=" mb-3 form-floating">
                                                <input type="tel" class="form-control" id="phone" placeholder=""
                                                    v-model="formData.phone" :class="{ 'is-invalid': errors.phone }"
                                                    required>
                                                <div class="invalid-feedback">{{ errors.phone }}</div>
                                                <label for="phone" class="form-label">Phone</label>
                                            </div>
                                        </div>

                                        <div class="col-md-12 mb-3">
                                            <div class=" mb-3 form-floating">
                                                <textarea class="form-control" placeholder="" id="message" rows="4"
                                                    v-model="formData.message" :class="{ 'is-invalid': errors.message }"
                                                    required></textarea>
                                                <div class="invalid-feedback">{{ errors.message }}</div>
                                                <label for="message" class="form-label">Message</label>
                                            </div>
                                        </div>

                                        <div class="col-12 mb-3">
                                            <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                                        </div>

                                        <div class="col-12 text-end">
                                            <button type="submit" class="btn btn-primary px-4">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-6 mt-5 mt-md-0 pt-4 text-center">
                        <h1 class="text-uppercase my-3">We Believe</h1>
                        <p class="text-capitalize fs-5 fw-bold">"If you don't take care of your customers, <br> your
                            competitors
                            will do!"</p>
                        <h1 class="text-uppercase cutout my-3"><span>So Relax </span></h1>
                        <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together <br>We will
                            take
                            care of
                            you !"</p>
                    </div>

                </div>
            </div>
        </div>

        <!-- Office Locations -->
        <div class="container my-5">
            <div class="row mb-5">

                <p class="text-center display-3">Contact Us</p>
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card h-100">
                        <div class="card-body text-start">
                            <h4 class="card-title mb-4">Carolieto - Experience Center</h4>

                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-telephone-fill text-primary me-3"></i>
                                <a href="tel:+918383991845" class="text-decoration-none">+91-8383991845</a>
                            </div>

                            <div class="d-flex align-items-start mb-3">
                                <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                                <p class="mb-0">C-58, Ground Floor, C-Block, Mansarover Garden, Delhi - 110015</p>
                            </div>

                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-envelope-fill text-primary me-3"></i>
                                <a href="mailto:info@carolieto.it" class="text-decoration-none">info@carolieto.it</a>
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
                            <h4 class="card-title mb-4">Carolieto - Corporate Office</h4>

                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-telephone-fill text-primary me-3"></i>
                                <a href="tel:+918383991845" class="text-decoration-none">+91-8383991845</a>
                            </div>

                            <div class="d-flex align-items-start mb-3">
                                <i class="bi bi-geo-alt-fill text-primary me-3"></i>
                                <p class="mb-0">GR-51, Ganpatidham Industrial Area, Delhi Rohtak Road, Vill. Sankhol,
                                    Bahadurgarh, Distt. Jhajjar, Haryana - 124507, India</p>
                            </div>

                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-envelope-fill text-primary me-3"></i>
                                <a href="mailto:info@carolieto.it" class="text-decoration-none">info@carolieto.it</a>
                            </div>

                            <div class="mt-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d76.9234!3d28.6789!2z!"
                                    class="w-100" height="200" style="border:0;" allowfullscreen="" loading="lazy">
                                </iframe>
                            </div>
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