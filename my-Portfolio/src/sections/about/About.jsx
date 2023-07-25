const About = () => {
  return (
    <section>
      <div className="w-full h-[800px] bg-white">
        <div className="flex flex-col items-center justify-center h-full">
          <div className=" flex flex-col items-center gap-4">
            <h2 className="font-Tektur text-[#b655e4] text-lg font-bold ">ABOUT</h2>
            <h1 className="text-5xl font-serif font-medium leading-8">Personal Info</h1>
            <h4 className="font-medium text-lg">Get to know more about me </h4>
          </div>
          <div className="flex items-center justify-center gap-4 mt-28">
            <div>
              <h1 className="text-7xl ">Hello!</h1>
              <p className="text-2xl max-w-[700px]">
                I am a Full Stack Developer who expertly combines
                professionalism with a dahs of creativity. I thrive on tackling
                challenges head-on, all while fostering a collaborative team
                environment. I am a self-motivated individual who is always
                looking to learn and grow.
              </p>
              <p className="text-2xl max-w-[700px]">
                My skill set spans a diverse range of front-end and back-end
                techonologies and frameworks.
              </p>
            </div>
            <div className="top-0">
              <h2>Skills</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
