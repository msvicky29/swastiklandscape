import { 
  MdWaterDrop, 
  MdSettings, 
  MdPhoneAndroid, 
  MdLocationOn, 
  MdWarning,
  MdGrass,
  MdBuildCircle,
  MdScience,
  MdVerified,
  MdStarRate 
} from 'react-icons/md';
import GreenRoof from '../assets/green-roof.jpg'
import Turf from '../assets/turf.jpg'
import EventPlantPic from '../assets/event-plant.jpeg'
import Irrigation from '../assets/irrigation.jpg'

export const pageData = {
  greenRoof: {
    hero: {
      title: "Hi-Green Roof Garden System",
      subtitle: "Singapore's Pioneer in Sustainable & Ultra-low Maintenance Roof Garden Systems",
      buttonText: "Download Hi-Green Roof System Guide",
      backgroundImage: Turf
    },
    about: {
      title: "About Our System",
      paragraphs: [
        "Prince's Landscape Hi-Green Roof Garden System is Singapore's very own customized and locally designed and tested green roof system.",
        "Through our R&D, plant life sustainability is prolonged owing to our specialised \"live\" hydroculture technique. The planting medium, Hi-Green Lite Composite is uniquely premixed and prepared for high water and nutrient absorbency."
      ],
      image: "/images/green-roof-system.jpg"
    },
    features: {
      title: "Features of Our Hi-Green Roof Garden System",
      items: [
        {
          title: "Tropical Climate Tested",
          description: "Plants extensively tested in our nurseries to ensure survival in tropical conditions",
           icon: MdSettings
        },
        {
          title: "Minimal Maintenance",
          description: "Ultra-low maintenance system requiring minimal watering",
           icon: MdSettings
        },
        {
          title: "Quick Installation",
          description: "Fast installation process thanks to our modular system design",
           icon: MdSettings
        },
        {
          title: "Quality Assured",
          description: "High-quality guaranteed through intense quality control processes",
           icon: MdSettings
        },
        {
          title: "Customizable Design",
          description: "Tailored green roof garden system designed according to your specific needs",
           icon: MdSettings
        }
      ]
    },
    benefits: {
      title: "Benefits of Green Roof Systems",
      items: [
        {
          title: "Reduced Energy Consumption",
          description: "Natural insulation that reduces building cooling costs",
          image: "/images/energy-saving.jpg"
        },
        {
          title: "Improved Air Quality",
          description: "Plants produce oxygen and remove air pollutants",
          image: "/images/air-quality.jpg"
        },
        {
          title: "Extended Roof Lifespan",
          description: "Protection from weather damage and wear",
          image: "/images/roof-protection.jpg"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Roof Space?",
      subtitle: "Let us help you create a sustainable and beautiful green roof garden",
      primaryButton: {
        text: "Schedule a Consultation",
        action: "/contact"
      },
      secondaryButton: {
        text: "Download Brochure",
        action: "/download"
      }
    }
  },
  eventPlant: {
    hero: {
      title: "Hi-Green Roof Garden System",
      subtitle: "Singapore's Pioneer in Sustainable & Ultra-low Maintenance Roof Garden Systems",
      buttonText: "Download Hi-Green Roof System Guide",
      backgroundImage: EventPlantPic
    },
    about: {
      title: "About Our System",
      paragraphs: [
        "Prince's Landscape Hi-Green Roof Garden System is Singapore's very own customized and locally designed and tested green roof system.",
        "Through our R&D, plant life sustainability is prolonged owing to our specialised \"live\" hydroculture technique. The planting medium, Hi-Green Lite Composite is uniquely premixed and prepared for high water and nutrient absorbency."
      ],
      image: "/images/green-roof-system.jpg"
    },
    features: {
      title: "Features of Our Hi-Green Roof Garden System",
      items: [
        {
          title: "Tropical Climate Tested",
          description: "Plants extensively tested in our nurseries to ensure survival in tropical conditions",
           icon: MdSettings
        },
        {
          title: "Minimal Maintenance",
          description: "Ultra-low maintenance system requiring minimal watering",
           icon: MdSettings
        },
        {
          title: "Quick Installation",
          description: "Fast installation process thanks to our modular system design",
           icon: MdSettings
        },
        {
          title: "Quality Assured",
          description: "High-quality guaranteed through intense quality control processes",
           icon: MdSettings
        },
        {
          title: "Customizable Design",
          description: "Tailored green roof garden system designed according to your specific needs",
           icon: MdSettings
        }
      ]
    },
    benefits: {
      title: "Benefits of Green Roof Systems",
      items: [
        {
          title: "Reduced Energy Consumption",
          description: "Natural insulation that reduces building cooling costs",
          image: "/images/energy-saving.jpg"
        },
        {
          title: "Improved Air Quality",
          description: "Plants produce oxygen and remove air pollutants",
          image: "/images/air-quality.jpg"
        },
        {
          title: "Extended Roof Lifespan",
          description: "Protection from weather damage and wear",
          image: "/images/roof-protection.jpg"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Roof Space?",
      subtitle: "Let us help you create a sustainable and beautiful green roof garden",
      primaryButton: {
        text: "Schedule a Consultation",
        action: "/contact"
      },
      secondaryButton: {
        text: "Download Brochure",
        action: "/download"
      }
    }
  },
  // You can add more page data objects here
  verticalGarden: {
    hero: {
      title: "Vertical Garden System",
      subtitle: "Singapore's Pioneer in Sustainable & Ultra-low Maintenance Roof Garden Systems",
      buttonText: "Download Hi-Green Roof System Guide",
      backgroundImage: GreenRoof
    },
    about: {
      title: "About Our System",
      paragraphs: [
        "Prince's Landscape Hi-Green Roof Garden System is Singapore's very own customized and locally designed and tested green roof system.",
        "Through our R&D, plant life sustainability is prolonged owing to our specialised \"live\" hydroculture technique. The planting medium, Hi-Green Lite Composite is uniquely premixed and prepared for high water and nutrient absorbency."
      ],
      image: "/images/green-roof-system.jpg"
    },
    features: {
      title: "Features of Our Hi-Green Roof Garden System",
      items: [
        {
          title: "Tropical Climate Tested",
          description: "Plants extensively tested in our nurseries to ensure survival in tropical conditions",
           icon: MdSettings
        },
        {
          title: "Minimal Maintenance",
          description: "Ultra-low maintenance system requiring minimal watering",
           icon: MdSettings
        },
        {
          title: "Quick Installation",
          description: "Fast installation process thanks to our modular system design",
           icon: MdSettings
        },
        {
          title: "Quality Assured",
          description: "High-quality guaranteed through intense quality control processes",
           icon: MdSettings
        },
        {
          title: "Customizable Design",
          description: "Tailored green roof garden system designed according to your specific needs",
           icon: MdSettings
        }
      ]
    },
    benefits: {
      title: "Benefits of Green Roof Systems",
      items: [
        {
          title: "Reduced Energy Consumption",
          description: "Natural insulation that reduces building cooling costs",
          image: "/images/energy-saving.jpg"
        },
        {
          title: "Improved Air Quality",
          description: "Plants produce oxygen and remove air pollutants",
          image: "/images/air-quality.jpg"
        },
        {
          title: "Extended Roof Lifespan",
          description: "Protection from weather damage and wear",
          image: "/images/roof-protection.jpg"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Roof Space?",
      subtitle: "Let us help you create a sustainable and beautiful green roof garden",
      primaryButton: {
        text: "Schedule a Consultation",
        action: "/contact"
      },
      secondaryButton: {
        text: "Download Brochure",
        action: "/download"
      }
    }
  },
  irrigation: {
    hero: {
      title: "Hi-Green Roof Garden System",
      subtitle: "Singapore's Pioneer in Sustainable & Ultra-low Maintenance Roof Garden Systems",
      buttonText: "Download Hi-Green Roof System Guide",
      backgroundImage: Irrigation
    },
    about: {
      title: "About Our System",
      paragraphs: [
        "Prince's Landscape Hi-Green Roof Garden System is Singapore's very own customized and locally designed and tested green roof system.",
        "Through our R&D, plant life sustainability is prolonged owing to our specialised \"live\" hydroculture technique. The planting medium, Hi-Green Lite Composite is uniquely premixed and prepared for high water and nutrient absorbency."
      ],
      image: "/images/green-roof-system.jpg"
    },
    features: {
      title: "Features of Our Hi-Green Roof Garden System",
      items: [
        {
          title: "Tropical Climate Tested",
          description: "Plants extensively tested in our nurseries to ensure survival in tropical conditions",
           icon: MdSettings
        },
        {
          title: "Minimal Maintenance",
          description: "Ultra-low maintenance system requiring minimal watering",
           icon: MdSettings
        },
        {
          title: "Quick Installation",
          description: "Fast installation process thanks to our modular system design",
           icon: MdSettings
        },
        {
          title: "Quality Assured",
          description: "High-quality guaranteed through intense quality control processes",
           icon: MdSettings
        },
        {
          title: "Customizable Design",
          description: "Tailored green roof garden system designed according to your specific needs",
           icon: MdSettings
        }
      ]
    },
    benefits: {
      title: "Benefits of Green Roof Systems",
      items: [
        {
          title: "Reduced Energy Consumption",
          description: "Natural insulation that reduces building cooling costs",
          image: "/images/energy-saving.jpg"
        },
        {
          title: "Improved Air Quality",
          description: "Plants produce oxygen and remove air pollutants",
          image: "/images/air-quality.jpg"
        },
        {
          title: "Extended Roof Lifespan",
          description: "Protection from weather damage and wear",
          image: "/images/roof-protection.jpg"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Roof Space?",
      subtitle: "Let us help you create a sustainable and beautiful green roof garden",
      primaryButton: {
        text: "Schedule a Consultation",
        action: "/contact"
      },
      secondaryButton: {
        text: "Download Brochure",
        action: "/download"
      }
    }
  },
  turfing: {
    // ... hero and about sections remain same ...

    features: {
      title: "Features of Our Turfing Service",
      items: [
        {
          title: "Premium Turf Varieties",
          description: "Wide selection of high-quality grass types suited for different conditions",
          icon: MdGrass
        },
        {
          title: "Professional Installation",
          description: "Expert laying techniques ensuring proper root establishment",
          icon: MdBuildCircle
        },
        {
          title: "Soil Preparation",
          description: "Comprehensive soil testing and preparation before installation",
          icon: MdScience
        },
        {
          title: "Aftercare Support",
          description: "Detailed maintenance guidelines and ongoing support",
          icon: MdVerified
        },
        {
          title: "Quality Guarantee",
          description: "Satisfaction guaranteed with our premium turf installations",
          icon: MdStarRate
        }
      ]
    },
    
  }
}; 