import HeroSection from 'components/section/HeroSection';
import AboutSection from 'components/section/AboutSection';
import ContactSection from 'components/section/ContactSection';
import ProductSection from 'components/section/ProductSection';
import ServiceSection from 'components/section/ServiceSection';

import './css/HomePage.css';

const HomePage=()=>{
    return (
		<>
			<HeroSection />
			<AboutSection />
			<ContactSection />
			<ProductSection />
			<ServiceSection />
		</>
    );
}

export default HomePage;