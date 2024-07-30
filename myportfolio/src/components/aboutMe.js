function AboutMe() {
    return(
        <div className="w-full flex p-3">
            <div className="flex flex-col w-full text-green-400 font-bold">
                <h1 className="text-2xl text-left">
                    Hi all!
                    <br />
                    Valentin Melia
                </h1>
                <p className="text-sm text-justify font-light">
                    I am a passionate full-stack development student eager to turn my
                    academic knowledge into real-world experience. I am proficient in
                    front-end technologies like HTML, CSS, JavaScript, and React.js, as
                    well as back-end tools such as Node.js, Express, and SQL database
                    management. My academic journey and projects have given me a solid
                    foundation in software development principles and best practices. I
                    thrive on problem-solving and aim to deliver efficient, scalable
                    solutions. I am seeking opportunities to apply my technical skills
                    in dynamic and innovative projects while continuing to learn and
                    grow in the field of web development.
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <img
                    src="https://via.placeholder.com/150x200"
                    alt="placeholder"
                ></img>
            </div>
      </div>
    )
}

export default AboutMe;