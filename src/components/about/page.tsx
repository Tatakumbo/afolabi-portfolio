import AboutHero from "./AboutHero"
import MyJourney from "./MyJourney"
import WhatIDo from "./WhatIDo"

export default function AboutPage() {

    return(
        <div className="max-w-3xl mx-auto">
          <AboutHero/>
          <MyJourney/>
          <WhatIDo/>
        </div>
    )
}