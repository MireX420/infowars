import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Map1 from "./Map1";
import Map2 from "./Map2"


const sentences = [
    "June 18th, 2023",
    "370 miles off the coast of Newfoundland, Canada",
    "A company called OceanGate sent a submarine down to look at the Titanic as a tourist tour",
    "The submersible imploded due to the pressure, killing 4 paying customers and the company’s CEO, who was piloting the vehicle.",
    "5 people died while looking at the remains of the Titanic which had sunk there over 100 years ago",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  
  

const Oceangate = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const segmentHeight = window.innerHeight / 6; 
          const newIndex = Math.min(
            sentences.length,
            Math.floor(scrollY / segmentHeight)
          );
    
          setActiveIndex(newIndex);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <>
          <div className="parallax-container">
          <Link to="/" className="ocean-home-button">
                    Home
            </Link>
            <img
              src="src/photos/Article2/boat.png"
              alt="Floating Boat"
              className={`floating-boat ${
                activeIndex === sentences.length ? "hidden" : ""
              }`}
            />
            {sentences.map((sentence, index) => (
              <div
                key={index}
                className={`sentence-container ${
                  activeIndex === index ? "active" : ""
                } ${index % 2 === 0 ? "left" : "right"}`}
                style={{ top: `${index * 100}vh` }} 
              >
                <p>{sentence}</p>
              </div>
            ))}
           
            <div className="parallax-bottom-text">
              <div class="timeline-item">
                <div class="timeline-article">
                  <h1> Stockton Rush was born</h1>
                    <p> 
                      He was someone who had always had a fascination with aviation and outer space, and thus he got a commercial pilot’s license by the time he was 18 years old. 
                      Over the years he worked in a lot of different aviation fields like being a flight test engineer for McDonnel Douglas who has now merged with Boeing, the airline manufacturer, 
                      and even the museum of flight.
                    </p>
                    <Map1/>
                </div>
                <div class="timeline-date">1962-1989</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-article">
                  <h1>Conquering the Depth</h1>
                    <p>
                      Next to Rush’s love for aviation there was also a love for scuba diving. effectively making him conquer air, land and sea. 
                      Over time, scuba diving and exploring the depths of the ocean became more exciting to him. So he combined his knowledge of planes and scuba diving and wanted to get one for himself.
                    </p>   
                  <p>
                    However, upon finding that there are less than 100 privately owned submarines and being unable to buy one, Rush opted to build one himself using blueprints provided to
                    him by a retired U.S. Navy. Rush was not satisfied with just this self-built machine, so he kept looking for a submarine for purchase. 
                  </p>
                  <p>
                    Still, he was unable to buy one, leading him to think about starting his own company for commercial underwater tourism. After all, if he was so determined to see the 
                    bottom of the ocean, surely other people would be too.       
                  </p>
                </div>
                <div class="timeline-date">2006-2007</div>
              </div>
    <div class="timeline-item">
        <div class="timeline-article">
          <h1>Redefining Undersea Tourism</h1>
          <p>
            Rush was proven correct in his belief that there was a market for undersea tourism. However, many consumers remained wary, as they viewed submarines as very dangerous. 
            This sentiment, according to <a href="https://www.popsci.com/deep-sea-tourism/">Popsci.com</a>, was understandable but, in Rush's view, "illogical". Despite these concerns, Rush pressed forward with his vision, believing in the safety 
            and potential of underwater exploration.
          </p>
          <p>
            Thus OceanGate was founded with his co-partner Guillermo Söhnlein  with the mission of promoting
            undersea tourism while also gaining funding for more and better research into underwater exploration, highlighted by 
            <a href="https://www.smithsonianmag.com/innovation/worlds-first-deep-diving-submarine-plans-tourists-see-titanic-180972179/"> Smithsonianmag.com</a> and
            <a href="https://www.miamitodaynews.com/news/120705/story2.shtml"> miamitodaynews.com</a>.
          </p> 
        </div>
        <div class="timeline-date">2009</div>
      </div>
      <div class="timeline-item">
       
        <div class="timeline-article">
          <h1>Rush's Breakthrough</h1>
            <p>
              After a few years of small trials with self-made submarines and old, retired submarines who could only dive a maximum of 150 meters, Rush wanted to go deeper.
              At this point Söhnlein gracefully stepped out of the game as he felt he could no longer contribute much and that this was now Rush’s territory. Following this, 
              Rush made his first titan submarine. The Cyclops 1, which could dive 
            </p>
            <img className='oceangate_boat' src="src/photos/Article2/oceangate.jpg" alt="Image of the oceangate submarine" />
            <p>
              Made out of carbon fiber it was significantly cheaper, yet less structurally sound than other submarines. Still, it ended up being a success for OceanGate. 
              With the success of the Cyclops 1, OceanGate could run many more tests.
            </p>
        </div>
        <div class="timeline-date">2013</div>
      </div>
      <div class="timeline-item">
        
        <div class="timeline-article">
          <h1>Rushing Forward</h1>
            <p>
              Through the years of tests, Rush could finally unveil his “Magnum Opus” so to say; the Titan. But it would seem all was not well in OceanGate-ville. 
              Shortly after the announcement of the Titan, which could supposedly reach down to the titanic numerous professionals in the field urged Rush to stop and slow down, according to
              <a href="https://www.nytimes.com/2023/06/23/us/titan-safety-warnings-titanic.html"> NYTimes.com</a> 
            </p>
            <p>
              As it turns out, the reason no one else uses carbon fiber for submarines is because it can’t handle as much pressure as a metal like titanium. 
              Rush did not care for these warnings and decided that the whole industry was “obscenely safe” 
            </p>
        </div>
        <div class="timeline-date">2017</div>
      </div>
      <div class="timeline-item">
        
        <div class="timeline-article">
          <h1>Tragic End</h1>
            <p>
              The Titan could never quite make it down to the titanic and had to be delayed for public viewing several times to make it safer and better.
            </p>
            <p>
              Eventually the Titan was viewed safe enough internally for the public to take a trip down to the old wreckage of the Titanic, however it would appear it actually wasn’t safe enough.
              The entire vessel imploded near the Titanic, crushing Stockton Rush and 4 customers who just wanted to see the Titanic. 
            </p>
        </div>
        <div class="timeline-date">2022-2023</div>
      </div>
  
      <div className='OceanEnding'>
      <Map2/>
          <p>Truly, a horrible fate. Maybe, if Rush had slowed down and listened to the professionals he could have avoided this fate and saved not just his own, but 4 innocent people’s lives. He wanted to innovate, but innovation without precaution is madness. And maybe that was the real Implosion of OceanGate.</p>
                
      </div>
       </div>
    </div>

            
    </>
  );
};

export default Oceangate;
