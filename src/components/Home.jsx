import '../css/style.css';
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <h1>Eksamen i Kommunikasjonsdesign Høst 2024</h1>
          <h2>Kandidatnummer: 455, 474, 477 og 416</h2>
        </nav>
        <section className="introduction">
          <h1>Welcome to our exam project. We have created 4 different news articles, which have their own personality and touch. Using different modalities and elements, like maps, 
            visualtions, graphics, pictures and text we have made engaging and interesting media. </h1>
        </section>
      </header>
      
      <main>
        <article className='home-article'>
            <h3>News story 1</h3>            
            <img src="src\photos\Article1\NolandHeader.png" alt="man in wheelchair" />
            <h2>A New Frontier in Overcoming Disability</h2>
            <p>
              After paralysis from a swimming accident, Noland Arbaugh regained independence through Neuralink, a brain-computer interface enabling device control via thought. 
              This revolutionary technology holds transformative potential for millions with disabilities.
            </p>
            <Link to="/neurolink">
                <button>Read More</button>
            </Link>
        </article>

        <article className='home-article'>
            <h3>News story 2</h3>
            <img src="src\photos\Article2\oceangate_banner.jpg" alt="image of the titan. submarine" />
            <h2>Oceangate Disaster</h2>
            <p>In June 2023, an OceanGate expedition to explore the Titanic ended in tragedy, raising questions about innovation, risk, and the pursuit of deep-sea exploration.</p>
            <Link to="/oceangate">
                <button>Read More</button>
            </Link>
        </article>

        

        <article className='home-article'>
            <h3>News story 3</h3>
            <img src="src\photos\Article4\WoWHeader.jpeg" alt="photo of WoW characters" />
            <h2>The WoW-player with a deadly disease</h2>
            <p>
              "Ibelin" is a Netflix documentary about Mats Steen, a Norwegian boy with Duchenne Muscular Dystrophy. 
              Through World of Warcraft, he formed deep friendships, transcending his physical limitations.
            </p>
            <Link to="/ibelin">
              <button>Read More</button>
            </Link>
        </article>
        <article className='home-article'>
            <h3>Long read</h3>
            <img src="src\photos\Article3\Isolation-header.jpg" alt="man infront of a gaming pc" />
            <h2>The Rise of Online Gaming in the Pandemic</h2>
            <p>
              The pandemic caused a surge in online gaming, helping people stay connected while isolated. Games like Among Us became social lifelines, fostering emotional resilience,
               while platforms like Discord grew. Gaming transformed from leisure to a vital tool for emotional support and maintaining relationships during lockdown.
            </p>
            <Link to="/isolation">
              <button>Read More</button>
            </Link>
        </article>

       
      </main>
    </>
  );
}
