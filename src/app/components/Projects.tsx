import PropTypes from "prop-types"; // Import PropTypes
import Image from "next/image"; // Import Image from Next.js

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

function Card({ image, title, description, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-150 ease-in-out w-full sm:w-80 md:w-96"
    >
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl flex flex-col items-center text-center h-full">
        {/* Image */}
        <div className="w-full h-48 relative rounded-lg overflow-hidden mb-6">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-150 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 transition-colors duration-150 group-hover:text-blue-600">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 transition-colors duration-150 group-hover:text-blue-800">
          {description}
        </p>

        {/* Link Button */}
        <button className="mt-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-150 hover:bg-blue-700 hover:border-blue-700">
          View Project
        </button>
      </div>
    </a>
  );
}

// Add PropTypes for validation
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Projects() {
  const cardsData = [
    {
      image: "/images/to-do app.png",
      title: "To-Do WebApp with Django",
      description:
        "A to-do web application built with Django. Features include user authentication, task creation, and task management.",
      link: "https://github.com/Aashutosh-Dhakal/To-Do-WebApp-with-Django",
    },
    {
      image: "/images/snake game.png",
      title: "Snake Game with Python",
      description:
        "A simple snake game built with Python and Pygame. Features include snake movement, food generation, and score tracking.",
      link: "https://github.com/Aashutosh-Dhakal/SnakeGameSample",
    },
    {
      image: "/images/image_recognition.jpg",
      title: "Image-Recognition-Python",
      description:
        "The program preprocesses an input image to match the model's requirements and predicts the most likely objects in it.",
      link: "https://github.com/Aashutosh-Dhakal/Image-Recognition-with-ResNet50-and-openCV-in-Python",
    },
    {
      image: "/images/pdf-to-img.jpg",
      title: "PDF-to-image-conveter",
      description:
        "This tool is designed to easily convert PDF documents into image formats using the pdf2image library in Python.",
      link: "https://github.com/Aashutosh-Dhakal/PDF-to-image-conveter-using-python-pdf2image",
    },
    {
      image: "/images/AutoMoto.png",
      title: "AutoMoto",
      description:
        "Bike Rental System AutoMoto is a bike rental application that streamlines the bike rental process, making it efficient and user-friendly.",
      link: "https://github.com/Aashutosh-Dhakal/AutoMoto",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center text-center px-4 py-10">
      <h4 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-6xl">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Projects;