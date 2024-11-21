import Hero from "../Hero";
import Headline from "../Headline";
import List from "../List";
import ProcessOverview from "../ProcessOverview";

const LifeCoaching = function () {
	return (
		<>
			<Hero heading="Life Coaching" description="Managing whatever life throws at you" />
			<section className="u-fb-col-wrapper">
				<Headline heading="Being the best person you can be">
					<p>Life might be a box of chocolates, but some of what is in there is not very nice.</p>
					<p>
						We all have to deal with problems, crisis, emergencies for ourselves and for others, and
						sometimes we just need help to get clarity and find a way forward.
					</p>
					<List
						listHeading="People looking for life coaching are asking themselves some of the following questions"
						listItems={[
							"How do I move on from difficult times?",
							"How do I help others move on?",
							"How do I cope with everything that is happening?",
							"When I am helping everyone else, who is helping me?",
						]}
					/>
					<p>
						Coping with life&apos;s trials and tribulations shouldn&apos;t be a lonely life. Having
						someone to talk to, sometimes to rant at and get it all out, or just to reassure you
						that you are doing all you can, can help you get through tough times and build a
						brighter future.
					</p>
				</Headline>
				<ProcessOverview
					steps={[
						{
							heading: "Listen",
							icon: "./src/assets/ear.svg",
							body: "Give you time to explain what is going on, how you feel, who is involved and the impact on you and those around you. We listen without judgement; we listen to understand.",
						},
						{
							heading: "Discuss",
							icon: "./src/assets/message.svg",
							body: "What can be done and the actions you can take. This often involves talking about how you look after yourself, as well as how you look after others.",
						},
						{
							heading: "Support",
							icon: "./src/assets/heart-handshake.svg",
							body: "Help you identify support structures and organisations to help you move forward.",
						},
					]}
				/>
				<p>
					This is not counselling, nor are we psychologists or professionally qualified to
					prescribe. We are people who understand the challenges of life, who have all faced our own
					mountains to climb, and understand that sometimes the help needed is very simple.
				</p>
				<h2>Want to find out more?</h2>
				<p>
					Before we get into the formal process, we start with an informal chat to establish if we
					are a good fit to collaborate. In this meeting we will agree what happens next and the fee
					structure and payment process.
				</p>
				<p>To get in touch, please use the contact form below, or email at xxx@xxx</p>
			</section>
		</>
	);
};

export default LifeCoaching;
