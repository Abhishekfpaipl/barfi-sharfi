<template>
    <div class="" style="overflow-x: hidden;">
        <SectionTopBanner />
        <div class="container my-5 pb-5">
            <h2 class="fw-bold mb-4 text-center">Privacy Policy</h2>

            <p class="text-start mb-4">
                At <b>Barfi Sharfi</b>, we understand the importance of protecting your privacy, especially when you trust
                us with your personal information while indulging in the authentic, traditional sweets and snacks of
                India. This Privacy Policy outlines how your information is collected, used, and safeguarded. By using
                our services, you agree to the terms outlined below.
            </p>

            <!-- Section: Your Privacy -->
            <h4 class="fw-bold text-start">Your Privacy Matters</h4>
            <p class="text-start mb-4">
                At Barfi Sharfi, we are committed to safeguarding your privacy and ensuring the security of your personal
                information. We value the trust you place in us and work diligently to provide a safe and secure
                shopping experience. By choosing Barfi Sharfi, you are assured that your information will be handled with
                the utmost care and responsibility.
            </p>

            <!-- Section: Information We Collect -->
            <h4 class="fw-bold text-start">Information We Collect</h4>
            <p class="text-start mb-4">
                When you browse or shop on our website, we may collect personal information to enhance your experience,
                such as:
            </p>
            <ul class="text-start mb-4">
                <li>Your name, contact number, email address, and shipping details.</li>
                <li>Details related to orders, billing, and payment preferences.</li>
                <li>Information about your browsing habits through cookies, such as products viewed or purchased.</li>
                <li>Feedback and reviews on our sweets and snacks.</li>
            </ul>
            <p class="text-start mb-4">
                This information helps us personalize your shopping journey, ensuring that you find your favorite sweets
                and snacks effortlessly.
            </p>

            <!-- Section: How We Use Your Information -->
            <h4 class="fw-bold text-start">How We Use Your Information</h4>
            <p class="text-start mb-4">
                The information we collect is used to provide you with a seamless shopping experience, including:
            </p>
            <ul class="text-start mb-4">
                <li>Processing your orders and delivering them promptly.</li>
                <li>Customizing your shopping experience with personalized recommendations.</li>
                <li>Sharing updates on new arrivals, seasonal offers, and discounts on our sweets and snacks.</li>
                <li>Improving our website’s functionality and user interface for better service.</li>
            </ul>
            <p class="text-start mb-4">
                Rest assured, we will never sell or rent your personal information to third parties for marketing
                purposes without your explicit consent.
            </p>

            <!-- Section: Data Protection -->
            <h4 class="fw-bold text-start">How We Protect Your Data</h4>
            <p class="text-start mb-4">
                We employ advanced security measures to protect your information from unauthorized access, including:
            </p>
            <ul class="text-start mb-4">
                <li>Secure servers and encryption (SSL) for all transactions.</li>
                <li>Restricted access to customer data within our organization.</li>
                <li>Compliance with legal frameworks like the Information Technology Act, 2000, and other applicable
                    regulations.</li>
            </ul>
            <p class="text-start mb-4">
                While we strive to keep your data safe, we also encourage you to maintain the confidentiality of your
                login credentials.
            </p>

            <!-- Section: Cookies -->
            <h4 class="fw-bold text-start">Use of Cookies</h4>
            <p class="text-start mb-4">
                To enhance your shopping experience, we use cookies that help us:
            </p>
            <ul class="text-start mb-4">
                <li>Remember your preferences and simplify navigation.</li>
                <li>Offer personalized recommendations based on your browsing history.</li>
                <li>Track website performance and identify areas for improvement.</li>
            </ul>
            <p class="text-start mb-4">
                You may choose to disable cookies in your browser settings; however, this may limit your ability to use
                certain features of the website.
            </p>

            <!-- Section: Sharing Information -->
            <h4 class="fw-bold text-start">Sharing Information</h4>
            <p class="text-start mb-4">
                We may share your information with trusted third-party service providers to facilitate delivery, payment
                processing, and other operations necessary to fulfill your orders. All partners are bound by
                confidentiality agreements to ensure your data is protected.
            </p>
            <p class="text-start mb-4">
                In cases of legal or regulatory requirements, we may disclose your information to law enforcement or
                other government agencies to ensure compliance with the law.
            </p>

            <!-- Section: Children’s Privacy -->
            <h4 class="fw-bold text-start">Children's Privacy</h4>
            <p class="text-start mb-4">
                Barfi Sharfi does not knowingly collect information from individuals under 18. If you are under 18, please
                have a parent or guardian assist with any purchases or use of our services.
            </p>

            <!-- Section: Updates to Policy -->
            <h4 class="fw-bold text-start">Policy Updates</h4>
            <p class="text-start mb-4">
                This privacy policy may be updated periodically to reflect changes in our practices or legal
                requirements. We encourage you to review this page regularly to stay informed.
            </p>

            <p class="fw-bold text-center mt-4">
                Thank you for trusting Barfi Sharfi. Your privacy is our priority.
            </p>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: "PrivacyPolicy",
    components: {
        SectionTopBanner,
    },
};
</script>

<style scoped>
h2 {
    color: #ff5722;
}

h4 {
    color: #6c757d;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}
</style>