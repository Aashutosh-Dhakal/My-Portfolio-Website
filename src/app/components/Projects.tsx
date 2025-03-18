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
      className="group block rounded-xl overflow-hidden border border-gray-700 dark:border-gray-600 transition-colors duration-300 hover:border-green-500"
    >
      <div
        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center 
                   transition-colors duration-300 ease-in-out hover:border-gray-300"
      >
        <Image
          src={image}
          alt={title}
          width={500} // Specify width for Image component
          height={200} // Specify height for Image component
          className="w-full h-40 object-cover rounded-lg mb-4 transition-colors duration-300"
        />
        <h2 className="text-xl font-semibold text-black transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 transition-colors duration-300">
          {description}
        </p>
      </div>
    </a>
  );
}

// Add PropTypes for validation
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // Added link validation
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
  ];

  return (
    <div className="bg-white mx-auto text-black p-5 text-left rounded-lg max-w-full mb-5 font-sans" style={{ margin: "5px", height: "calc(100vh - 10px)" }}>
      <div className="flex flex-col justify-center items-center h-full">
        <h4 className="text-4xl font-bold mb-8">Projects</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;