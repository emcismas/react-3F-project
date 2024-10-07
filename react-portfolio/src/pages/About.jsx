import React from 'react';
import { skills, experiences, education } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hi, I'm{' '}
        <span className="purple-gradient_text font-semibold drop-shadow">
          Ema{' '}
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 text-xl">
        <p>
          Web Application Developer, experienced in front-end development and
          automation testing.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills are </h3>

        <div className="mt-16 flex flex-wrap gap-8 ">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className=" btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Where I've worked</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
          <p></p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src="src\assets\icons\work.png"
                      className="w-4/6 h-4/6 flex object-contain"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>

                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Where I've studied </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
          <p></p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((education) => (
              <VerticalTimelineElement
                key={education.university}
                date={education.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src="src\assets\icons\education.png"
                      className="w-4/6 h-4/6 flex object-contain"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {education.title}
                  </h3>

                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.university}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {education.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
