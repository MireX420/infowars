import { Link } from "react-router-dom"


export default function Ibelin() {
  return (
   <>
    <main className="Ib-main">
    <Link to="/" className="neuro-home-button">
            Home
        </Link> 
        <header>
          <div className="Ib-intro">
            <h1>
              In 2024 a documentary was made about a young boy from Norway named Mats Steen who suffered from a disease called Duchenne Muscular Dystrophy. 
              The movie is called “Ibelin” after Mats’ World of Warcraft character, through which he interacted with the world and people around him.
            </h1>
          </div>
          <div className="Ib-title">
            <h2>Ibelin</h2>
            <h2>
              The WoW-player with a deadly disease
            </h2>
          </div>
        </header>
        <section className="Ib-content">
     
            <section className="Ib-s1">
              <p>
                Mats Steen used to be a lively boy who perhaps was a bit slower than other kids his age and would stumble more often, but otherwise a perfectly normal kid. 
              </p>
            </section>
            <img src="src\photos\Article4\BrokenBone@4x.png" alt="gaming controller" className="controller-image" />
          <section className="Ib-s2">
          <p>
                  His parents knew that he had DMD(Duchenne Muscular Dystrophy), but still hoped he would live as normal a life as possible. But over the years his body grew weaker and weaker until he was dependent on a 
                  wheelchair to get around anywhere. As his body started failing him video games became more and more important, as it was really the only thing he could do on his own. 
                  He went through many consoles and many games over the years, but eventually discovered a whole new world. The game World of Warcraft (WoW).
              </p>
             
          </section>
          <img src="src\photos\Article4\Dna@4x.png" alt="graphic of dna" className="dna-image"/>
          <section className="Ib-s2">
            <p>
                  Through Wow he could live the life he wanted and not be obstructed by his frail body. It was in Azeroth, the world which World of Warcraft is about, where he developed real and 
                  close relationships with countless people who all knew him by the name of Ibelin. 
            </p>
          </section>
          <img src="src\photos\Article4\ConnectionPlug@4x.png" alt="power plugs" className="plug-image"/>
          <section className="Ib-s2">
            <p>
              He got to know these people from all over Europe over several years, but unfortunately his body 
              couldn’t handle the condition much longer, and he passed away, a 25-year-old in 2014. His story was mostly unknown for several years, only really hitting the spotlight earlier this
              year when a Netflix documentary called “Ibelin” released to critical acclaim.
            </p>
          </section>
          <img src="src\photos\Article4\DMD_infograph.jpg" alt="infographic of DMD" className="DMD-image" />
          <section className="Ib-last">
            <p>
                  It impacts the bodies ability to produce dystrophin, a key muscle protein. Without it, cells become easily damaged resulting
                  in heart and breathing failure. The genetic disease is currently uncurable, but through the efforts of the people behind Cure Duchenne solutions such as gene therapy are being 
                  explored to cure both Duchenne and other similar genetic diseases. 
            </p>
          </section>
        </section>
       
    </main>
   </>
  )
}
