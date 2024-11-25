import { React } from 'react';
import FadeInSection from './FadeInSection';
import { Link } from 'react-router-dom';

export default function Neurolink() {
    return (
        <main id="neuro-main">
            <Link to="/" className="neuro-home-button">
                    Home
            </Link>
            <section id="neuro-opener">
                <div className="neuro-section" id="opener-1">
                    <FadeInSection>
                        <p className="neuro-text">
                            One ordinary summer day, a man takes a swimming trip with some of his friends.
                        </p>
                    </FadeInSection>
                </div>
                <div className="neuro-section" id="opener-2">
                    <FadeInSection>
                        <p className="neuro-text">
                            On the walk there a friend yelled “Last one there is a rotten egg!”. A race had begun.
                            A friendly competition to get to the water first.
                        </p>
                    </FadeInSection>
                </div>
                <div className="neuro-section" id="opener-3">
                    <FadeInSection>
                        <p className="neuro-text">
                            Not wanting to be a rotten egg, the man ran ahead of his friends and dove in, as he had done many times before.
                        </p>
                    </FadeInSection>
                </div>
                <div className="neuro-section" id="opener-4">
                    <FadeInSection>
                        <p className="neuro-text-black">Suddenly everything went black...</p>
                    </FadeInSection>
                </div>
                <div className="neuro-section" id="opener-5">
                    <FadeInSection>
                        <p className="neuro-text">
                            His friends stood confused as they saw his seemingly lifeless body float up to the surface.
                        </p>
                    </FadeInSection>
                </div>
                <div className="neuro-section" id="opener-6">
                    <FadeInSection>
                        <p className="neuro-text">
                            The next thing he knew, he was in the hospital, unable to move more than his head.
                        </p>
                    </FadeInSection>
                </div>
            </section>
            <section id="neuro-content">
                <div className="paragraph-container-2">
                    <img src="src\photos\Article1\Noland.png" alt="picture of Noland" className='Noland-image'/>
                    <p>
                        This is what happened to Noland Arbaugh in 2016. After diving in the water, he hit his head hard on something under the water,
                        causing paralysis from the neck down. The Neuralink changed this man’s life; can it change others too?
                    </p>
                </div>
                <div className="tech-background">
                    <FadeInSection>
                        <div className="paragraph-container">
                            <p>
                                Being unable to move his body, he had to return home to his parents. Having recently started college and
                                embracing his newfound freedom, it was a terrible blow for Arbaugh to have it taken away again.
                            </p>
                            <p>
                                However, a savior came to Arbaugh's rescue by the name of
                                <a className="Link" href="https://neuralink.com/">Neuralink</a>.
                                In late 2023, they were ready to give the Neuralink to people for the first time. Arbaugh heard about it through a friend
                                and found out that he might be the first person ever to have a Neuralink.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
                <div className="paragraph-container-2">
                    <p>
                        Fortunately for Arbaugh, it was a success! He was still far from being a walking cyborg, but now he could control computers
                        through his Neuralink by making his hand act as the mouse cursor.
                    </p>
                    <p>
                        When he thought about moving his arm forward, the cursor moved upward. And when he tapped with a finger, the cursor clicked.
                    </p>
                </div>
                <div className="medicine-background">
                    <FadeInSection>
                        <div className="paragraph-container">
                            <p>
                                He may still not be able to take a shower on his own, but now he can browse the web independently, allowing him
                                to continue his education and possibly find a job—something he once thought impossible.
                            </p>
                            <p>
                                This technology may still be in its early stages, but with more volunteers and time, it can truly become something
                                extraordinary for the entire world.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
                <div className="paragraph-container-2">
                    <p>
                        According to <a className="Link" href="https://www.who.int/health-topics/disability#tab=tab_1">WHO.int</a>,
                        1.3 billion people in the world are considered disabled.
                    </p>
                    <div className="circle-chart">
                        <div className="chart-labels">
                            <div className="population">1.3 Billion</div>
                            <div className="remaining-pop">out of 8 Billion</div>
                        </div>
                    </div>
                    <p>
                        This ranges from Down syndrome to autism, and from diabetes to spinal cord injuries.
                    </p>
                    <p>
                        Given the wide range of what is considered a disability, it’s challenging to define exactly how many people could benefit
                        from a Neuralink.
                    </p>
                    <p>
                        However, if we were to assume that just 0.1% of people with a disability would benefit from a Neuralink, that would still
                        amount to 1.3 million people.
                    </p>
                </div>
            </section>
             
        </main>
    );
}
