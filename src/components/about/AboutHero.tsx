

export default function AboutHero() {

    return (
        <section className="py-5">
            <div className="mb-3">
                <h1>About me</h1>
                {/*line*/}
                <span className="block w-20 h-1 bg-primary mt-3 mb-5"></span>
            </div>
            <p>Hi, i'm <span className="emphasis ">Afolabi Fajana</span>,<br />
                I'm a <span className="emphasis">Full-Stack Developer</span> passionate about turning ideas into interactive, visually appealing anf user-friendly web experiences.
            </p>
            <p>
                I enjoy building responsive websites, creating reusable componments, and bringing designs to life through code. My journey in web development is driven by curiosity, creativity, and a constant desire to improve my skills.
            </p>
            <p className="leading-normal">
                I work with technologies like <span className="emphasis">HTML</span>, <span className="emphasis">CSS</span>, <span className="emphasis">TailwindCSS</span>, <span className="emphasis">Javascript</span>, <span className="emphasis">Typescript</span> and <span className="emphasis">React</span> while exploring modern tools and technologies to build better Web Applications, it is not just not about writing code, it is <span className="emphasis">Solving a Problem</span>, <span className="emphasis">Learning countinously</span> and <span className="emphasis">Creating a Digital Experience that makes a difference</span>
            </p>
        </section>
    )
}