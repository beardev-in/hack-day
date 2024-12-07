const countries = [
    {
      name: "India",
      date: "Feb 18-19",
      image: "/assets/countriesImg/India.svg",
      cities: [
        {
          name: "Pondy",
          event: {
            name: "Startup Sprint",
            date: "Feb 18",
            location: "Bangalore, India",
            description:
              "A fast-paced hackathon to create and pitch startup ideas.",
            tracks: [
              { name: "AI Innovation", description: "Focus on artificial intelligence solutions for startups." },
              { name: "FinTech", description: "Developing financial technologies for the future." },
              { name: "Blockchain", description: "Building secure and decentralized applications using blockchain." },
              { name: "GreenTech", description: "Tech solutions aimed at addressing climate change challenges." },
              { name: "HealthTech", description: "Innovative technologies focused on improving healthcare systems." },
              { name: "Smart Cities", description: "Creating tech-driven solutions for sustainable cities." }
            ]
          },
        },
        {
          name: "Bangalore",
          event: {
            name: "Startup Sprint",
            date: "Feb 18",
            location: "Bangalore, India",
            description:
              "A fast-paced hackathon to create and pitch startup ideas.",
            tracks: [
              { name: "AI", description: "Focus on artificial intelligence solutions for startups." },
              { name: "FinTech", description: "Developing financial technologies for the future." },
              { name: "Blockchain", description: "Building secure and decentralized applications using blockchain." },
              { name: "GreenTech", description: "Tech solutions aimed at addressing climate change challenges." },
              { name: "HealthTech", description: "Innovative technologies focused on improving healthcare systems." },
              { name: "Smart Cities", description: "Creating tech-driven solutions for sustainable cities." }
            ]
          },
        },
        {
          name: "Delhi",
          event: {
            name: "AI Innovators",
            date: "Feb 19",
            location: "Delhi, India",
            description:
              "A hackathon focused on artificial intelligence solutions.",
            tracks: [
              { name: "AI for Good", description: "Using AI to solve social impact problems." },
              { name: "Deep Learning", description: "Developing deep learning models for real-world applications." },
              { name: "Robotics", description: "Creating autonomous robots with AI capabilities." },
              { name: "Data Science", description: "Data analysis and machine learning for AI-driven solutions." },
              { name: "Natural Language Processing", description: "Working on AI that understands and processes human language." },
              { name: "AI Ethics", description: "Focusing on the ethical implications of AI solutions." }
            ]
          },
        },
      ],
    },
    {
      name: "Indonesia",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Indonesia.svg",
      cities: [
        {
          name: "Jakarta",
          event: {
            name: "Tech For Good",
            date: "Feb 18",
            location: "Jakarta, Indonesia",
            description:
              "A hackathon for social impact projects using technology.",
            tracks: [
              { name: "Social Impact Tech", description: "Using technology to solve social issues." },
              { name: "GreenTech", description: "Tech innovations focusing on environmental sustainability." },
              { name: "EduTech", description: "Building educational tools to enhance learning globally." },
              { name: "HealthTech", description: "Leveraging technology to improve healthcare accessibility." },
              { name: "FinTech", description: "Creating financial technology solutions for underbanked communities." }
            ]
          },
        },
        {
          name: "Bali",
          event: {
            name: "Green Innovation",
            date: "Feb 19",
            location: "Bali, Indonesia",
            description:
              "A sustainable tech-focused hackathon for green solutions.",
            tracks: [
              { name: "Renewable Energy", description: "Creating technology solutions for renewable energy." },
              { name: "Waste Management", description: "Developing tech solutions for reducing waste." },
              { name: "Sustainable Agriculture", description: "Innovating solutions for eco-friendly agriculture." },
              { name: "GreenTech", description: "Tech advancements focused on environmental conservation." },
              { name: "Circular Economy", description: "Solutions to reduce waste through reuse and recycling." }
            ]
          },
        },
      ],
    },
    {
      name: "Singapore",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Singapore.svg",
      cities: [
        {
          name: "Singapore City",
          event: {
            name: "FinTech Challenge",
            date: "Feb 18",
            location: "Singapore City, Singapore",
            description: "A hackathon for innovations in financial technologies.",
            tracks: [
              { name: "Blockchain for Finance", description: "Using blockchain to innovate the financial sector." },
              { name: "Digital Banking", description: "Building next-gen digital banking solutions." },
              { name: "Payments Tech", description: "Innovating secure and seamless payment technologies." },
              { name: "AI in FinTech", description: "AI-powered solutions for the financial industry." },
              { name: "RegTech", description: "Regulatory technology to enhance compliance and reduce risk." }
            ]
          },
        },
      ],
    },
    {
      name: "Dubai",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Dubai.svg",
      cities: [
        {
          name: "Dubai",
          event: {
            name: "Smart City Hackathon",
            date: "Feb 18",
            location: "Dubai, UAE",
            description: "Innovative solutions for smart city development.",
            tracks: [
              { name: "IoT Solutions", description: "Internet of Things solutions for smarter cities." },
              { name: "AI for Smart Cities", description: "Using AI to enhance urban living." },
              { name: "Smart Infrastructure", description: "Tech solutions for sustainable city infrastructure." },
              { name: "GreenTech", description: "Eco-friendly technology for urban environments." },
              { name: "Smart Mobility", description: "Tech solutions for smart and sustainable transportation." }
            ]
          },
        },
      ],
    },
    {
      name: "Vietnam",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Vietnam.svg",
      cities: [
        {
          name: "Ho Chi Minh City",
          event: {
            name: "Digital Health Innovation",
            date: "Feb 18",
            location: "Ho Chi Minh City, Vietnam",
            description: "A hackathon for digital health solutions.",
            tracks: [
              { name: "Telemedicine", description: "Innovating solutions for remote healthcare." },
              { name: "Health Data Analytics", description: "Using data to improve health outcomes." },
              { name: "Wearable Health Tech", description: "Developing wearable devices for health monitoring." },
              { name: "HealthTech AI", description: "AI-powered solutions to improve healthcare." },
              { name: "Digital Health Platforms", description: "Creating platforms for digital health services." }
            ]
          },
        },
      ],
    },
    {
      name: "Malaysia",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Malaysia.svg",
      cities: [
        {
          name: "Kuala Lumpur",
          event: {
            name: "IoT Solutions",
            date: "Feb 19",
            location: "Kuala Lumpur, Malaysia",
            description:
              "An IoT-focused hackathon exploring the future of connected devices.",
            tracks: [
              { name: "Smart Homes", description: "Innovative solutions for connected home devices." },
              { name: "Industrial IoT", description: "IoT solutions for industries and factories." },
              { name: "Wearables", description: "Creating wearable IoT devices for everyday use." },
              { name: "Healthcare IoT", description: "IoT solutions for improving healthcare services." },
              { name: "IoT Security", description: "Ensuring secure and private IoT device communications." }
            ]
          },
        },
      ],
    },
    {
      name: "Philippines",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Philippines.svg",
      cities: [
        {
          name: "Manila",
          event: {
            name: "Blockchain Revolution",
            date: "Feb 18",
            location: "Manila, Philippines",
            description: "A blockchain hackathon for developers and startups.",
            tracks: [
              { name: "DeFi", description: "Decentralized finance applications and innovations." },
              { name: "NFTs", description: "Non-fungible tokens and their applications in art and commerce." },
              { name: "Smart Contracts", description: "Building automated and self-executing contracts on blockchain." },
              { name: "Blockchain for Social Good", description: "Using blockchain for social impact and charity." },
              { name: "Blockchain Security", description: "Improving security and reducing risks in blockchain." }
            ]
          },
        },
      ],
    },
    {
      name: "Saudi",
      date: "Feb 18-19",
      image: "/assets/countriesImg/Saudi.svg",
      cities: [
        {
          name: "Riyadh",
          event: {
            name: "AI For Good",
            date: "Feb 18",
            location: "Riyadh, Saudi Arabia",
            description: "A hackathon focused on AI solutions for social impact.",
            tracks: [
              { name: "AI for Health", description: "Developing AI solutions for healthcare improvements." },
              { name: "AI for Education", description: "Using AI to enhance the learning experience." },
              { name: "AI for Social Good", description: "Solving global challenges using AI." },
              { name: "AI in Robotics", description: "Innovating autonomous robots with AI." },
              { name: "AI Ethics", description: "Exploring ethical considerations in AI implementations." }
            ]
          },
        },
      ],
    },
  ];
  
  export default countries;
  