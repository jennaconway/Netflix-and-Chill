import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button";
import Footer from "../Footer";
import "./Questions.css";

class Questions extends Component {

    render() {
        return (
            <div>
                <h4 className="">Question 1</h4>
                <p className="">Out of the top “most devoured” shows of 2017 which one did you watch and love? If you haven’t seen any of these which
                    one seems the most interesting to you?</p>
                <form>
                    <p>
                        <input className="radio-button" name="question-1" type="radio" id="q1-1" value="5" />
                        <label className="res" for="q1-1">American Vandal</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-1" type="radio" id="q1-2" value="10" />
                        <label className="res" for="q1-2">13 Reasons Why</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-1" type="radio" id="q1-3" value="15" />
                        <label className="res" for="q1-3">Riverdale</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-1" type="radio" id="q1-4" value="20" />
                        <label className="res" for="q1-4">The Keepers</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-1" type="radio" id="q1-5" value="25" />
                        <label className="res" for="q1-5">The OA</label>
                    </p>
                </form>

                <h4 className="">Question 2</h4>
                <p className="">If you had to watch only one Netflix category for the rest of your life what would it be?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-2" type="radio" id="q2-1" value="15" />
                        <label className="res" for="q2-1">Classics & Cult</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-2" type="radio" id="q2-2" value="5" />
                        <label className="res" for="q2-2">Comedies</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-2" type="radio" id="q2-3" value="10" />
                        <label className="res" for="q2-3">Dramas</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-2" type="radio" id="q2-4" value="20" />
                        <label className="res" for="q2-4">Horror</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-2" type="radio" id="q2-5" value="25" />
                        <label className="res" for="q2-5">Sci-Fi & Fantasy</label>
                    </p>
                </form>
                <h4 className="">Question 3</h4>
                <p className="">Which of these lonnnnng series would you dedicate your time too?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-3" type="radio" id="q3-1" value="15" />
                        <label className="res" for="q3-1">Law & Order: SVU (405 episodes)</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-3" type="radio" id="q3-2" value="10" />
                        <label className="res" for="q3-2">Grey’s Anatomy (284 episodes)</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-3" type="radio" id="q3-3" value="25" />
                        <label className="res" for="q3-3">Supernatural (257 episodes)</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-3" type="radio" id="q3-4" value="20" />
                        <label className="res" for="q3-4">X-Files (208 episodes)</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-3" type="radio" id="q3-5" value="5" />
                        <label className="res" for="q3-5">The Office (201 episodes)</label>
                    </p>
                </form>

                <h4 className="">Question 4</h4>
                <p className="">In your opinion which is the best Netflix Original?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-4" type="radio" id="q4-1" value="10" />
                        <label className="res" for="q4-1">House of Cards</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-4" type="radio" id="q4-2" value="15" />
                        <label className="res" for="q4-2">Stranger Things</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-4" type="radio" id="q4-3" value="20" />
                        <label className="res" for="q4-3">Narcos</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-4" type="radio" id="q4-4" value="5" />
                        <label className="res" for="q4-4">Glow</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-4" type="radio" id="q4-5" value="25" />
                        <label className="res" for="q4-5">Mindhunter</label>
                    </p>
                </form>
                <h4 className="">Question 5</h4>
                <p className="">Are you a binge watcher?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-5" type="radio" id="q5-1" value="5" />
                        <label className="res" for="q5-1">Every Night</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-5" type="radio" id="q5-2" value="10" />
                        <label className="res" for="q5-2">Most of the time.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-5" type="radio" id="q5-3" value="15" />
                        <label className="res" for="q5-3">Once in awhile.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-5" type="radio" id="q5-4" value="25" />
                        <label className="res" for="q5-4">So-So.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-5" type="radio" id="q5-5" value="20" />
                        <label className="res" for="q5-5">No</label>
                    </p>
                </form>
                <h4 className="">Question 6</h4>
                <p className="">Do you binge eat while binge watching?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-6" type="radio" id="q6-1" value="5" />
                        <label className="res" for="q6-1">Always eating.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-6" type="radio" id="q6-2" value="10" />
                        <label className="res" for="q6-2">I Dabble</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-6" type="radio" id="q6-3" value="15" />
                        <label className="res" for="q6-3">Does wine count?</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-6" type="radio" id="q6-4" value="20" />
                        <label className="res" for="q6-4">Does beer count?</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-6" type="radio" id="q6-5" value="25" />
                        <label className="res" for="q6-5">Nada</label>
                    </p>
                </form>
                <h4 className="">Question 7</h4>
                <p className="">What do you like to drink while watching?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-7" type="radio" id="q7-1" value="5" />
                        <label className="res" for="q7-1">Beer</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-7" type="radio" id="q7-2" value="10" />
                        <label className="res" for="q7-2">Wine</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-7" type="radio" id="q7-3" value="15" />
                        <label className="res" for="q7-3">Liquor</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-7" type="radio" id="q7-4" value="20" />
                        <label className="res" for="q7-4">Non Alcholic</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-7" type="radio" id="q7-5" value="25" />
                        <label className="res" for="q7-5">Soda</label>
                    </p>
                </form>
                <h4 className="">Question 8</h4>
                <p className="">What would you like to eat while watching?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-8" type="radio" id="q8-1" value="10" />
                        <label className="res" for="q8-1">Popcorn</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-8" type="radio" id="q8-2" value="5" />
                        <label className="res" for="q8-2">Pizza Bagels</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-8" type="radio" id="q8-3" value="15" />
                        <label className="res" for="q8-3">Wine</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-8" type="radio" id="q8-4" value="20" />
                        <label className="res" for="q8-4">Chips</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-8" type="radio" id="q8-5" value="25" />
                        <label className="res" for="q8-5">A Full Meal</label>
                    </p>
                </form>
                <h4 className="">Question 9</h4>
                <p className="">Where do you watch Netflix the most?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-9" type="radio" id="q9-1" value="5" />
                        <label className="res" for="q9-1">In Bed</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-9" type="radio" id="q9-2" value="10" />
                        <label className="res" for="q9-2">Living Room</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-9" type="radio" id="q9-3" value="15" />
                        <label className="res" for="q9-3">Commuting</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-9" type="radio" id="q9-4" value="20" />
                        <label className="res" for="q9-4">While Working</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-9" type="radio" id="q9-5" value="25" />
                        <label className="res" for="q9-5">Anytime you get the chance?</label>
                    </p>
                </form>
                <h4 className="">Question 10</h4>
                <p className="">What is your goal while watching Netflix?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-1" value="5" />
                        <label className="res" for="q10-1">Getting caught up.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-2" value="10" />
                        <label className="res" for="q10-2">Wacthing something new and unique.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-3" value="15" />
                        <label className="res" for="q10-3">Relaxing</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-4" value="20" />
                        <label className="res" for="q10-4">Watching something educational.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-5" value="25" />
                        <label className="res" for="q10-5">Zone out.</label>
                    </p>
                </form>
                <h4 className="">Question 11</h4>
                <p className="">Who do you usually watch Netflix with?</p>
                <form action="">
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-1" value="10" />
                        <label className="res" for="q10-1">S.O.</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-2" value="5" />
                        <label className="res" for="q10-2">Friends</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-3" value="15" />
                        <label className="res" for="q10-3">Alone</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-4" value="20" />
                        <label className="res" for="q10-4">Pet</label>
                    </p>
                    <p>
                        <input className="radio-button" name="question-10" type="radio" id="q10-5" value="25" />
                        <label className="res" for="q10-5">Family</label>
                    </p>
                </form>
            </div>
        );
    }
}






export default Questions;