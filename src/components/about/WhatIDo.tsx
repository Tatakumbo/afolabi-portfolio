
const cards: { title: string; about: string }[] = [
    {
        title: "Frontend Development",
        about: "I build responsive interactive web interfaces using modern frontend technologies, with a focus on usability, accessibility and clean code"
    },
    {
        title: "Responsive Web Design",
        about: "I create layout that adapt to different screen sizes, hleping websites deliver a consistent experiencee accross mobile devices, tablets, and desktops"
    },
    {
        title: "Interactive User Interfaces",
        about: "I use React and Javascript to develop dynamic interfaces, reusable components and engaging user interactions"
    },
    {
        title: "Continous Learning",
        about: "I enjoy learning new technologies experimenting with ideas, and improving my development skills through practical projects and solving"
    }
    // {
    //     title: "",
    //     about: ""
    // }
]



export default function WhatIDo() {
    return (
        <section className="flex  md:flex-cols gap-5 mb-14 mt-20">
            <div className="sticky top-16 h-[500px]">
                 <h1 className="pb-2">What I do</h1>
                <img src="images/hero.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="relative ">
                {cards.map((card, index) => (
                    <div key={card.title} className="sticky border min-h-[450px] rounded-2xl mb-8 p-10 bg-white top-28" style={{zIndex: index+1}}>
                        <h4 className="pb-4">{card.title}</h4>
                        <p className="leading-relaxed">{card.about}</p>
                    </div>))
                }
            </div>
        </section>
    )
}