const About = () => {
  return (
    <section>
      <div className="w-full h-[700px]">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <div className="flex items-center justify-center gap-4">
              <div>
                <h1 className="text-7xl ">About Me</h1>
                <p className="text-2xl max-w-[700px]">
                  I am a Full Stack Developer who expertly combines
                  professionalism with a dahs of creativity. I thrive on
                  tackling challenges head-on, all while fostering a
                  collaborative team environment. I am a self-motivated
                  individual who is always looking to learn and grow.
                </p>
                <p className="text-2xl max-w-[700px]">
                  My skill set spans a diverse range of front-end and back-end
                  techonologies and frameworks.
                </p>
              </div>

              {/* <div className="w-[400px] h-[400px] bg-[#242222] rounded-full"></div> */}
            </div>
            <div className="flex items-center justify-center gap-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
