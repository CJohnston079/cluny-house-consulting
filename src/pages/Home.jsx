import Hero from "../Hero";

const Home = function () {
	return (
		<>
			<Hero heading="Cluny House Consulting" description="Helping you to be the best you can be" />
			<section className="u-fb-col-wrapper">
				<h2>About</h2>
				<p>How many times have you thought ‘I need help!’</p>
				<p>
					We are here to help. We help people to understand themselves, their work colleagues and
					their business. We do this by listening to you, and drawing from you your ideas to help
					yourself.
				</p>
				<p>
					Real progress comes from within. Getting through the stress, the fog, or the noise is
					always the barrier to finding your own solution, and that’s what we do, help you get
					through all the noise, think clearly and work out how to execute.
				</p>
				<p>WE do this by;</p>
				<ul>
					<li>Giving you time to talk about what is important to you.</li>
					<li>
						Listen to what you say, and how you say it. We consider the tone of your voice and the
						body language to spot congruence and incongruence.
					</li>
					<li>Help you articulate the issue to be dealt with.</li>
					<li>Draw out your ideas.</li>
					<li>Build out a road map so that the actions and objectives are clear to you.</li>
				</ul>
				<h3>Want to find out more?</h3>
				<p>Contact us using the form below, email at xxx@xxx or by calling 079xxxxxxxx.</p>
			</section>
		</>
	);
};

export default Home;
