import React, { Component } from 'react';
import brewqueryscreenshot from "../images/brewqueryscreenshot.png";
import codeRefactor from "../images/coderefactorhw.png";
import essentialGoodsLocator from "../images/essenGoodLocapp.png";
import sciFiPopQuiz from "../images/codeQuiz.png";
import workdayScheduler from "../images/workdayScheduler.png";
import homework10 from "../images/homework10.png";
import IMG_0373 from "../images/IMG_0373.JPG";


export default class Main extends Component {
    render() {
    return (
        <div>
			<div id="main">

				{/* <!-- Intro --> */}
					<section id="top" className="one dark cover">
						<div className="container">

							<header>
								<h2 className="alt">Hello, I am currently enrolled in a Full-Stack Coding bootcamp at The University of Texas at San Antonio.<br />
								</h2>
								<p></p>
							</header>

							<footer>
								
							</footer>

						</div>
					</section>

				{/* <!-- Portfolio --> */}
					<section id="portfolio" className="two">
						<div className="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<p>These are a few of the assignemnts I have been working on while in bootcamp.</p>

							<div className="row">
								<div className="col-4 col-12-mobile">
									<article className="item">
										<a href="https://kcig88.github.io/BREWQUERY/" className="image fit"><img src={brewqueryscreenshot} alt="" /></a>
										<header>
											<h3>Project:BREWquery</h3><p>This a Brewery locator app that allows a user to input a zip code, city, state, or country and will display a map and list of brewery locations.<br/><strong>Technologies Used</strong><br/>
												bulma CSS framework<br/>
												Mapbox API
												Foursquare API<br/>
												Created by <a href="https://github.com/ChrisDucharme1793">Chris Ducharme</a>, <a href="https://github.com/KCIG88">Kevin Cox</a>, <a href="https://github.com/chadilac78">Chad Wortham</a>.
											  </p>
										</header>
									</article>
									<article className="item">
										<a href="https://kcig88.github.io/Homework-01/" className="image fit"><img src={codeRefactor} alt="" /></a>
										<header>
											<h3>Code Refactor HW</h3>
											<p>Code refactor exercise from first week of bootcamp</p>
										</header>
									</article>
								</div>
								<div className="col-4 col-12-mobile">
									<article className="item">
										<a href="https://essential-goods-locator.herokuapp.com/" className="image fit"><img src={essentialGoodsLocator} alt="" /></a>
										<header>
											<h3>Project: Essential Goods Locator</h3>
											<p>This a app designed to help locate essential goods during the current pandemic.<br/>
											<strong>Technologies Used</strong><br/>
											Node.js, Express, Mysql, Handlebars, Tailwind CSS, jquery, Sequelize, Bootstrap<br/>
											Created by <a href="https://github.com/ChrisDucharme1793">Chris Ducharme</a>, <a href="https://github.com/KCIG88">Kevin Cox</a>, <a href="https://github.com/chadilac78">Chad Wortham</a>.
										</p>
										</header>
									</article>
									<article className="item">
										<a href="#" className="image fit"><img src={sciFiPopQuiz} alt="" /></a>
										<header>
											<h3>Sci-Fi Pop Quiz</h3>
											<p>This is a quiz app I created in my 4th week of bootcamp. Begin with Quiz title page with start button Start button initiates question and countdown timer When time up alert GAME OVER</p>
										</header>
									</article>
								</div>
								<div className="col-4 col-12-mobile">
									<article className="item">
										<a href="https://kcig88.github.io/Homework-05/" className="image fit"><img src={workdayScheduler} alt="" /></a>
										<header>
											<h3>Work Day Scheduler</h3>
											<p>This is a scheduler app we created in my 5th week of bootcamp. Display curent day using Moment.js Create input fields from 9a-5p capable of receiving user input Create save button to append user input to specified hour block</p>
										</header>
									</article>
									<article className="item">
										<a href="https://github.com/KCIG88/Homework-010/blob/master/Homework10.gif" className="image fit"><img src={homework10} alt="" /></a>
										<header>
											<h3>Node.js and ES6+ Developer Profile Generator</h3>
											<p>Build CLI to create a Team roster. CLI will prompt user questions to answer. CLI will then take input fron user create new directory then render roster to an html inside created directory.
												Use constructor to extend employee className to include role specific information Using jest make sure all test suites pass</p>
										</header>
									</article>
								</div>
							</div>

						</div>
					</section>

				{/* <!-- About Me --> */}
					<section id="about" className="three">
						<div className="container">

							<header>
								<h2>About Me</h2>
							</header>

							<a href="#" className="image featured"><img src={IMG_0373} alt="" /></a>

							<p>I am 37 years old happily married to an amazing woman and we have 2 awesome dogs <text className="fa fa fa-dog"></text>, we are also expecting our first child at the end of August <text className="fa fa fa-baby-carriage">.</text> I am currently working as a retail facilities maintenance engineer but would like to soon make the transition into web development. </p>

						</div>
					</section>

				{/* <!-- Contact --> */}
					<section id="contact" className="four">
						<div className="container">

							<header>
								<h2>Contact Me</h2>
							</header>

						

							<form method="post" action="https://formspree.io/mdowkjzw">
								<div className="row">
									<div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
									<div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
									<div className="col-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div className="col-12">
										<input type="submit" value="Send Message"/>
									</div>
								</div>
							</form>

						</div>
					</section>
            
			</div>

		
			<div id="footer">

				{/* <!-- Copyright --> */}
					<ul className="copyright">
						<li>&copy; Kevin Cox</li>
					</ul>

			</div>
            </div>
    );
}

}