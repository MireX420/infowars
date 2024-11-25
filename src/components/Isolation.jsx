import { React, useState } from 'react';
import FadeInSection from './FadeInSection';
import AnimatedBarChart from './AnimatedBarChart';
import { Link } from 'react-router-dom';


const quizzes = [
    {
      question: "What game helped Stine get through the pandemic?",
      options: {
        A: "Minecraft",
        B: "Among Us",
        C: "Fortnite",
        D: "Call of Duty",
      },
      correct: "B",
    },
    {
      question: "Which streaming platform, commonly used by gamers, had significant growth during the pandemic?",
      options: {
        A: "Facebook",
        B: "Instagram",
        C: "Twitch",
        D: "LinkedIn",
      },
      correct: "C",
    },
    {
      question: "Why was it difficult for students to focus on school during the pandemic?",
      options: {
        A: "Lack of internet access",
        B: "The shift to online classes",
        C: "No support from teachers",
        D: "Too many distractions from gaming",
      },
      correct: "D",
    },
  ];

export default function Isolation() {

    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [result, setResult] = useState("");
  
    const checkAnswer = (choice) => {
      const correctAnswer = quizzes[currentQuiz].correct;
      if (choice === correctAnswer) {
        setResult("🎉 Correct!");
      } else {
        setResult(`❌ Wrong! The correct answer is ${correctAnswer}) ${quizzes[currentQuiz].options[correctAnswer]}.`);
      }
    };
  
    const nextQuiz = () => {
      if (currentQuiz < quizzes.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
        setResult(""); 
      } else {
        setResult("You have completed all the quizzes! 🎉");
      }
    };
    return(
        <>
        <body className='isolation-body'>
            
        
             <main className="isolation-main">
             <Link to="/" className="neuro-home-button">
                    Home
                </Link>  
                <header className="isolation-header"> 
                    <h1>Isolation to Connection </h1>
                    <h2>The Rise of Online Gaming in the Pandemic</h2>
                </header>
                <section className="isolation-s1">
                    <h2>
                        When COVID-19 forced the world into lockdown, online gaming experienced an unprecedented surge, offering an essential outlet for connection and entertainment. 
                    </h2>
                    
                </section>
                <section className="isolation-s1-2">
                    <h3>A Digital Surge in a Locked-Down World</h3>
                    <p>
                        According to <a className='link' href="https://www.statista.com/statistics/746230/fortnite-players/">Statista.com</a>, popular games like Fortnite saw their player count double as millions
                        turned to virtual spaces to fill the void left by traditional social 
                        interactions. For many, online gaming became more than just a pastime—it was a way to stay mentally healthy, maintain relationships, and cope with the isolation.
                    </p>
                    <AnimatedBarChart />
                    <h2>
                        One standout example of this trend was Among Us, a social deduction game that exploded in popularity during the pandemic. 
                    </h2>
                </section>
                    <div className="isolation-spinner-container">
                        <img src="src\photos\Article3\IconController@4x.png" alt="Icon of a spinning controller" className="spinning-image"></img>
                    </div>
                <section className="isolation-s2">
                    <h3>The Pandemic's Surprise Star</h3>
                    <p>
                        Before 2020, Among Us had a modest player base. However, the need for safe, engaging ways to socialize catapulted it to global fame, 
                        boasting over 100 million downloads by the end of the year—a 
                        staggering 1,500% increase in search interest, according to <a className='link' href="https://www.gamesradar.com/among-us-gained-almost-half-a-billion-players-in-2020/">GamesRadar.com</a>.
                    </p>
                </section>
                <div className="image-animation-container">
                        <img
                        src="src/photos/Article3/AmongUsIcon@4x.png"
                        alt="Among us character runing across screen"
                        className="moving-image"
                        />
                    </div>
                <section className="isolation-s3">     
                    <p>
                        The appeal of Among Us lay in its simplicity and its social aspect. Friends could gather virtually to debate and accuse each other of being the “Impostor,” sparking 
                        laughter. The game became an accessible way to reconnect despite physical separation, symbolizing how online gaming met the social needs of an isolated world.
                    </p>
                </section>  
                <div className="image-animation-container-2">
                        <img
                        src="src/photos/Article3/AmongUsIconFlipped@4x.png"
                        alt="Among us character runing across screen"
                        className="moving-image-2"
                        />
                    </div>         
                <section className="isolation-s4">
                    <h3>Gaming's Pandemic Shift</h3>
                    <p>
                        Before COVID-19, online gaming was steadily growing but often viewed as a niche activity. Titles like Minecraft and Fortnite were popular but primarily seen as 
                        entertainment rather than tools for social connection. 
                    </p>
                    <p>
                        Games like Among Us were largely unknown, with small communities of dedicated players. However, the pandemic 
                        redefined this perception, bringing gaming into the mainstream as a way to forge bonds and bridge the gap of physical distance.
                    </p>
                </section>     
                <img src="src\photos\Article3\Icon@4x.png" alt="A PC-screen with a cable taking it down to the next section" className="FirstIlu" />              
                <section className="isolation-s5">
                    <h2 className='Stine-pre'>
                        For Stine, a high school student, the pandemic was emotionally overwhelming. The abrupt shift to online school and separation
                        from her friends left her feeling isolated and depressed.
                    </h2>
                    <div className='stine-image-div'>
                        <img src="src\photos\Article3\Stine.jpg" alt="image of Stine" className="stine-image"/>
                        <h4>Stine Vågnes</h4>
                    </div>
                    <FadeInSection>
                    <p>
                        "I felt so alone, the days just blurred together. I missed laughing with my friends and hanging out like we used to." 
                    </p>
                    </FadeInSection>
                    <h2>
                        Everything changed when a friend invited her to play Among Us. What began as a casual activity quickly became a daily ritual.             
                    </h2>
                    <FadeInSection>
                    <p>
                        "It wasn’t just about the game—it was about talking, laughing, and staying close to my friends,"
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <p>
                        "We’d spend hours on Discord, sharing everything from school gossip to our frustrations with lockdown life."
                    </p>
                    </FadeInSection>
                    <h2>
                        For Stine, gaming was more than an escape—it was a lifeline that helped her manage the loneliness and stay connected.
                    </h2>
                </section>
                <img src="src\photos\Article3\Icon1@4x.png" alt="a cloud of gaming equipment" className="SecondIlu" />
                <section className="isolation-s6">
                    <h3>Gaming as a Social Hub</h3>
                    <p>
                        The gaming boom wasn’t just about playing—it was about connecting. Platforms like Discord and Steam saw unprecedented growth during the pandemic, 
                        transforming into spaces where players could socialize beyond the game itself. 
                    </p>
                    <p>
                        Twitch, for instance, reported a 83% increase in active users by mid-2020, 
                        fueled by gamers seeking new ways to engage socially and be entertained <a className='link' href="https://www.digitalmusicnews.com/2021/01/13/twitch-growth-2020/">DigitalMusicNews.com</a>.
                        Games like Minecraft allowed players to build, share, and explore collaboratively, while Fortnite hosted live concerts, blending gaming with entertainment.                        
                    </p>
                    <p>
                    These virtual events became cultural moments, attracting millions of players and providing unique shared experiences in an otherwise fragmented world.
                    </p>
                </section>
                <img src="src\photos\Article3\Icon2@4x.png" alt="a icon of the connection of the world" className="SecondThirdIlu" />
                <section className="isolation-s6">
                    <h3>Balancing School and Play</h3>
                    <h2>
                        For students like Stine, the shift to remote learning posed unique challenges. With school lessons happening on the same devices used for gaming, 
                        distractions were inevitable.
                    </h2>
                    <FadeInSection>
                    <p className='comment'>
                       "It was so tempting to start a game during a boring class," she admitted. "Gaming gave me something to look forward to, 
                        even if I knew I needed to focus on school."                
                     </p>
                     </FadeInSection>
                     <h2>
                        This blending of academic and personal spaces made it harder for many to stay disciplined. Teachers and parents often found themselves battling this 
                        dual-edged sword of technology—a necessary tool for education but also a gateway to endless distractions.
                     </h2>
                </section>
                <img src="src\photos\Article3\Icon3@4x.png" alt="a keyboard" className="ThirdIlu" />
                <section className="isolation-s7">
                    <h3>Gaming’s Lasting Impact</h3>
                    <p>
                        The pandemic created a cultural shift in how gaming is perceived. What was once considered a niche hobby became a mainstream phenomenon, reshaping relationships 
                        and creating lasting communities.                        
                     </p>
                     <p>
                        For many, the habits formed during lockdown persisted even after restrictions eased. Multiplayer games like Call of Duty: Warzone and League of Legends continued 
                        to thrive, as players discovered that gaming could be a way to stay connected even when traditional social opportunities returned.                    
                     </p>
                     <img src="src\photos\Article3\IconGraph@4x.png" alt="a graph" className='IconGraph'/>
                     <p>
                        Industry experts predict that the pandemic's gaming boom has permanently altered the entertainment landscape, with a growing recognition of gaming’s role in 
                        fostering community and well-being.
                     </p>
                </section>
                <img src="src\photos\Article3\Connection@4x.png" alt="a icon of people connecting" className="Connection-image" />
                <section className="isolation-s8">
                    <p>
                        The surge in gaming brought significant economic growth to the industry.                    
                    </p>                                 
                    <p>
                        The global gaming market grew by 20% in 2020, reaching a value of $180 billion,
                        according to <a className='link' href="https://newzoo.com/resources/blog/game-engagement-during-covid-pandemic-adds-15-billion-to-global-games-market-revenue-forecast">Newzoo.com</a>. Major titles like Animal Crossing: New Horizons broke sales records, while console shortages highlighted the 
                        skyrocketing demand for gaming hardware. 
                    </p>
                    <img src="src\photos\Article3\GlobalGamesMarketChart.png" alt="a graph of global games market forcast" className='GGMF-image' />
                    <p>
                        The industry also saw an expansion of esports and streaming, with platforms like YouTube Gaming and Twitch attracting millions of new viewers. This economic 
                        growth reflected gaming’s transformation from a casual activity to a vital cultural and social force.
                    </p>
                </section>
                <section className="isolation-s9">
                    <h3>Gaming as Emotional Support</h3>
                    <h2>
                        Gaming during the pandemic offered more than just fun—it became a tool for emotional resilience. Research shows that gaming can reduce stress and anxiety, 
                        offering a structured way to engage with others and escape the challenges of daily life.                       
                    </h2>
                        <img src="src\photos\Article3\IconBridge@4x.png" alt="two islands, with a bridge made out of controllers" className='IconBridge'/>
                    <h2>
                        For players like Stine, gaming helped mitigate the mental health toll of isolation. Cooperative and multiplayer games provided not only entertainment but a 
                        sense of accomplishment and belonging.
                    </h2>
                    <FadeInSection>
                    <p>
                        "When I was playing with friends, it felt like things were normal again," Stine shared. "Those moments really got me through the tough days."
                    </p>
                    </FadeInSection>
                </section>
                <div className="game-container">
                    <h1>Quiz</h1>
                    <p className="question">{quizzes[currentQuiz].question}</p>
                    <div className="choices">
                        {Object.entries(quizzes[currentQuiz].options).map(([key, value]) => (
                        <button
                            key={key}
                            className="choice"
                            onClick={() => checkAnswer(key)}>
                            {key}) {value}
                        </button>
                        ))}
                    </div>
                    <div className="result" >
                        {result}
                    </div>
                    {currentQuiz < quizzes.length - 1 && result && (
                        <button onClick={nextQuiz} >
                        Next Question
                        </button>
                    )}
                </div>
                <section className="isolation-s10">
                    <p>
                        The rise of online gaming during COVID-19 demonstrates its power to connect and uplift people in difficult times. From creating virtual meeting spaces 
                        to supporting mental health, gaming proved to be more than just an escape—it became a lifeline for millions.                      
                    </p>
                    <p>
                        As we move forward, the lessons from this period will continue to shape how we view and use technology. Gaming is no longer just a leisure activity; it’s 
                        a testament to human creativity, resilience, and the enduring need for connection.    
                    </p>
                </section>
                   
             </main>
             </body>
        </>
        
    )
    

}