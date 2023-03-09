//@ts-ignore-error
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectType } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  project,
}: {
  index: number;
  project: projectType;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(project.source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          doloribus ab corporis, qui sed adipisci repellat alias tempore harum
          illum impedit velit vero minima, quas consequuntur nisi aut voluptates
          rerum ipsam dicta omnis unde pariatur quam voluptatem! Facilis quidem
          eveniet voluptas, veniam harum sapiente fugiat, vitae qui dolorum
          reiciendis aspernatur quaerat quasi quisquam iusto, eaque cumque
          distinctio. Voluptatum totam, odio eum esse molestias id natus earum.
          Qui, amet, quis modi maiores culpa libero aperiam enim maxime alias
          delectus soluta animi. Optio natus asperiores inventore? Accusantium
          nam quod assumenda voluptatum laudantium minus nostrum harum incidunt,
          inventore, nisi similique quaerat fugit ipsam.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
