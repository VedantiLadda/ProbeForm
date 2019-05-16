import React, {  Fragment } from "react";

const reviewQuestions = () => {
    return(
        <Fragment>
            <div className="row">
    <div className="col s12 m12">
        <div className="center-align">
            <div className="row mr-1 card vertical-align">
                <div className="col s2">Technology
                    <select name="Technology" id="tech">
                        <option value="All">All</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Javascript">Javascript</option>
                        <option value="JS Libraries/Frameworks">JS Libraries/Frameworks</option>
                        <option value="Mobile Web HTML5 Mark-up and APIs">Mobile Web HTML5 Mark-up and APIs</option>
                        <option value="Standards">Standards</option>
                        <option value="Debugging and Optimization">Debugging and Optimization</option>
                        <option value="Accessibility">Accessibility</option>
                    </select>
                </div>
                <div className="col s2">Difficulty Level
                    <select name="Difficulty" id="dif">
                        <option value="All">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Difficult</option>
                    </select>
                </div>
                <div className="col s1">Career Stage
                    <select name="Career Stage" id="career">
                        <option value="All">All</option>
                        <option value="AL1">AL1</option>
                        <option value="AL2">AL2</option>
                        <option value="SAL1">SAL1</option>
                        <option value="SAL2">SAL2</option>
                    </select>
                </div>
                <div className="col s2">Status
                    <select name="Status" id="status">
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div className="col s1">
                    <button className="btn btn-large">Search</button>
                </div>
                <fieldset className="col s4 mt-1" id="status">
                    <label className="col s4 purple-text">Approve All
                        <input className="opaque" type="radio" name="status" />
                    </label>
                    <label className="col s4 purple-text">Reject All
                        <input className="opaque" type="radio" name="status" />
                    </label>
                </fieldset>
            </div>
        </div>
    </div>
</div>


<div id="questionContainer" className="row">
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Pan-Slavism in the late 19c sought to unite all of the following into a single entity EXCEPT?:
                </p>
                <hr />
                <p>A. Poland.&nbsp;&nbsp;B. Bulgaria.&nbsp;&nbsp; C. Germany.&nbsp;&nbsp; D. Russia. &nbsp;&nbsp;E.
                    the Czechs.&nbsp;&nbsp; Answer: Germany.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={1} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={1} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The disestablishment of the Church of Ireland and the passage of laws to protect the Irish tenant
                    farmer occurred during the first ministry of?:</p>
                <hr />
                <p>A. Benjamin Disraeli.&nbsp;&nbsp;B. Herbert Spenser.&nbsp;&nbsp; C. Lloyd George.&nbsp;&nbsp; D.
                    William Glastone. &nbsp;&nbsp;E. Lord Palmerston.&nbsp;&nbsp; Answer: William Glastone.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={2} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={2} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Bismarck's Kulturkampf represented an effort to?:</p>
                <hr />
                <p>A. undermine the influence of the socialists in Germany.&nbsp;&nbsp;B. point out to Europeans the
                    true nature of the so-called Yellow Peril.&nbsp;&nbsp; C. strengthen anti-French feelings in
                    Germany on the eve of the Franco-Prussian War.&nbsp;&nbsp; D. halt the spread of Pan-Slavism in
                    the Balkans. &nbsp;&nbsp;E. weaken the political influence of the Catholic Church in
                    Germany.&nbsp;&nbsp; Answer: weaken the political influence of the Catholic Church in Germany.
                </p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={3} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={3} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The unification of Italy was primarily due to?:</p>
                <hr />
                <p>A. the activist of the Carbonari.&nbsp;&nbsp;B. the success of Cavour and Garibaldi together with
                    the French defeat in the Franco-Prussian War.&nbsp;&nbsp; C. the activities of nationalists who
                    wished to return to the glories of the Roman Empire.&nbsp;&nbsp; D. Prussian pressure on Austria
                    to cede Venetia to Italy. &nbsp;&nbsp;E. religious zealots seeking to develop a papal theocracy
                    in Italy.&nbsp;&nbsp; Answer: the success of Cavour and Garibaldi together with the French
                    defeat in the Franco-Prussian War.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={4} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={4} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Proponents of nationalism in the mid-19c espoused?:</p>
                <hr />
                <p>A. adopting a common European language.&nbsp;&nbsp;B. universal human rights.&nbsp;&nbsp; C. the
                    creation of utopian socialist communes throughout Western Europe.&nbsp;&nbsp; D. free trade to
                    promote industrial development. &nbsp;&nbsp;E. the idea that different peoples had distinct
                    historical missions.&nbsp;&nbsp; Answer: the idea that different peoples had distinct historical
                    missions.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={5} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={5} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Risorgimento was the name of?:</p>
                <hr />
                <p>A. the emergence of a prosperous Europe from the ashes of World War II.&nbsp;&nbsp;B. the
                    movement to unify Italy.&nbsp;&nbsp; C. the high cultural achievements of the Italian
                    Renaissance.&nbsp;&nbsp; D. Napoleonic rule in Italy. &nbsp;&nbsp;E. the movement to unify
                    Germany.&nbsp;&nbsp; Answer: the movement to unify Italy.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={6} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={6} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Count Camillo Cavour hoped to unify Italy by means of?:</p>
                <hr />
                <p>A. conquest of the Papal States and the Kingdom of Naples.&nbsp;&nbsp;B. popular revolts against
                    foreign rulers.&nbsp;&nbsp; C. a military alliance with France against Austria.&nbsp;&nbsp; D. a
                    democratic plebiscite in all Italian-speaking areas. &nbsp;&nbsp;E. a military alliance with
                    Prussia against France.&nbsp;&nbsp; Answer: a military alliance with France against Austria.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={7} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={7} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The primary goal of Bismarck's foreign policy was?:</p>
                <hr />
                <p>A. maintain the diplomatic isolation of France.&nbsp;&nbsp;B. prepare for war with
                    Britain.&nbsp;&nbsp; C. expand the frontiers of the German Empire.&nbsp;&nbsp; D. advance into
                    the Balkans. &nbsp;&nbsp;E. prepare for a colonial empire.&nbsp;&nbsp; Answer: maintain the
                    diplomatic isolation of France.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={8} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={8} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Catholic Emancipation Act allowed Roman Catholics in England?:</p>
                <hr />
                <p>A. complete freedom of worship.&nbsp;&nbsp;B. exemption from income taxes.&nbsp;&nbsp; C. to
                    attend Oxford and Cambridge.&nbsp;&nbsp; D. to hold public office. &nbsp;&nbsp;E. to build
                    larger churches.&nbsp;&nbsp; Answer: to hold public office.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={9} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={9} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Under the terms of the Act of Union of 1801?:</p>
                <hr />
                <p>A. Ireland lost its own legislature and instead sent representatives to London.&nbsp;&nbsp;B.
                    Ireland was granted the right to establish its own legislative body.&nbsp;&nbsp; C. Catholics
                    were allowed to sit in Parliament.&nbsp;&nbsp; D. Protestant areas were separated from the rest
                    of Ireland. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: Ireland lost
                    its own legislature and instead sent representatives to London.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={10} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={10} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Compromise of 1867 transformed the Habsburg Empire into?:</p>
                <hr />
                <p>A. four separative administrative units.&nbsp;&nbsp;B. a confederation of Slavic
                    states.&nbsp;&nbsp; C. a republic.&nbsp;&nbsp; D. a dependency of Germany. &nbsp;&nbsp;E. a Dual
                    Monarchy.&nbsp;&nbsp; Answer: a Dual Monarchy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={11} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={11} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which was the most prominent obstacle to the unification of both Germany and Italy?:</p>
                <hr />
                <p>A. privileged classes of each country.&nbsp;&nbsp;B. Russian nationalism.&nbsp;&nbsp; C. the
                    Papacy.&nbsp;&nbsp; D. Austria. &nbsp;&nbsp;E. Napoleon III.&nbsp;&nbsp; Answer: Austria.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={12} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={12} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Prussia : German unification :: _____ : Italian unification.</p>
                <hr />
                <p>A. Ventian Republic.&nbsp;&nbsp;B. Piedmont-Sardinia.&nbsp;&nbsp; C. Rome.&nbsp;&nbsp; D. the
                    Kingdom of the Two Sicilies. &nbsp;&nbsp;E. Montenegro.&nbsp;&nbsp; Answer: Piedmont-Sardinia.
                </p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={13} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={13} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>By the Treaty of Frankfurt France?:</p>
                <hr />
                <p>A. had to pay a large indemnity to Italy.&nbsp;&nbsp;B. was required to abandon the Third
                    Empire.&nbsp;&nbsp; C. lost Alsace-Lorraine to Germany.&nbsp;&nbsp; D. had to pay the Pope one
                    million Francs in war damages. &nbsp;&nbsp;E. received Trieste Nice and Savoy.&nbsp;&nbsp;
                    Answer: lost Alsace-Lorraine to Germany.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={14} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={14} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Crimean War helped to bring about all of the following EXCEPT the?:</p>
                <hr />
                <p>A. rapid spread of socialism in France.&nbsp;&nbsp;B. freeing of the serfs in Russia.&nbsp;&nbsp;
                    C. focusing of international attention on the Italian question.&nbsp;&nbsp; D. growth of
                    nationalism in Rumania. &nbsp;&nbsp;E. reform of the British army.&nbsp;&nbsp; Answer: rapid
                    spread of socialism in France.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={15} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={15} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The long-term goal of the Paris Commune was the?:</p>
                <hr />
                <p>A. creation of a workers' republic.&nbsp;&nbsp;B. institution of a Marxist state.&nbsp;&nbsp; C.
                    destruction of the National Assembly.&nbsp;&nbsp; D. creation of Paris as an autonomous commune
                    separate from France. &nbsp;&nbsp;E. institution of a new National Assembly for
                    France.&nbsp;&nbsp; Answer: creation of Paris as an autonomous commune separate from France.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={16} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={16} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The term realpolitik applies to Bismarck's?:</p>
                <hr />
                <p>A. realistic support of the liberal factions in the Prussian Parliament.&nbsp;&nbsp;B. use of
                    subterfuge deceit and military force to accomplish unification and to implement other
                    policie&nbsp;&nbsp; C. support of Pan-Germanism.&nbsp;&nbsp; D. support of Pan-Germanism.
                    &nbsp;&nbsp;E. admiration of Cavour's constitutional reforms in Italy.&nbsp;&nbsp; Answer: use
                    of subterfuge deceit and military force to accomplish unification and to implement other policie
                </p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={17} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={17} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>After the publication of Theodor Herzl's book The Jewish State ?:</p>
                <hr />
                <p>A. Jews began to immigrate to the United States.&nbsp;&nbsp;B. a Zionist Congress proclaimed its
                    aim to create that state in Palestine.&nbsp;&nbsp; C. the Ottoman Empire declared that there
                    could be no Jewish immigration.&nbsp;&nbsp; D. the Ottoman Empire declared that there could be
                    no Jewish immigration. &nbsp;&nbsp;E. a Zionist Congress proclaimed its aim to create that state
                    in Palestine.&nbsp;&nbsp; Answer: a Zionist Congress proclaimed its aim to create that state in
                    Palestine.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={18} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={18} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Concert of Europe was shattered as a result of?:</p>
                <hr />
                <p>A. the events of the Crimean War.&nbsp;&nbsp;B. German unificaiton.&nbsp;&nbsp; C. the Danish
                    War.&nbsp;&nbsp; D. the Franco-Prussian War. &nbsp;&nbsp;E. Italian unification.&nbsp;&nbsp;
                    Answer: the events of the Crimean War.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={19} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={19} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The nationalists of the first half of the nineteenth century were often?:</p>
                <hr />
                <p>A. conservatives waving the flag of hard-line politics.&nbsp;&nbsp;B. radicals who called for
                    working-class revolution.&nbsp;&nbsp; C. liberals attempting to overthrow tyrannical
                    regimes.&nbsp;&nbsp; D. members of the Old Regime. &nbsp;&nbsp;E. romantics who valued the
                    vernacular and folklore.&nbsp;&nbsp; Answer: liberals attempting to overthrow tyrannical
                    regimes.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={20} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={20} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Changes affecting women in Western Europe since the 1950s include?:</p>
                <hr />
                <p>A. greater participation in the labor force.&nbsp;&nbsp;B. the achievement of wage equality with
                    men.&nbsp;&nbsp; C. a reduction in life expectancy.&nbsp;&nbsp; D. increasing family size.
                    &nbsp;&nbsp;E. declining opportunities in higher education.&nbsp;&nbsp; Answer: greater
                    participation in the labor force.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={21} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={21} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The surrealistic movement in modern abstract art is based upon the theme of?:</p>
                <hr />
                <p>A. an internal vision of external objects.&nbsp;&nbsp;B. providing a mathematical equation to
                    balance the work.&nbsp;&nbsp; C. portraying the subconcious and irrational in the artists
                    work.&nbsp;&nbsp; D. the use of geometrical forms to portray time and space. &nbsp;&nbsp;E. a
                    'stream of conciousness' development upon the artistic canvas.&nbsp;&nbsp; Answer: portraying
                    the subconcious and irrational in the artists work.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={22} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={22} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The French writer Simone de Beauvoir?:</p>
                <hr />
                <p>A. became a radical when she was refused admission to the Sorbonne.&nbsp;&nbsp;B. provided
                    European women an intellectual framework for their feminism.&nbsp;&nbsp; C. played a pivotal
                    role in the founding the National Organization for Women.&nbsp;&nbsp; D. became a radical when
                    she was refused employment as a teacher. &nbsp;&nbsp;E. collaborated with American Betty Friedan
                    on The Feminine Mystique.&nbsp;&nbsp; Answer: provided European women an intellectual framework
                    for their feminism.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={23} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={23} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements about immigration to Western Europe since 1960 is NOT
                    accurate?:</p>
                <hr />
                <p>A. immigrants from poor countries were recruited to do poorly paid jobs in wealthier
                    countries.&nbsp;&nbsp;B. the admission of former colonies to the European Communist facilitated
                    immigration.&nbsp;&nbsp; C. immigration created significant Muslim communities in several
                    Western European countries.&nbsp;&nbsp; D. anti-immigrant movements became a significant
                    political force in many Western European countries. &nbsp;&nbsp;E. immigrant communities in
                    Western European countries became targets for violent attacks.&nbsp;&nbsp; Answer: the admission
                    of former colonies to the European Communist facilitated immigration.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={24} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={24} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Existentialism?:</p>
                <hr />
                <p>A. saw human beings as morally corrupt.&nbsp;&nbsp;B. tended to dwell on the perfection of
                    mankind.&nbsp;&nbsp; C. agreed that mankind was in a state of decline.&nbsp;&nbsp; D. saw human
                    beings as condemned to be free because of a rejection of societal customs. &nbsp;&nbsp;E.
                    stressed the idea that the separation of human experience into its component parts was the
                    proper pa&nbsp;&nbsp; Answer: saw human beings as condemned to be free because of a rejection of
                    societal customs.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={25} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={25} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The influential Annales school of historical thinking developed in France focuses on?:</p>
                <hr />
                <p>A. "the role of the ""ruling classes"" in directing society."&nbsp;&nbsp;B. a microscopic
                    examination of the immediate causes of events.&nbsp;&nbsp; C. politics and a careful narrative
                    of events.&nbsp;&nbsp; D. the influence of the modern business corporation in politics.
                    &nbsp;&nbsp;E. long-term elements in historical change such as population economy climate and
                    natural resources.&nbsp;&nbsp; Answer: long-term elements in historical change such as
                    population economy climate and natural resources.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={26} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={26} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which group has seen its importance in European politics increase since the 1970s?:</p>
                <hr />
                <p>A. Eurocommunists.&nbsp;&nbsp;B. environmentalists.&nbsp;&nbsp; C. religious
                    fundamentalists.&nbsp;&nbsp; D. trade union parties. &nbsp;&nbsp;E. socialists and
                    communists.&nbsp;&nbsp; Answer: environmentalists.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={27} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={27} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>This theologian urged each individual to seek God alone without relying on organized religion?:'
                </p>
                <hr />
                <p>A. Soren Kierkegaard.&nbsp;&nbsp;B. Bruno Bauer.&nbsp;&nbsp; C. Oscar Schindler.&nbsp;&nbsp; D.
                    Joseph Smith. &nbsp;&nbsp;E. Friedrich Nietzsche.&nbsp;&nbsp; Answer: Soren Kierkegaard.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={28} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={28} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A characteristic of Late Modernism was?:</p>
                <hr />
                <p>A. an undaunting optimism.&nbsp;&nbsp;B. a commitment to a fixed set of standards in
                    art.&nbsp;&nbsp; C. appropriation of images of mass culture.&nbsp;&nbsp; D. function follows
                    form. &nbsp;&nbsp;E. a sense of saving Western civilization from itsef.&nbsp;&nbsp; Answer: a
                    sense of saving Western civilization from itsef.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={29} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={29} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were 20c art movements EXCEPT?:</p>
                <hr />
                <p>A. Bauhaus.&nbsp;&nbsp;B. Dadaism.&nbsp;&nbsp; C. Impressionism.&nbsp;&nbsp; D. Cubism.
                    &nbsp;&nbsp;E. Expressionism.&nbsp;&nbsp; Answer: Impressionism.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={30} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={30} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Louis XIV supported all of the following EXCEPT?:</p>
                <hr />
                <p>A. the building of the Palace of Versailles.&nbsp;&nbsp;B. cooperation with the
                    Estates-General.&nbsp;&nbsp; C. art and culture.&nbsp;&nbsp; D. the policies of Cardinal
                    Richelieu. &nbsp;&nbsp;E. the theory of divine right of kings.&nbsp;&nbsp; Answer: cooperation
                    with the Estates-General.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={31} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={31} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The corvee ?:</p>
                <hr />
                <p>A. was involuntary forced labor imposed on French peasants.&nbsp;&nbsp;B. was a tax assigned
                    exclusively to French nobles that required them to pay their serf's feudal dues.&nbsp;&nbsp; C.
                    was a special annual tax exemption granted to French nobles.&nbsp;&nbsp; D. was a tool that
                    improved the annual plowing of soil intended for agricultural use. &nbsp;&nbsp;E. was the annual
                    tax increase levied against nobles in France.&nbsp;&nbsp; Answer: was involuntary forced labor
                    imposed on French peasants.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={32} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={32} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The English political philosopher Thomas Hobbes held that?:</p>
                <hr />
                <p>A. only French kings ruled by divine right.&nbsp;&nbsp;B. only in England was a limited
                    constitutional monarchy possible.&nbsp;&nbsp; C. mankind is inherently good and requires no
                    formal government.&nbsp;&nbsp; D. Parliament ruled by divine right. &nbsp;&nbsp;E. the power of
                    the ruler was absolute but derived from an implicit contract with the governed.&nbsp;&nbsp;
                    Answer: the power of the ruler was absolute but derived from an implicit contract with the
                    governed.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={33} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={33} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Peter the Great's ""Europeanization"" of Russia consisted primarily of?:"</p>
                <hr />
                <p>A. establishing a Senate to debate progressive legislation.&nbsp;&nbsp;B. giving Russian women
                    equal political if not social rights to Russian men.&nbsp;&nbsp; C. importing Western
                    technocrats and technology to his country.&nbsp;&nbsp; D. requiring his people to shave their
                    beards and dress like Englishmen. &nbsp;&nbsp;E. constitutional government and democratic
                    government.&nbsp;&nbsp; Answer: importing Western technocrats and technology to his country.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={34} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={34} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Between the 16c and 17c peasants in Poland Bohemia Hungary and Russia?:</p>
                <hr />
                <p>A. enjoyed more prosperity and independence.&nbsp;&nbsp;B. were losing their rights and
                    freedoms.&nbsp;&nbsp; C. escaped from the corvee.&nbsp;&nbsp; D. were granted democratic control
                    over village life. &nbsp;&nbsp;E. migrated to the West in massive numbers.&nbsp;&nbsp; Answer:
                    were granted democratic control over village life.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={35} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={35} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The guiding force behind Cardinal Richelieu's domestic policies was?:</p>
                <hr />
                <p>A. reform of the church.&nbsp;&nbsp;B. a belief in decentralization.&nbsp;&nbsp; C. the
                    subordination of all groups and institutions to the monarchy.&nbsp;&nbsp; D. the sovereignty of
                    the people. &nbsp;&nbsp;E. hostility to the Huguenots.&nbsp;&nbsp; Answer: the subordination of
                    all groups and institutions to the monarchy.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={36} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={36} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In what ways was political life in the Netherlands unique in Europe in the 17c and 18c?:</p>
                <hr />
                <p>A. the Netherlands was a republic with a decentralized government.&nbsp;&nbsp;B. the Netherlands
                    established the first parliamentary system of government.&nbsp;&nbsp; C. political life in the
                    Netherlands was dictated by the rules of a strict theocracy.&nbsp;&nbsp; D. the Netherlands
                    enjoyed a strongly centralized government. &nbsp;&nbsp;E. the Netherlands was ruled by a
                    powerful monarchy.&nbsp;&nbsp; Answer: the Netherlands was a republic with a decentralized
                    government.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={37} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={37} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A significant feature of English society in the 16c and 17c was the?:</p>
                <hr />
                <p>A. resurgence of Roman Catholicism.&nbsp;&nbsp;B. "declining popularity of ""reformed""
                    religions."&nbsp;&nbsp; C. economic decline of the business classes.&nbsp;&nbsp; D. increasing
                    importance of monasticism. &nbsp;&nbsp;E. growing wealth of the country genrty and middle-class
                    businessmen.&nbsp;&nbsp; Answer: growing wealth of the country genrty and middle-class
                    businessmen.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={38} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={38} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Colbert's contributions to the economy of France included all of the following EXCEPT?:</p>
                <hr />
                <p>A. establishing new industries and colonial ventures.&nbsp;&nbsp;B. creating a national
                    bank.&nbsp;&nbsp; C. improving the transportation and communication systems within
                    France.&nbsp;&nbsp; D. setting up tariffs to protect French industry. &nbsp;&nbsp;E. creating a
                    powerful merchant marine to transport French goods.&nbsp;&nbsp; Answer: creating a national
                    bank.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={39} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={39} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The overall practical purpose of the court of Versailles was to?:</p>
                <hr />
                <p>A. serve as Louis XIV's residence from which to survey Paris.&nbsp;&nbsp;B. act as a reception
                    hall for state affairs.&nbsp;&nbsp; C. exclude the high nobility and royal princes from real
                    power.&nbsp;&nbsp; D. act as an art museum for the people of Paris. &nbsp;&nbsp;E. give Louis
                    XIV a life of privacy away from spies.&nbsp;&nbsp; Answer: exclude the high nobility and royal
                    princes from real power.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={40} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={40} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the English Revolution the Levellers advocated the idea that?:</p>
                <hr />
                <p>A. all private property should be abolished.&nbsp;&nbsp;B. the economic playing field needed to
                    be leveled to allow for greater opportunities for the poor.&nbsp;&nbsp; C. the monarchy had to
                    be restored.&nbsp;&nbsp; D. all men should have the vote regardless of whether they own
                    property. &nbsp;&nbsp;E. there was a constract between the government and the
                    people.&nbsp;&nbsp; Answer: all men should have the vote regardless of whether they own
                    property.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={41} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={41} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The cabinet system in England is based upon the view that government leadership must?:</p>
                <hr />
                <p>A. be divided into separate branches.&nbsp;&nbsp;B. include the lower classes.&nbsp;&nbsp; C. be
                    elected to and supported by a majority of Parliament.&nbsp;&nbsp; D. be representative of all
                    political parties. &nbsp;&nbsp;E. include two parties.&nbsp;&nbsp; Answer: be elected to and
                    supported by a majority of Parliament.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={42} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={42} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Jacques Bossuet was the seventeenth century's most articulate?:</p>
                <hr />
                <p>A. Catholic theologian on matters of prayer and personal devotion.&nbsp;&nbsp;B. proponent of
                    limited monarchy and constitutional government.&nbsp;&nbsp; C. financial adviser to Louis
                    XIV.&nbsp;&nbsp; D. French Huguenot lawyer in cases involving religious freedom. &nbsp;&nbsp;E.
                    advocate of the absolute divinely ordained right of kings.&nbsp;&nbsp; Answer: advocate of the
                    absolute divinely ordained right of kings.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={43} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={43} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following exerted the most influence on Italy in the eighteenth century?:</p>
                <hr />
                <p>A. Dutch.&nbsp;&nbsp;B. Austrians.&nbsp;&nbsp; C. Spanish.&nbsp;&nbsp; D. Turks. &nbsp;&nbsp;E.
                    English.&nbsp;&nbsp; Answer: Austrians.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={44} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={44} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The War of the Spanish Succession began when Charles II of Spain left his territories to?:</p>
                <hr />
                <p>A. the French heir.&nbsp;&nbsp;B. his son.&nbsp;&nbsp; C. the Spanish heir.&nbsp;&nbsp; D. the
                    archduke of Austria. &nbsp;&nbsp;E. Eugene of Savoy.&nbsp;&nbsp; Answer: the French heir.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={45} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={45} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Ivan III was responsible for the?:</p>
                <hr />
                <p>A. conversion of Russia to Roman Catholicism.&nbsp;&nbsp;B. military campaigns that freed much of
                    Russia from the Mongols.&nbsp;&nbsp; C. creation of the Eastern Orthodox Church in
                    Russia.&nbsp;&nbsp; D. policies of Westernization that required changes in dress among the
                    Russian elite. &nbsp;&nbsp;E. abolition of serfdom in Russia.&nbsp;&nbsp; Answer: military
                    campaigns that freed much of Russia from the Mongols.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={46} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={46} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the most significant factor in the rise of national states in western
                    Europe?:</p>
                <hr />
                <p>A. the end of serfdom.&nbsp;&nbsp;B. the acquiring of colonies in the New World.&nbsp;&nbsp; C.
                    the rise of the feudal nobility.&nbsp;&nbsp; D. the need for protection from barbarian
                    invasions. &nbsp;&nbsp;E. the rise and support of the middle class.&nbsp;&nbsp; Answer: the rise
                    and support of the middle class.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={47} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={47} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Siege of Vienna in 1683 was undertaken by?:</p>
                <hr />
                <p>A. the Hungarians under Prince Romanov.&nbsp;&nbsp;B. the Venetians.&nbsp;&nbsp; C. Frederick
                    William of Prussia.&nbsp;&nbsp; D. the Turks. &nbsp;&nbsp;E. the Bohemians.&nbsp;&nbsp; Answer:
                    the Turks.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={48} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={48} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Peter the Great's reforms included?:</p>
                <hr />
                <p>A. requiring the Russian nobility to wear Western clothing and speaking French at
                    court.&nbsp;&nbsp;B. a lessening of the burdens of serfdom for Russian peasants.&nbsp;&nbsp; C.
                    an elimination of the merit-system bureaucracy.&nbsp;&nbsp; D. the abolition of serfdom.
                    &nbsp;&nbsp;E. the creation of an independent parliament.&nbsp;&nbsp; Answer: requiring the
                    Russian nobility to wear Western clothing and speaking French at court.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={49} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={49} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the 16th century the main reason for the increase in power of the English monarch was
                    the?:</p>
                <hr />
                <p>A. Glorious Revolution.&nbsp;&nbsp;B. ability of the Stuart rulers.&nbsp;&nbsp; C. increased
                    position of the nobility.&nbsp;&nbsp; D. ability of the Tudor monarchs. &nbsp;&nbsp;E. marriage
                    of Queen Mary to Philip II of Spain.&nbsp;&nbsp; Answer: ability of the Tudor monarchs.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={50} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={50} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1640 Charles I called Parliament into session because he?:</p>
                <hr />
                <p>A. needed money to pursue his war against France.&nbsp;&nbsp;B. became a supporter of democratic
                    principles.&nbsp;&nbsp; C. wanted to change his religion.&nbsp;&nbsp; D. wanted a declaration of
                    war against Spain. &nbsp;&nbsp;E. needed money to suppress a rebellion in Scotland.&nbsp;&nbsp;
                    Answer: needed money to suppress a rebellion in Scotland.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={51} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={51} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In the 18c the principal economic activity of the Netherlands was?:</p>
                <hr />
                <p>A. cloth manufacturing.&nbsp;&nbsp;B. banking and finance.&nbsp;&nbsp; C. tulip
                    cultivation.&nbsp;&nbsp; D. maritime commerce. &nbsp;&nbsp;E. agricultural
                    production.&nbsp;&nbsp; Answer: banking and finance.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={52} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={52} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Although different in their sources of power the governments of 18c Great Britain and France had
                    which of the following characteristics in common?:</p>
                <hr />
                <p>A. both nations were constitutional monarchies.&nbsp;&nbsp;B. the power to levy taxes was
                    controlled by the monarch in both nations.&nbsp;&nbsp; C. by the mid-1700s the Prime Minister
                    had become the real power in British and French politics not the&nbsp;&nbsp; D. neither nation
                    had wide class differences. &nbsp;&nbsp;E. "both nations had a small elite of landowning
                    aristocrats who were considered the ""natural"" ruling&nbsp;&nbsp; Answer: "both nations had a
                    small elite of landowning aristocrats who were considered the ""natural"" ruling</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={53} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={53} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>An immediate effect of the Glorious Revolution in England was?:</p>
                <hr />
                <p>A. the return of the Tudors as rulers of England.&nbsp;&nbsp;B. universal manhood
                    suffrage.&nbsp;&nbsp; C. the persecution of members of the Anglican Church.&nbsp;&nbsp; D. the
                    decline of England as a colonial power. &nbsp;&nbsp;E. the supremacy of Parliament over the
                    monarchy.&nbsp;&nbsp; Answer: the supremacy of Parliament over the monarchy.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={54} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={54} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What did John Locke mean by the term tabula rasa ?:</p>
                <hr />
                <p>A. the 'unchangeable tablet' on which the largest amount of an individual's future has already
                    been wri&nbsp;&nbsp;B. instinctual behavior.&nbsp;&nbsp; C. the 'gene pool' passed from parent
                    to child.&nbsp;&nbsp; D. the 'blank slate' that is the human mind at birth. &nbsp;&nbsp;E. the
                    hierarchy of races in the world--with Europeans occupying the highest position.the hierarchy of
                    &nbsp;&nbsp; Answer: the 'blank slate' that is the human mind at birth.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={55} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={55} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thomas Hobbes and John Locke disagreed over the theory that?:</p>
                <hr />
                <p>A. man once lived in a state of nature without government.&nbsp;&nbsp;B. kings rule by divine
                    right.&nbsp;&nbsp; C. the only alternative to social chaos is absolute monarchy.&nbsp;&nbsp; D.
                    man's mind is at birth a tabula rasa. &nbsp;&nbsp;E. all men are endowed with certain
                    unalienable rights.&nbsp;&nbsp; Answer: the only alternative to social chaos is absolute
                    monarchy.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={56} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={56} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Pragmatic Sanction (1713) stated that the Hapsburg possessions?:</p>
                <hr />
                <p>A. could never be passed to a female heir&nbsp;&nbsp;B. could never be divided.&nbsp;&nbsp; C.
                    were always to remain within the Austrian branch of the fa&nbsp;&nbsp; D. were to be inherited
                    by Louis XIV's grandson after the death of Charles VI. &nbsp;&nbsp;E. could follow whichever
                    religion the majority of people in each area favored.&nbsp;&nbsp; Answer: could never be
                    divided.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={57} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={57} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p />
                <hr />
                <p>A. 8c British nobility differed from 18c French nobility in that?:&nbsp;&nbsp;B. the French
                    nobility paid direct taxes and had no significant legal privileges.&nbsp;&nbsp; C. the English
                    aristocracy paid no taxes while the French nobility were burdened with the taille and
                    th&nbsp;&nbsp; D. the French nobility did not enjoy hereditary privileges as did the English.
                    &nbsp;&nbsp;E. the English aristocracy accepted the social and political responsibilities of
                    their position and par&nbsp;&nbsp; Answer: the English aristocracy accepted the social and
                    political responsibilities of their position and par</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={58} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={58} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In the 18c Europe's largest city was?:</p>
                <hr />
                <p>A. Berlin.&nbsp;&nbsp;B. London.&nbsp;&nbsp; C. Vienna.&nbsp;&nbsp; D. Paris. &nbsp;&nbsp;E.
                    Rome.&nbsp;&nbsp; Answer: London.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={59} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={59} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Peasant life in 18c Europe was characterized by?:</p>
                <hr />
                <p>A. close and cordial relations with local landlords.&nbsp;&nbsp;B. new opportunities for all
                    rural children to obtain an elementary education.&nbsp;&nbsp; C. a willingness to try
                    experimental farming techniques.&nbsp;&nbsp; D. the confining of women to household activities.
                    &nbsp;&nbsp;E. vulnerability to rising taxes and rents.&nbsp;&nbsp; Answer: vulnerability to
                    rising taxes and rents.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={60} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={60} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The artistic movement that replaced the Baroque during the Enlightenment was?:</p>
                <hr />
                <p>A. Romanesque.&nbsp;&nbsp;B. Neo-Classical.&nbsp;&nbsp; C. Empirical.&nbsp;&nbsp; D. Rococo.
                    &nbsp;&nbsp;E. Mannerism.&nbsp;&nbsp; Answer: Rococo.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={61} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={61} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 18c England the greatest threat to the economic security of small farmers was?:</p>
                <hr />
                <p>A. the Enclosure Movement.&nbsp;&nbsp;B. laissez-faire economic policies.&nbsp;&nbsp; C. the
                    political influence of the Church of England.&nbsp;&nbsp; D. economic competition from French
                    farmers. &nbsp;&nbsp;E. the increasing use of agricultural land by industrial
                    interests.&nbsp;&nbsp; Answer: the Enclosure Movement.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={62} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={62} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Economic and social life among the mass of people under the Ancien Regime of the 18c still
                    primarily focused around?:</p>
                <hr />
                <p>A. parliamentary elections.&nbsp;&nbsp;B. the harvest.&nbsp;&nbsp; C. the London Stock
                    Exchange.&nbsp;&nbsp; D. military service. &nbsp;&nbsp;E. colonial trade.&nbsp;&nbsp; Answer:
                    the harvest.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={63} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={63} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The European lower classes reacted to the Enlightenment by?:</p>
                <hr />
                <p>A. supporting their rulers against the nobles and clergy.&nbsp;&nbsp;B. violently rebelling
                    against their governments.&nbsp;&nbsp; C. seeking comfort in grass-roots religious revival
                    movements.&nbsp;&nbsp; D. more of them turning to crime. &nbsp;&nbsp;E. immersing themselves in
                    spiritual and philosophical study.&nbsp;&nbsp; Answer: seeking comfort in grass-roots religious
                    revival movements.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={64} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={64} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements best describes the attitude toward children in the first part
                    of the 18c?:</p>
                <hr />
                <p>A. they were protected and cherished.&nbsp;&nbsp;B. they were never disciplined.&nbsp;&nbsp; C.
                    they were treated as they were--children living in a child's world.&nbsp;&nbsp; D. they were
                    ignored often brutalized and often unloved. &nbsp;&nbsp;E. they were seen as
                    property.&nbsp;&nbsp; Answer: they were ignored often brutalized and often unloved.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={65} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={65} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Who were the first to initiate a political campaign to abolish slavery?:</p>
                <hr />
                <p>A. French philosophes .&nbsp;&nbsp;B. Quakers and Baptists.&nbsp;&nbsp; C. the British
                    navy.&nbsp;&nbsp; D. the Brazilian government. &nbsp;&nbsp;E. Dutch merchants.&nbsp;&nbsp;
                    Answer: Quakers and Baptists.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={66} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={66} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements best applies to Europe's social order in the 18c?:</p>
                <hr />
                <p>A. it differed from the Middle Ages in that wealth was the sole determining factor in a person's
                    social&nbsp;&nbsp;B. the nobility was homogeneous and served the same social function throughout
                    Europe.&nbsp;&nbsp; C. peasants and nobles grew closer socially in eastern Europe where serfdom
                    was eradicated.&nbsp;&nbsp; D. most of 18c European universities allowed students from the lower
                    and middle classes to enroll and a &nbsp;&nbsp;E. peasants were still hindered by a variety of
                    feudal services and fees imposed by the powerful aristo&nbsp;&nbsp; Answer: peasants were still
                    hindered by a variety of feudal services and fees imposed by the powerful aristo</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={67} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={67} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>European efforts to deal with crime after 1700?:</p>
                <hr />
                <p>A. rejected imprisonment because of its high unit cost.&nbsp;&nbsp;B. never employed the use of
                    torture.&nbsp;&nbsp; C. increased the severity of punishment for theft.&nbsp;&nbsp; D. employed
                    public displays of punishment for the purpose of deterrence. &nbsp;&nbsp;E. reserved the use of
                    capital punishment exclusively for criminal cases.&nbsp;&nbsp; Answer: employed public displays
                    of punishment for the purpose of deterrence.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={68} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={68} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Ancien Regime European Jews?:</p>
                <hr />
                <p>A. were separated from non-Jews in districts called ghettos.&nbsp;&nbsp;B. were permitted equal
                    access to social and economic opportunities in western European countries.&nbsp;&nbsp; C. were
                    living primarily in western Europe.&nbsp;&nbsp; D. enjoyed all of the rights and privileges of
                    other subjects. &nbsp;&nbsp;E. were pro-monarchy.&nbsp;&nbsp; Answer: were separated from
                    non-Jews in districts called ghettos.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={69} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={69} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which post-World War II leader is INCORRECTLY paired with the country he led?:</p>
                <hr />
                <p>A. MacMillan and England.&nbsp;&nbsp;B. Tito and Italy.&nbsp;&nbsp; C. Khrushchev and the
                    U.S.S.R.&nbsp;&nbsp; D. DeGaulle and France. &nbsp;&nbsp;E. Adenauer and West
                    Germany.&nbsp;&nbsp; Answer: Tito and Italy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={70} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={70} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The North Atlantic Treaty Organization was formed in response to?:</p>
                <hr />
                <p>A. the events surrounding the Berlin Blockade.&nbsp;&nbsp;B. the communist victory in the civil
                    war in China.&nbsp;&nbsp; C. Soviet refusal of Marshall Plan assistance for all of eastern
                    Europe.&nbsp;&nbsp; D. the Soviet formation of the Warsaw Pact. &nbsp;&nbsp;E. Soviet detonation
                    of its first nuclear device.&nbsp;&nbsp; Answer: the events surrounding the Berlin Blockade.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={71} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={71} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The collapse of the Fourth Republic and the rise of the Fifth Republic occurred in France over?:
                </p>
                <hr />
                <p>A. fear of renewed war with Germany.&nbsp;&nbsp;B. economic collapse.&nbsp;&nbsp; C. breakdown in
                    relations with the United States.&nbsp;&nbsp; D. socialist welfare policy. &nbsp;&nbsp;E. the
                    independence movement in Algeria.&nbsp;&nbsp; Answer: the independence movement in Algeria.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={72} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={72} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Euro-communism is?:</p>
                <hr />
                <p>A. the term used to describe the general program of French communism during the
                    1950s.&nbsp;&nbsp;B. a program devised by Italian Communists to make their policies more
                    compatible with the needs of Wes&nbsp;&nbsp; C. a literary and artistic movement of the late
                    1950s and early 1960s which stressed the importance of &nbsp;&nbsp; D. the hope of Eastern
                    European Communists to maintain some power and credibility after the changes of &nbsp;&nbsp;E.
                    the Soviet policy to expand Soviet hegemony following 1945.&nbsp;&nbsp; Answer: a program
                    devised by Italian Communists to make their policies more compatible with the needs of Wes</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={73} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={73} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The decision of the East Germans to erect a wall dividing East and West Berlin?:</p>
                <hr />
                <p>A. was made in 1961 to halt the flow of refugees from East Germany.&nbsp;&nbsp;B. recognized that
                    Berlin was a city of spies whose movements needed to be restricted.&nbsp;&nbsp; C. to prevent
                    the infiltration of western spies into East Berlin.&nbsp;&nbsp; D. occurred immediately
                    following the outbreak of the Korean War to symbolize Communist disenchantment &nbsp;&nbsp;E.
                    was intended to illustrate that East Germany would never again unite with West
                    Germany.&nbsp;&nbsp; Answer: was made in 1961 to halt the flow of refugees from East Germany.
                </p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={74} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={74} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which communist country successfully asserted independence from Moscow's control soon after the
                    end of the Second World War?:</p>
                <hr />
                <p>A. Bulgaria.&nbsp;&nbsp;B. Poland.&nbsp;&nbsp; C. Yugoslavia.&nbsp;&nbsp; D. Czechoslovakia.
                    &nbsp;&nbsp;E. Hungary.&nbsp;&nbsp; Answer: Yugoslavia.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={75} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={75} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a result of the Polish and Hungarian disturbances in 1956?:</p>
                <hr />
                <p>A. they demonstrated the hollowness of American political rhetoric.&nbsp;&nbsp;B. they
                    demonstrated that Austrian neutrality would not be imitated in Eastern Europe.&nbsp;&nbsp; C.
                    they demonstrated the limitations of independence within the Soviet bloc.&nbsp;&nbsp; D. they
                    exposed the lack of military will on the part of the West to really help freedom-fighters in Ea
                    &nbsp;&nbsp;E. they brought an end to independent action in the Soviet bloc.&nbsp;&nbsp; Answer:
                    they brought an end to independent action in the Soviet bloc.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={76} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={76} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Under Clement Atlee's administration the government?:</p>
                <hr />
                <p>A. undertook a major housing program.&nbsp;&nbsp;B. strongly supported British trade
                    unions.&nbsp;&nbsp; C. assumed ownership of certain major industries.&nbsp;&nbsp; D. instituted
                    a major program of welfare legislation. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={77} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={77} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of the most important causes of the Cold War between the USSR and the United States after
                    World War II was?:</p>
                <hr />
                <p>A. refusal of the Western powers to give the USSR a role in post war Germany.&nbsp;&nbsp;B.
                    rivalries with the Eastern bloc.&nbsp;&nbsp; C. ideological conflicts.&nbsp;&nbsp; D. border
                    disputes in Scandinavia. &nbsp;&nbsp;E. Russian occupation of northern Italy.&nbsp;&nbsp;
                    Answer: ideological conflicts.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={78} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={78} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The ""Prague Spring"" refers to?:"</p>
                <hr />
                <p>A. "a new agricultural program introduced by the Czechoslovak Communist leadership that led to
                    the ""Gr&nbsp;&nbsp;B. the unsuccessful liberalization program attempted by Alexander
                    Dubcek.&nbsp;&nbsp; C. a great drought in 1968.&nbsp;&nbsp; D. a cultural flowering of Czech
                    literature in the immediate post-World War II era. &nbsp;&nbsp;E. the increase in the number of
                    Czech troops committed to the Warsaw Pact.&nbsp;&nbsp; Answer: the unsuccessful liberalization
                    program attempted by Alexander Dubcek.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={79} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={79} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most serious fear shared by Soviet and Western statesmen after World War II was?:</p>
                <hr />
                <p>A. political deadlocks in the United Nations.&nbsp;&nbsp;B. success of communism in
                    Italy.&nbsp;&nbsp; C. formation of the Common Market.&nbsp;&nbsp; D. revival of a strong
                    military state in Germany. &nbsp;&nbsp;E. the failure of democracy in
                    Czechoslovakia.&nbsp;&nbsp; Answer: revival of a strong military state in Germany.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={80} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={80} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which BEST characterizes West Germany's Ostpolitik ?:</p>
                <hr />
                <p>A. the refusal to have economic ties with any nation that extended diplomatic recognition to East
                    Germa&nbsp;&nbsp;B. withdrawal from the Common Market in favor of economic integration in
                    Eastern Europe.&nbsp;&nbsp; C. West German rearmament and participation in NATO.&nbsp;&nbsp; D.
                    the establishment of better relations with Eastern Europe. &nbsp;&nbsp;E. West Germany's
                    withdrawal from the United Nations in 1965.&nbsp;&nbsp; Answer: the establishment of better
                    relations with Eastern Europe.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={81} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={81} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most serious post-World War II split in the Communist Bloc was?:</p>
                <hr />
                <p>A. the rupture of the Soviet-Chinese alliance.&nbsp;&nbsp;B. the defection of Marshall
                    Tito.&nbsp;&nbsp; C. Cuba's objections to Soviet policy.&nbsp;&nbsp; D. the Ceascescu regime in
                    Rumania. &nbsp;&nbsp;E. the loss of Albania.&nbsp;&nbsp; Answer: the rupture of the
                    Soviet-Chinese alliance.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={82} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={82} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Between the death of Stalin and the rise of Gorbachev the Soviet Union?:</p>
                <hr />
                <p>A. dismantled the KGB.&nbsp;&nbsp;B. solved its agricultural problems.&nbsp;&nbsp; C. experienced
                    some liberalization along with increasing economic decline.&nbsp;&nbsp; D. renounced repression
                    of revolt in the satellites. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: experienced some liberalization along with increasing economic decline.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={83} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={83} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Marshall Plan?:</p>
                <hr />
                <p>A. would supply military assistance to any country threatened by communism.&nbsp;&nbsp;B.
                    excluded the Soviet Union and eastern Europe from participation.&nbsp;&nbsp; C. was viewed by
                    Western Europe as Capitalist imperialism.&nbsp;&nbsp; D. was not considered a success.
                    &nbsp;&nbsp;E. intended to rebuild European prosperity and stability.&nbsp;&nbsp; Answer:
                    intended to rebuild European prosperity and stability.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={84} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={84} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of de Gaulle's important achievements was to?:</p>
                <hr />
                <p>A. resolve the Algerian crisis by giving the Algerians the right to vote in the French
                    parliament.&nbsp;&nbsp;B. end political instability in France.&nbsp;&nbsp; C. take the lead in
                    the expansion of the Common Market by negotiating the membership of Britain.&nbsp;&nbsp; D.
                    increase the value of the French franc in relationship to the U. S. dollar. &nbsp;&nbsp;E. take
                    the lead in promoting the non-proliferation of nuclear weapons.&nbsp;&nbsp; Answer: end
                    political instability in France.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={85} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={85} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of Gorbachev's key policies was perestroika which meant?:</p>
                <hr />
                <p>A. drastic restructuring of the centrally planned command economy.&nbsp;&nbsp;B. the rapid
                    creation of a free market economy.&nbsp;&nbsp; C. political rule by a three-person
                    directorate.&nbsp;&nbsp; D. abolishing the KGB and introducing free political elections.
                    &nbsp;&nbsp;E. at first drastic political restructuring; later Gorbachev believed such
                    restructuring could be appli&nbsp;&nbsp; Answer: drastic restructuring of the centrally planned
                    command economy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={86} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={86} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Khrushchev era (1956-64) the Soviet Union?:</p>
                <hr />
                <p>A. retreated from some Stalinist practices.&nbsp;&nbsp;B. enjoyed great expansion in agricultural
                    production.&nbsp;&nbsp; C. sought to join NATO.&nbsp;&nbsp; D. rapidly created a consumer
                    economy. &nbsp;&nbsp;E. became democratic.&nbsp;&nbsp; Answer: retreated from some Stalinist
                    practices.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={87} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={87} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most innovative Soviet postwar scientific achievement was its?:</p>
                <hr />
                <p>A. construction of the world's largest dam on the Volga River.&nbsp;&nbsp;B. construction of the
                    massive gulag network.&nbsp;&nbsp; C. design and production of high-quality fighter
                    planes.&nbsp;&nbsp; D. launch of the world's first unmanned space satellite. &nbsp;&nbsp;E.
                    explosion of atomic and hydrogen bombs.&nbsp;&nbsp; Answer: launch of the world's first unmanned
                    space satellite.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={88} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={88} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Khrushchev solidified his position as Stalin's successor with a speech to the Twentieth Party
                    Congress in 1956 that he?:</p>
                <hr />
                <p>A. further glorified Stalin by revealing some of his additional achievements.&nbsp;&nbsp;B.
                    started a campaign to eliminate Stalin's influence by revealing his atrocities and reducing his
                    pres&nbsp;&nbsp; C. supported the Egyptian side in the Suez Crisis.&nbsp;&nbsp; D. promised a
                    rapid end to communist control of Eastern Europe and China. &nbsp;&nbsp;E. announced an end to
                    the Cold War and the signing of a military alliance with America.&nbsp;&nbsp; Answer: started a
                    campaign to eliminate Stalin's influence by revealing his atrocities and reducing his pres</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={89} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={89} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In reality the policy of detente between the Soviet Union and the United States?:</p>
                <hr />
                <p>A. encouraged the eruption of new conflicts in the Third World.&nbsp;&nbsp;B. only worsened
                    relations and increased tensions among the superpowers.&nbsp;&nbsp; C. was bitterly opposed by
                    both Nixon and Brezhnev.&nbsp;&nbsp; D. defined the process by which the superpowers agreed to
                    formalize their postwar dominance. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp;
                    Answer: defined the process by which the superpowers agreed to formalize their postwar
                    dominance.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={90} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={90} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>As President of France Charles de Gaulle's policy toward the Cold War was to?:</p>
                <hr />
                <p>A. remain independent of both superpowers.&nbsp;&nbsp;B. make France the leading member of
                    NATO.&nbsp;&nbsp; C. follow the American lead throughout.&nbsp;&nbsp; D. form a close military
                    and economic alliance with Britain and West Germany. &nbsp;&nbsp;E. closely align France with
                    the Warsaw Pact nations.&nbsp;&nbsp; Answer: remain independent of both superpowers.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={91} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={91} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The European Economic Community had its origins in an agreement about?:</p>
                <hr />
                <p>A. agricultural production.&nbsp;&nbsp;B. coal and steel production.&nbsp;&nbsp; C. railway
                    operation.&nbsp;&nbsp; D. river navigation. &nbsp;&nbsp;E. response to the report of the Club of
                    Rome.&nbsp;&nbsp; Answer: coal and steel production.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={92} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={92} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are reactions to the development of nuclear weapons EXCEPT?:</p>
                <hr />
                <p>A. "fear of M.A.D. ""mutually assured destruction"" which led to the suspension of nuclear
                    war."&nbsp;&nbsp;B. the proliferation of nuclear weapons.&nbsp;&nbsp; C. the decline in the
                    number of guerilla wars with their dependence on traditional weapons.&nbsp;&nbsp; D. modern war
                    technology which was confined to countries that can afford it often with traumatic conseq
                    &nbsp;&nbsp;E. the space exploration programs of the Soviet Union and the United States which
                    inclded a considerati&nbsp;&nbsp; Answer: the decline in the number of guerilla wars with their
                    dependence on traditional weapons.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={93} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={93} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The outbreak of student revolts in Western Europe the late 1960s was inspired by?:</p>
                <hr />
                <p>A. the war in Vietnam.&nbsp;&nbsp;B. overcrowded classrooms and lack of professorial
                    attention.&nbsp;&nbsp; C. discontent with materialism.&nbsp;&nbsp; D. poor job prospects for new
                    graduates. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these
                    choices are correct.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={94} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={94} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The 1960 US-USSR summit meeting was wrecked when?:</p>
                <hr />
                <p>A. the United States put a quarantine around Cuba.&nbsp;&nbsp;B. the Soviets crushed an uprising
                    in Hungary.&nbsp;&nbsp; C. the United States discovered a number of Soviet spies in its
                    midst.&nbsp;&nbsp; D. the Soviets erected the Berlin Wall. &nbsp;&nbsp;E. a U-2 spy plane was
                    shot down over Russia.&nbsp;&nbsp; Answer: a U-2 spy plane was shot down over Russia.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={95} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={95} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Margaret Thatcher's popularity rose when she successfully prevented?:</p>
                <hr />
                <p>A. Japan from taking Taiwan.&nbsp;&nbsp;B. Argentina from taking the Falklands.&nbsp;&nbsp; C.
                    China from taking Hong Kong.&nbsp;&nbsp; D. India from taking Burma. &nbsp;&nbsp;E. Mexico from
                    taking El Salvador.&nbsp;&nbsp; Answer: Argentina from taking the Falklands.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={96} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={96} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thatcherism stressed all of the following EXCEPT?:</p>
                <hr />
                <p>A. nationalization of industries.&nbsp;&nbsp;B. high interest rates.&nbsp;&nbsp; C. destroying
                    the power of labor unions.&nbsp;&nbsp; D. sharp tax cuts. &nbsp;&nbsp;E. reduced government
                    spending.&nbsp;&nbsp; Answer: nationalization of industries.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={97} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={97} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Solidarity movement in Poland which ultimately toppled the communist regime was helped by
                    what other Polish institution?:</p>
                <hr />
                <p>A. the Polish parliament.&nbsp;&nbsp;B. the peasantry.&nbsp;&nbsp; C. the army.&nbsp;&nbsp; D.
                    the Catholic Church. &nbsp;&nbsp;E. the dissident communist party members.&nbsp;&nbsp; Answer:
                    the Catholic Church.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={98} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={98} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The first European country to enter into direct trade with the Far East and establish colonies
                    there was?:</p>
                <hr />
                <p>A. Spain.&nbsp;&nbsp;B. France.&nbsp;&nbsp; C. Britain.&nbsp;&nbsp; D. Portugal. &nbsp;&nbsp;E.
                    Holland.&nbsp;&nbsp; Answer: Portugal.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={99} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={99} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Spanish empire in America was characterized by?:</p>
                <hr />
                <p>A. its enormous African slave population.&nbsp;&nbsp;B. a large creole class of higher-level
                    colonial government officials.&nbsp;&nbsp; C. the relatively large white population.&nbsp;&nbsp;
                    D. the exhaustion of the great silver mines of Mexico and Peru by 1550. &nbsp;&nbsp;E. the
                    introduction of a manorial-like system the encomienda.&nbsp;&nbsp; Answer: the introduction of a
                    manorial-like system the encomienda.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={100} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={100} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following groups generally benefited from the inflation of the sixteenth century?:
                </p>
                <hr />
                <p>A. landowning nobility.&nbsp;&nbsp;B. merchants.&nbsp;&nbsp; C. peasants.&nbsp;&nbsp; D. colonial
                    officials. &nbsp;&nbsp;E. all of these groups benefited.&nbsp;&nbsp; Answer: merchants.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={101} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={101} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why did the English Dutch and French governments fail to begin colonization of the Americas and
                    direct trade with the Orient until more than 100 years after Columbus discovered America?:</p>
                <hr />
                <p>A. their geographical positions put them at a disadvantage for trans-oceanic
                    movement.&nbsp;&nbsp;B. the northern countries lacked suitable ships and the advanced technology
                    to make long voyages.&nbsp;&nbsp; C. domestic troubles and religious controversies delayed
                    organized action.&nbsp;&nbsp; D. Western European bankers refused to loan monarchs money for
                    such ventures. &nbsp;&nbsp;E. the northerners were slow to abandon their traditional
                    Mediterranean trade routes.&nbsp;&nbsp; Answer: domestic troubles and religious controversies
                    delayed organized action.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={102} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={102} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Spain's expansion in the Americas was made particularly easy by?:</p>
                <hr />
                <p>A. the absence of prior civilizations among the native peoples.&nbsp;&nbsp;B. the impact of
                    imported diseases on the Indian population.&nbsp;&nbsp; C. Spain's leadership in European
                    banking and commerce.&nbsp;&nbsp; D. the belief that Europe had much to learn from the religions
                    and customs of other peoples. &nbsp;&nbsp;E. competition between Protestant and Catholic
                    missionaries sent out by Spain.&nbsp;&nbsp; Answer: the impact of imported diseases on the
                    Indian population.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={103} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={103} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Treaty of Tordesillas (1494) granted Portugal the eastern trade route to the Indies as well
                    as Brazil; lands to the west of Brazil were given to?:</p>
                <hr />
                <p>A. England.&nbsp;&nbsp;B. Italy.&nbsp;&nbsp; C. Spain.&nbsp;&nbsp; D. France. &nbsp;&nbsp;E.
                    Holland.&nbsp;&nbsp; Answer: Spain.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={104} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={104} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The technological innovations in maritime technology by the 1500s were important because?:</p>
                <hr />
                <p>A. they made it cheaper to sail.&nbsp;&nbsp;B. they increased the number of slaved needed to sail
                    the ships.&nbsp;&nbsp; C. they required literate sailors.&nbsp;&nbsp; D. they made it possible
                    for Europeans to sail anywhere. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: they made it possible for Europeans to sail anywhere.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={105} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={105} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>By the 16th century the center of commercial activity had shifted from the Mediterranean to the?:
                </p>
                <hr />
                <p>A. Atlantic Ocean.&nbsp;&nbsp;B. Red Sea.&nbsp;&nbsp; C. Indian Ocean.&nbsp;&nbsp; D. Baltic Sea.
                    &nbsp;&nbsp;E. North Sea.&nbsp;&nbsp; Answer: Atlantic Ocean.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={106} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={106} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Encomiendas in the Spanish New World were?:</p>
                <hr />
                <p>A. local councils of aristocratics who assisted the viceroys.&nbsp;&nbsp;B. grants permitting
                    owners to take income or labor from land and its inhabitants.&nbsp;&nbsp; C. special schools set
                    up in the Franciscan missions to educate native Indian children.&nbsp;&nbsp; D. elected colonial
                    assemblies. &nbsp;&nbsp;E. local Indian chiefs who collected taxes and administered Spanish
                    laws.&nbsp;&nbsp; Answer: grants permitting owners to take income or labor from land and its
                    inhabitants.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={107} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={107} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Scarcity of labor in the Americas led the Spanish and Portuguese colonizers to?:</p>
                <hr />
                <p>A. establish a wage-earning system for the Indians.&nbsp;&nbsp;B. institute policies that
                    protected the Indians.&nbsp;&nbsp; C. import slaves from Africa.&nbsp;&nbsp; D. encourage
                    English and Dutch settlers to emigrate to the New World. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: import slaves from Africa.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={108} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={108} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Mediterranean carrying trade in the 14c and 15c was in the hands of?:</p>
                <hr />
                <p>A. the Marseilles merchants.&nbsp;&nbsp;B. Venice.&nbsp;&nbsp; C. Constantinople.&nbsp;&nbsp; D.
                    Greek city-states. &nbsp;&nbsp;E. Florence.&nbsp;&nbsp; Answer: Venice.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={109} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={109} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Portuguese exploration of the African coast was inspired and supported by?:</p>
                <hr />
                <p>A. Bartholomew Diaz.&nbsp;&nbsp;B. Emperor Charles V.&nbsp;&nbsp; C. Ferdinand and
                    Isabella.&nbsp;&nbsp; D. John Cabot. &nbsp;&nbsp;E. Prince Henry the Navigator.&nbsp;&nbsp;
                    Answer: Prince Henry the Navigator.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={110} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={110} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The major cause of the growing weakness of Spain and Portugal after 1600 was the?:</p>
                <hr />
                <p>A. drain placed on Iberia's finances by colonization efforts in the Americas.&nbsp;&nbsp;B.
                    failure to find productive investments with profits from New World colonies.&nbsp;&nbsp; C.
                    invasion of the Iberian Peninsula by France.&nbsp;&nbsp; D. deflationary impact of bullion
                    imports. &nbsp;&nbsp;E. successful opposition by Amerindians and Africans.&nbsp;&nbsp; Answer:
                    failure to find productive investments with profits from New World colonies.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={111} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={111} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following helped cause the Age of European Exploration EXCEPT?:</p>
                <hr />
                <p>A. technological advances making long sea voyages possible.&nbsp;&nbsp;B. the desire to spread
                    Christianity to native Indian peoples.&nbsp;&nbsp; C. the Mughals' continued encroachment into
                    Central Europe.&nbsp;&nbsp; D. European demand for eastern spices. &nbsp;&nbsp;E. Ottoman
                    expansion threatening access to the goods of the East.&nbsp;&nbsp; Answer: the Mughals'
                    continued encroachment into Central Europe.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={112} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={112} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1571 the Spanish and Turkish control of the Mediterranean at the battle of?:</p>
                <hr />
                <p>A. the Dardanelles.&nbsp;&nbsp;B. Gibraltar.&nbsp;&nbsp; C. Trafalgar.&nbsp;&nbsp; D. Lepanto.
                    &nbsp;&nbsp;E. Haifa.&nbsp;&nbsp; Answer: Lepanto.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={113} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={113} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which BEST explains the decline of Spanish power in the 17c?:</p>
                <hr />
                <p>A. foolish monarchs and an uncertain flow of treasure from the New World.&nbsp;&nbsp;B. an
                    unproductive and wasteful nobility.&nbsp;&nbsp; C. foreign policy reversals.&nbsp;&nbsp; D. the
                    decline of the importation of raw materials. &nbsp;&nbsp;E. the Catholic Church no longer
                    supported the merchant class in Spain.&nbsp;&nbsp; Answer: foolish monarchs and an uncertain
                    flow of treasure from the New World.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={114} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={114} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why did the initiative in early conquest and exploration pass to northern European nations in the
                    later 16c?:</p>
                <hr />
                <p>A. Spain and Portugal were defeated in a critical war with the Ottoman Empire.&nbsp;&nbsp;B. the
                    Dutch and the British improved the design of oceanic vessels producing faster ships than their
                    C&nbsp;&nbsp; C. famine and disease disastrously reduced the population of the Iberian Peninsula
                    after 1588.&nbsp;&nbsp; D. the French and Danish business infrastructures were more developed
                    than in the Iberian Peninsula cou &nbsp;&nbsp;E. the Spanish defeat of the English Armada cut
                    England off from further advance in Europe and forced E&nbsp;&nbsp; Answer: the Dutch and the
                    British improved the design of oceanic vessels producing faster ships than their C</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={115} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={115} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>At its height (ca. 1580) the Spanish empire of Philip II included all of the following EXCEPT?:
                </p>
                <hr />
                <p>A. Milan.&nbsp;&nbsp;B. the Free County of Burgundy.&nbsp;&nbsp; C. Silesia.&nbsp;&nbsp; D.
                    Bohemia. &nbsp;&nbsp;E. Portugal.&nbsp;&nbsp; Answer: Bohemia.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={116} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={116} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For England the primary result of the 16c wars with Spain was that it?:</p>
                <hr />
                <p>A. made her Europe's strongest power.&nbsp;&nbsp;B. forced England to tolerate her Catholic
                    minority.&nbsp;&nbsp; C. resulted in the immediate death of its main colonial rival Philip II of
                    Spain.&nbsp;&nbsp; D. bankrupted her treasury forcing Elizabeth to become more and more
                    dependent on parliament. &nbsp;&nbsp;E. assured her national independence and promoted an
                    intense national spirit.&nbsp;&nbsp; Answer: assured her national independence and promoted an
                    intense national spirit.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={117} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={117} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Rousseau's conception of the General Will meant?:</p>
                <hr />
                <p>A. representative democracy.&nbsp;&nbsp;B. "a vague common ""interest"" but not necessarily
                    majority rule."&nbsp;&nbsp; C. perhaps democracy but much more probably a kind of totalitarian
                    dictatorship.&nbsp;&nbsp; D. the pressure of organized public opinion which could be most
                    successfully expressed through moderniz &nbsp;&nbsp;E. none of these choices are
                    correct.&nbsp;&nbsp; Answer: "a vague common ""interest"" but not necessarily majority rule."
                </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={118} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={118} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Voltaire's famous polemic slogan Crush the infamous thing! referred to?:</p>
                <hr />
                <p>A. royal despotism.&nbsp;&nbsp;B. censorship laws.&nbsp;&nbsp; C. political
                    radicalism.&nbsp;&nbsp; D. religious bigotry as supported by an organized clergy. &nbsp;&nbsp;E.
                    constitutional monarchy.&nbsp;&nbsp; Answer: religious bigotry as supported by an organized
                    clergy.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={119} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={119} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In general the 18c philosophes were?:</p>
                <hr />
                <p>A. popularizers of the scientific and intellectual discoveries of the 17c.&nbsp;&nbsp;B. a group
                    of philosophers concerned with reexamining the ultimate questions of man's
                    existence.&nbsp;&nbsp; C. a group of learned Christian clerics who wished to modernize
                    religion.&nbsp;&nbsp; D. originators of a new philosophy based on reason and the concept of
                    natural law. &nbsp;&nbsp;E. people who were always the wealthiest members of 18c Western
                    European society.&nbsp;&nbsp; Answer: popularizers of the scientific and intellectual
                    discoveries of the 17c.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={120} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={120} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The best government said which of the following men is achieved by the separation of powers?:</p>
                <hr />
                <p>A. Locke.&nbsp;&nbsp;B. Voltaire.&nbsp;&nbsp; C. Montesqiueu.&nbsp;&nbsp; D. Diderot.
                    &nbsp;&nbsp;E. Hobbes.&nbsp;&nbsp; Answer: Montesqiueu.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={121} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={121} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Both Montesquieu and Voltaire?:</p>
                <hr />
                <p>A. admired the Middle Ages.&nbsp;&nbsp;B. supported some censorship on speech and religious
                    beliefs.&nbsp;&nbsp; C. rejected common law and preferred traditional Roman law
                    codes.&nbsp;&nbsp; D. preferred a rational absolute central government. &nbsp;&nbsp;E. admired
                    English institutions.&nbsp;&nbsp; Answer: admired English institutions.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={122} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={122} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a principle of Deism?:</p>
                <hr />
                <p>A. God favors a rational morality.&nbsp;&nbsp;B. science proves that God does not
                    exist.&nbsp;&nbsp; C. rewards and punishments are metted out in the afterlife.&nbsp;&nbsp; D.
                    nature has a rational order. &nbsp;&nbsp;E. God is not interested in the everday lives of
                    humans.&nbsp;&nbsp; Answer: science proves that God does not exist.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={123} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={123} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thinkers of the Enlightenment considered humanity as?:</p>
                <hr />
                <p>A. emotional believers in God.&nbsp;&nbsp;B. bundles of feelings animal urges and
                    fears.&nbsp;&nbsp; C. a link in the rationally ordered chain of beings.&nbsp;&nbsp; D. incapable
                    of reason. &nbsp;&nbsp;E. the only reason for a divinely inspired universe.&nbsp;&nbsp; Answer:
                    a link in the rationally ordered chain of beings.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={124} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={124} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Enlightenment philosophes argued that women?:</p>
                <hr />
                <p>A. were equal to men.&nbsp;&nbsp;B. should be allowed to vote.&nbsp;&nbsp; C. were biologically
                    different from men but were political equals to men.&nbsp;&nbsp; D. have no innate knowledge.
                    &nbsp;&nbsp;E. and men were different and operated in separate spheres.&nbsp;&nbsp; Answer: and
                    men were different and operated in separate spheres.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={125} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={125} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Maria Theresa can be labeled an ""Enlightened Despot"" because she?:"</p>
                <hr />
                <p>A. introduced religious toleration in the Habsburg Empire.&nbsp;&nbsp;B. abolished political
                    torture and persecution of different points of view.&nbsp;&nbsp; C. eliminated the death penalty
                    in the Habsburg Empire.&nbsp;&nbsp; D. introduced many legal reforms in the Habsburg Empire.
                    &nbsp;&nbsp;E. invited political radicals to live in her palace in Vienna.&nbsp;&nbsp; Answer:
                    introduced many legal reforms in the Habsburg Empire.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={126} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={126} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>David Hume argued that human beings?:</p>
                <hr />
                <p>A. did possess innate truths about God.&nbsp;&nbsp;B. confirmed their innate understanding about
                    God by reading the Scriptures.&nbsp;&nbsp; C. did not have any certain knowlede at
                    birth.&nbsp;&nbsp; D. possessed both innate and learned truths about God. &nbsp;&nbsp;E. "were
                    born like a tabula rasa upon which life experience would ""write"" its impressions."&nbsp;&nbsp;
                    Answer: did not have any certain knowlede at birth.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={127} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={127} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For Rousseau what was the main source of inequality and the chief cause of crime?:</p>
                <hr />
                <p>A. marriage.&nbsp;&nbsp;B. religion.&nbsp;&nbsp; C. philosophical knowledge.&nbsp;&nbsp; D.
                    education. &nbsp;&nbsp;E. private property.&nbsp;&nbsp; Answer: private property.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={128} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={128} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most important contribution Catherine the Great made early in her reign was the?:</p>
                <hr />
                <p>A. establishment of a legislative commission to review the laws of Russia.&nbsp;&nbsp;B.
                    abolition of serfdom and establishment of a progressive form of sharecropping.&nbsp;&nbsp; C.
                    peace pact she made with Sweden thus ending 60 years of intermittent warfare.&nbsp;&nbsp; D.
                    elimination of Russian Orthodox churchment from state service. &nbsp;&nbsp;E. initiation of a
                    new poll tax to increase tax revenues needed for future wars.&nbsp;&nbsp; Answer: establishment
                    of a legislative commission to review the laws of Russia.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={129} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={129} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are considered major factors that fostered the ideals of the Enlightenment
                    EXCEPT?:</p>
                <hr />
                <p>A. the stability and commercial prosperity of Great Britain after 1688.&nbsp;&nbsp;B. the
                    colonial worldview.&nbsp;&nbsp; C. the Newtonian worldview.&nbsp;&nbsp; D. the need for
                    administrative and economic reform in France after the wars of Louis XIV. &nbsp;&nbsp;E. the
                    consolidation of a print culture.&nbsp;&nbsp; Answer: the colonial worldview.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={130} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={130} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Many 18c philosophes believed that governmental reform would be accomplished by?:</p>
                <hr />
                <p>A. the introduction of democracy.&nbsp;&nbsp;B. empowering the nobles at the expense of the
                    kings.&nbsp;&nbsp; C. benevolent absolutist monarchs.&nbsp;&nbsp; D. revolution. &nbsp;&nbsp;E.
                    trusting the masses.&nbsp;&nbsp; Answer: benevolent absolutist monarchs.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={131} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={131} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The ideas of the Enlightenment challenged the long-term assumptions about sovereignty and instead
                    proposed that?:</p>
                <hr />
                <p>A. true government stems from religious authority.&nbsp;&nbsp;B. governments are bound to the
                    will of the people&nbsp;&nbsp; C. the best form of government is a democracy.&nbsp;&nbsp; D. all
                    government is inherently unjust. Humans are better off living in a state of nature.
                    &nbsp;&nbsp;E. church and state should be entirely separate.&nbsp;&nbsp; Answer: governments are
                    bound to the will of the people</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={132} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={132} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following CANNOT be said of the 18c Enlightenment?:</p>
                <hr />
                <p>A. the Newtonian Revolution of the previous century set it in motion.&nbsp;&nbsp;B. it was based
                    on the belief that unchangeable natural laws governed human society as well as the
                    phys&nbsp;&nbsp; C. it supported the assumption that human reason could fathom the natural
                    laws.&nbsp;&nbsp; D. it reflected acceptance of social inequities and injustices as inevitable
                    effects of the natural law &nbsp;&nbsp;E. it was optimistic and progress-oriented.&nbsp;&nbsp;
                    Answer: it reflected acceptance of social inequities and injustices as inevitable effects of the
                    natural law</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={133} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={133} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Enlightenment?:</p>
                <hr />
                <p>A. was based upon the assumption that science and reason can explain all things.&nbsp;&nbsp;B.
                    "regarded human progress as an impossibility ""in this best of all possible
                    worlds."""&nbsp;&nbsp; C. was diametrically opposed to the Newtonian concept of natural
                    law.&nbsp;&nbsp; D. rejected the claims of modern science. &nbsp;&nbsp;E. was widely attacked by
                    the royalty and nobility of Europe.&nbsp;&nbsp; Answer: was based upon the assumption that
                    science and reason can explain all things.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={134} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={134} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The recognized capital of the Enlightenment was?:</p>
                <hr />
                <p>A. London.&nbsp;&nbsp;B. Amsterdam.&nbsp;&nbsp; C. Paris.&nbsp;&nbsp; D. Vienna. &nbsp;&nbsp;E.
                    St. Petersburg&nbsp;&nbsp; Answer: Paris.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={135} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={135} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Rousseau's most important concept in The Social Contract was that?:</p>
                <hr />
                <p>A. government must be based on the absolute authority of a divinely appointed
                    monarch.&nbsp;&nbsp;B. the main function of laws is to subdue man's evil nature.&nbsp;&nbsp; C.
                    governments exist by divine plan and to rebel against them is to rebel against God.&nbsp;&nbsp;
                    D. "the monarchy is the outward expression of the ""general will.""" &nbsp;&nbsp;E. government
                    must be based on voluntary participation by citizens not simply by the accident of
                    histor&nbsp;&nbsp; Answer: government must be based on voluntary participation by citizens not
                    simply by the accident of histor</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={136} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={136} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Recent scholarship suggests that the enlightened despots of Europe?:</p>
                <hr />
                <p>A. "were more ""enlightened"" than ""despotic."""&nbsp;&nbsp;B. represent a new type of monarchy
                    that emerged in the eighteenth century.&nbsp;&nbsp; C. were affected little by Enlightenment
                    ideas.&nbsp;&nbsp; D. had absolutely nothing to do with the philosophes or their ideas.
                    &nbsp;&nbsp;E. relished the opportunity to implement the ideas of the philosophes .&nbsp;&nbsp;
                    Answer: were affected little by Enlightenment ideas.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={137} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={137} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Recent challenges to the traditional explanation of the origins of the French Revolution have
                    centered on the fact that the?:</p>
                <hr />
                <p>A. Old Regime did not correspond to social reality.&nbsp;&nbsp;B. nobility and upper bourgeoisie
                    were not necessarily pitted against each other.&nbsp;&nbsp; C. clergy played a liberal role in
                    French society.&nbsp;&nbsp; D. revolution broke out all over France not just in Paris.
                    &nbsp;&nbsp;E. lower middle class was actually more reactionary than radical.&nbsp;&nbsp;
                    Answer: nobility and upper bourgeoisie were not necessarily pitted against each other.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={138} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={138} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The principal French tax the taille was paid by?:</p>
                <hr />
                <p>A. every Frenchman.&nbsp;&nbsp;B. the nobility only.&nbsp;&nbsp; C. the peasantry almost
                    exclusively.&nbsp;&nbsp; D. parish priests. &nbsp;&nbsp;E. the bourgeoisie only.&nbsp;&nbsp;
                    Answer: the peasantry almost exclusively.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={139} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={139} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>An English statesman whose criticism of the French Revolution and other writings have earned him
                    a reputation as a spokesman for conservatism was?:</p>
                <hr />
                <p>A. Charles Townshend.&nbsp;&nbsp;B. George Grenville.&nbsp;&nbsp; C. Sir Robert
                    Blake.&nbsp;&nbsp; D. William Pitt the Younger. &nbsp;&nbsp;E. Edmund Burke.&nbsp;&nbsp; Answer:
                    Edmund Burke.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={140} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={140} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are accurate statements about the French Revolution EXCEPT?:</p>
                <hr />
                <p>A. France had a non-representative government before and after the French
                    Revolution.&nbsp;&nbsp;B. the Revolution destroyed the vestiges of manorialism.&nbsp;&nbsp; C.
                    the ideals of the French Revolution spread throughout Europe.&nbsp;&nbsp; D. the Revolution
                    failed to end the legal inequities between the classes. &nbsp;&nbsp;E. the Revolution influenced
                    French society to measure status by ability rather than by birth.&nbsp;&nbsp; Answer: the
                    Revolution failed to end the legal inequities between the classes.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={141} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={141} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the era of the French Revolution the Thermidorean Reaction?:</p>
                <hr />
                <p>A. terminated the Reign of Terror and led to the execution of Robespierre.&nbsp;&nbsp;B.
                    initiated the Reign of Terror.&nbsp;&nbsp; C. resulted in the dissolution of the National
                    Assembly.&nbsp;&nbsp; D. was the direct cause for the rise of Napoleon. &nbsp;&nbsp;E. witnessed
                    the execution of Louis XVI and Marie Antoinette.&nbsp;&nbsp; Answer: terminated the Reign of
                    Terror and led to the execution of Robespierre.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={142} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={142} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Reign of Terror the Committee of Public Safety sought to do all of the following
                    EXCEPT?:</p>
                <hr />
                <p>A. suppress independent sans-culotte activity.&nbsp;&nbsp;B. protect the revolution from its
                    domestic foes.&nbsp;&nbsp; C. establish a separation between state and religion.&nbsp;&nbsp; D.
                    drive foreign armies out of France. &nbsp;&nbsp;E. prevent runaway inflation.&nbsp;&nbsp;
                    Answer: establish a separation between state and religion.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={143} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={143} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The legislators of the French Revolution enacted all of the following measures that affected
                    women EXCEPT a law?:</p>
                <hr />
                <p>A. permitting either party in a marriage to request a divorce.&nbsp;&nbsp;B. giving women the
                    right to control their own property.&nbsp;&nbsp; C. forbidding the formation of political clubs
                    for women.&nbsp;&nbsp; D. permitting nuns to quit their vows. &nbsp;&nbsp;E. granting the right
                    to vote to women who owned a sufficient amount of property.&nbsp;&nbsp; Answer: granting the
                    right to vote to women who owned a sufficient amount of property.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={144} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={144} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was a result of the Civil Constitution of the Clergy ?:</p>
                <hr />
                <p>A. the clergy were given a privileged position in the Estates-General.&nbsp;&nbsp;B. the church
                    was made a department of the French state.&nbsp;&nbsp; C. the clergy were condemned to execution
                    during the Reign of Terror.&nbsp;&nbsp; D. the office of bishop was abolished. &nbsp;&nbsp;E.
                    the church was made completely independent from the state.&nbsp;&nbsp; Answer: the church was
                    made a department of the French state.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={145} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={145} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The National Assembly's efforts to reorganize the Catholic Church resulted in?:</p>
                <hr />
                <p>A. deep division within both the country and the clergy.&nbsp;&nbsp;B. the endorsement of the
                    Revolution by the church.&nbsp;&nbsp; C. an equitable redistribution of monastic lands among the
                    peasants.&nbsp;&nbsp; D. the War of the First Coalition. &nbsp;&nbsp;E. the dismemberment of the
                    French national church and closer ties being made with the papacy.&nbsp;&nbsp; Answer: deep
                    division within both the country and the clergy.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={146} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={146} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The new Republican calendar of 1793?:</p>
                <hr />
                <p>A. was based on the old Gregorian calendar that had gone out of use in the 16.&nbsp;&nbsp;B. was
                    kept until Napoleon's defeat in 1815.&nbsp;&nbsp; C. was well received by most of the
                    people.&nbsp;&nbsp; D. was part of an effort at dechristianization. &nbsp;&nbsp;E. named days
                    and months after former kings.&nbsp;&nbsp; Answer: was part of an effort at dechristianization.
                </p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={147} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={147} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Declaration of the Rights of Man and Citizen guaranteed?:</p>
                <hr />
                <p>A. universal manhood suffrage.&nbsp;&nbsp;B. abolition of the monarchy.&nbsp;&nbsp; C. free
                    education.&nbsp;&nbsp; D. no new taxes. &nbsp;&nbsp;E. security of property.&nbsp;&nbsp; Answer:
                    security of property.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={148} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={148} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The cahiers de doleances of 1789 generally demanded?:</p>
                <hr />
                <p>A. the death of the king.&nbsp;&nbsp;B. government reforms.&nbsp;&nbsp; C. war with
                    Austria.&nbsp;&nbsp; D. an end to the use of the guillotine. &nbsp;&nbsp;E. the overthrow of the
                    Church.&nbsp;&nbsp; Answer: government reforms.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={149} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={149} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The greatest number of victims under ""The Terror"" (1793-1794) were from which social group?:"
                </p>
                <hr />
                <p>A. clergy.&nbsp;&nbsp;B. nobility.&nbsp;&nbsp; C. foreigners.&nbsp;&nbsp; D. bourgeoisie.
                    &nbsp;&nbsp;E. peasants.&nbsp;&nbsp; Answer: peasants.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={150} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={150} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was responsible for the convening of the Estates General in 1789?:</p>
                <hr />
                <p>A. the storming of the Bastille.&nbsp;&nbsp;B. peasant rejection of increased manorial
                    dues.&nbsp;&nbsp; C. royal abolition of guild restrictions.&nbsp;&nbsp; D. the French
                    government's near bankruptcy. &nbsp;&nbsp;E. religious warfare between Huguenots and
                    Catholics.&nbsp;&nbsp; Answer: the French government's near bankruptcy.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={151} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={151} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The French National Assembly was established by?:</p>
                <hr />
                <p>A. leading philosophes .&nbsp;&nbsp;B. the aristocracy.&nbsp;&nbsp; C. King Louis
                    XVI.&nbsp;&nbsp; D. the sans-culottes . &nbsp;&nbsp;E. the middle class of the Third
                    Estate.&nbsp;&nbsp; Answer: the middle class of the Third Estate.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={152} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={152} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The seizure of the Bastille on July 14 1789 was important because it?:</p>
                <hr />
                <p>A. gave the sans-cullotte a strong fort.&nbsp;&nbsp;B. released thousands of prisoners who joined
                    the revolutionaries.&nbsp;&nbsp; C. represented a successful attack on the tyranny of the Old
                    Regime.&nbsp;&nbsp; D. placed the royal family under the control of the Paris mobs.
                    &nbsp;&nbsp;E. brought Britain into the war against the French Republic.&nbsp;&nbsp; Answer:
                    represented a successful attack on the tyranny of the Old Regime.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={153} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={153} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The assignats of the French Revolutionary era were?:</p>
                <hr />
                <p>A. paper currency backed by church lands.&nbsp;&nbsp;B. plots of land sold to
                    peasants.&nbsp;&nbsp; C. members of a moderate political party.&nbsp;&nbsp; D. nobles who fled
                    from France. &nbsp;&nbsp;E. peasant revolts against the Republic.&nbsp;&nbsp; Answer: paper
                    currency backed by church lands.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={154} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={154} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For the French peasants the Revolution of 1789 meant?:</p>
                <hr />
                <p>A. a general movement from the countryside to urban areas.&nbsp;&nbsp;B. greater
                    landownership.&nbsp;&nbsp; C. few if any gains.&nbsp;&nbsp; D. an end to forced conscription in
                    the army. &nbsp;&nbsp;E. significant political power.&nbsp;&nbsp; Answer: greater landownership.
                </p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset >
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={155} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={155} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Abbe Sieyes's answer to the question ""What is the Third Estate?"" was"</p>
                <hr />
                <p>A. a bunch of radicals.&nbsp;&nbsp;B. those who adhered to liberalism.&nbsp;&nbsp; C. the most
                    useful component of French society.&nbsp;&nbsp; D. the business and professional elite.
                    &nbsp;&nbsp;E. the community of artists and musicians.&nbsp;&nbsp; Answer: the most useful
                    component of French society.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={156} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={156} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The term ""Great Fear"" refers to"</p>
                <hr />
                <p>A. the horiffic retreat of the French Army from Russia in 1812.&nbsp;&nbsp;B. murder of thousands
                    of enemies of the Revolution in the prisons.&nbsp;&nbsp; C. panic in the countryside that fanned
                    the flames of rebellion.&nbsp;&nbsp; D. the fear of an English invasion of France.
                    &nbsp;&nbsp;E. Use of the guillotine during the Reign of Terror.&nbsp;&nbsp; Answer: panic in
                    the countryside that fanned the flames of rebellion.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={157} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={157} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The men elected to represent the third estate in the Estates General were primarily?:</p>
                <hr />
                <p>A. provincial nobles.&nbsp;&nbsp;B. businessmen.&nbsp;&nbsp; C. soldiers.&nbsp;&nbsp; D. lawyers
                    and government officials. &nbsp;&nbsp;E. sans-culottes.&nbsp;&nbsp; Answer: lawyers and
                    government officials.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={158} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={158} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Written in the midst of the French Revolution the 1793 Constitution?:</p>
                <hr />
                <p>A. was written by a group of revolutionaries known as the Directory.&nbsp;&nbsp;B. was very
                    similar to the 1790 version.&nbsp;&nbsp; C. owed its existence solely to the American
                    Declaration of Independence.&nbsp;&nbsp; D. was a conservtive document that prepared the way for
                    Napoleon's rise to power as emperor. &nbsp;&nbsp;E. reflected the vision of Rousseau's social
                    contract.&nbsp;&nbsp; Answer: reflected the vision of Rousseau's social contract.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={159} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={159} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Committee of Public Safety was established to?:</p>
                <hr />
                <p>A. negotiate a military alliance with England.&nbsp;&nbsp;B. combat the dual threat of internal
                    rebellion/counter-revolutionaries and foreign invasion.&nbsp;&nbsp; C. provide the nation with a
                    new liberal monarchy.&nbsp;&nbsp; D. negotiate the safe return of the French army from Prussia.
                    &nbsp;&nbsp;E. train a new generation of intendants who were more loyal to the bourgeoisie
                    government in power in 1&nbsp;&nbsp; Answer: combat the dual threat of internal
                    rebellion/counter-revolutionaries and foreign invasion.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={160} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={160} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Louis XVI responded to the Tennis Court Oath by?:</p>
                <hr />
                <p>A. arresting the principal leaders of the National Assembly.&nbsp;&nbsp;B. attempting to transfer
                    the meetings of the estates to southern France.&nbsp;&nbsp; C. promising to reform the national
                    tax-collecting system.&nbsp;&nbsp; D. ordering the National Guard to surround the National
                    Assembly. &nbsp;&nbsp;E. declaring the actions of the third estate illegal.&nbsp;&nbsp; Answer:
                    declaring the actions of the third estate illegal.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={161} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={161} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Who were the first to initiate a political campaign to abolish slavery?:</p>
                <hr />
                <p>A. French philosophes .&nbsp;&nbsp;B. Quakers and Baptists.&nbsp;&nbsp; C. the British
                    navy.&nbsp;&nbsp; D. the Brazilian government. &nbsp;&nbsp;E. Dutch merchants.&nbsp;&nbsp;
                    Answer: Quakers and Baptists.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={66} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={66} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements best applies to Europe's social order in the 18c?:</p>
                <hr />
                <p>A. it differed from the Middle Ages in that wealth was the sole determining factor in a person's
                    social&nbsp;&nbsp;B. the nobility was homogeneous and served the same social function throughout
                    Europe.&nbsp;&nbsp; C. peasants and nobles grew closer socially in eastern Europe where serfdom
                    was eradicated.&nbsp;&nbsp; D. most of 18c European universities allowed students from the lower
                    and middle classes to enroll and a &nbsp;&nbsp;E. peasants were still hindered by a variety of
                    feudal services and fees imposed by the powerful aristo&nbsp;&nbsp; Answer: peasants were still
                    hindered by a variety of feudal services and fees imposed by the powerful aristo</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={67} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={67} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>European efforts to deal with crime after 1700?:</p>
                <hr />
                <p>A. rejected imprisonment because of its high unit cost.&nbsp;&nbsp;B. never employed the use of
                    torture.&nbsp;&nbsp; C. increased the severity of punishment for theft.&nbsp;&nbsp; D. employed
                    public displays of punishment for the purpose of deterrence. &nbsp;&nbsp;E. reserved the use of
                    capital punishment exclusively for criminal cases.&nbsp;&nbsp; Answer: employed public displays
                    of punishment for the purpose of deterrence.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={68} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={68} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Ancien Regime European Jews?:</p>
                <hr />
                <p>A. were separated from non-Jews in districts called ghettos.&nbsp;&nbsp;B. were permitted equal
                    access to social and economic opportunities in western European countries.&nbsp;&nbsp; C. were
                    living primarily in western Europe.&nbsp;&nbsp; D. enjoyed all of the rights and privileges of
                    other subjects. &nbsp;&nbsp;E. were pro-monarchy.&nbsp;&nbsp; Answer: were separated from
                    non-Jews in districts called ghettos.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={69} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={69} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which post-World War II leader is INCORRECTLY paired with the country he led?:</p>
                <hr />
                <p>A. MacMillan and England.&nbsp;&nbsp;B. Tito and Italy.&nbsp;&nbsp; C. Khrushchev and the
                    U.S.S.R.&nbsp;&nbsp; D. DeGaulle and France. &nbsp;&nbsp;E. Adenauer and West
                    Germany.&nbsp;&nbsp; Answer: Tito and Italy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={70} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={70} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The North Atlantic Treaty Organization was formed in response to?:</p>
                <hr />
                <p>A. the events surrounding the Berlin Blockade.&nbsp;&nbsp;B. the communist victory in the civil
                    war in China.&nbsp;&nbsp; C. Soviet refusal of Marshall Plan assistance for all of eastern
                    Europe.&nbsp;&nbsp; D. the Soviet formation of the Warsaw Pact. &nbsp;&nbsp;E. Soviet detonation
                    of its first nuclear device.&nbsp;&nbsp; Answer: the events surrounding the Berlin Blockade.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={71} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={71} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The collapse of the Fourth Republic and the rise of the Fifth Republic occurred in France over?:
                </p>
                <hr />
                <p>A. fear of renewed war with Germany.&nbsp;&nbsp;B. economic collapse.&nbsp;&nbsp; C. breakdown in
                    relations with the United States.&nbsp;&nbsp; D. socialist welfare policy. &nbsp;&nbsp;E. the
                    independence movement in Algeria.&nbsp;&nbsp; Answer: the independence movement in Algeria.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={72} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={72} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Euro-communism is?:</p>
                <hr />
                <p>A. the term used to describe the general program of French communism during the
                    1950s.&nbsp;&nbsp;B. a program devised by Italian Communists to make their policies more
                    compatible with the needs of Wes&nbsp;&nbsp; C. a literary and artistic movement of the late
                    1950s and early 1960s which stressed the importance of &nbsp;&nbsp; D. the hope of Eastern
                    European Communists to maintain some power and credibility after the changes of &nbsp;&nbsp;E.
                    the Soviet policy to expand Soviet hegemony following 1945.&nbsp;&nbsp; Answer: a program
                    devised by Italian Communists to make their policies more compatible with the needs of Wes</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={73} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={73} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The decision of the East Germans to erect a wall dividing East and West Berlin?:</p>
                <hr />
                <p>A. was made in 1961 to halt the flow of refugees from East Germany.&nbsp;&nbsp;B. recognized that
                    Berlin was a city of spies whose movements needed to be restricted.&nbsp;&nbsp; C. to prevent
                    the infiltration of western spies into East Berlin.&nbsp;&nbsp; D. occurred immediately
                    following the outbreak of the Korean War to symbolize Communist disenchantment &nbsp;&nbsp;E.
                    was intended to illustrate that East Germany would never again unite with West
                    Germany.&nbsp;&nbsp; Answer: was made in 1961 to halt the flow of refugees from East Germany.
                </p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={74} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={74} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which communist country successfully asserted independence from Moscow's control soon after the
                    end of the Second World War?:</p>
                <hr />
                <p>A. Bulgaria.&nbsp;&nbsp;B. Poland.&nbsp;&nbsp; C. Yugoslavia.&nbsp;&nbsp; D. Czechoslovakia.
                    &nbsp;&nbsp;E. Hungary.&nbsp;&nbsp; Answer: Yugoslavia.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={75} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={75} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a result of the Polish and Hungarian disturbances in 1956?:</p>
                <hr />
                <p>A. they demonstrated the hollowness of American political rhetoric.&nbsp;&nbsp;B. they
                    demonstrated that Austrian neutrality would not be imitated in Eastern Europe.&nbsp;&nbsp; C.
                    they demonstrated the limitations of independence within the Soviet bloc.&nbsp;&nbsp; D. they
                    exposed the lack of military will on the part of the West to really help freedom-fighters in Ea
                    &nbsp;&nbsp;E. they brought an end to independent action in the Soviet bloc.&nbsp;&nbsp; Answer:
                    they brought an end to independent action in the Soviet bloc.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={76} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={76} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Under Clement Atlee's administration the government?:</p>
                <hr />
                <p>A. undertook a major housing program.&nbsp;&nbsp;B. strongly supported British trade
                    unions.&nbsp;&nbsp; C. assumed ownership of certain major industries.&nbsp;&nbsp; D. instituted
                    a major program of welfare legislation. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={77} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={77} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of the most important causes of the Cold War between the USSR and the United States after
                    World War II was?:</p>
                <hr />
                <p>A. refusal of the Western powers to give the USSR a role in post war Germany.&nbsp;&nbsp;B.
                    rivalries with the Eastern bloc.&nbsp;&nbsp; C. ideological conflicts.&nbsp;&nbsp; D. border
                    disputes in Scandinavia. &nbsp;&nbsp;E. Russian occupation of northern Italy.&nbsp;&nbsp;
                    Answer: ideological conflicts.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={78} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={78} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The ""Prague Spring"" refers to?:"</p>
                <hr />
                <p>A. "a new agricultural program introduced by the Czechoslovak Communist leadership that led to
                    the ""Gr&nbsp;&nbsp;B. the unsuccessful liberalization program attempted by Alexander
                    Dubcek.&nbsp;&nbsp; C. a great drought in 1968.&nbsp;&nbsp; D. a cultural flowering of Czech
                    literature in the immediate post-World War II era. &nbsp;&nbsp;E. the increase in the number of
                    Czech troops committed to the Warsaw Pact.&nbsp;&nbsp; Answer: the unsuccessful liberalization
                    program attempted by Alexander Dubcek.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={79} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={79} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most serious fear shared by Soviet and Western statesmen after World War II was?:</p>
                <hr />
                <p>A. political deadlocks in the United Nations.&nbsp;&nbsp;B. success of communism in
                    Italy.&nbsp;&nbsp; C. formation of the Common Market.&nbsp;&nbsp; D. revival of a strong
                    military state in Germany. &nbsp;&nbsp;E. the failure of democracy in
                    Czechoslovakia.&nbsp;&nbsp; Answer: revival of a strong military state in Germany.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={80} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={80} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which BEST characterizes West Germany's Ostpolitik ?:</p>
                <hr />
                <p>A. the refusal to have economic ties with any nation that extended diplomatic recognition to East
                    Germa&nbsp;&nbsp;B. withdrawal from the Common Market in favor of economic integration in
                    Eastern Europe.&nbsp;&nbsp; C. West German rearmament and participation in NATO.&nbsp;&nbsp; D.
                    the establishment of better relations with Eastern Europe. &nbsp;&nbsp;E. West Germany's
                    withdrawal from the United Nations in 1965.&nbsp;&nbsp; Answer: the establishment of better
                    relations with Eastern Europe.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={81} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={81} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most serious post-World War II split in the Communist Bloc was?:</p>
                <hr />
                <p>A. the rupture of the Soviet-Chinese alliance.&nbsp;&nbsp;B. the defection of Marshall
                    Tito.&nbsp;&nbsp; C. Cuba's objections to Soviet policy.&nbsp;&nbsp; D. the Ceascescu regime in
                    Rumania. &nbsp;&nbsp;E. the loss of Albania.&nbsp;&nbsp; Answer: the rupture of the
                    Soviet-Chinese alliance.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={82} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={82} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Between the death of Stalin and the rise of Gorbachev the Soviet Union?:</p>
                <hr />
                <p>A. dismantled the KGB.&nbsp;&nbsp;B. solved its agricultural problems.&nbsp;&nbsp; C. experienced
                    some liberalization along with increasing economic decline.&nbsp;&nbsp; D. renounced repression
                    of revolt in the satellites. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: experienced some liberalization along with increasing economic decline.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={83} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={83} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Marshall Plan?:</p>
                <hr />
                <p>A. would supply military assistance to any country threatened by communism.&nbsp;&nbsp;B.
                    excluded the Soviet Union and eastern Europe from participation.&nbsp;&nbsp; C. was viewed by
                    Western Europe as Capitalist imperialism.&nbsp;&nbsp; D. was not considered a success.
                    &nbsp;&nbsp;E. intended to rebuild European prosperity and stability.&nbsp;&nbsp; Answer:
                    intended to rebuild European prosperity and stability.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={84} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={84} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of de Gaulle's important achievements was to?:</p>
                <hr />
                <p>A. resolve the Algerian crisis by giving the Algerians the right to vote in the French
                    parliament.&nbsp;&nbsp;B. end political instability in France.&nbsp;&nbsp; C. take the lead in
                    the expansion of the Common Market by negotiating the membership of Britain.&nbsp;&nbsp; D.
                    increase the value of the French franc in relationship to the U. S. dollar. &nbsp;&nbsp;E. take
                    the lead in promoting the non-proliferation of nuclear weapons.&nbsp;&nbsp; Answer: end
                    political instability in France.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={85} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={85} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of Gorbachev's key policies was perestroika which meant?:</p>
                <hr />
                <p>A. drastic restructuring of the centrally planned command economy.&nbsp;&nbsp;B. the rapid
                    creation of a free market economy.&nbsp;&nbsp; C. political rule by a three-person
                    directorate.&nbsp;&nbsp; D. abolishing the KGB and introducing free political elections.
                    &nbsp;&nbsp;E. at first drastic political restructuring; later Gorbachev believed such
                    restructuring could be appli&nbsp;&nbsp; Answer: drastic restructuring of the centrally planned
                    command economy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={86} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={86} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Khrushchev era (1956-64) the Soviet Union?:</p>
                <hr />
                <p>A. retreated from some Stalinist practices.&nbsp;&nbsp;B. enjoyed great expansion in agricultural
                    production.&nbsp;&nbsp; C. sought to join NATO.&nbsp;&nbsp; D. rapidly created a consumer
                    economy. &nbsp;&nbsp;E. became democratic.&nbsp;&nbsp; Answer: retreated from some Stalinist
                    practices.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={87} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={87} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most innovative Soviet postwar scientific achievement was its?:</p>
                <hr />
                <p>A. construction of the world's largest dam on the Volga River.&nbsp;&nbsp;B. construction of the
                    massive gulag network.&nbsp;&nbsp; C. design and production of high-quality fighter
                    planes.&nbsp;&nbsp; D. launch of the world's first unmanned space satellite. &nbsp;&nbsp;E.
                    explosion of atomic and hydrogen bombs.&nbsp;&nbsp; Answer: launch of the world's first unmanned
                    space satellite.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={88} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={88} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Khrushchev solidified his position as Stalin's successor with a speech to the Twentieth Party
                    Congress in 1956 that he?:</p>
                <hr />
                <p>A. further glorified Stalin by revealing some of his additional achievements.&nbsp;&nbsp;B.
                    started a campaign to eliminate Stalin's influence by revealing his atrocities and reducing his
                    pres&nbsp;&nbsp; C. supported the Egyptian side in the Suez Crisis.&nbsp;&nbsp; D. promised a
                    rapid end to communist control of Eastern Europe and China. &nbsp;&nbsp;E. announced an end to
                    the Cold War and the signing of a military alliance with America.&nbsp;&nbsp; Answer: started a
                    campaign to eliminate Stalin's influence by revealing his atrocities and reducing his pres</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={89} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={89} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In reality the policy of detente between the Soviet Union and the United States?:</p>
                <hr />
                <p>A. encouraged the eruption of new conflicts in the Third World.&nbsp;&nbsp;B. only worsened
                    relations and increased tensions among the superpowers.&nbsp;&nbsp; C. was bitterly opposed by
                    both Nixon and Brezhnev.&nbsp;&nbsp; D. defined the process by which the superpowers agreed to
                    formalize their postwar dominance. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp;
                    Answer: defined the process by which the superpowers agreed to formalize their postwar
                    dominance.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={90} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={90} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>As President of France Charles de Gaulle's policy toward the Cold War was to?:</p>
                <hr />
                <p>A. remain independent of both superpowers.&nbsp;&nbsp;B. make France the leading member of
                    NATO.&nbsp;&nbsp; C. follow the American lead throughout.&nbsp;&nbsp; D. form a close military
                    and economic alliance with Britain and West Germany. &nbsp;&nbsp;E. closely align France with
                    the Warsaw Pact nations.&nbsp;&nbsp; Answer: remain independent of both superpowers.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={91} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={91} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The European Economic Community had its origins in an agreement about?:</p>
                <hr />
                <p>A. agricultural production.&nbsp;&nbsp;B. coal and steel production.&nbsp;&nbsp; C. railway
                    operation.&nbsp;&nbsp; D. river navigation. &nbsp;&nbsp;E. response to the report of the Club of
                    Rome.&nbsp;&nbsp; Answer: coal and steel production.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={92} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={92} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are reactions to the development of nuclear weapons EXCEPT?:</p>
                <hr />
                <p>A. "fear of M.A.D. ""mutually assured destruction"" which led to the suspension of nuclear
                    war."&nbsp;&nbsp;B. the proliferation of nuclear weapons.&nbsp;&nbsp; C. the decline in the
                    number of guerilla wars with their dependence on traditional weapons.&nbsp;&nbsp; D. modern war
                    technology which was confined to countries that can afford it often with traumatic conseq
                    &nbsp;&nbsp;E. the space exploration programs of the Soviet Union and the United States which
                    inclded a considerati&nbsp;&nbsp; Answer: the decline in the number of guerilla wars with their
                    dependence on traditional weapons.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={93} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={93} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The outbreak of student revolts in Western Europe the late 1960s was inspired by?:</p>
                <hr />
                <p>A. the war in Vietnam.&nbsp;&nbsp;B. overcrowded classrooms and lack of professorial
                    attention.&nbsp;&nbsp; C. discontent with materialism.&nbsp;&nbsp; D. poor job prospects for new
                    graduates. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these
                    choices are correct.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={94} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={94} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The 1960 US-USSR summit meeting was wrecked when?:</p>
                <hr />
                <p>A. the United States put a quarantine around Cuba.&nbsp;&nbsp;B. the Soviets crushed an uprising
                    in Hungary.&nbsp;&nbsp; C. the United States discovered a number of Soviet spies in its
                    midst.&nbsp;&nbsp; D. the Soviets erected the Berlin Wall. &nbsp;&nbsp;E. a U-2 spy plane was
                    shot down over Russia.&nbsp;&nbsp; Answer: a U-2 spy plane was shot down over Russia.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={95} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={95} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Margaret Thatcher's popularity rose when she successfully prevented?:</p>
                <hr />
                <p>A. Japan from taking Taiwan.&nbsp;&nbsp;B. Argentina from taking the Falklands.&nbsp;&nbsp; C.
                    China from taking Hong Kong.&nbsp;&nbsp; D. India from taking Burma. &nbsp;&nbsp;E. Mexico from
                    taking El Salvador.&nbsp;&nbsp; Answer: Argentina from taking the Falklands.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={96} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={96} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thatcherism stressed all of the following EXCEPT?:</p>
                <hr />
                <p>A. nationalization of industries.&nbsp;&nbsp;B. high interest rates.&nbsp;&nbsp; C. destroying
                    the power of labor unions.&nbsp;&nbsp; D. sharp tax cuts. &nbsp;&nbsp;E. reduced government
                    spending.&nbsp;&nbsp; Answer: nationalization of industries.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={97} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={97} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Solidarity movement in Poland which ultimately toppled the communist regime was helped by
                    what other Polish institution?:</p>
                <hr />
                <p>A. the Polish parliament.&nbsp;&nbsp;B. the peasantry.&nbsp;&nbsp; C. the army.&nbsp;&nbsp; D.
                    the Catholic Church. &nbsp;&nbsp;E. the dissident communist party members.&nbsp;&nbsp; Answer:
                    the Catholic Church.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={98} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={98} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The first European country to enter into direct trade with the Far East and establish colonies
                    there was?:</p>
                <hr />
                <p>A. Spain.&nbsp;&nbsp;B. France.&nbsp;&nbsp; C. Britain.&nbsp;&nbsp; D. Portugal. &nbsp;&nbsp;E.
                    Holland.&nbsp;&nbsp; Answer: Portugal.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={99} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={99} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Spanish empire in America was characterized by?:</p>
                <hr />
                <p>A. its enormous African slave population.&nbsp;&nbsp;B. a large creole class of higher-level
                    colonial government officials.&nbsp;&nbsp; C. the relatively large white population.&nbsp;&nbsp;
                    D. the exhaustion of the great silver mines of Mexico and Peru by 1550. &nbsp;&nbsp;E. the
                    introduction of a manorial-like system the encomienda.&nbsp;&nbsp; Answer: the introduction of a
                    manorial-like system the encomienda.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={100} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={100} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following groups generally benefited from the inflation of the sixteenth century?:
                </p>
                <hr />
                <p>A. landowning nobility.&nbsp;&nbsp;B. merchants.&nbsp;&nbsp; C. peasants.&nbsp;&nbsp; D. colonial
                    officials. &nbsp;&nbsp;E. all of these groups benefited.&nbsp;&nbsp; Answer: merchants.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={101} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={101} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why did the English Dutch and French governments fail to begin colonization of the Americas and
                    direct trade with the Orient until more than 100 years after Columbus discovered America?:</p>
                <hr />
                <p>A. their geographical positions put them at a disadvantage for trans-oceanic
                    movement.&nbsp;&nbsp;B. the northern countries lacked suitable ships and the advanced technology
                    to make long voyages.&nbsp;&nbsp; C. domestic troubles and religious controversies delayed
                    organized action.&nbsp;&nbsp; D. Western European bankers refused to loan monarchs money for
                    such ventures. &nbsp;&nbsp;E. the northerners were slow to abandon their traditional
                    Mediterranean trade routes.&nbsp;&nbsp; Answer: domestic troubles and religious controversies
                    delayed organized action.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={102} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={102} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Spain's expansion in the Americas was made particularly easy by?:</p>
                <hr />
                <p>A. the absence of prior civilizations among the native peoples.&nbsp;&nbsp;B. the impact of
                    imported diseases on the Indian population.&nbsp;&nbsp; C. Spain's leadership in European
                    banking and commerce.&nbsp;&nbsp; D. the belief that Europe had much to learn from the religions
                    and customs of other peoples. &nbsp;&nbsp;E. competition between Protestant and Catholic
                    missionaries sent out by Spain.&nbsp;&nbsp; Answer: the impact of imported diseases on the
                    Indian population.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={103} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={103} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Treaty of Tordesillas (1494) granted Portugal the eastern trade route to the Indies as well
                    as Brazil; lands to the west of Brazil were given to?:</p>
                <hr />
                <p>A. England.&nbsp;&nbsp;B. Italy.&nbsp;&nbsp; C. Spain.&nbsp;&nbsp; D. France. &nbsp;&nbsp;E.
                    Holland.&nbsp;&nbsp; Answer: Spain.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={104} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={104} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The technological innovations in maritime technology by the 1500s were important because?:</p>
                <hr />
                <p>A. they made it cheaper to sail.&nbsp;&nbsp;B. they increased the number of slaved needed to sail
                    the ships.&nbsp;&nbsp; C. they required literate sailors.&nbsp;&nbsp; D. they made it possible
                    for Europeans to sail anywhere. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: they made it possible for Europeans to sail anywhere.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={105} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={105} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>By the 16th century the center of commercial activity had shifted from the Mediterranean to the?:
                </p>
                <hr />
                <p>A. Atlantic Ocean.&nbsp;&nbsp;B. Red Sea.&nbsp;&nbsp; C. Indian Ocean.&nbsp;&nbsp; D. Baltic Sea.
                    &nbsp;&nbsp;E. North Sea.&nbsp;&nbsp; Answer: Atlantic Ocean.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={106} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={106} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Encomiendas in the Spanish New World were?:</p>
                <hr />
                <p>A. local councils of aristocratics who assisted the viceroys.&nbsp;&nbsp;B. grants permitting
                    owners to take income or labor from land and its inhabitants.&nbsp;&nbsp; C. special schools set
                    up in the Franciscan missions to educate native Indian children.&nbsp;&nbsp; D. elected colonial
                    assemblies. &nbsp;&nbsp;E. local Indian chiefs who collected taxes and administered Spanish
                    laws.&nbsp;&nbsp; Answer: grants permitting owners to take income or labor from land and its
                    inhabitants.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={107} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={107} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Scarcity of labor in the Americas led the Spanish and Portuguese colonizers to?:</p>
                <hr />
                <p>A. establish a wage-earning system for the Indians.&nbsp;&nbsp;B. institute policies that
                    protected the Indians.&nbsp;&nbsp; C. import slaves from Africa.&nbsp;&nbsp; D. encourage
                    English and Dutch settlers to emigrate to the New World. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: import slaves from Africa.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={108} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={108} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Mediterranean carrying trade in the 14c and 15c was in the hands of?:</p>
                <hr />
                <p>A. the Marseilles merchants.&nbsp;&nbsp;B. Venice.&nbsp;&nbsp; C. Constantinople.&nbsp;&nbsp; D.
                    Greek city-states. &nbsp;&nbsp;E. Florence.&nbsp;&nbsp; Answer: Venice.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={109} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={109} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Portuguese exploration of the African coast was inspired and supported by?:</p>
                <hr />
                <p>A. Bartholomew Diaz.&nbsp;&nbsp;B. Emperor Charles V.&nbsp;&nbsp; C. Ferdinand and
                    Isabella.&nbsp;&nbsp; D. John Cabot. &nbsp;&nbsp;E. Prince Henry the Navigator.&nbsp;&nbsp;
                    Answer: Prince Henry the Navigator.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={110} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={110} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The major cause of the growing weakness of Spain and Portugal after 1600 was the?:</p>
                <hr />
                <p>A. drain placed on Iberia's finances by colonization efforts in the Americas.&nbsp;&nbsp;B.
                    failure to find productive investments with profits from New World colonies.&nbsp;&nbsp; C.
                    invasion of the Iberian Peninsula by France.&nbsp;&nbsp; D. deflationary impact of bullion
                    imports. &nbsp;&nbsp;E. successful opposition by Amerindians and Africans.&nbsp;&nbsp; Answer:
                    failure to find productive investments with profits from New World colonies.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={111} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={111} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following helped cause the Age of European Exploration EXCEPT?:</p>
                <hr />
                <p>A. technological advances making long sea voyages possible.&nbsp;&nbsp;B. the desire to spread
                    Christianity to native Indian peoples.&nbsp;&nbsp; C. the Mughals' continued encroachment into
                    Central Europe.&nbsp;&nbsp; D. European demand for eastern spices. &nbsp;&nbsp;E. Ottoman
                    expansion threatening access to the goods of the East.&nbsp;&nbsp; Answer: the Mughals'
                    continued encroachment into Central Europe.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={112} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={112} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1571 the Spanish and Turkish control of the Mediterranean at the battle of?:</p>
                <hr />
                <p>A. the Dardanelles.&nbsp;&nbsp;B. Gibraltar.&nbsp;&nbsp; C. Trafalgar.&nbsp;&nbsp; D. Lepanto.
                    &nbsp;&nbsp;E. Haifa.&nbsp;&nbsp; Answer: Lepanto.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={113} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={113} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which BEST explains the decline of Spanish power in the 17c?:</p>
                <hr />
                <p>A. foolish monarchs and an uncertain flow of treasure from the New World.&nbsp;&nbsp;B. an
                    unproductive and wasteful nobility.&nbsp;&nbsp; C. foreign policy reversals.&nbsp;&nbsp; D. the
                    decline of the importation of raw materials. &nbsp;&nbsp;E. the Catholic Church no longer
                    supported the merchant class in Spain.&nbsp;&nbsp; Answer: foolish monarchs and an uncertain
                    flow of treasure from the New World.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={114} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={114} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why did the initiative in early conquest and exploration pass to northern European nations in the
                    later 16c?:</p>
                <hr />
                <p>A. Spain and Portugal were defeated in a critical war with the Ottoman Empire.&nbsp;&nbsp;B. the
                    Dutch and the British improved the design of oceanic vessels producing faster ships than their
                    C&nbsp;&nbsp; C. famine and disease disastrously reduced the population of the Iberian Peninsula
                    after 1588.&nbsp;&nbsp; D. the French and Danish business infrastructures were more developed
                    than in the Iberian Peninsula cou &nbsp;&nbsp;E. the Spanish defeat of the English Armada cut
                    England off from further advance in Europe and forced E&nbsp;&nbsp; Answer: the Dutch and the
                    British improved the design of oceanic vessels producing faster ships than their C</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={115} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={115} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>At its height (ca. 1580) the Spanish empire of Philip II included all of the following EXCEPT?:
                </p>
                <hr />
                <p>A. Milan.&nbsp;&nbsp;B. the Free County of Burgundy.&nbsp;&nbsp; C. Silesia.&nbsp;&nbsp; D.
                    Bohemia. &nbsp;&nbsp;E. Portugal.&nbsp;&nbsp; Answer: Bohemia.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={116} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={116} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For England the primary result of the 16c wars with Spain was that it?:</p>
                <hr />
                <p>A. made her Europe's strongest power.&nbsp;&nbsp;B. forced England to tolerate her Catholic
                    minority.&nbsp;&nbsp; C. resulted in the immediate death of its main colonial rival Philip II of
                    Spain.&nbsp;&nbsp; D. bankrupted her treasury forcing Elizabeth to become more and more
                    dependent on parliament. &nbsp;&nbsp;E. assured her national independence and promoted an
                    intense national spirit.&nbsp;&nbsp; Answer: assured her national independence and promoted an
                    intense national spirit.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={117} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={117} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Rousseau's conception of the General Will meant?:</p>
                <hr />
                <p>A. representative democracy.&nbsp;&nbsp;B. "a vague common ""interest"" but not necessarily
                    majority rule."&nbsp;&nbsp; C. perhaps democracy but much more probably a kind of totalitarian
                    dictatorship.&nbsp;&nbsp; D. the pressure of organized public opinion which could be most
                    successfully expressed through moderniz &nbsp;&nbsp;E. none of these choices are
                    correct.&nbsp;&nbsp; Answer: "a vague common ""interest"" but not necessarily majority rule."
                </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={118} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={118} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Voltaire's famous polemic slogan Crush the infamous thing! referred to?:</p>
                <hr />
                <p>A. royal despotism.&nbsp;&nbsp;B. censorship laws.&nbsp;&nbsp; C. political
                    radicalism.&nbsp;&nbsp; D. religious bigotry as supported by an organized clergy. &nbsp;&nbsp;E.
                    constitutional monarchy.&nbsp;&nbsp; Answer: religious bigotry as supported by an organized
                    clergy.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={119} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={119} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In general the 18c philosophes were?:</p>
                <hr />
                <p>A. popularizers of the scientific and intellectual discoveries of the 17c.&nbsp;&nbsp;B. a group
                    of philosophers concerned with reexamining the ultimate questions of man's
                    existence.&nbsp;&nbsp; C. a group of learned Christian clerics who wished to modernize
                    religion.&nbsp;&nbsp; D. originators of a new philosophy based on reason and the concept of
                    natural law. &nbsp;&nbsp;E. people who were always the wealthiest members of 18c Western
                    European society.&nbsp;&nbsp; Answer: popularizers of the scientific and intellectual
                    discoveries of the 17c.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={120} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={120} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The best government said which of the following men is achieved by the separation of powers?:</p>
                <hr />
                <p>A. Locke.&nbsp;&nbsp;B. Voltaire.&nbsp;&nbsp; C. Montesqiueu.&nbsp;&nbsp; D. Diderot.
                    &nbsp;&nbsp;E. Hobbes.&nbsp;&nbsp; Answer: Montesqiueu.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={121} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={121} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Both Montesquieu and Voltaire?:</p>
                <hr />
                <p>A. admired the Middle Ages.&nbsp;&nbsp;B. supported some censorship on speech and religious
                    beliefs.&nbsp;&nbsp; C. rejected common law and preferred traditional Roman law
                    codes.&nbsp;&nbsp; D. preferred a rational absolute central government. &nbsp;&nbsp;E. admired
                    English institutions.&nbsp;&nbsp; Answer: admired English institutions.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={122} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={122} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a principle of Deism?:</p>
                <hr />
                <p>A. God favors a rational morality.&nbsp;&nbsp;B. science proves that God does not
                    exist.&nbsp;&nbsp; C. rewards and punishments are metted out in the afterlife.&nbsp;&nbsp; D.
                    nature has a rational order. &nbsp;&nbsp;E. God is not interested in the everday lives of
                    humans.&nbsp;&nbsp; Answer: science proves that God does not exist.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={123} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={123} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thinkers of the Enlightenment considered humanity as?:</p>
                <hr />
                <p>A. emotional believers in God.&nbsp;&nbsp;B. bundles of feelings animal urges and
                    fears.&nbsp;&nbsp; C. a link in the rationally ordered chain of beings.&nbsp;&nbsp; D. incapable
                    of reason. &nbsp;&nbsp;E. the only reason for a divinely inspired universe.&nbsp;&nbsp; Answer:
                    a link in the rationally ordered chain of beings.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={124} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={124} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Enlightenment philosophes argued that women?:</p>
                <hr />
                <p>A. were equal to men.&nbsp;&nbsp;B. should be allowed to vote.&nbsp;&nbsp; C. were biologically
                    different from men but were political equals to men.&nbsp;&nbsp; D. have no innate knowledge.
                    &nbsp;&nbsp;E. and men were different and operated in separate spheres.&nbsp;&nbsp; Answer: and
                    men were different and operated in separate spheres.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={125} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={125} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Maria Theresa can be labeled an ""Enlightened Despot"" because she?:"</p>
                <hr />
                <p>A. introduced religious toleration in the Habsburg Empire.&nbsp;&nbsp;B. abolished political
                    torture and persecution of different points of view.&nbsp;&nbsp; C. eliminated the death penalty
                    in the Habsburg Empire.&nbsp;&nbsp; D. introduced many legal reforms in the Habsburg Empire.
                    &nbsp;&nbsp;E. invited political radicals to live in her palace in Vienna.&nbsp;&nbsp; Answer:
                    introduced many legal reforms in the Habsburg Empire.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={126} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={126} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>David Hume argued that human beings?:</p>
                <hr />
                <p>A. did possess innate truths about God.&nbsp;&nbsp;B. confirmed their innate understanding about
                    God by reading the Scriptures.&nbsp;&nbsp; C. did not have any certain knowlede at
                    birth.&nbsp;&nbsp; D. possessed both innate and learned truths about God. &nbsp;&nbsp;E. "were
                    born like a tabula rasa upon which life experience would ""write"" its impressions."&nbsp;&nbsp;
                    Answer: did not have any certain knowlede at birth.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={127} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={127} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For Rousseau what was the main source of inequality and the chief cause of crime?:</p>
                <hr />
                <p>A. marriage.&nbsp;&nbsp;B. religion.&nbsp;&nbsp; C. philosophical knowledge.&nbsp;&nbsp; D.
                    education. &nbsp;&nbsp;E. private property.&nbsp;&nbsp; Answer: private property.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={128} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={128} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most important contribution Catherine the Great made early in her reign was the?:</p>
                <hr />
                <p>A. establishment of a legislative commission to review the laws of Russia.&nbsp;&nbsp;B.
                    abolition of serfdom and establishment of a progressive form of sharecropping.&nbsp;&nbsp; C.
                    peace pact she made with Sweden thus ending 60 years of intermittent warfare.&nbsp;&nbsp; D.
                    elimination of Russian Orthodox churchment from state service. &nbsp;&nbsp;E. initiation of a
                    new poll tax to increase tax revenues needed for future wars.&nbsp;&nbsp; Answer: establishment
                    of a legislative commission to review the laws of Russia.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={129} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={129} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are considered major factors that fostered the ideals of the Enlightenment
                    EXCEPT?:</p>
                <hr />
                <p>A. the stability and commercial prosperity of Great Britain after 1688.&nbsp;&nbsp;B. the
                    colonial worldview.&nbsp;&nbsp; C. the Newtonian worldview.&nbsp;&nbsp; D. the need for
                    administrative and economic reform in France after the wars of Louis XIV. &nbsp;&nbsp;E. the
                    consolidation of a print culture.&nbsp;&nbsp; Answer: the colonial worldview.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={130} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={130} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Many 18c philosophes believed that governmental reform would be accomplished by?:</p>
                <hr />
                <p>A. the introduction of democracy.&nbsp;&nbsp;B. empowering the nobles at the expense of the
                    kings.&nbsp;&nbsp; C. benevolent absolutist monarchs.&nbsp;&nbsp; D. revolution. &nbsp;&nbsp;E.
                    trusting the masses.&nbsp;&nbsp; Answer: benevolent absolutist monarchs.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={131} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={131} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The ideas of the Enlightenment challenged the long-term assumptions about sovereignty and instead
                    proposed that?:</p>
                <hr />
                <p>A. true government stems from religious authority.&nbsp;&nbsp;B. governments are bound to the
                    will of the people&nbsp;&nbsp; C. the best form of government is a democracy.&nbsp;&nbsp; D. all
                    government is inherently unjust. Humans are better off living in a state of nature.
                    &nbsp;&nbsp;E. church and state should be entirely separate.&nbsp;&nbsp; Answer: governments are
                    bound to the will of the people</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={132} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={132} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following CANNOT be said of the 18c Enlightenment?:</p>
                <hr />
                <p>A. the Newtonian Revolution of the previous century set it in motion.&nbsp;&nbsp;B. it was based
                    on the belief that unchangeable natural laws governed human society as well as the
                    phys&nbsp;&nbsp; C. it supported the assumption that human reason could fathom the natural
                    laws.&nbsp;&nbsp; D. it reflected acceptance of social inequities and injustices as inevitable
                    effects of the natural law &nbsp;&nbsp;E. it was optimistic and progress-oriented.&nbsp;&nbsp;
                    Answer: it reflected acceptance of social inequities and injustices as inevitable effects of the
                    natural law</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={133} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={133} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Enlightenment?:</p>
                <hr />
                <p>A. was based upon the assumption that science and reason can explain all things.&nbsp;&nbsp;B.
                    "regarded human progress as an impossibility ""in this best of all possible
                    worlds."""&nbsp;&nbsp; C. was diametrically opposed to the Newtonian concept of natural
                    law.&nbsp;&nbsp; D. rejected the claims of modern science. &nbsp;&nbsp;E. was widely attacked by
                    the royalty and nobility of Europe.&nbsp;&nbsp; Answer: was based upon the assumption that
                    science and reason can explain all things.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={134} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={134} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The recognized capital of the Enlightenment was?:</p>
                <hr />
                <p>A. London.&nbsp;&nbsp;B. Amsterdam.&nbsp;&nbsp; C. Paris.&nbsp;&nbsp; D. Vienna. &nbsp;&nbsp;E.
                    St. Petersburg&nbsp;&nbsp; Answer: Paris.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={135} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={135} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Rousseau's most important concept in The Social Contract was that?:</p>
                <hr />
                <p>A. government must be based on the absolute authority of a divinely appointed
                    monarch.&nbsp;&nbsp;B. the main function of laws is to subdue man's evil nature.&nbsp;&nbsp; C.
                    governments exist by divine plan and to rebel against them is to rebel against God.&nbsp;&nbsp;
                    D. "the monarchy is the outward expression of the ""general will.""" &nbsp;&nbsp;E. government
                    must be based on voluntary participation by citizens not simply by the accident of
                    histor&nbsp;&nbsp; Answer: government must be based on voluntary participation by citizens not
                    simply by the accident of histor</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={136} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={136} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Recent scholarship suggests that the enlightened despots of Europe?:</p>
                <hr />
                <p>A. "were more ""enlightened"" than ""despotic."""&nbsp;&nbsp;B. represent a new type of monarchy
                    that emerged in the eighteenth century.&nbsp;&nbsp; C. were affected little by Enlightenment
                    ideas.&nbsp;&nbsp; D. had absolutely nothing to do with the philosophes or their ideas.
                    &nbsp;&nbsp;E. relished the opportunity to implement the ideas of the philosophes .&nbsp;&nbsp;
                    Answer: were affected little by Enlightenment ideas.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={137} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={137} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Recent challenges to the traditional explanation of the origins of the French Revolution have
                    centered on the fact that the?:</p>
                <hr />
                <p>A. Old Regime did not correspond to social reality.&nbsp;&nbsp;B. nobility and upper bourgeoisie
                    were not necessarily pitted against each other.&nbsp;&nbsp; C. clergy played a liberal role in
                    French society.&nbsp;&nbsp; D. revolution broke out all over France not just in Paris.
                    &nbsp;&nbsp;E. lower middle class was actually more reactionary than radical.&nbsp;&nbsp;
                    Answer: nobility and upper bourgeoisie were not necessarily pitted against each other.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={138} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={138} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The principal French tax the taille was paid by?:</p>
                <hr />
                <p>A. every Frenchman.&nbsp;&nbsp;B. the nobility only.&nbsp;&nbsp; C. the peasantry almost
                    exclusively.&nbsp;&nbsp; D. parish priests. &nbsp;&nbsp;E. the bourgeoisie only.&nbsp;&nbsp;
                    Answer: the peasantry almost exclusively.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={139} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={139} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>An English statesman whose criticism of the French Revolution and other writings have earned him
                    a reputation as a spokesman for conservatism was?:</p>
                <hr />
                <p>A. Charles Townshend.&nbsp;&nbsp;B. George Grenville.&nbsp;&nbsp; C. Sir Robert
                    Blake.&nbsp;&nbsp; D. William Pitt the Younger. &nbsp;&nbsp;E. Edmund Burke.&nbsp;&nbsp; Answer:
                    Edmund Burke.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={140} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={140} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are accurate statements about the French Revolution EXCEPT?:</p>
                <hr />
                <p>A. France had a non-representative government before and after the French
                    Revolution.&nbsp;&nbsp;B. the Revolution destroyed the vestiges of manorialism.&nbsp;&nbsp; C.
                    the ideals of the French Revolution spread throughout Europe.&nbsp;&nbsp; D. the Revolution
                    failed to end the legal inequities between the classes. &nbsp;&nbsp;E. the Revolution influenced
                    French society to measure status by ability rather than by birth.&nbsp;&nbsp; Answer: the
                    Revolution failed to end the legal inequities between the classes.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={141} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={141} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the era of the French Revolution the Thermidorean Reaction?:</p>
                <hr />
                <p>A. terminated the Reign of Terror and led to the execution of Robespierre.&nbsp;&nbsp;B.
                    initiated the Reign of Terror.&nbsp;&nbsp; C. resulted in the dissolution of the National
                    Assembly.&nbsp;&nbsp; D. was the direct cause for the rise of Napoleon. &nbsp;&nbsp;E. witnessed
                    the execution of Louis XVI and Marie Antoinette.&nbsp;&nbsp; Answer: terminated the Reign of
                    Terror and led to the execution of Robespierre.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={142} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={142} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the Reign of Terror the Committee of Public Safety sought to do all of the following
                    EXCEPT?:</p>
                <hr />
                <p>A. suppress independent sans-culotte activity.&nbsp;&nbsp;B. protect the revolution from its
                    domestic foes.&nbsp;&nbsp; C. establish a separation between state and religion.&nbsp;&nbsp; D.
                    drive foreign armies out of France. &nbsp;&nbsp;E. prevent runaway inflation.&nbsp;&nbsp;
                    Answer: establish a separation between state and religion.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={143} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={143} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The legislators of the French Revolution enacted all of the following measures that affected
                    women EXCEPT a law?:</p>
                <hr />
                <p>A. permitting either party in a marriage to request a divorce.&nbsp;&nbsp;B. giving women the
                    right to control their own property.&nbsp;&nbsp; C. forbidding the formation of political clubs
                    for women.&nbsp;&nbsp; D. permitting nuns to quit their vows. &nbsp;&nbsp;E. granting the right
                    to vote to women who owned a sufficient amount of property.&nbsp;&nbsp; Answer: granting the
                    right to vote to women who owned a sufficient amount of property.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={144} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={144} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was a result of the Civil Constitution of the Clergy ?:</p>
                <hr />
                <p>A. the clergy were given a privileged position in the Estates-General.&nbsp;&nbsp;B. the church
                    was made a department of the French state.&nbsp;&nbsp; C. the clergy were condemned to execution
                    during the Reign of Terror.&nbsp;&nbsp; D. the office of bishop was abolished. &nbsp;&nbsp;E.
                    the church was made completely independent from the state.&nbsp;&nbsp; Answer: the church was
                    made a department of the French state.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={145} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={145} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The National Assembly's efforts to reorganize the Catholic Church resulted in?:</p>
                <hr />
                <p>A. deep division within both the country and the clergy.&nbsp;&nbsp;B. the endorsement of the
                    Revolution by the church.&nbsp;&nbsp; C. an equitable redistribution of monastic lands among the
                    peasants.&nbsp;&nbsp; D. the War of the First Coalition. &nbsp;&nbsp;E. the dismemberment of the
                    French national church and closer ties being made with the papacy.&nbsp;&nbsp; Answer: deep
                    division within both the country and the clergy.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={146} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={146} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The new Republican calendar of 1793?:</p>
                <hr />
                <p>A. was based on the old Gregorian calendar that had gone out of use in the 16.&nbsp;&nbsp;B. was
                    kept until Napoleon's defeat in 1815.&nbsp;&nbsp; C. was well received by most of the
                    people.&nbsp;&nbsp; D. was part of an effort at dechristianization. &nbsp;&nbsp;E. named days
                    and months after former kings.&nbsp;&nbsp; Answer: was part of an effort at dechristianization.
                </p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={147} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={147} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Declaration of the Rights of Man and Citizen guaranteed?:</p>
                <hr />
                <p>A. universal manhood suffrage.&nbsp;&nbsp;B. abolition of the monarchy.&nbsp;&nbsp; C. free
                    education.&nbsp;&nbsp; D. no new taxes. &nbsp;&nbsp;E. security of property.&nbsp;&nbsp; Answer:
                    security of property.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={148} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={148} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The cahiers de doleances of 1789 generally demanded?:</p>
                <hr />
                <p>A. the death of the king.&nbsp;&nbsp;B. government reforms.&nbsp;&nbsp; C. war with
                    Austria.&nbsp;&nbsp; D. an end to the use of the guillotine. &nbsp;&nbsp;E. the overthrow of the
                    Church.&nbsp;&nbsp; Answer: government reforms.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={149} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={149} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The greatest number of victims under ""The Terror"" (1793-1794) were from which social group?:"
                </p>
                <hr />
                <p>A. clergy.&nbsp;&nbsp;B. nobility.&nbsp;&nbsp; C. foreigners.&nbsp;&nbsp; D. bourgeoisie.
                    &nbsp;&nbsp;E. peasants.&nbsp;&nbsp; Answer: peasants.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={150} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={150} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was responsible for the convening of the Estates General in 1789?:</p>
                <hr />
                <p>A. the storming of the Bastille.&nbsp;&nbsp;B. peasant rejection of increased manorial
                    dues.&nbsp;&nbsp; C. royal abolition of guild restrictions.&nbsp;&nbsp; D. the French
                    government's near bankruptcy. &nbsp;&nbsp;E. religious warfare between Huguenots and
                    Catholics.&nbsp;&nbsp; Answer: the French government's near bankruptcy.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={151} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={151} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The French National Assembly was established by?:</p>
                <hr />
                <p>A. leading philosophes .&nbsp;&nbsp;B. the aristocracy.&nbsp;&nbsp; C. King Louis
                    XVI.&nbsp;&nbsp; D. the sans-culottes . &nbsp;&nbsp;E. the middle class of the Third
                    Estate.&nbsp;&nbsp; Answer: the middle class of the Third Estate.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={152} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={152} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The seizure of the Bastille on July 14 1789 was important because it?:</p>
                <hr />
                <p>A. gave the sans-cullotte a strong fort.&nbsp;&nbsp;B. released thousands of prisoners who joined
                    the revolutionaries.&nbsp;&nbsp; C. represented a successful attack on the tyranny of the Old
                    Regime.&nbsp;&nbsp; D. placed the royal family under the control of the Paris mobs.
                    &nbsp;&nbsp;E. brought Britain into the war against the French Republic.&nbsp;&nbsp; Answer:
                    represented a successful attack on the tyranny of the Old Regime.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={153} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={153} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The assignats of the French Revolutionary era were?:</p>
                <hr />
                <p>A. paper currency backed by church lands.&nbsp;&nbsp;B. plots of land sold to
                    peasants.&nbsp;&nbsp; C. members of a moderate political party.&nbsp;&nbsp; D. nobles who fled
                    from France. &nbsp;&nbsp;E. peasant revolts against the Republic.&nbsp;&nbsp; Answer: paper
                    currency backed by church lands.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={154} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={154} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>For the French peasants the Revolution of 1789 meant?:</p>
                <hr />
                <p>A. a general movement from the countryside to urban areas.&nbsp;&nbsp;B. greater
                    landownership.&nbsp;&nbsp; C. few if any gains.&nbsp;&nbsp; D. an end to forced conscription in
                    the army. &nbsp;&nbsp;E. significant political power.&nbsp;&nbsp; Answer: greater landownership.
                </p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={155} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={155} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Abbe Sieyes's answer to the question ""What is the Third Estate?"" was"</p>
                <hr />
                <p>A. a bunch of radicals.&nbsp;&nbsp;B. those who adhered to liberalism.&nbsp;&nbsp; C. the most
                    useful component of French society.&nbsp;&nbsp; D. the business and professional elite.
                    &nbsp;&nbsp;E. the community of artists and musicians.&nbsp;&nbsp; Answer: the most useful
                    component of French society.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={156} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={156} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The term ""Great Fear"" refers to"</p>
                <hr />
                <p>A. the horiffic retreat of the French Army from Russia in 1812.&nbsp;&nbsp;B. murder of thousands
                    of enemies of the Revolution in the prisons.&nbsp;&nbsp; C. panic in the countryside that fanned
                    the flames of rebellion.&nbsp;&nbsp; D. the fear of an English invasion of France.
                    &nbsp;&nbsp;E. Use of the guillotine during the Reign of Terror.&nbsp;&nbsp; Answer: panic in
                    the countryside that fanned the flames of rebellion.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={157} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={157} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The men elected to represent the third estate in the Estates General were primarily?:</p>
                <hr />
                <p>A. provincial nobles.&nbsp;&nbsp;B. businessmen.&nbsp;&nbsp; C. soldiers.&nbsp;&nbsp; D. lawyers
                    and government officials. &nbsp;&nbsp;E. sans-culottes.&nbsp;&nbsp; Answer: lawyers and
                    government officials.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={158} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={158} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Written in the midst of the French Revolution the 1793 Constitution?:</p>
                <hr />
                <p>A. was written by a group of revolutionaries known as the Directory.&nbsp;&nbsp;B. was very
                    similar to the 1790 version.&nbsp;&nbsp; C. owed its existence solely to the American
                    Declaration of Independence.&nbsp;&nbsp; D. was a conservtive document that prepared the way for
                    Napoleon's rise to power as emperor. &nbsp;&nbsp;E. reflected the vision of Rousseau's social
                    contract.&nbsp;&nbsp; Answer: reflected the vision of Rousseau's social contract.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={159} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={159} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Committee of Public Safety was established to?:</p>
                <hr />
                <p>A. negotiate a military alliance with England.&nbsp;&nbsp;B. combat the dual threat of internal
                    rebellion/counter-revolutionaries and foreign invasion.&nbsp;&nbsp; C. provide the nation with a
                    new liberal monarchy.&nbsp;&nbsp; D. negotiate the safe return of the French army from Prussia.
                    &nbsp;&nbsp;E. train a new generation of intendants who were more loyal to the bourgeoisie
                    government in power in 1&nbsp;&nbsp; Answer: combat the dual threat of internal
                    rebellion/counter-revolutionaries and foreign invasion.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={160} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={160} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Louis XVI responded to the Tennis Court Oath by?:</p>
                <hr />
                <p>A. arresting the principal leaders of the National Assembly.&nbsp;&nbsp;B. attempting to transfer
                    the meetings of the estates to southern France.&nbsp;&nbsp; C. promising to reform the national
                    tax-collecting system.&nbsp;&nbsp; D. ordering the National Guard to surround the National
                    Assembly. &nbsp;&nbsp;E. declaring the actions of the third estate illegal.&nbsp;&nbsp; Answer:
                    declaring the actions of the third estate illegal.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={161} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={161} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following groups in France were most opposed to the Civil Constitution of the
                    Clergy?:</p>
                <hr />
                <p>A. deists.&nbsp;&nbsp;B. bourgeoisie.&nbsp;&nbsp; C. Jacobins.&nbsp;&nbsp; D. peasants.
                    &nbsp;&nbsp;E. liberal aristocrats.&nbsp;&nbsp; Answer: peasants.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={162} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={162} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Lettres de cachet were a means by which the French king could?:</p>
                <hr />
                <p>A. arrange for a meeting with his mistress.&nbsp;&nbsp;B. correspond informally with ministers of
                    foreign nations.&nbsp;&nbsp; C. imprison anyone without benefit of a trial.&nbsp;&nbsp; D.
                    execute criminals convicted of capital offenses. &nbsp;&nbsp;E. transferred power from the
                    bourgeoisie to the privileged orders in society.&nbsp;&nbsp; Answer: imprison anyone without
                    benefit of a trial.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={163} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={163} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The political views of the Girondists were?:</p>
                <hr />
                <p>A. more moderate than the view of other Jacobins.&nbsp;&nbsp;B. sympathetic to a restored
                    monarchy.&nbsp;&nbsp; C. somewhat moderate but very anti-Catholic.&nbsp;&nbsp; D. the most
                    radical of those in power. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer:
                    more moderate than the view of other Jacobins.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={164} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={164} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"According to the rules of the French Constitution of 1791 ""active citizens"" were defined as?:"
                </p>
                <hr />
                <p>A. married men with property and family.&nbsp;&nbsp;B. men who paid annual taxes equal to three
                    days of labor wages.&nbsp;&nbsp; C. men who were landowners and had servants or employees under
                    their care.&nbsp;&nbsp; D. women and men who paid their taxes and could demonstrate an income.
                    &nbsp;&nbsp;E. men who could prove their aristocratic or noble status.&nbsp;&nbsp; Answer: men
                    who paid annual taxes equal to three days of labor wages.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={165} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={165} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were reforms passed by the French National Assembly in reaction to earlier
                    abuses EXCEPT?:</p>
                <hr />
                <p>A. the Law of Suspects.&nbsp;&nbsp;B. confiscation of Church property.&nbsp;&nbsp; C. limitations
                    on the power of the monarchy.&nbsp;&nbsp; D. revocation of special privileges of the nobility.
                    &nbsp;&nbsp;E. ended papal authority over French clergy.&nbsp;&nbsp; Answer: the Law of
                    Suspects.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={166} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={166} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The conservative government that came to power after the Thermidorean Reaction?:</p>
                <hr />
                <p>A. supported the most radical ideas of the revolutionary era.&nbsp;&nbsp;B. ordered that mobs
                    caught intimidating legislatures be attacked by the army.&nbsp;&nbsp; C. returned the Catholic
                    faith to the position of state religion.&nbsp;&nbsp; D. restricted free trade in an effort to
                    replenish the state treasury. &nbsp;&nbsp;E. restored social stability without sacrificing the
                    ideals of 1789.&nbsp;&nbsp; Answer: restored social stability without sacrificing the ideals of
                    1789.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={167} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={167} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Industrialization in England resulted in all of the following EXCEPT?:</p>
                <hr />
                <p>A. the elimination of social distinctions between the middle and working class.&nbsp;&nbsp;B. the
                    increased production of goods in all industries.&nbsp;&nbsp; C. the reinvestment of profits from
                    manufacturing.&nbsp;&nbsp; D. the expansion of trade according to market demand. &nbsp;&nbsp;E.
                    new methods of production.&nbsp;&nbsp; Answer: the elimination of social distinctions between
                    the middle and working class.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={168} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={168} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The British Ten Hours Act mainly concerned?:</p>
                <hr />
                <p>A. British railroad workers.&nbsp;&nbsp;B. the labor of women and children in British
                    factores.&nbsp;&nbsp; C. French radicals during the Revolution.&nbsp;&nbsp; D. German
                    dockworkers . &nbsp;&nbsp;E. Slum dwellers in London.&nbsp;&nbsp; Answer: the labor of women and
                    children in British factores.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={169} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={169} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A major cause of the Industrial Revolution was the?:</p>
                <hr />
                <p>A. effort to eliminate child labor.&nbsp;&nbsp;B. need for more manufactured goods for foreign
                    trade.&nbsp;&nbsp; C. desire for colonies.&nbsp;&nbsp; D. increase in population. &nbsp;&nbsp;E.
                    racial ideas about western superiority.&nbsp;&nbsp; Answer: increase in population.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={170} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={170} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Government policy was an important part of early industrialization for all of the following
                    reasons EXCEPT?:</p>
                <hr />
                <p>A. railroad building.&nbsp;&nbsp;B. the stabilization of the currency.&nbsp;&nbsp; C. social
                    welfare programs for workers.&nbsp;&nbsp; D. the reduction of trade barriers. &nbsp;&nbsp;E.
                    laws benefiting business organization.&nbsp;&nbsp; Answer: social welfare programs for workers.
                </p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={171} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={171} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"According the the Classical Economists' ""Iron Law of Wages""?:"</p>
                <hr />
                <p>A. if a worker received more than a subsistence wage he/she would breed more children who would
                    eat up &nbsp;&nbsp;B. with every rise in production wages must also rise.&nbsp;&nbsp; C. once
                    workers' wages fell below the level needed for subsistence they would strike.&nbsp;&nbsp; D.
                    every wage increase must automatically benefit the employer since additional purchasing power
                    would &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer: if a worker received
                    more than a subsistence wage he/she would breed more children who would eat up </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={172} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={172} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the major purpose of the Corn Laws in Britain in the early 1800s?:</p>
                <hr />
                <p>A. to lower the price on grain imported from the rest of Europe.&nbsp;&nbsp;B. to weaken the
                    political power of the middle class in Parliament.&nbsp;&nbsp; C. to improve the production and
                    the quality of grain produced in Great Britain.&nbsp;&nbsp; D. to cooperate with other grain
                    producers in western Europe. &nbsp;&nbsp;E. to protect the interests of British grain
                    producers.&nbsp;&nbsp; Answer: to protect the interests of British grain producers.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={173} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={173} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One reason why the factory system replaced the domestic system in England was that?:</p>
                <hr />
                <p>A. the decline of the guilds sharply reduced the amount of skilled labor.&nbsp;&nbsp;B. women no
                    longer had time to give to their families or to do the domestic work around their
                    homes.&nbsp;&nbsp; C. there was a marked decrease in the labor supply.&nbsp;&nbsp; D. neither
                    water power nor steam power could be used efficiently in the home. &nbsp;&nbsp;E. Parliament
                    passed laws designed to weaken the domestic system.&nbsp;&nbsp; Answer: neither water power nor
                    steam power could be used efficiently in the home.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={174} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={174} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Industrial Revolution in Britain was in a large part inspired by?:</p>
                <hr />
                <p>A. the urgent need to solve great urban poverty.&nbsp;&nbsp;B. the failure of the cottage
                    industry system.&nbsp;&nbsp; C. entrepreneuers who sought and accepted new manufacturing methods
                    and inventions.&nbsp;&nbsp; D. the great industrial success of the century before in Holland and
                    France. &nbsp;&nbsp;E. kings who controlled patents for new inventions.&nbsp;&nbsp; Answer:
                    entrepreneuers who sought and accepted new manufacturing methods and inventions.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={175} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={175} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is TRUE of changes in the standard of living in the first half of the
                    19c?:</p>
                <hr />
                <p>A. there is not complete agreement on this question among historians.&nbsp;&nbsp;B. the middle
                    and upper classes made spectacular advances.&nbsp;&nbsp; C. while real wages were higher than
                    before few workers were permanently employed.&nbsp;&nbsp; D. some skilled workers were
                    noticeably better off. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all
                    of these choices are correct.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={176} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={176} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Industrial Revolution began in England for all of the following reasons EXCEPT?:</p>
                <hr />
                <p>A. England had ample capital for investment.&nbsp;&nbsp;B. she was an island nation safe from
                    invasion.&nbsp;&nbsp; C. an abundant source of power was available.&nbsp;&nbsp; D. the
                    government had created a business-friendly climate. &nbsp;&nbsp;E. she had the necessary
                    conditions for a factory system.&nbsp;&nbsp; Answer: she was an island nation safe from
                    invasion.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={177} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={177} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Luddites?:</p>
                <hr />
                <p>A. physically attacked machines they believed adversely affected their livelihood.&nbsp;&nbsp;B.
                    were the first movement of the working classes on the continent.&nbsp;&nbsp; C. were the lowest
                    of unskilled workers in England.&nbsp;&nbsp; D. received little support from the people in their
                    areas of activities. &nbsp;&nbsp;E. were English coal miners protesting harsh
                    conditions.&nbsp;&nbsp; Answer: physically attacked machines they believed adversely affected
                    their livelihood.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={178} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={178} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The conclusions of Malthus and Ricardo relative to economic affairs suggested that?:</p>
                <hr />
                <p>A. capitalism and a free society would eventually abolish poverty and suffering from the
                    world.&nbsp;&nbsp;B. only social reforms and strong government intervention in the economy could
                    alleviate human misery.&nbsp;&nbsp; C. liberals were right to reject government interference in
                    economic affairs because it could do no goo&nbsp;&nbsp; D. economics is too complex a subject to
                    be understood in rational or scientific terms. &nbsp;&nbsp;E. poverty was caused by a lack of
                    education and could be remedied by mandatory elementary school atten&nbsp;&nbsp; Answer:
                    liberals were right to reject government interference in economic affairs because it could do no
                    goo</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={179} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={179} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Robert Owen's only success was the?:</p>
                <hr />
                <p>A. establishment of New Harmony in Indiana as a successful experiment.&nbsp;&nbsp;B. organization
                    of consumers' cooperatives.&nbsp;&nbsp; C. winning of widespread support for his economic
                    theories.&nbsp;&nbsp; D. organizing of powerful trade unions. &nbsp;&nbsp;E. passage of the
                    Peoples' Charter in Parliament in the 1830s.&nbsp;&nbsp; Answer: organization of consumers'
                    cooperatives.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={180} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={180} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Enclosure Movement in England had all but which one of the following features?:</p>
                <hr />
                <p>A. former common grazing lands were fenced in.&nbsp;&nbsp;B. small farm holding were consolidated
                    into large agricultural units.&nbsp;&nbsp; C. wool production declined as food crops became more
                    profitable.&nbsp;&nbsp; D. many peasants were put off the land. &nbsp;&nbsp;E. it resulted in
                    the passage by Parliament of the Corn Laws.&nbsp;&nbsp; Answer: wool production declined as food
                    crops became more profitable.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={181} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={181} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In England the Factory Act of 1833 clearly?:</p>
                <hr />
                <p>A. limited the hours of work for children under thirteen years of age.&nbsp;&nbsp;B. forbade work
                    for girls under 18 years of age.&nbsp;&nbsp; C. expanded a factory owner's ability to hire
                    children under the age of 12.&nbsp;&nbsp; D. stated that children under 13 years of age should
                    not be permitted to enter the work force. &nbsp;&nbsp;E. forbade women from working more than 12
                    hours per day in the textile mills.&nbsp;&nbsp; Answer: limited the hours of work for children
                    under thirteen years of age.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={182} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={182} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The New Poor Law did which of the following?:</p>
                <hr />
                <p>A. abolished the workhouse.&nbsp;&nbsp;B. tried in spite of great difficulties to keep families
                    together.&nbsp;&nbsp; C. required the poor to work in the workhouse for a maximum of two years
                    only.&nbsp;&nbsp; D. provided a government welfare payment for the head of each household of one
                    pound a month until he b &nbsp;&nbsp;E. established unpleasant workhouses in the hopes that only
                    the truly needy would seek public assistanc&nbsp;&nbsp; Answer: established unpleasant
                    workhouses in the hopes that only the truly needy would seek public assistanc</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={183} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={183} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Classical liberals supported all of the following EXCEPT?:</p>
                <hr />
                <p>A. freedom of the press and of assembly.&nbsp;&nbsp;B. written constitutions.&nbsp;&nbsp; C. free
                    trade.&nbsp;&nbsp; D. universal male suffrage. &nbsp;&nbsp;E. parliamentary or representative
                    institutions.&nbsp;&nbsp; Answer: universal male suffrage.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={184} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={184} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the century following 1832 the MAIN objective of the Reform Acts passed by the British
                    Parliament was the?:</p>
                <hr />
                <p>A. establishement of the right of trial by jury.&nbsp;&nbsp;B. extension of suffrage.&nbsp;&nbsp;
                    C. restriction on the King's power.&nbsp;&nbsp; D. increase of protective tariffs.
                    &nbsp;&nbsp;E. elimination of all press censorship.&nbsp;&nbsp; Answer: extension of suffrage.
                </p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={185} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={185} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The group that gained most political power as a result of the Reform Bill of 1832 was the?:</p>
                <hr />
                <p>A. landed aristocracy.&nbsp;&nbsp;B. poor living in the workhouses.&nbsp;&nbsp; C. farm
                    laborers.&nbsp;&nbsp; D. middle-class people of the towns. &nbsp;&nbsp;E. factory
                    workers.&nbsp;&nbsp; Answer: middle-class people of the towns.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={186} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={186} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Despite little immediate success with their reform demands the Chartists saw all but which one of
                    these demands passed into law?:</p>
                <hr />
                <p>A. universal suffrage.&nbsp;&nbsp;B. dropping of property qualifications for members of
                    Parliament.&nbsp;&nbsp; C. holding of annual elections for members of Parliament.&nbsp;&nbsp; D.
                    creation of more equal electoral districts. &nbsp;&nbsp;E. secret ballot.&nbsp;&nbsp; Answer:
                    holding of annual elections for members of Parliament.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={187} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={187} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Urbanization and industrialization in 19c Europe?:</p>
                <hr />
                <p>A. created new social classes.&nbsp;&nbsp;B. increased class conflict.&nbsp;&nbsp; C. changed
                    family life.&nbsp;&nbsp; D. influenced the creation of the Realist school of art and writing.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these choices are
                    correct.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={188} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={188} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Mussolini won support for his Fascists by promoting his party as a bulwark against?:</p>
                <hr />
                <p>A. liberal democracy.&nbsp;&nbsp;B. syndicalism.&nbsp;&nbsp; C. capitalism.&nbsp;&nbsp; D.
                    Bolshevism. &nbsp;&nbsp;E. nationalism.&nbsp;&nbsp; Answer: Bolshevism.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={189} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={189} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Which of the following groups composed the ""Popular Front"" in France during the 1930s?:"</p>
                <hr />
                <p>A. liberals and conservatives.&nbsp;&nbsp;B. socialists and communists.&nbsp;&nbsp; C. fascists
                    and communists.&nbsp;&nbsp; D. peasants and workers. &nbsp;&nbsp;E. clerics and
                    royalists.&nbsp;&nbsp; Answer: socialists and communists.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={190} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={190} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The social group that was hit most severely by Germany's inflation in the 1920s was the?:</p>
                <hr />
                <p>A. middle class.&nbsp;&nbsp;B. farmers.&nbsp;&nbsp; C. aristocracy.&nbsp;&nbsp; D.
                    industrialists. &nbsp;&nbsp;E. factory workers.&nbsp;&nbsp; Answer: middle class.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={191} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={191} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Catholicism was recognized as the sole religion of Italy by the?:</p>
                <hr />
                <p>A. Dawes Plan.&nbsp;&nbsp;B. Lateran Accords.&nbsp;&nbsp; C. Locarno Treaty.&nbsp;&nbsp; D.
                    Council of Constance. &nbsp;&nbsp;E. Kellogg-Briand Pact.&nbsp;&nbsp; Answer: Lateran Accords.
                </p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={192} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={192} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In a totalitarian state?:</p>
                <hr />
                <p>A. the state controls every aspect of the lives of its people.&nbsp;&nbsp;B. all industry is
                    owned by the government&nbsp;&nbsp; C. a complete revolution occurs every 20 years.&nbsp;&nbsp;
                    D. the state guarantees civil liberties to its wealthy citizens. &nbsp;&nbsp;E. the government
                    is based upon ministerial responsibility.&nbsp;&nbsp; Answer: the state controls every aspect of
                    the lives of its people.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={193} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={193} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are true of women in Mussolini's Italy EXCEPT?:</p>
                <hr />
                <p>A. they were urged to have more children.&nbsp;&nbsp;B. they were not allowed to join the work
                    force.&nbsp;&nbsp; C. they were discouraged from using contraception.&nbsp;&nbsp; D. they were
                    given subsidies if they had large families. &nbsp;&nbsp;E. they were discouraged from
                    participating in the work force.&nbsp;&nbsp; Answer: they were not allowed to join the work
                    force.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={194} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={194} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In the early 1920s Germany's Weimar Republic was crippled by?:</p>
                <hr />
                <p>A. the election of Adolf Hitler.&nbsp;&nbsp;B. its close identification with fascist
                    organizations.&nbsp;&nbsp; C. the number of elderly people it had to subsidize.&nbsp;&nbsp; D. a
                    lack of political leadership. &nbsp;&nbsp;E. the economic reversals of the Great
                    Depression.&nbsp;&nbsp; Answer: a lack of political leadership.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={195} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={195} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In seizing and maintaining power in the 20th century Communists Fascists and Nazis all?:</p>
                <hr />
                <p>A. established good relations with churches.&nbsp;&nbsp;B. respected existing
                    treaties.&nbsp;&nbsp; C. cooperated fully with the League of Nations.&nbsp;&nbsp; D. blamed
                    their nations' troubles on scapegoats. &nbsp;&nbsp;E. encouraged private economic
                    enterprise.&nbsp;&nbsp; Answer: blamed their nations' troubles on scapegoats.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={196} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={196} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Mussolini’s Fascist Party gained public support in post-war Italy by?:</p>
                <hr />
                <p>A. working within the political system to elected to Parliament.&nbsp;&nbsp;B. arguing that Italy
                    had been slighted by the Allies at the Peace Conference.&nbsp;&nbsp; C. taking advantage of
                    labor unrest and directing violence against socialists.&nbsp;&nbsp; D. appearing to align
                    themselves with the rightful authority the king. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={197} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={197} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A major reason for the failure of the democratic government in Germany after World War I was
                    the?:</p>
                <hr />
                <p>A. failure of the government to solve Germany's economic problems.&nbsp;&nbsp;B. threat of a
                    communist revolution.&nbsp;&nbsp; C. war destruction of German farms and factories.&nbsp;&nbsp;
                    D. illiteracy of the masses. &nbsp;&nbsp;E. threat of attack from neighboring
                    nations.&nbsp;&nbsp; Answer: failure of the government to solve Germany's economic problems.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={198} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={198} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following did NOT contribute to Mussolini's rise to power?:</p>
                <hr />
                <p>A. support of strong wealthy landowners and industrialists.&nbsp;&nbsp;B. nationalists demand
                    that Italy should receive more territory from the Versailles Treaty.&nbsp;&nbsp; C. a growing
                    number of disgruntled World War I veterans.&nbsp;&nbsp; D. peasant unrest in the countryside of
                    Italy from 1919 to 1922. &nbsp;&nbsp;E. severe unemployment after the war.&nbsp;&nbsp; Answer:
                    peasant unrest in the countryside of Italy from 1919 to 1922.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={199} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={199} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The fasces or bundle of rods with an ax was a symbol that Mussolini's party derived from?:</p>
                <hr />
                <p>A. ancient Egypt.&nbsp;&nbsp;B. Alexander the Great.&nbsp;&nbsp; C. the Great Seal of the United
                    States.&nbsp;&nbsp; D. Nazi Germany. &nbsp;&nbsp;E. ancient Rome.&nbsp;&nbsp; Answer: ancient
                    Rome.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={200} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={200} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The program of the British Labor party in the post-World War I period may be described or
                    characterized as?:</p>
                <hr />
                <p>A. Fabian socialist.&nbsp;&nbsp;B. conservative.&nbsp;&nbsp; C. reactionary.&nbsp;&nbsp; D.
                    Marxist. &nbsp;&nbsp;E. laissez-faire capitalist.&nbsp;&nbsp; Answer: Fabian socialist.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={201} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={201} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The European country hardest hit by unemployment during the Great Depression was?:</p>
                <hr />
                <p>A. the Soviet Union.&nbsp;&nbsp;B. Germany.&nbsp;&nbsp; C. France.&nbsp;&nbsp; D. Italy.
                    &nbsp;&nbsp;E. Great Britain.&nbsp;&nbsp; Answer: Germany.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={202} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={202} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The British economist John Maynard Keynes became famous during the depression of the 1930s
                    because he?:</p>
                <hr />
                <p>A. argued that the only cure for the Great Depression was socialism.&nbsp;&nbsp;B. said that the
                    western democracies should adapt Soviet-style five-year plans.&nbsp;&nbsp; C. argued that if
                    private investment funds were idol government funds must be employed to encourage
                    eco&nbsp;&nbsp; D. encouraged governments to balance their budgets so that interest rates would
                    go down and private ent &nbsp;&nbsp;E. called for huge tax cuts to encourage consumer
                    spending.&nbsp;&nbsp; Answer: argued that if private investment funds were idol government funds
                    must be employed to encourage eco</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={203} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={203} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Neville Chamberlain's promise of ""Peace in our time"" referred to?:"</p>
                <hr />
                <p>A. success in negotiations over war reparations.&nbsp;&nbsp;B. the agreement at
                    Rapallo.&nbsp;&nbsp; C. the effectiveness of the League of Nations in the Ethiopian
                    crisis.&nbsp;&nbsp; D. success of the appeasement policy at Munich. &nbsp;&nbsp;E. the
                    Kellogg-Briand Peace pact.&nbsp;&nbsp; Answer: success of the appeasement policy at Munich.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={204} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={204} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>During the inter-war years the history of Europe supports the generalization that?:</p>
                <hr />
                <p>A. the policy of appeasement was successful.&nbsp;&nbsp;B. the League of Nations successfully
                    checked aggression.&nbsp;&nbsp; C. European nations gave up their African colonies.&nbsp;&nbsp;
                    D. economic distress contributed to the rise of fascism. &nbsp;&nbsp;E. none of these choices
                    are correct.&nbsp;&nbsp; Answer: economic distress contributed to the rise of fascism.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={205} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={205} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Spanish Civil War became an international issue because?:</p>
                <hr />
                <p>A. the Popular Front was a coalition government.&nbsp;&nbsp;B. Spanish troops invaded
                    France.&nbsp;&nbsp; C. the king of Spain was tried and executed in the World Court at the
                    Hague.&nbsp;&nbsp; D. Britain and France sent money and war materials to the Loyalists.
                    &nbsp;&nbsp;E. Italy and Germany sent troops and arms to fascists in Spain.&nbsp;&nbsp; Answer:
                    Italy and Germany sent troops and arms to fascists in Spain.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={206} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={206} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Hitler-Stalin Pact contained an agreement for?:</p>
                <hr />
                <p>A. both to partition Poland.&nbsp;&nbsp;B. the Soviet Union to take Turkey.&nbsp;&nbsp; C. both
                    to divide territory in the Middle East.&nbsp;&nbsp; D. the Germans to invade England by sea in
                    early 1940 and for the Soviets to overrun Iraq and take the &nbsp;&nbsp;E. both to declare war
                    against France and Great Britain.&nbsp;&nbsp; Answer: both to partition Poland.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={207} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={207} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>France in the 1920s and 1930s?:</p>
                <hr />
                <p>A. had the most modern military technology in Europe.&nbsp;&nbsp;B. was willing to give back
                    Alsace-Lorraine to Germany if the Germans continued paying their World War &nbsp;&nbsp; C.
                    experienced a time of political discord and military conservatism.&nbsp;&nbsp; D. was no longer
                    concerned with reparations of the threat of another war with Germany. &nbsp;&nbsp;E. suffered
                    more than other countries from the Depression.&nbsp;&nbsp; Answer: experienced a time of
                    political discord and military conservatism.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={208} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={208} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One reason for the failure of the peace movement between World War I and World War II was the?:
                </p>
                <hr />
                <p>A. invention of the atomic bomb.&nbsp;&nbsp;B. the long period of prosperity throughout the
                    world.&nbsp;&nbsp; C. conflict between members of the Triple Alliance and the Triple
                    Entente.&nbsp;&nbsp; D. absence of an international court of justice. &nbsp;&nbsp;E. weakness of
                    the League of Nations.&nbsp;&nbsp; Answer: weakness of the League of Nations.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={209} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={209} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One characteristic of 20c authoritarian regimes was that they were generally?:</p>
                <hr />
                <p>A. imposed by terror rather than elections.&nbsp;&nbsp;B. popular with their people.&nbsp;&nbsp;
                    C. the most technologically advanced countries.&nbsp;&nbsp; D. put into power by foreign
                    occupation. &nbsp;&nbsp;E. unpopular and short lived.&nbsp;&nbsp; Answer: popular with their
                    people.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={210} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={210} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of the most obvious differences between realistic and romantic writers was the fact that?:
                </p>
                <hr />
                <p>A. realists glorified common people and actions by making them seem extraordinary.&nbsp;&nbsp;B.
                    romantics were uninterested in nature because it was an obvious part of reality.&nbsp;&nbsp; C.
                    realists rejected poetry as a proper way of expressing the real world and preferred the novel
                    instea&nbsp;&nbsp; D. romantics were interested in the inner mind whereas realists rejected
                    psychological themes. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer:
                    realists rejected poetry as a proper way of expressing the real world and preferred the novel
                    instea</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={211} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={211} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Nietzsche's criticism of Christianity was aimed primarily at?:</p>
                <hr />
                <p>A. the Christian belief in miracles and other doctrines that are not based on
                    reason.&nbsp;&nbsp;B. Christian morality which he believed was repressive and fit only for
                    slaves.&nbsp;&nbsp; C. Christianity's rejection of science and the rational thought of the
                    Enlightenment.&nbsp;&nbsp; D. the corruption and abuses that had occurred throughout the history
                    of the church. &nbsp;&nbsp;E. the ideals expressed by Pope Leo XIII in his encyclical Rerum
                    Novarum .&nbsp;&nbsp; Answer: Christian morality which he believed was repressive and fit only
                    for slaves.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={212} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={212} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the greatest single contribution to medicine in Europe in the 1870s?:
                </p>
                <hr />
                <p>A. research on contagion and infectious disorders.&nbsp;&nbsp;B. establishment of government
                    supported health agencies.&nbsp;&nbsp; C. isolation of the smallpox virus and
                    vaccine.&nbsp;&nbsp; D. provision of infant care reducing mortality rates. &nbsp;&nbsp;E.
                    development of medical and health insurance.&nbsp;&nbsp; Answer: research on contagion and
                    infectious disorders.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={213} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={213} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The experiments Pavlov conducted with dogs showed the importance of?:</p>
                <hr />
                <p>A. arbitrary interpretations.&nbsp;&nbsp;B. animal psychology.&nbsp;&nbsp; C. natural
                    selection.&nbsp;&nbsp; D. conditioned responses. &nbsp;&nbsp;E. subjective reflexes.&nbsp;&nbsp;
                    Answer: conditioned responses.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={214} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={214} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Emmeline Pankhurst was noted for her?:</p>
                <hr />
                <p>A. realistic novels depicting the life of poor workers.&nbsp;&nbsp;B. impressionist
                    paintings.&nbsp;&nbsp; C. militant advocacy of women's suffrage.&nbsp;&nbsp; D. contributions to
                    the field of science and medicine. &nbsp;&nbsp;E. leadership in the pacifist
                    movement.&nbsp;&nbsp; Answer: militant advocacy of women's suffrage.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={215} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={215} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The ""demographic transition"" that took place between 1870 and 1914 involved?:"</p>
                <hr />
                <p>A. a sharp rise in the death rate.&nbsp;&nbsp;B. an increase in the birthrate.&nbsp;&nbsp; C. a
                    decrease in the size of the middle class in Western Europe.&nbsp;&nbsp; D. movement from urban
                    to rural areas. &nbsp;&nbsp;E. a huge migration of Europeans to the United States South America
                    and Australia.&nbsp;&nbsp; Answer: a huge migration of Europeans to the United States South
                    America and Australia.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={216} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={216} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>By 1900 the leading industrial power in Europe was?:</p>
                <hr />
                <p>A. Germany.&nbsp;&nbsp;B. France.&nbsp;&nbsp; C. Italy.&nbsp;&nbsp; D. Britain. &nbsp;&nbsp;E.
                    Belgium.&nbsp;&nbsp; Answer: Germany.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={217} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={217} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Sigmund Freud believed that the way to solve the conflicts of his psychologically disturbed
                    patients was to?:</p>
                <hr />
                <p>A. change that patient's id.&nbsp;&nbsp;B. use electrotherapy along with drugs.&nbsp;&nbsp; C.
                    help them override the pleasure principle.&nbsp;&nbsp; D. trace repression back to its childhood
                    origins. &nbsp;&nbsp;E. destroy their superegos.&nbsp;&nbsp; Answer: trace repression back to
                    its childhood origins.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={218} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={218} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The positivists believed that?:</p>
                <hr />
                <p>A. because society operates according to scientific laws it can be understood but not
                    changed.&nbsp;&nbsp;B. general rules of social behavior can be derived from the examination of
                    empirical data.&nbsp;&nbsp; C. human behavior is so diverse that it can be understood only
                    through the application of pure reason.&nbsp;&nbsp; D. religion should be abolished because it
                    plays no part in satisfying basic human needs. &nbsp;&nbsp;E. humans cannot change their
                    behavior so it is the role of a totalitarian state to impose law and orde&nbsp;&nbsp; Answer:
                    general rules of social behavior can be derived from the examination of empirical data.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={219} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={219} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What view of Fabian socialists differed from orthodox Marxism?:</p>
                <hr />
                <p>A. socialism was more likely to succeed in less industrial countries.&nbsp;&nbsp;B. private
                    property and socialism could co-exist.&nbsp;&nbsp; C. democracy could lead to socialism
                    revolution was not necessary.&nbsp;&nbsp; D. workers were not really able to run government and
                    had to be taken care of by a paternalistic state. &nbsp;&nbsp;E. only a brutal dictatorship
                    could lead to a socialist society.&nbsp;&nbsp; Answer: democracy could lead to socialism
                    revolution was not necessary.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={220} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={220} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Kings in the Late Middle Ages increasingly had to consult representative assemblies to grant new
                    taxes because?:</p>
                <hr />
                <p>A. Of the breakdown of feudal mechanisms to collect taxes.&nbsp;&nbsp;B. A decline in population
                    after the Black Death required an expansion of the tax base.&nbsp;&nbsp; C. Absolute kinship
                    characteristic of High Middle Ages had declined in the late Middle Ages.&nbsp;&nbsp; D. Income
                    from ordinary revenues particularly rents had declined. &nbsp;&nbsp;E. They needed approval to
                    reinstate or increase traditional revenues.&nbsp;&nbsp; Answer: Income from ordinary revenues
                    particularly rents had declined.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={221} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={221} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following figures opposed the growing papal authority EXCEPT?:</p>
                <hr />
                <p>A. Marsilius of Padua.&nbsp;&nbsp;B. Bernard of Clairvoix.&nbsp;&nbsp; C. William of
                    Ockham.&nbsp;&nbsp; D. John Huss. &nbsp;&nbsp;E. John Wycliffe.&nbsp;&nbsp; Answer: Bernard of
                    Clairvoix.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={222} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={222} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The instability of the 14c was the result of the?:</p>
                <hr />
                <p>A. weakening of feudalism in Europe.&nbsp;&nbsp;B. increasing financial pressures on European
                    rulers.&nbsp;&nbsp; C. demographic turmoil caused by the Black Plague.&nbsp;&nbsp; D. widespread
                    failure of European rulers to produce direct male heirs. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={223} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={223} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Great Schism was finally resolved?:</p>
                <hr />
                <p>A. by the Fourth Crusade against Constantinople.&nbsp;&nbsp;B. when the pope in Avignon
                    died.&nbsp;&nbsp; C. by returning the pope to Rome but Catholicism's political power was
                    broken.&nbsp;&nbsp; D. when the Holy Roman Emperor put his own candidate on the throne of Peter.
                    &nbsp;&nbsp;E. by the Fourth Crusade against Constantinople.&nbsp;&nbsp; Answer: by returning
                    the pope to Rome but Catholicism's political power was broken.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={224} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={224} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements most accurately describes the impact of the development of
                    gunpowder on Europe's nobility?:</p>
                <hr />
                <p>A. gunpowder led to the end of knights in armor and jousting with lances.&nbsp;&nbsp;B. gunpowder
                    was so scarce and expensive that only the nobles could afford to use it.&nbsp;&nbsp; C.
                    gunpowder had little effect on European warfare because early weapons were so primitive as to be
                    vir&nbsp;&nbsp; D. gunpowder allowed kings to wage war against the nobles and subdue them.
                    &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer: gunpowder led to the end
                    of knights in armor and jousting with lances.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={225} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={225} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Conciliarism?:</p>
                <hr />
                <p>A. insisted that secular rulers had the right to appoint bishops.&nbsp;&nbsp;B. demanded that a
                    pope must call a church council every ten years.&nbsp;&nbsp; C. argued that a general council of
                    top church officials not the pope possessed supreme earthly authori&nbsp;&nbsp; D. championed
                    the absolute power of the pope. &nbsp;&nbsp;E. sought to reform the church by the formation of
                    new orders of wandering friars.&nbsp;&nbsp; Answer: argued that a general council of top church
                    officials not the pope possessed supreme earthly authori</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={226} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={226} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following trends occurred in the decades after the outbreak of the bubonic plague in
                    1348 EXCEPT a?:</p>
                <hr />
                <p>A. fall in land values and rents.&nbsp;&nbsp;B. rise in real wages.&nbsp;&nbsp; C. reduction in
                    the total land area under cultivation.&nbsp;&nbsp; D. downward trend in the prices of
                    manufactured goods. &nbsp;&nbsp;E. decline in the demand for grain.&nbsp;&nbsp; Answer: downward
                    trend in the prices of manufactured goods.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={227} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={227} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of the most important consequences of the Hundred Years' War was that?:</p>
                <hr />
                <p>A. England and France entered an extended period of peace and solidarity.&nbsp;&nbsp;B. French
                    armies ravaged England.&nbsp;&nbsp; C. Parliament widened its powers in France.&nbsp;&nbsp; D.
                    both England and France began to tax the clergy. &nbsp;&nbsp;E. Parliament widened its powers in
                    England.&nbsp;&nbsp; Answer: Parliament widened its powers in England.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={228} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={228} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Unam Sanctam expressed which of the following views?:</p>
                <hr />
                <p>A. temporal power was subject to the spiritual power of the church.&nbsp;&nbsp;B. the Conciliar
                    Movement was unjust.&nbsp;&nbsp; C. the power of the church was subject to the power of the
                    monarch.&nbsp;&nbsp; D. Joan of Arc was a heretic. &nbsp;&nbsp;E. only one pope could serve as
                    head of the church.&nbsp;&nbsp; Answer: temporal power was subject to the spiritual power of the
                    church.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={229} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={229} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Hanseatic League monopolized trade in the?:</p>
                <hr />
                <p>A. Mediterranean Sea.&nbsp;&nbsp;B. English Channel.&nbsp;&nbsp; C. Baltic and North
                    Seas.&nbsp;&nbsp; D. Hanse Sea. &nbsp;&nbsp;E. Adriatic and Black Seas.&nbsp;&nbsp; Answer:
                    Baltic and North Seas.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={230} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={230} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Christians were forbidden to loan money at interest because?:</p>
                <hr />
                <p>A. the Alfonsine Table included profits from interest on bills of exchange.&nbsp;&nbsp;B. money
                    could not make money.&nbsp;&nbsp; C. maritime insurance rates already included profits from
                    interest.&nbsp;&nbsp; D. limited partnerships made it illegal. &nbsp;&nbsp;E. according to canon
                    law only Italian banks such as the Medici could charge interest.&nbsp;&nbsp; Answer: money could
                    not make money.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={231} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={231} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What was the purpose of the English Navigation Acts?:</p>
                <hr />
                <p>A. to halt the Triangle Trade between Britain and the New World.&nbsp;&nbsp;B. to require
                    colonial goods to be shipped to England in English ships.&nbsp;&nbsp; C. to secure a trade
                    treaty with the French over the sale of slaves.&nbsp;&nbsp; D. to provide for the discovery of
                    new routes to Asia. &nbsp;&nbsp;E. to end the lucrative smuggling business along the shores of
                    northern Ireland.&nbsp;&nbsp; Answer: to require colonial goods to be shipped to England in
                    English ships.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={232} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={232} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A most significant result of the Seven Years' War was the?:</p>
                <hr />
                <p>A. loss of the French Empire in America.&nbsp;&nbsp;B. end of religious warfare in
                    Europe.&nbsp;&nbsp; C. the partition of Poland between Russian and Austria.&nbsp;&nbsp; D. a
                    peace treaty between France and Austria. &nbsp;&nbsp;E. a truce between Spain and
                    France.&nbsp;&nbsp; Answer: loss of the French Empire in America.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={233} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={233} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are true of 18c British mercantilism EXCEPT?:</p>
                <hr />
                <p>A. encouragement of staple-crop production in America.&nbsp;&nbsp;B. requirement that trade
                    between Britain and the colonies be carried in British or American ships.&nbsp;&nbsp; C.
                    prohibition on the importation of certain items from non-British sources into the
                    colonies.&nbsp;&nbsp; D. encouragement of local manufacturing in her colonies. &nbsp;&nbsp;E.
                    requirement that items imported into the colonies be shipped through Britain first.&nbsp;&nbsp;
                    Answer: encouragement of local manufacturing in her colonies.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={234} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={234} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The economic theory of mercantilism would be consistent with which of the following statements?:
                </p>
                <hr />
                <p>A. economies will prosper most when trade is restricted as little as possible.&nbsp;&nbsp;B.
                    colonies are of little economic importance to the mother country.&nbsp;&nbsp; C. a government
                    should seek to direct the economy so as to maximize exports.&nbsp;&nbsp; D. it is vital that a
                    country import more than it exports. &nbsp;&nbsp;E. tariff barriers should be avoided as much as
                    possible.&nbsp;&nbsp; Answer: a government should seek to direct the economy so as to maximize
                    exports.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={235} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={235} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements concerning late 18c farming is most accurate?:</p>
                <hr />
                <p>A. changes in the climate resulted in a colder and wetter period in European
                    farming.&nbsp;&nbsp;B. market agriculture was gradually replacing subsistence agriculture in
                    most parts of Europe.&nbsp;&nbsp; C. despite increases in productivity the number of acres under
                    production in Russia Prussia and Hungary&nbsp;&nbsp; D. technical improvement in farming spread
                    rapidly among almost all European farmers. &nbsp;&nbsp;E. agricultural production increased
                    because animal husbandry was abandoned in favor of grain productio&nbsp;&nbsp; Answer: market
                    agriculture was gradually replacing subsistence agriculture in most parts of Europe.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={236} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={236} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>From the European perspective the principal outcome of the Seven Years' War was the?:</p>
                <hr />
                <p>A. continuing Anglo-French colonial rivalry.&nbsp;&nbsp;B. containment of British involvement on
                    the Continent.&nbsp;&nbsp; C. end of Sweden as a great power.&nbsp;&nbsp; D. recognition of
                    Dutch independence. &nbsp;&nbsp;E. subsequent struggle between Prussia and Austria for hegemony
                    in Central Europe.&nbsp;&nbsp; Answer: subsequent struggle between Prussia and Austria for
                    hegemony in Central Europe.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={237} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={237} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following resulted from British mercantilist policies?:</p>
                <hr />
                <p>A. a reduction of exports to the Continent.&nbsp;&nbsp;B. British colonists no longer purchasing
                    all of their goods from Britain.&nbsp;&nbsp; C. a serious decline of Dutch shipping and
                    commerce.&nbsp;&nbsp; D. the abolition of British tariffs and import taxes. &nbsp;&nbsp;E. a
                    decline of trade with colonial plantation owners.&nbsp;&nbsp; Answer: a serious decline of Dutch
                    shipping and commerce.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={238} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={238} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The economic policy of laissez-faire ?:</p>
                <hr />
                <p>A. contends that individuals should be allowed to pursue their own economic
                    interests.&nbsp;&nbsp;B. argues that all must contribute to the good of the society in order for
                    it to remain economically vi&nbsp;&nbsp; C. sets out a series of governmental controls over
                    individual economic pursuits.&nbsp;&nbsp; D. focuses on regulation on the local level to shape
                    economic growth. &nbsp;&nbsp;E. argues that strict economic controls should serve as the basis
                    for the economic system.&nbsp;&nbsp; Answer: contends that individuals should be allowed to
                    pursue their own economic interests.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={239} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={239} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The English South Sea Bubble Crisis of the early 18c involved?:</p>
                <hr />
                <p>A. a political struggle between Puritans and monarchists.&nbsp;&nbsp;B. the economic collapse of
                    a government monopoly and a speculative scheme.&nbsp;&nbsp; C. a rise in the price of
                    agricultural land.&nbsp;&nbsp; D. controversy resulting from gold stolen from Spanish ships.
                    &nbsp;&nbsp;E. a period of religious fervor.&nbsp;&nbsp; Answer: the economic collapse of a
                    government monopoly and a speculative scheme.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={240} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={240} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following nations acquired territory in Asia in the 18c through the initiative of
                    agents working for joint-stock companies?:</p>
                <hr />
                <p>A. France and Great Britain.&nbsp;&nbsp;B. the Netherlands and France.&nbsp;&nbsp; C. Spain and
                    the Netherlands.&nbsp;&nbsp; D. Prussia and Austria-Hungary. &nbsp;&nbsp;E. Great Britain and
                    the Netherlands.&nbsp;&nbsp; Answer: Great Britain and the Netherlands.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={241} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={241} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following applies to the early development of industrialization in Europe?:</p>
                <hr />
                <p>A. the steam engine fueled industrial development during the late 1600s.&nbsp;&nbsp;B. there was
                    almost no industrial or proto-industrial activity in Europe before the end of the
                    1700s.&nbsp;&nbsp; C. a period of proto-industrialization during the 1600s and 1700s preceded
                    the Industrial Revolution.&nbsp;&nbsp; D. European industrialization was hindered by the rise of
                    capitalism. &nbsp;&nbsp;E. initiative on the part of the aristocracy was chiefly responsible for
                    Europe's early industrializati&nbsp;&nbsp; Answer: a period of proto-industrialization during
                    the 1600s and 1700s preceded the Industrial Revolution.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={242} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={242} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is characteristic of 18c economic change?:</p>
                <hr />
                <p>A. decreased world trade.&nbsp;&nbsp;B. the decline of the factory style of textile
                    production.&nbsp;&nbsp; C. the creation of more common lands and open fields for
                    production.&nbsp;&nbsp; D. the increase in both population and food supply. &nbsp;&nbsp;E. the
                    absence of globalization.&nbsp;&nbsp; Answer: the increase in both population and food supply.
                </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={243} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={243} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>India eventually came under the control of the British crown because of?:</p>
                <hr />
                <p>A. a military victory over the Dutch in the mid-seventeenth century.&nbsp;&nbsp;B. the financial
                    and administrative successes of the British East India Company.&nbsp;&nbsp; C. Lord Macartney
                    who used Boers to quell local rebellions.&nbsp;&nbsp; D. King James I who granted colonists
                    their first charter. &nbsp;&nbsp;E. Prime Minister Robert Clive who led Parliament to support
                    the move.&nbsp;&nbsp; Answer: the financial and administrative successes of the British East
                    India Company.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={244} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={244} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Jethro Tull's discoveries were part of a general movement to?:</p>
                <hr />
                <p>A. make the potato the staple of the Irish diet.&nbsp;&nbsp;B. enclose land and push small
                    farmers off their holdings.&nbsp;&nbsp; C. promote the planting of traditional European
                    crops.&nbsp;&nbsp; D. apply the principles of scientific experiment to agricultural practices.
                    &nbsp;&nbsp;E. improve the breeding practices of livestock in Scotland.&nbsp;&nbsp; Answer:
                    apply the principles of scientific experiment to agricultural practices.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={245} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={245} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The agricultural improvements of the mid-18c were based on the elimination of?:</p>
                <hr />
                <p>A. livestock farming.&nbsp;&nbsp;B. the open-field system.&nbsp;&nbsp; C. rotation of
                    fields.&nbsp;&nbsp; D. most agricultural pests. &nbsp;&nbsp;E. nitrogen-producing plants such as
                    peas and beans.&nbsp;&nbsp; Answer: the open-field system.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={246} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={246} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Adam Smith's economic theory advocated?:</p>
                <hr />
                <p>A. government intervention in order to control the flow of bullion through extensive tariff
                    systems.&nbsp;&nbsp;B. the use of a controlled money supply as a means of limiting
                    inflation.&nbsp;&nbsp; C. that governments avoid regulation in favor of the operation of
                    individual initiative and market forc&nbsp;&nbsp; D. the institution of state-controlled guilds
                    to fix standards of production and wages. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: that governments avoid regulation in favor of the operation of
                    individual initiative and market forc</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={247} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={247} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Proto-Industrialization refers to?:</p>
                <hr />
                <p>A. the employment of laborers who worked at home but in a capitalist system dependent on urban
                    merchant&nbsp;&nbsp;B. the development of the rural factory system.&nbsp;&nbsp; C. improvements
                    in machinery and labor relations.&nbsp;&nbsp; D. the development of systems of transportation
                    and communication necessary for full industrialization. &nbsp;&nbsp;E. the strictly agricultural
                    economy that preceded the Industrial Revolution.&nbsp;&nbsp; Answer: the employment of laborers
                    who worked at home but in a capitalist system dependent on urban merchant</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={248} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={248} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What was the nature of trade between eastern and western Europe in the 17c ad early 18c?:</p>
                <hr />
                <p>A. western Europe imported grain in increasing amounts from eastern Europe in return for art
                    objects an&nbsp;&nbsp;B. eastern and western Europe remained economically isolated as Russia
                    Poland and Prussia extended thei&nbsp;&nbsp; C. the inability of eastern Europe to produce
                    anything of value to the West frustrated attempts to esta&nbsp;&nbsp; D. eastern Europe emerged
                    as a powerful challenger to Western domination of the global commercial netwo &nbsp;&nbsp;E.
                    eastern European merchants began to compete with western European economic interests in the
                    Middle E&nbsp;&nbsp; Answer: western Europe imported grain in increasing amounts from eastern
                    Europe in return for art objects an</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={249} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={249} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Adam Smith's phrase ""invisible hand"" referred to which of the following?:"</p>
                <hr />
                <p>A. the universality of manual labor prior to the Industrial Revolution.&nbsp;&nbsp;B. the
                    automatic mechanism of a free economy.&nbsp;&nbsp; C. the power harnessed by Watt's steam
                    engine.&nbsp;&nbsp; D. the control over economic activity exerted by mercantilistic legislation.
                    &nbsp;&nbsp;E. God's presence in the economic world.&nbsp;&nbsp; Answer: the automatic mechanism
                    of a free economy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={250} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={250} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>As First Consul Napoleon combined what he conceived to be the best of the Revolution and of the
                    old regime. This led to all of the following reforms EXCEPT?:</p>
                <hr />
                <p>A. careers in government service were determined by talent not pedigree.&nbsp;&nbsp;B. the
                    creation of the Bank of France.&nbsp;&nbsp; C. the codification of French law.&nbsp;&nbsp; D.
                    equal rights for women. &nbsp;&nbsp;E. the establishment of a solid currency and public
                    credit.&nbsp;&nbsp; Answer: equal rights for women.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={251} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={251} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Napoleon's Concordat with the Papacy contained all but one of the following provisions?:</p>
                <hr />
                <p>A. "Catholicism was to be the ""preferred"" religion of France."&nbsp;&nbsp;B. primary education
                    was to be controlled by the clergy.&nbsp;&nbsp; C. the state had the power to regulate the place
                    of the church in French society.&nbsp;&nbsp; D. non-Catholics were to enjoy religious freedom.
                    &nbsp;&nbsp;E. lands confiscated and sold during the Revolution were to be returned to the
                    church.&nbsp;&nbsp; Answer: lands confiscated and sold during the Revolution were to be returned
                    to the church.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={252} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={252} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most persistent opponent of Napoleon and the French Republic was?:</p>
                <hr />
                <p>A. the royalists.&nbsp;&nbsp;B. the United States.&nbsp;&nbsp; C. Great Britain.&nbsp;&nbsp; D.
                    the Russian-Austrian alliance. &nbsp;&nbsp;E. the Jacobins.&nbsp;&nbsp; Answer: Great Britain.
                </p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={253} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={253} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Under the Napoleonic Code workers received?:</p>
                <hr />
                <p>A. no specific rights or guarantees.&nbsp;&nbsp;B. the right to organize unions but not
                    strike.&nbsp;&nbsp; C. the right to boycott employers who would not bargain
                    collectively.&nbsp;&nbsp; D. the right to organize unions and strike. &nbsp;&nbsp;E. the right
                    to organize unions but not bargain collectively.&nbsp;&nbsp; Answer: no specific rights or
                    guarantees.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={254} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={254} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are true about the Napoleonic Era (1799-1814) EXCEPT?:</p>
                <hr />
                <p>A. Napoleon came nearer than anyone before or since to imposing political unity on the European
                    contine&nbsp;&nbsp;B. Europe was transformed not only through resistance to Napoleon but through
                    collaboration in his refo&nbsp;&nbsp; C. the fighting during the period amounted to a world war
                    involving not only Europe but America.&nbsp;&nbsp; D. despite the fact that all the other
                    European great powers England Prussia Austria and Russia were al &nbsp;&nbsp;E. all of these
                    choices are correct.&nbsp;&nbsp; Answer: despite the fact that all the other European great
                    powers England Prussia Austria and Russia were al</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={255} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={255} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A lasting effect of the Napoleonic occupation of Europe was the?:</p>
                <hr />
                <p>A. the decline of Russian military power.&nbsp;&nbsp;B. stimulation of national feeling in the
                    subject lands.&nbsp;&nbsp; C. collapse of international trade.&nbsp;&nbsp; D. formation of a
                    Entente Cordiale to keep the peace. &nbsp;&nbsp;E. sudden end of any social or economic
                    reforms.&nbsp;&nbsp; Answer: stimulation of national feeling in the subject lands.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={256} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={256} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was achieved during the regime of Napoleon Bonaparte?:</p>
                <hr />
                <p>A. he codified the laws of France in his famous Civil Code.&nbsp;&nbsp;B. women's legal position
                    was weakened with the activation of the Civil Code.&nbsp;&nbsp; C. he arranged a Concordat with
                    the Catholic Church.&nbsp;&nbsp; D. he created a powerful centralized bureaucracy.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these choices are
                    correct.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={257} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={257} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Although the French Revolution had abolished slavery Napoleon?:</p>
                <hr />
                <p>A. found that it still survived in some French colonies.&nbsp;&nbsp;B. got Spain to give French
                    merchants the asiento power to sell slaves in Central America.&nbsp;&nbsp; C. decided to
                    reinstate it and ordered the invasion of Haiti and capture of Toussaint-Louverture.&nbsp;&nbsp;
                    D. wanted to go further and grant voting rights to former slaves. &nbsp;&nbsp;E. successfully
                    reconquered Haiti and restored slavery.&nbsp;&nbsp; Answer: decided to reinstate it and ordered
                    the invasion of Haiti and capture of Toussaint-Louverture.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={258} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={258} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Napoleon was seen by some as an heir of the Revolution because of his?:</p>
                <hr />
                <p>A. commitment to equality of opportunity.&nbsp;&nbsp;B. support of local elections.&nbsp;&nbsp;
                    C. promotion of freedom of expression.&nbsp;&nbsp; D. commitment to parliamentary government.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: commitment to equality of
                    opportunity.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={259} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={259} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Napoleon's purpose in instituting the Continental System was to?:</p>
                <hr />
                <p>A. defeat England through economic war.&nbsp;&nbsp;B. consolidate the separate states of
                    Germany.&nbsp;&nbsp; C. unify Italy.&nbsp;&nbsp; D. create a united Europe under the leadership
                    of France. &nbsp;&nbsp;E. punish Russia for his il-fated invasion.&nbsp;&nbsp; Answer: defeat
                    England through economic war.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={260} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={260} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In general Napoleon championed?:</p>
                <hr />
                <p>A. political freedom but not social equality.&nbsp;&nbsp;B. the restoration of the Ancien Regime
                    .&nbsp;&nbsp; C. all the rights of citizenship proclaimed by the National Assembly.&nbsp;&nbsp;
                    D. equality under the law but not political freedom. &nbsp;&nbsp;E. freedom of expression but
                    only for the aristocracy.&nbsp;&nbsp; Answer: equality under the law but not political freedom.
                </p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={261} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={261} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why is it significant that Napoleon crowned himself as emperor of the First French Empire in
                    1804?:</p>
                <hr />
                <p>A. he was the first of his line.&nbsp;&nbsp;B. it was a symbolic gesture to show his
                    independence.&nbsp;&nbsp; C. because of the Concordat of 1801 the clergy refused to
                    participate.&nbsp;&nbsp; D. it had no significance. &nbsp;&nbsp;E. "because the Senate had named
                    him ""Emperor of the French"" rather than ""Emperor of France."""&nbsp;&nbsp; Answer: it was a
                    symbolic gesture to show his independence.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={262} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={262} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What was the direct cause of the rebellions in Latin America in the first part of the 19c?:</p>
                <hr />
                <p>A. slave revolt in Haiti.&nbsp;&nbsp;B. the American Revolution.&nbsp;&nbsp; C. the French
                    Revolution.&nbsp;&nbsp; D. the spread of Enlightenment ideas. &nbsp;&nbsp;E. Napoleon's invasion
                    of Spain.&nbsp;&nbsp; Answer: Napoleon's invasion of Spain.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={263} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={263} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Quadruple Alliance included all of the following European powers EXCEPT?:</p>
                <hr />
                <p>A. Britain.&nbsp;&nbsp;B. Austria.&nbsp;&nbsp; C. Prussia.&nbsp;&nbsp; D. Italy. &nbsp;&nbsp;E.
                    Russia.&nbsp;&nbsp; Answer: Italy.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={264} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={264} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Napoleon?:</p>
                <hr />
                <p>A. was born and raised in Paris.&nbsp;&nbsp;B. joined the Jacobins shortly after the French
                    Revolution.&nbsp;&nbsp; C. won a naval victory over Horatio Nelson off the coast of
                    Egypt.&nbsp;&nbsp; D. had poor math skills. &nbsp;&nbsp;E. won the Battle of
                    Trafalgar.&nbsp;&nbsp; Answer: joined the Jacobins shortly after the French Revolution.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={265} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={265} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Napoleon's conquest of Spain doomed its American empire by?:</p>
                <hr />
                <p>A. draining precious resources away from colonial economies for the French war
                    machine.&nbsp;&nbsp;B. opening Spanish America up to British invasion.&nbsp;&nbsp; C. allowing
                    the colonies to govern themselves for six years.&nbsp;&nbsp; D. killing off nearly all trained
                    Spanish administrators. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer:
                    allowing the colonies to govern themselves for six years.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={266} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={266} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>How did Napoleon deal with the Holy Roman Empire?:</p>
                <hr />
                <p>A. he replaced the empire with the Confederation of the Rhine.&nbsp;&nbsp;B. he annexed the
                    southwestern states to France and created a Northern German Confederation under the
                    l&nbsp;&nbsp; C. he expanded the empire's control over the Confederation of the
                    Rhine.&nbsp;&nbsp; D. he crowned himself Holy Roman Emperor. &nbsp;&nbsp;E. he installed his own
                    candidate as Holy Roman Emperor.&nbsp;&nbsp; Answer: he replaced the empire with the
                    Confederation of the Rhine.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={267} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={267} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>After the French Revolution and the Napoleonic era France?:</p>
                <hr />
                <p>A. became a socialist state.&nbsp;&nbsp;B. completely revised its legal system.&nbsp;&nbsp; C.
                    instituted universal suffrage and education.&nbsp;&nbsp; D. was divided into departments rather
                    than provinces. &nbsp;&nbsp;E. rejected the possibility of a constitutional
                    monarchy.&nbsp;&nbsp; Answer: was divided into departments rather than provinces.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={268} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={268} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which country was NOT ruled by a member of the Bonaparte family during the first decade of the
                    19c?:</p>
                <hr />
                <p>A. Holland.&nbsp;&nbsp;B. Westphalia.&nbsp;&nbsp; C. Poland.&nbsp;&nbsp; D. Spain. &nbsp;&nbsp;E.
                    Prussia.&nbsp;&nbsp; Answer: Prussia.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={269} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={269} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The rule of the British East India Company in India was terminated as a result of?:</p>
                <hr />
                <p>A. the Crimean War.&nbsp;&nbsp;B. reorganization of the British Empire by Disraeli.&nbsp;&nbsp;
                    C. The Congress of Berlin in 1885.&nbsp;&nbsp; D. the Sepoy Mutiny. &nbsp;&nbsp;E. the ambitions
                    of Queen Victoria.&nbsp;&nbsp; Answer: the Sepoy Mutiny.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={270} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={270} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Great Britain exported opium to China in order to?:</p>
                <hr />
                <p>A. demoralize Chinese resistance to conquest.&nbsp;&nbsp;B. find a means of paying for imports
                    from China.&nbsp;&nbsp; C. goad the Chinese into war with Britain.&nbsp;&nbsp; D. overcome other
                    European trade rivals. &nbsp;&nbsp;E. increase profits for British merchants in
                    Egypt.&nbsp;&nbsp; Answer: find a means of paying for imports from China.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={271} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={271} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In arguing for the positive effects of her imperialist rule in India Britain could point to all
                    of the following EXCEPT?:</p>
                <hr />
                <p>A. a competant civil service which generally served well in India.&nbsp;&nbsp;B. an increase in
                    education including instruction in English.&nbsp;&nbsp; C. eradication of discrimination based
                    on caste.&nbsp;&nbsp; D. development of the Indian infrastructure. &nbsp;&nbsp;E. control of
                    hostilities among diverse Indian religious groups.&nbsp;&nbsp; Answer: eradication of
                    discrimination based on caste.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={272} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={272} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is the BEST reason for the beginnings of late 19c imperialism?:</p>
                <hr />
                <p>A. the need to develop manufacturing in non-industrialized nations.&nbsp;&nbsp;B. the global
                    competition of European nations for claims to less developed areas.&nbsp;&nbsp; C. missionary
                    activities to proselytize and convert the heathens.&nbsp;&nbsp; D. the acquisition of
                    territories promising strategic benefit. &nbsp;&nbsp;E. national security and the need for an
                    international balance of power.&nbsp;&nbsp; Answer: national security and the need for an
                    international balance of power.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={273} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={273} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Extraterritoriality and treaty ports were?:</p>
                <hr />
                <p>A. legal agreements between France and Britain.&nbsp;&nbsp;B. rights granted by the East India
                    Company to native Indians.&nbsp;&nbsp; C. "features of the ""unequal treaties"" China was forced
                    to accept."&nbsp;&nbsp; D. imposed on Russia after her defeat in the Crimean War. &nbsp;&nbsp;E.
                    concessions made by the United States to the Hawaiians in the 1880s.&nbsp;&nbsp; Answer:
                    "features of the ""unequal treaties"" China was forced to accept."</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={274} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={274} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Colonial rivalries that helped to increase international tensions before World War I included?:
                </p>
                <hr />
                <p>A. British and French conflicts with Germany over Morocco.&nbsp;&nbsp;B. Serbian hostility to
                    Russia.&nbsp;&nbsp; C. German-Russian conflicts in Africa.&nbsp;&nbsp; D. Dutch-British clashes
                    in the East Indies. &nbsp;&nbsp;E. United States ambitions in Puerto Rico.&nbsp;&nbsp; Answer:
                    British and French conflicts with Germany over Morocco.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={275} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={275} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"A unique feature of the ""new imperialism"" was the?:"</p>
                <hr />
                <p>A. reliance on indirect political control over colonies through ruling native
                    elites.&nbsp;&nbsp;B. establishment of European control over Latin America.&nbsp;&nbsp; C.
                    establishment of direct political control over colonies through elaborate imperial
                    bureaucracies.&nbsp;&nbsp; D. decline in number of Western countries building empires.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: establishment of direct
                    political control over colonies through elaborate imperial bureaucracies.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={276} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={276} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following did NOT occur at the Berlin Conference of 1884-1885?:</p>
                <hr />
                <p>A. It was determined that nations claiming territories in Africa would have to demonstrate the
                    creation&nbsp;&nbsp;B. The Congo was yielded to Leopold of Belgium as the Congo Free
                    State.&nbsp;&nbsp; C. The conference laid the ground rules for all further acquisitions in
                    Africa.&nbsp;&nbsp; D. The conference divided all of Africa among the major European powers.
                    &nbsp;&nbsp;E. The conference organized and structured the terms under which Africa would fall
                    to European nations.&nbsp;&nbsp; Answer: The conference divided all of Africa among the major
                    European powers.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={277} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={277} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One striking difference between the British and the French imperial models in Africa is that?:
                </p>
                <hr />
                <p>A. the British preferred to use local institutions to control subject populations.&nbsp;&nbsp;B.
                    the French preferred to employ local rulers to govern their colonies.&nbsp;&nbsp; C. many more
                    British citizens relocated to Africa to administer their colonies than did French
                    citizens&nbsp;&nbsp; D. the British actively sought to convert Africans to Christianity while
                    the French did not. &nbsp;&nbsp;E. the British established schools and academies to train
                    African civil servants to run their colonies &nbsp;&nbsp; Answer: the British preferred to use
                    local institutions to control subject populations.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={278} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={278} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"Which of the following are considered causes for the ""new imperialism""?:"</p>
                <hr />
                <p>A. a search for markets for European manufactured goods.&nbsp;&nbsp;B. European
                    racism.&nbsp;&nbsp; C. acquisition of colonies for prestige and national security.&nbsp;&nbsp;
                    D. missionary zeal. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of
                    these choices are correct.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={279} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={279} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements concerning the internal economies of the European colonies is
                    most accurate?:</p>
                <hr />
                <p>A. the introduction of European technology such as railways and telegraphs was intended to
                    improve the &nbsp;&nbsp;B. slowly the industrial system of the West including factories and the
                    production of manufactured good&nbsp;&nbsp; C. by 1914 Asian and African colonies had won
                    economic independence from the European colonizers.&nbsp;&nbsp; D. the internal economies
                    remained separate from the trade with Europe but continued to thrive. &nbsp;&nbsp;E. colonial
                    economies were steadily reduced to dependence on the European-dominated global
                    market.&nbsp;&nbsp; Answer: colonial economies were steadily reduced to dependence on the
                    European-dominated global market.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={280} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={280} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The 19c term ""White Man's Burden"" reflects the idea that?:"</p>
                <hr />
                <p>A. Asians and Africans were equal to Europeans.&nbsp;&nbsp;B. Europeans had a responsibility to
                    improve the lives of their colonial peoples.&nbsp;&nbsp; C. imperialism was opposed by most
                    European.&nbsp;&nbsp; D. Asians and Africans would be grateful for European help. &nbsp;&nbsp;E.
                    democracy was the best form of government for Asia and Africa.&nbsp;&nbsp; Answer: Europeans had
                    a responsibility to improve the lives of their colonial peoples.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={281} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={281} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Philip II strengthened the Spanish Inquisition in the Netherlands because?:</p>
                <hr />
                <p>A. he wanted to expel Jews living in the Netherlands.&nbsp;&nbsp;B. he wanted to find and punish
                    Dutch Protestants.&nbsp;&nbsp; C. he wanted to assist the Prince of Orange William the
                    Silent.&nbsp;&nbsp; D. he wanted to investigate suspected witches from the Netherlands.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: he wanted to find and
                    punish Dutch Protestants.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={282} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={282} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Elizabeth I's major goal in foreign policy was to?:</p>
                <hr />
                <p>A. avoid open warfare whenever possible and keep England strong and at peace.&nbsp;&nbsp;B. start
                    rebellions against the Scots.&nbsp;&nbsp; C. marry one of the available foreign kings or heirs
                    to their thrones.&nbsp;&nbsp; D. create a democratic republic in England. &nbsp;&nbsp;E. go to
                    war with France and recapture lands lost by England during the Hundred Years' War.&nbsp;&nbsp;
                    Answer: avoid open warfare whenever possible and keep England strong and at peace.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={283} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={283} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Spanish term Reconquista refers to which of the following?:</p>
                <hr />
                <p>A. Spain's victory over the French in northern Italy.&nbsp;&nbsp;B. the defeat of the Islamic
                    states on the Iberian peninsula.&nbsp;&nbsp; C. the long sought trade agreement with
                    Portugal.&nbsp;&nbsp; D. the beginnings of Habsburg rule in Spain. &nbsp;&nbsp;E. the sailing of
                    the Armada against England.&nbsp;&nbsp; Answer: the defeat of the Islamic states on the Iberian
                    peninsula.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={284} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={284} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Machiavelli's The Prince was significant because?:</p>
                <hr />
                <p>A. "it became the ""Bible of 20c dictators."""&nbsp;&nbsp;B. it was one of the first
                    reality-based treatises on political behavior.&nbsp;&nbsp; C. it was based primarily on
                    empirical (hands-on) observation.&nbsp;&nbsp; D. it was written with the goal of unifying Italy.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these choices are
                    correct.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={285} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={285} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>After the United Provinces of the Netherlands won independence from Spain their government could
                    BEST be described as?:</p>
                <hr />
                <p>A. a strong monarchy.&nbsp;&nbsp;B. a centralized parliamentary system.&nbsp;&nbsp; C. a weak
                    union of strong provinces.&nbsp;&nbsp; D. a democracy. &nbsp;&nbsp;E. a military
                    dictatorships.&nbsp;&nbsp; Answer: a weak union of strong provinces.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={286} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={286} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The single greatest cause of warfare between 1550 and 1650 was?:</p>
                <hr />
                <p>A. economic competition.&nbsp;&nbsp;B. disputes over constitutional issues.&nbsp;&nbsp; C.
                    international disputes over territory.&nbsp;&nbsp; D. religious rivalries. &nbsp;&nbsp;E.
                    growing tensions between kings and nobles.&nbsp;&nbsp; Answer: religious rivalries.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={287} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={287} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were accomplishments of the Tudor monarchy EXCEPT?:</p>
                <hr />
                <p>A. abolishing the Privy Council.&nbsp;&nbsp;B. getting the most funds from their not very
                    extensive inheritance.&nbsp;&nbsp; C. putting an end to dynastic instability.&nbsp;&nbsp; D.
                    transforming England into a Protestant nation. &nbsp;&nbsp;E. creation of a new level of peerage
                    as a fund-raising tool.&nbsp;&nbsp; Answer: abolishing the Privy Council.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={288} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={288} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Machiavelli would most likely support a politician who would?:</p>
                <hr />
                <p>A. govern his actions by moral considerations.&nbsp;&nbsp;B. take actions to weaken the
                    government and let the people govern.&nbsp;&nbsp; C. manipulate people and use any means to gain
                    power.&nbsp;&nbsp; D. govern with the help of the church. &nbsp;&nbsp;E. take a passive approach
                    when dealing with problems.&nbsp;&nbsp; Answer: manipulate people and use any means to gain
                    power.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={289} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={289} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a foreign policy initiative of Philip II of Spain?:</p>
                <hr />
                <p>A. an attempt to invade England.&nbsp;&nbsp;B. an attempt to influence the succession to the
                    French throne.&nbsp;&nbsp; C. an attempt to clear the Mediterranean of Muslim
                    navies.&nbsp;&nbsp; D. an attempt to return the Lutheran areas of north Germany to the Catholic
                    fold. &nbsp;&nbsp;E. an attempt to combat the work of Calvinists in the Netherlands.&nbsp;&nbsp;
                    Answer: an attempt to return the Lutheran areas of north Germany to the Catholic fold.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={290} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={290} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Holy Roman Emperor was a weak title because?:</p>
                <hr />
                <p>A. the Austrian Habsburgs controlled the throne.&nbsp;&nbsp;B. it was an elected
                    monarchy.&nbsp;&nbsp; C. France was the power behind the throne.&nbsp;&nbsp; D. the religious
                    authority of the Emperor was superior to the political. &nbsp;&nbsp;E. it was selected by the
                    papacy.&nbsp;&nbsp; Answer: it was an elected monarchy.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={291} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={291} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Ferdinand and Isabella consolidated royal power in Spain by?:</p>
                <hr />
                <p>A. creating a single political and governmental system for all their kingdoms.&nbsp;&nbsp;B.
                    eliminating the power and privileges of the great nobles.&nbsp;&nbsp; C. appropriating a portion
                    of church income.&nbsp;&nbsp; D. obtaining from the papacy the right to make major
                    ecclesiastical appointments in Spain. &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: obtaining from the papacy the right to make major ecclesiastical
                    appointments in Spain.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={292} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={292} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements BEST characterizes Elizabeth I's religious policy?:</p>
                <hr />
                <p>A. a policy of moderation and compromise.&nbsp;&nbsp;B. a new wave of persecution of Catholics in
                    Ireland.&nbsp;&nbsp; C. a continuation of the policies of Mary I.&nbsp;&nbsp; D. an acceptance
                    of fundamental Protestantism after Mary's repressive Catholicism. &nbsp;&nbsp;E. a continuation
                    of all of the policies of Edward VI.&nbsp;&nbsp; Answer: a policy of moderation and compromise.
                </p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={293} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={293} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements concerning economic agreements is NOT CORRECT?:</p>
                <hr />
                <p>A. the International Monetary Fund was organized to provide small loans to the desperately poor
                    (partic&nbsp;&nbsp;B. the Marshall Plan provided economic aid for the rebuilding of western
                    Europe following World War II.&nbsp;&nbsp; C. the European Economic Community was founded in
                    response to the pressures of the Cold War&nbsp;&nbsp; D. North American Free Trade Agreement in
                    1994 established a partnership involving the U. S. Canada and &nbsp;&nbsp;E. OPEC created an oil
                    cartel among oil-producing countries to set the price of oil.&nbsp;&nbsp; Answer: the
                    International Monetary Fund was organized to provide small loans to the desperately poor (partic
                </p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={294} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={294} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In mid-1991 war broke out in the former Yugoslavia when?:</p>
                <hr />
                <p>A. Croatia applied for membership in N.A.T.O.&nbsp;&nbsp;B. Bosnian Muslims attacked
                    Serbians.&nbsp;&nbsp; C. Serb armed forces carved out enclaves for Serb minorities in the
                    republics of the former Yugoslavia.&nbsp;&nbsp; D. Slovenia and Croatia massacred thousands of
                    Serbs. &nbsp;&nbsp;E. Croatian Slovenian and Bosnian forces attacked Serbia.&nbsp;&nbsp; Answer:
                    Serb armed forces carved out enclaves for Serb minorities in the republics of the former
                    Yugoslavia.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={295} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={295} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1991 members of the European Union drew up a plan for common policy currency and banking known
                    as the?:</p>
                <hr />
                <p>A. Helsinki Accords.&nbsp;&nbsp;B. Maastrict Agreement.&nbsp;&nbsp; C. NAFTA.&nbsp;&nbsp; D.
                    Chirac initiative. &nbsp;&nbsp;E. Dunbarton Oaks Treaty.&nbsp;&nbsp; Answer: Maastrict
                    Agreement.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={296} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={296} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements about the reunification of Germany is TRUE?:</p>
                <hr />
                <p>A. West Germany suffered a dramatic economic depression.&nbsp;&nbsp;B. East Germans staunchly
                    opposed political and social reforms.&nbsp;&nbsp; C. economic problems were minimal.&nbsp;&nbsp;
                    D. The Soviet Union paid the German government $15 billion for the ecological damage caused by
                    decades &nbsp;&nbsp;E. East Germans suffered a loss of welfare benefits.&nbsp;&nbsp; Answer:
                    East Germans suffered a loss of welfare benefits.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={297} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={297} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why have so many violent clashes broken out between ethnic and religious groups in Central and
                    Eastern Europe since the fall of Communism?:</p>
                <hr />
                <p>A. the opening of Eastern Europe to a free market economy has promoted ferocious competition and
                    this h&nbsp;&nbsp;B. because under Communism the different ethnic and religious groups were
                    allowed complete freedom but &nbsp;&nbsp; C. the Eastern Europeans have simply imitated the
                    growing nationalism in Russia.&nbsp;&nbsp; D. the Communist regimes suppressed or permitted only
                    cultural expression of national ambitions and now &nbsp;&nbsp;E. all of these choices are
                    correct.&nbsp;&nbsp; Answer: the Communist regimes suppressed or permitted only cultural
                    expression of national ambitions and now</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={298} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={298} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1993 Czechoslovakia?:</p>
                <hr />
                <p>A. joined both the EC and NATO.&nbsp;&nbsp;B. split into the Czech Republic and
                    Slovakia.&nbsp;&nbsp; C. suffered a violent civil war.&nbsp;&nbsp; D. allowed local autonomy for
                    all ethnic minorities. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer:
                    split into the Czech Republic and Slovakia.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={299} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={299} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Paris Accord of 1990 was a Europe-wide agreement to?:</p>
                <hr />
                <p>A. affirm existing borders and reduce arms.&nbsp;&nbsp;B. resume the cold war.&nbsp;&nbsp; C.
                    privatize the economies of Europe.&nbsp;&nbsp; D. intensify anti-drug efforts. &nbsp;&nbsp;E.
                    bring about a settlement in Bosnia.&nbsp;&nbsp; Answer: affirm existing borders and reduce arms.
                </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={300} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={300} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was not a factor in the collapse of the communist governments of eastern
                    Europe in 1989?:</p>
                <hr />
                <p>A. the leadership of Yugoslavia in opposing the Soviet Union.&nbsp;&nbsp;B. the defeat of the
                    communist regimes in democratic elections.&nbsp;&nbsp; C. Gorbachev’s announcement that the
                    Soviet Union was withdrawing its financial and military supp&nbsp;&nbsp; D. the efforts of the
                    Solidarity movement in Poland. &nbsp;&nbsp;E. the failure of communism to gain the support of
                    indigenous populations.&nbsp;&nbsp; Answer: Gorbachev’s announcement that the Soviet Union was
                    withdrawing its financial and military supp</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={301} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={301} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Since the collapse of the Soviet Union the movement for European unity has been threatened by?:
                </p>
                <hr />
                <p>A. problems of integrating poorer and less-developed areas.&nbsp;&nbsp;B. religious minorities
                    that have not benefitted from economic prosperity.&nbsp;&nbsp; C. hostility of other nations
                    toward domination of the German financial system.&nbsp;&nbsp; D. inability to decide on how to
                    deal with violence in Bosnia. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={302} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={302} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The event which finally galvanized NATO action against the Bosnian Serbs was?:</p>
                <hr />
                <p>A. Milosevic's ditching of his Bosnian Serv allies.&nbsp;&nbsp;B. the discovery of ethnic
                    cleansing policies.&nbsp;&nbsp; C. the fear of Russian intervention on the Bosnian Serb
                    side.&nbsp;&nbsp; D. the slaughter of several thousand citizens in Srebrenica. &nbsp;&nbsp;E.
                    the invasion of Bosnia by elements of the regular Serbian army.&nbsp;&nbsp; Answer: the
                    slaughter of several thousand citizens in Srebrenica.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={303} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={303} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The July Ordinances were repressive decrees issued by?:</p>
                <hr />
                <p>A. Nicholas I of Russia.&nbsp;&nbsp;B. Prince Metternich of Austria.&nbsp;&nbsp; C. Queen
                    Victoria of England.&nbsp;&nbsp; D. Frederick William IV of Prussia. &nbsp;&nbsp;E. Charles X of
                    France.&nbsp;&nbsp; Answer: Charles X of France.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={304} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={304} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Metternich may have been a brilliant statesman but he was particularly misguided in?:</p>
                <hr />
                <p>A. thinking he could stop forces of nationalism and liberalism.&nbsp;&nbsp;B. his attempt to keep
                    legitimate dynasties from returning to power.&nbsp;&nbsp; C. his failure to understand the need
                    to balance power.&nbsp;&nbsp; D. serving the Austrian monarchy and totally disregarding the
                    interests of Europe. &nbsp;&nbsp;E. his support of the 1848 revolutions in Italy.&nbsp;&nbsp;
                    Answer: thinking he could stop forces of nationalism and liberalism.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={305} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={305} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The chief purpose of the Congress of Vienna was to?:</p>
                <hr />
                <p>A. stimulate nationalism.&nbsp;&nbsp;B. protect western Europe from autocratic
                    Russia.&nbsp;&nbsp; C. restore the Old Regime as far as possible.&nbsp;&nbsp; D. preserve the
                    basic reforms of the French Revolution. &nbsp;&nbsp;E. make Poland an independent
                    state.&nbsp;&nbsp; Answer: restore the Old Regime as far as possible.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={306} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={306} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 1820 revolutionaries overthrew the governments of which two states?:</p>
                <hr />
                <p>A. Portugal and Tuscany.&nbsp;&nbsp;B. France and Spain.&nbsp;&nbsp; C. Piedmont and
                    Prussia.&nbsp;&nbsp; D. Spain and Naples. &nbsp;&nbsp;E. Poland and Russia.&nbsp;&nbsp; Answer:
                    Spain and Naples.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={307} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={307} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Burschenschaften was?:</p>
                <hr />
                <p>A. a revolutionary society in Italy.&nbsp;&nbsp;B. student societies in Germany who wanted to
                    spread German nationalism.&nbsp;&nbsp; C. an army used to crush revolutions in
                    Germany.&nbsp;&nbsp; D. a German newspaper calling for a liberal state. &nbsp;&nbsp;E. a German
                    religious society to crush Protestantism.&nbsp;&nbsp; Answer: student societies in Germany who
                    wanted to spread German nationalism.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={308} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={308} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The major supports of post-Napoleonic conservatism were?:</p>
                <hr />
                <p>A. Roman Catholicism the middle class and urban workers.&nbsp;&nbsp;B. legitimate monarchs the
                    middle class and peasants.&nbsp;&nbsp; C. radical religious groups city dwellers and rural
                    poor.&nbsp;&nbsp; D. peasants university students and the urban poor. &nbsp;&nbsp;E. legitimate
                    monarchs landed aristocrats and the leaders of the established religions.&nbsp;&nbsp; Answer:
                    legitimate monarchs landed aristocrats and the leaders of the established religions.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={309} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={309} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The principle of legitimacy at the Congress of Vienna meant the?:</p>
                <hr />
                <p>A. restoration of monarchs previously dethroned by Napoleon.&nbsp;&nbsp;B. extension of
                    democracy.&nbsp;&nbsp; C. establishment of equality before the law.&nbsp;&nbsp; D.
                    self-determination of peoples. &nbsp;&nbsp;E. rewarding countries who helped to defeat
                    Napoleon.&nbsp;&nbsp; Answer: restoration of monarchs previously dethroned by Napoleon.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={310} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={310} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"What became known as the ""Eastern Question"" in European affairs was actually a reflection of
                    the?:"</p>
                <hr />
                <p>A. war for Greek independence.&nbsp;&nbsp;B. Polish resistence to Russian reform programs
                    there.&nbsp;&nbsp; C. weakness of the Ottoman Empire.&nbsp;&nbsp; D. the desire on the part of
                    France and England to establish a naval presence in the eastern Mediterran &nbsp;&nbsp;E.
                    European fear of Russia.&nbsp;&nbsp; Answer: weakness of the Ottoman Empire.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={311} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={311} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Decembrist Revolt of 1825?:</p>
                <hr />
                <p>A. was devised by middle class merchants to secure political and economic reforms.&nbsp;&nbsp;B.
                    was the first rebellion in modern Russian history whose instigators had specific political
                    goals.&nbsp;&nbsp; C. symbolized the yearnings of Russian liberals whose numbers were
                    substantial.&nbsp;&nbsp; D. succeeded because the Russian officer corps was able to coordinate
                    their rebellion with the one in G &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: was the first rebellion in modern Russian history whose instigators had specific
                    political goals.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={312} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={312} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the key aim of the British Corn Laws in the early 1800s?:</p>
                <hr />
                <p>A. to export grain at cheaper prices to France.&nbsp;&nbsp;B. to weaken the power of the middle
                    class in finance and banking.&nbsp;&nbsp; C. to improve the quality of British
                    grain.&nbsp;&nbsp; D. to protect the interests of British grain producers from foreign imports.
                    &nbsp;&nbsp;E. to set up a free trade zone among farmers in western Europe.&nbsp;&nbsp; Answer:
                    to protect the interests of British grain producers from foreign imports.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={313} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={313} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following are true of the Romantic movement in the early 19c EXCEPT?:</p>
                <hr />
                <p>A. it sympathized with revolts against oppression.&nbsp;&nbsp;B. it placed great emphasis upon
                    the individual.&nbsp;&nbsp; C. it called for social reform.&nbsp;&nbsp; D. it instilled a
                    reverence for nature. &nbsp;&nbsp;E. it accepted the basic ideals of the Enlightenment
                    philosophes .&nbsp;&nbsp; Answer: it accepted the basic ideals of the Enlightenment philosophes
                    .</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={314} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={314} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Following the death of Alexander I in 1825 Russia under Nicholas I became?:</p>
                <hr />
                <p>A. a police state due to Nicholas's fear of revolution.&nbsp;&nbsp;B. the most liberal of the
                    European powers.&nbsp;&nbsp; C. a major imperialist power with colonies in Asia and
                    Africa.&nbsp;&nbsp; D. a limited monarchy under the control of the Duma. &nbsp;&nbsp;E. an
                    industrial power following the abolition of serfdom.&nbsp;&nbsp; Answer: a police state due to
                    Nicholas's fear of revolution.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={315} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={315} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Generally the revolutions of 1848 resulted in?:</p>
                <hr />
                <p>A. success for the liberal forces in Europe.&nbsp;&nbsp;B. slow gains at first for the liberals
                    followed by complete realization of their goals.&nbsp;&nbsp; C. the end of monarchy in
                    Europe.&nbsp;&nbsp; D. a consolidation of moderate nationalistic middle classes. &nbsp;&nbsp;E.
                    the end of the age of romantic revolution.&nbsp;&nbsp; Answer: the end of the age of romantic
                    revolution.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={316} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={316} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The foremost social group embracing liberalism was made up by?:</p>
                <hr />
                <p>A. factory workers.&nbsp;&nbsp;B. the industrial middle class.&nbsp;&nbsp; C. radical
                    aristocrats.&nbsp;&nbsp; D. army officers. &nbsp;&nbsp;E. the clergy.&nbsp;&nbsp; Answer: the
                    industrial middle class.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={317} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={317} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Frankfurt Assembly failed because?:</p>
                <hr />
                <p>A. it endeavored to establish a radical rather than a liberal state.&nbsp;&nbsp;B. it did not
                    resolve the contradictions between liberalism and nationalism in the building of a
                    German&nbsp;&nbsp; C. the Prussian army quickly blocked its revolutionary efforts.&nbsp;&nbsp;
                    D. its refused to support Polish nationalism turned the Polish army against the Assembly.
                    &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer: it did not resolve the
                    contradictions between liberalism and nationalism in the building of a German</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={318} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={318} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The revolution of 1848 in France resulted in?:</p>
                <hr />
                <p>A. the continued rule of Louis-Philippe but with radical reforms.&nbsp;&nbsp;B. new elections to
                    the National Assembly resulting in the dominance of the radical republicans.&nbsp;&nbsp; C.
                    Europe's first socialist state under the guidance of the National Workshops.&nbsp;&nbsp; D. an
                    authoritarian regime under Louis Napoleon Bonaparte. &nbsp;&nbsp;E. a limited monarchy under the
                    restored Bourbons.&nbsp;&nbsp; Answer: an authoritarian regime under Louis Napoleon Bonaparte.
                </p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={319} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={319} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Czar Nicholas I ruled Russia with a policy of?:</p>
                <hr />
                <p>A. repression and spying.&nbsp;&nbsp;B. religious toleration and political liberties.&nbsp;&nbsp;
                    C. political freedom for only the wealthy class.&nbsp;&nbsp; D. cultural freedom but strict
                    economic and political controls. &nbsp;&nbsp;E. enlightened despotism.&nbsp;&nbsp; Answer:
                    repression and spying.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={320} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={320} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The novelty of the ""Concert of Europe"" system was its recognition that?:"</p>
                <hr />
                <p>A. war had become too dangerous a luxury for Europe to afford.&nbsp;&nbsp;B. France could not be
                    eliminated from the map of Europe.&nbsp;&nbsp; C. free trade was necessary for the economies of
                    Europe to improve after the recessions following the N&nbsp;&nbsp; D. wars were useful only to
                    obtain territory not spread political change. &nbsp;&nbsp;E. internal affairs were the concern
                    solely of the affected country.&nbsp;&nbsp; Answer: war had become too dangerous a luxury for
                    Europe to afford.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={321} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={321} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The main flaw of the Congress of Vienna settlement was that it?:</p>
                <hr />
                <p>A. treated France too leniently.&nbsp;&nbsp;B. excluded Spain from any territorial
                    settlement.&nbsp;&nbsp; C. refused to recognize the strength of nationalism and French
                    revolutionary values and ideals.&nbsp;&nbsp; D. went too far in adapting to the new political
                    values that had appeared by 1815. &nbsp;&nbsp;E. excluded France from joining any political
                    alliance system after 1820.&nbsp;&nbsp; Answer: refused to recognize the strength of nationalism
                    and French revolutionary values and ideals.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={322} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={322} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most important symbol of Romanticism became the?:</p>
                <hr />
                <p>A. unified society marching collectively to a better future.&nbsp;&nbsp;B. desperate working
                    class fighting for its freedom.&nbsp;&nbsp; C. oppressed nationalities fighting for
                    freedom.&nbsp;&nbsp; D. isolated individual in heroic struggle. &nbsp;&nbsp;E. idealic life of
                    the yeoman farmer.&nbsp;&nbsp; Answer: isolated individual in heroic struggle.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={323} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={323} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Count Henri de Saint-Simon believed that?:</p>
                <hr />
                <p>A. nature should be worshipped as a god.&nbsp;&nbsp;B. sexual freedom was a necessary component
                    of political freedom.&nbsp;&nbsp; C. society should return to 17c norms.&nbsp;&nbsp; D.
                    ownership of private property was a crime. &nbsp;&nbsp;E. the key to progress was proper social
                    organization.&nbsp;&nbsp; Answer: the key to progress was proper social organization.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={324} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={324} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Revolution of 1830 in France?:had no influence over the revolution in Poland.</p>
                <hr />
                <p>A. benefited the upper middle class.&nbsp;&nbsp;B. resulted from Louis XVIII's refusal to deny
                    his theoretical absolute power.&nbsp;&nbsp; C. established Louis Napoleon as the new emperor of
                    France.&nbsp;&nbsp; D. put the working class ina position of political supremacy. &nbsp;&nbsp;E.
                    had no influence over the revolution in Poland.&nbsp;&nbsp; Answer: benefited the upper middle
                    class.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={325} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={325} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Protocol of Troppau?:</p>
                <hr />
                <p>A. permitted Russia and Prussia to build up their armies.&nbsp;&nbsp;B. advocated intervention in
                    Italian affairs.&nbsp;&nbsp; C. permitted stable governments' intervention into countries
                    experiencing revolution for the purpose of&nbsp;&nbsp; D. dismantled the Concert of Europe.
                    &nbsp;&nbsp;E. required countries experiencing revolution to temporarily concede their authority
                    to allied European&nbsp;&nbsp; Answer: permitted stable governments' intervention into countries
                    experiencing revolution for the purpose of</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={326} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={326} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>King Louis-Philippe was called France's bourgeois monarch for all of the following EXCEPT?:</p>
                <hr />
                <p>A. he increased the number of voters.&nbsp;&nbsp;B. he favored the extension of political power
                    to the working class.&nbsp;&nbsp; C. in public he dressed in the clothes of an
                    industrialist.&nbsp;&nbsp; D. his strongest supporters were upper middle class businessmen.
                    &nbsp;&nbsp;E. he introduced policies that favored the bourgeoisie.&nbsp;&nbsp; Answer: he
                    favored the extension of political power to the working class.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={327} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={327} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Utopian socialism was built upon the idea that?:</p>
                <hr />
                <p>A. strong states should direct national economies.&nbsp;&nbsp;B. conservative economic principles
                    foster social stability.&nbsp;&nbsp; C. political reform was more important than economic
                    reform.&nbsp;&nbsp; D. competition among workers drives progress. &nbsp;&nbsp;E. cooperative
                    living might create a better environment for people.&nbsp;&nbsp; Answer: cooperative living
                    might create a better environment for people.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={328} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={328} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"* cujus regio ejus religio. * reaffirmation of German nationalism. * limited to the recognition
                    of Lutheranism and Catholicism. * resolved the conflict between German Protestants and Catholic
                    princes in the Holy Roman Empire. All of the statements above describe the?:"</p>
                <hr />
                <p>A. Treaty of Westphalia.&nbsp;&nbsp;B. Edict of Nantes.&nbsp;&nbsp; C. Peace of
                    Augsburg.&nbsp;&nbsp; D. Treaty of Paris. &nbsp;&nbsp;E. Edict of Worms.&nbsp;&nbsp; Answer:
                    Peace of Augsburg.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={329} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={329} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the underlying cause of the other four?:</p>
                <hr />
                <p>A. the end of unity in Western Christianity.&nbsp;&nbsp;B. the Protestant
                    Reformation.&nbsp;&nbsp; C. religious conflicts evident in wars in the last half of the
                    17c.&nbsp;&nbsp; D. the Great Schism characterized by the Avignon papacy and the struggle
                    between Pope Boniface XVIII an &nbsp;&nbsp;E. increase in lay education and spiritual
                    reading.&nbsp;&nbsp; Answer: the Great Schism characterized by the Avignon papacy and the
                    struggle between Pope Boniface XVIII an</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={330} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={330} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>By the end of the 16c the Protestant Reformation had extended its influence to all of the
                    following nations EXCEPT?:</p>
                <hr />
                <p>A. the Holy Roman Empire.&nbsp;&nbsp;B. Spain.&nbsp;&nbsp; C. Sweden.&nbsp;&nbsp; D. England.
                    &nbsp;&nbsp;E. Switzerland.&nbsp;&nbsp; Answer: Spain.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={331} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={331} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>When the coin in the coffer rings the soul from Purgatory springs. This jingle was most likely
                    spoken by?:</p>
                <hr />
                <p>A. Johannes Tetzel.&nbsp;&nbsp;B. Martin Luther.&nbsp;&nbsp; C. John Calvin.&nbsp;&nbsp; D. John
                    Knox. &nbsp;&nbsp;E. Sir Thomas More.&nbsp;&nbsp; Answer: Johannes Tetzel.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={332} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={332} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Schmalkaldic War (1546-1547) was begun by?:</p>
                <hr />
                <p>A. the Hapsburg to extend their empire.&nbsp;&nbsp;B. Philip II of Spain to subdue the
                    Netherlands.&nbsp;&nbsp; C. Ivan III of Russia to extend his domains.&nbsp;&nbsp; D. Henry IV of
                    France to suppress the Huguenots. &nbsp;&nbsp;E. Charles V to restore Catholicism to the Holy
                    Roman Empire.&nbsp;&nbsp; Answer: Charles V to restore Catholicism to the Holy Roman Empire.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={333} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={333} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Calvinist laws prohibited?:</p>
                <hr />
                <p>A. investments and profits.&nbsp;&nbsp;B. dancing and gambling.&nbsp;&nbsp; C. the mixing of
                    church and state.&nbsp;&nbsp; D. capital punishment. &nbsp;&nbsp;E. education for
                    women.&nbsp;&nbsp; Answer: dancing and gambling.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={334} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={334} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Ulrich Zwingli was responsible for the Protestant conversion of?:</p>
                <hr />
                <p>A. the Netherlands.&nbsp;&nbsp;B. France.&nbsp;&nbsp; C. Switzerland.&nbsp;&nbsp; D. Portugal.
                    &nbsp;&nbsp;E. Denmark.&nbsp;&nbsp; Answer: Switzerland.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={335} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={335} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Diet of Worms was?:</p>
                <hr />
                <p>A. an Imperial Council that Martin Luther refused to attend.&nbsp;&nbsp;B. the site of a debate
                    between Martin Luther and John Eck.&nbsp;&nbsp; C. a meeting in which the German princes took
                    the decision to defend Martin Luther in the face of threa&nbsp;&nbsp; D. a Protestant Council
                    whose aim was to unify the various Protestant sects. &nbsp;&nbsp;E. an Imperial Council that
                    ordered Martin Luther to recant and condemned him when he refused.&nbsp;&nbsp; Answer: an
                    Imperial Council that ordered Martin Luther to recant and condemned him when he refused.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={336} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={336} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Peace of Augsburg (1555)?:</p>
                <hr />
                <p>A. allowed every individual in the Holy Roman Empire to choose between Lutheranism and
                    Catholicism.&nbsp;&nbsp;B. made Calvinism the official religion of the Holy Roman
                    Empire.&nbsp;&nbsp; C. subjected both the Catholic and Lutheran churches to complete state
                    control.&nbsp;&nbsp; D. permitted only the ruler of each state in the Empire to choose between
                    Lutheranism and Catholicism. &nbsp;&nbsp;E. granted only a few rights to the
                    Anabaptists.&nbsp;&nbsp; Answer: permitted only the ruler of each state in the Empire to choose
                    between Lutheranism and Catholicism.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={337} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={337} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All are not created on equal terms but some are preordained to eternal life others to eternal
                    damnation; and accordingly as each has been created for one or the other of these ends we say
                    that he has been predestined to life or death. This statement above reflects an essential view
                    of?:</p>
                <hr />
                <p>A. John Calvin.&nbsp;&nbsp;B. Desiderius Erasmus.&nbsp;&nbsp; C. Martin Luther.&nbsp;&nbsp; D.
                    Ulrich Zwingli. &nbsp;&nbsp;E. Francois Rabelais.&nbsp;&nbsp; Answer: John Calvin.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={338} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={338} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Probably the most important reason for the popularity of Lutheranism among the Northern German
                    princes was that it?:</p>
                <hr />
                <p>A. attacked the idea of divinely established Papal authority.&nbsp;&nbsp;B. it made Germany
                    politically weaker.&nbsp;&nbsp; C. taught salvation by good works.&nbsp;&nbsp; D. placed
                    considerable emphasis upon the Emperor. &nbsp;&nbsp;E. raised doubts as to the effectiveness of
                    the Roman Catholic sacraments.&nbsp;&nbsp; Answer: attacked the idea of divinely established
                    Papal authority.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={339} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={339} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Martin Luther rejected which of the following?:</p>
                <hr />
                <p>A. the priesthood of all believers&nbsp;&nbsp;B. justification through faith alone&nbsp;&nbsp; C.
                    the Bible as the final authority of God's word&nbsp;&nbsp; D. the spiritual life as superior to
                    a secular life &nbsp;&nbsp;E. financial payment for the remission of sins&nbsp;&nbsp; Answer:
                    financial payment for the remission of sins</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={340} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={340} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is not considered a cause of the Protestant Reformation?:</p>
                <hr />
                <p>A. northern Renaissance scholars' interest in early biblical texts.&nbsp;&nbsp;B. the reform
                    decrees of the Council of Trent.&nbsp;&nbsp; C. increased lay interest in purifying church
                    practices.&nbsp;&nbsp; D. nationalist movements in the German states of the Holy Roman Empire.
                    &nbsp;&nbsp;E. the taxing policies of the Roman Catholic Church.&nbsp;&nbsp; Answer: the reform
                    decrees of the Council of Trent.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={341} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={341} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Brethren of Common Life represent?:</p>
                <hr />
                <p>A. the extent of Protestant conversions in Italy.&nbsp;&nbsp;B. the intense religious scholarship
                    in Swiss monasteries.&nbsp;&nbsp; C. a typical response of the papacy to the
                    Reformation.&nbsp;&nbsp; D. an example of pre-Reformation popular piety. &nbsp;&nbsp;E. the
                    power and appeal of John Calvin's message.&nbsp;&nbsp; Answer: an example of pre-Reformation
                    popular piety.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={342} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={342} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>John Wycliffe and John Huss both appealed to the superiority of?:</p>
                <hr />
                <p>A. the kings.&nbsp;&nbsp;B. the Church Councils.&nbsp;&nbsp; C. the Bible.&nbsp;&nbsp; D. the
                    Catholic clergy. &nbsp;&nbsp;E. devotion to saints and their relics.&nbsp;&nbsp; Answer: the
                    Bible.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={343} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={343} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Calvin insisted upon strict observance of moral laws because?:</p>
                <hr />
                <p>A. moral behavior was an outward sign that the person was probably of the elect.&nbsp;&nbsp;B. he
                    saw no connection between moral law and salvation.&nbsp;&nbsp; C. it was easier to govern people
                    who accepted a moral law.&nbsp;&nbsp; D. he believed that government could be dispensed with if
                    moral laws were closely obeyed. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp;
                    Answer: moral behavior was an outward sign that the person was probably of the elect.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={344} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={344} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Many German peasants were attracted to Luther's ideas chiefly because they?:</p>
                <hr />
                <p>A. thought that his principles would get them into heaven directly without having to pass through
                    purga&nbsp;&nbsp;B. believed he justified their refusal to pay tithes to the Roman Catholic
                    Church.&nbsp;&nbsp; C. hated the Church's practice of granting indulgences.&nbsp;&nbsp; D. felt
                    that he would side with them in their struggle against the nobility. &nbsp;&nbsp;E. believed he
                    supported their freedom from serfdom.&nbsp;&nbsp; Answer: believed he supported their freedom
                    from serfdom.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={345} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={345} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Martin Luther believed that women should?:</p>
                <hr />
                <p>A. manage the household economy.&nbsp;&nbsp;B. be allowed to enter the priesthood.&nbsp;&nbsp; C.
                    pursue careers outside the home.&nbsp;&nbsp; D. rule the household. &nbsp;&nbsp;E. be equal in
                    all things.&nbsp;&nbsp; Answer: rule the household.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={346} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={346} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A result of the Protestant Reformation of the 16c was the?:</p>
                <hr />
                <p>A. establishment of state churches in England Scotland and northern Germany.&nbsp;&nbsp;B.
                    separation of Church and State in France.&nbsp;&nbsp; C. development of a uniform set of
                    Protestant beliefs.&nbsp;&nbsp; D. collapse of the temporal and spiritual power of the Pope.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: establishment of state
                    churches in England Scotland and northern Germany.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={347} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={347} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Calvinism was a theocratic religion because?:</p>
                <hr />
                <p>A. it allowed complete freedom of worship.&nbsp;&nbsp;B. it believed in
                    predestination.&nbsp;&nbsp; C. it recognized that the seven sacraments were all valid ways to
                    achieve salvation.&nbsp;&nbsp; D. it believed in simple worship a sermon prayers and hymns.
                    &nbsp;&nbsp;E. it permitted only members of its Church to hold political office.&nbsp;&nbsp;
                    Answer: it permitted only members of its Church to hold political office.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={348} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={348} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The official creed of Lutheranism was summed up in?:</p>
                <hr />
                <p>A. The Freedom of a Christian Man.&nbsp;&nbsp;B. the Augsburg Confession.&nbsp;&nbsp; C. Address
                    to the Nobility of the German Nation.&nbsp;&nbsp; D. The Baylonian Captivity of the Church.
                    &nbsp;&nbsp;E. A Handbook for the Christian Knight.&nbsp;&nbsp; Answer: the Augsburg Confession.
                </p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={349} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={349} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The popular lay movements that most directly assailed the late medieval Church were the?:</p>
                <hr />
                <p>A. Albigensians and Beghards.&nbsp;&nbsp;B. Cathars and Donatists.&nbsp;&nbsp; C. Donatists and
                    Arians.&nbsp;&nbsp; D. Lollards and Hussites. &nbsp;&nbsp;E. Waldensians and
                    Beguines.&nbsp;&nbsp; Answer: Lollards and Hussites.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={350} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={350} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The principal reason for the sale of indulgences by the Roman Catholic Church was the?:</p>
                <hr />
                <p>A. desire to complete the building of the new St. Peter's in Rome.&nbsp;&nbsp;B. wish of the
                    Church to engage in greater missionary activity.&nbsp;&nbsp; C. need for another
                    Crusade.&nbsp;&nbsp; D. desire to establish more universities to train better clergy.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: desire to complete the
                    building of the new St. Peter's in Rome.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={351} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={351} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Protestant Reformation?:</p>
                <hr />
                <p>A. weakened civil authority.&nbsp;&nbsp;B. prevented the growth of religious
                    tolerance.&nbsp;&nbsp; C. encouraged the movement for popular education.&nbsp;&nbsp; D.
                    prevented Catholicism from spreading outside Europe. &nbsp;&nbsp;E. weaken the authority of
                    national states.&nbsp;&nbsp; Answer: encouraged the movement for popular education.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={352} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={352} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The printing press helped the Reformation succeed for all of the following reasons EXCEPT?:</p>
                <hr />
                <p>A. it allowed for the rapid dissemination of radical ideas.&nbsp;&nbsp;B. it allowed Martin
                    Luther to publish and disseminate his works.&nbsp;&nbsp; C. it allowed the papacy to rapidly
                    suppress Lutheranism.&nbsp;&nbsp; D. it decreased the cost of reading materials and made them
                    more affordable to the middle and lower cla &nbsp;&nbsp;E. it allowed Martin Luther to print his
                    works in the vernacular.&nbsp;&nbsp; Answer: it allowed the papacy to rapidly suppress
                    Lutheranism.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={353} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={353} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Council of Trent was important because?:</p>
                <hr />
                <p>A. it provided for a new system to elect the pope.&nbsp;&nbsp;B. it called for acceptance of
                    Lutheran principles.&nbsp;&nbsp; C. it eliminated the use of the Index of Prohibited
                    Books.&nbsp;&nbsp; D. it adopted a general attitude of ecumenicism. &nbsp;&nbsp;E. it reaffirmed
                    the traditional doctrines of the Catholic Church.&nbsp;&nbsp; Answer: it reaffirmed the
                    traditional doctrines of the Catholic Church.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={354} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={354} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Reformation in Germany resulted in?:</p>
                <hr />
                <p>A. a unified German state.&nbsp;&nbsp;B. political fragmentation.&nbsp;&nbsp; C. Italian control
                    of Austria.&nbsp;&nbsp; D. secular freedom for the peasantry. &nbsp;&nbsp;E. the abolition of
                    Catholicism.&nbsp;&nbsp; Answer: political fragmentation.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={355} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={355} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The English Reformation was peculiar because the government broke with Rome?:</p>
                <hr />
                <p>A. when there was no theological dispute between king and pope.&nbsp;&nbsp;B. after the pope took
                    the side of the nobility against the king.&nbsp;&nbsp; C. after Catholic Spain attempted to
                    invade England.&nbsp;&nbsp; D. after it took the side of France in a political dispute.
                    &nbsp;&nbsp;E. after Protestantism had already come to dominate English religious
                    life.&nbsp;&nbsp; Answer: when there was no theological dispute between king and pope.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={356} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={356} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>England's break with the Roman church became official with the passage of the?:</p>
                <hr />
                <p>A. Six Articles.&nbsp;&nbsp;B. The Ninety-Five Thesis.&nbsp;&nbsp; C. Act of
                    Succession.&nbsp;&nbsp; D. Act of Supremacy. &nbsp;&nbsp;E. Act of Toleration.&nbsp;&nbsp;
                    Answer: Act of Supremacy.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={357} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={357} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Martin Luther intended his Ninety-Five Theses? :</p>
                <hr />
                <p>A. to lead to a break with the Roman Catholic Church.&nbsp;&nbsp;B. to initiate a debate on the
                    buying and selling of indulgences.&nbsp;&nbsp; C. to undermine the authority of the
                    papacy.&nbsp;&nbsp; D. to justify the buying and selling of indulgences. &nbsp;&nbsp;E. to
                    denounce the Book of Revelations from the New Testament.&nbsp;&nbsp; Answer: to initiate a
                    debate on the buying and selling of indulgences.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={358} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={358} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Reformation influenced the development of the modern world primarily by?:</p>
                <hr />
                <p>A. reducing the power of the state over the lives of ordinary people.&nbsp;&nbsp;B. providing
                    some justification for challenging the absolute authority of kings.&nbsp;&nbsp; C. discouraging
                    the growth of capitalism which was criticized as being too worldly and
                    materialistic.&nbsp;&nbsp; D. believing in complete religious freedom for everyone.
                    &nbsp;&nbsp;E. forcing the Catholic Church to reform itself.&nbsp;&nbsp; Answer: providing some
                    justification for challenging the absolute authority of kings.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={359} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={359} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The ""Weber Thesis"" attempted to explain the connections between the rise of Calvinism and the
                    rise of?:"</p>
                <hr />
                <p>A. absolute monarchies.&nbsp;&nbsp;B. Anglicanism.&nbsp;&nbsp; C. Catholicism.&nbsp;&nbsp; D. the
                    nation-state. &nbsp;&nbsp;E. capitalism.&nbsp;&nbsp; Answer: capitalism.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={360} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={360} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In Geneva the Calvinists?:</p>
                <hr />
                <p>A. were crushed by the Catholic troops of the Holy Roman Emperor.&nbsp;&nbsp;B. reformed the city
                    with little opposition from an enthusiastic populace.&nbsp;&nbsp; C. imposed strict penalties
                    for blasphemy and immoral behavior.&nbsp;&nbsp; D. withdrew the Ecclesiastical Ordinances in
                    1541. &nbsp;&nbsp;E. saw their reforms jeopardized by the execution of Savonarola.&nbsp;&nbsp;
                    Answer: imposed strict penalties for blasphemy and immoral behavior.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={361} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={361} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Elizabethan Settlement?:</p>
                <hr />
                <p>A. established the Church of England.&nbsp;&nbsp;B. returned England to the Roman Catholic
                    Church.&nbsp;&nbsp; C. offered religious toleration and protection to French Huguenots living in
                    England.&nbsp;&nbsp; D. made militant Calvinism the official religion of England. &nbsp;&nbsp;E.
                    reintroduced Catholicism but did not require loyalty to the pope.&nbsp;&nbsp; Answer:
                    established the Church of England.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={362} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={362} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following supported Martin Luther?:</p>
                <hr />
                <p>A. Holy Roman Emperor Charles V.&nbsp;&nbsp;B. the papal ambassador (legate) in
                    Germany.&nbsp;&nbsp; C. Pope Leo X.&nbsp;&nbsp; D. Prince Frederick III the Elector of Saxony.
                    &nbsp;&nbsp;E. the head of his Augustinian order.&nbsp;&nbsp; Answer: Prince Frederick III the
                    Elector of Saxony.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={363} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={363} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Pope Paul III did all of the following EXCEPT?:</p>
                <hr />
                <p>A. call the Council of Trent.&nbsp;&nbsp;B. reorganize the Roman Inquisition.&nbsp;&nbsp; C.
                    begin the Counter-Reformation.&nbsp;&nbsp; D. reconcile Catholicism with Protestantism at the
                    Imperial Diet of Regensburg. &nbsp;&nbsp;E. he did everyone of these things listed
                    above.&nbsp;&nbsp; Answer: reconcile Catholicism with Protestantism at the Imperial Diet of
                    Regensburg.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={364} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={364} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>This religious order became the tool of the papacy in their crusade against the spread of
                    Protestantism in Europe in the 16c?:</p>
                <hr />
                <p>A. the Society of Jesus (Jesuits).&nbsp;&nbsp;B. the Tridentines.&nbsp;&nbsp; C. the
                    Ursulines.&nbsp;&nbsp; D. the Grey Franciscans. &nbsp;&nbsp;E. the Brethren of the Common
                    Life.&nbsp;&nbsp; Answer: the Society of Jesus (Jesuits).</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={365} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={365} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Catholicism was recognized as the official religion of France but limited toleration was extended
                    to Calvinists by the?:</p>
                <hr />
                <p>A. Peace of Augsburg.&nbsp;&nbsp;B. Edict of Nantes.&nbsp;&nbsp; C. Peace of
                    Westphalia.&nbsp;&nbsp; D. Treaty of Tordesillas. &nbsp;&nbsp;E. St. Bartolomew's Day
                    Massacre.&nbsp;&nbsp; Answer: Edict of Nantes.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={366} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={366} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The religious climate of France prior to the French Wars of Religion was best characterized by?:
                </p>
                <hr />
                <p>A. a nobility that was nearly 50% Huguenots.&nbsp;&nbsp;B. a population split evenly between
                    Huguenots and Catholics.&nbsp;&nbsp; C. Catherine de Medici's complete suppression of
                    Huguenots.&nbsp;&nbsp; D. a poorly organized Huguenot opposition to a Catholic majority.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: a nobility that was nearly
                    50% Huguenots.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={367} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={367} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The remark attributed to the French king Henry IV that Paris is worth a Mass is usually
                    interpreted to mean that he?:</p>
                <hr />
                <p>A. put political necessities above personal beliefs.&nbsp;&nbsp;B. was a particularly devout
                    Catholic.&nbsp;&nbsp; C. remained loyal to the Huguenot party.&nbsp;&nbsp; D. supported the
                    policies of the Catholic League. &nbsp;&nbsp;E. was insensitive in regard to religious
                    issues.&nbsp;&nbsp; Answer: put political necessities above personal beliefs.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={368} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={368} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In 16c and 17c Europe the member of a community most likely to be accused of witchcraft was?:</p>
                <hr />
                <p>A. a merchant.&nbsp;&nbsp;B. a royal official.&nbsp;&nbsp; C. the village priest.&nbsp;&nbsp; D.
                    an elderly widowed woman. &nbsp;&nbsp;E. a noblewoman.&nbsp;&nbsp; Answer: an elderly widowed
                    woman.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={369} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={369} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In the late 1620s and early 1630s King Gustavus Adolphus of Sweden played a key role in European
                    affairs by?:</p>
                <hr />
                <p>A. opposing the expansionist plans of Cardinal Richelieu of France.&nbsp;&nbsp;B. acting as
                    intermediary between Catholic and Lutheran governments.&nbsp;&nbsp; C. leading a Protestant
                    coalition against Catholic Europe.&nbsp;&nbsp; D. allying with Habsburg Spain to challenge
                    British sea power. &nbsp;&nbsp;E. arguing that state interest should take precedence over
                    religious loyalties.&nbsp;&nbsp; Answer: leading a Protestant coalition against Catholic Europe.
                </p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={370} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={370} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Peace of Westphalia?:</p>
                <hr />
                <p>A. reconfirmed the power and grandeur of the Holy Roman Empire.&nbsp;&nbsp;B. gave Sweden new
                    territories along the Baltic Sea coast.&nbsp;&nbsp; C. ensured Protestant domination over all of
                    Central Europe.&nbsp;&nbsp; D. returned the Continent to the status quo as of 1618.
                    &nbsp;&nbsp;E. weakened the Holy Roman Empire.&nbsp;&nbsp; Answer: weakened the Holy Roman
                    Empire.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={371} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={371} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The St. Bartholomew's Day Massacre?:</p>
                <hr />
                <p>A. decimated the ranks of the Protestant leadership but failed to suppress the anti-Catholic
                    movement i&nbsp;&nbsp;B. was successful and led to the collapse of French
                    Protestantism.&nbsp;&nbsp; C. demonstrated that the Counter-Reformation in France was
                    essentially a dynastic and class struggle.&nbsp;&nbsp; D. was followed by an English effort to
                    assist the Huguenots. &nbsp;&nbsp;E. resulted directly in an English effort to assist the
                    Catholics.&nbsp;&nbsp; Answer: decimated the ranks of the Protestant leadership but failed to
                    suppress the anti-Catholic movement i</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={372} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={372} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Thirty Years' War became primarily a political conflict during the?:</p>
                <hr />
                <p>A. Danish phase.&nbsp;&nbsp;B. Italian phase.&nbsp;&nbsp; C. Swedish-French phase.&nbsp;&nbsp; D.
                    Bohemian phase. &nbsp;&nbsp;E. Swedish phase.&nbsp;&nbsp; Answer: Swedish-French phase.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={373} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={373} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In general which of the following MOST accurately reflects the state of Europe in 1648?:</p>
                <hr />
                <p>A. the northwest of Europe was predominantly Protestant while the south was mostly
                    Catholic.&nbsp;&nbsp;B. Catholicism was triumphant everywhere in Europe.&nbsp;&nbsp; C.
                    Protestants were the majority population in every Western European country.&nbsp;&nbsp; D. the
                    Holy Roman Empire emerged as a completely Lutheran sphere of influence. &nbsp;&nbsp;E. France
                    lost in her struggle with the Habsburgs to become the dominant land power in Europe.&nbsp;&nbsp;
                    Answer: the northwest of Europe was predominantly Protestant while the south was mostly
                    Catholic.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={374} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={374} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were consequences of the Thirty Years' War EXCEPT the?:</p>
                <hr />
                <p>A. settlement of the religious wars between Catholics and Protestants in Germany.&nbsp;&nbsp;B.
                    depopulation and economic stagnation of Central Europe.&nbsp;&nbsp; C. emergence of Russia as a
                    great European power.&nbsp;&nbsp; D. predominance of France in Europe. &nbsp;&nbsp;E. decrease
                    of the power of the Holy Roman Emperors.&nbsp;&nbsp; Answer: emergence of Russia as a great
                    European power.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={375} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={375} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Church's view of witchcraft was that?:</p>
                <hr />
                <p>A. there was no such thing since there was no supernatural power except that of
                    God.&nbsp;&nbsp;B. women were less involved in witchcraft than men because they inherited the
                    spiritual grace of the Vi&nbsp;&nbsp; C. witchcraft was a heresy or a spiritual crime only and
                    was no business of the secular authorities.&nbsp;&nbsp; D. witches must be put to death for the
                    good of society but they might achieve salvation if they recant &nbsp;&nbsp;E. none of these
                    choices are correct.&nbsp;&nbsp; Answer: witches must be put to death for the good of society
                    but they might achieve salvation if they recant</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={376} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={376} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The rebellions that swept through Europe at the time of the Thirty Years' War indirectly resulted
                    in?:</p>
                <hr />
                <p>A. a decline in the power of the European middle class.&nbsp;&nbsp;B. a tremendous decline of
                    wealth in Spain.&nbsp;&nbsp; C. the end of serfdom in Eastern Europe.&nbsp;&nbsp; D. a huge
                    increase in eastern Mediterranean trade. &nbsp;&nbsp;E. an increase in the power of the European
                    monarchies.&nbsp;&nbsp; Answer: an increase in the power of the European monarchies.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={377} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={377} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Historians who argue that the Treaties of Westphalia mark the beginning of a new era in
                    diplomatic history cite all of the following arguments EXCEPT?:</p>
                <hr />
                <p>A. papal objections to the treaties were ignored and the treaties did not receive papal
                    sanction.&nbsp;&nbsp;B. the Austrian Habsburgs abandones their Spanish cousins.&nbsp;&nbsp; C.
                    the German territorial princes acquired the right to sign treaties and made war except against
                    the e&nbsp;&nbsp; D. Sweden emerged as one of the strongest powers in Europe. &nbsp;&nbsp;E. the
                    treaties laid the groundwork for the subsequent rise of Russia as a major Continental
                    power.&nbsp;&nbsp; Answer: the treaties laid the groundwork for the subsequent rise of Russia as
                    a major Continental power.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={378} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={378} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The mission of the Spanish Armada in 1588 was to?:</p>
                <hr />
                <p>A. acquire territory in the Baltic area.&nbsp;&nbsp;B. reunite the throne of Spain.&nbsp;&nbsp;
                    C. support the rebellion in the Netherlands.&nbsp;&nbsp; D. replace Queen Elizabeth with a
                    Catholic monarch. &nbsp;&nbsp;E. form a naval alliance with France.&nbsp;&nbsp; Answer: replace
                    Queen Elizabeth with a Catholic monarch.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={379} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={379} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Malleus Maleficarum ?:</p>
                <hr />
                <p>A. for years was considered the standard handbook on witches.&nbsp;&nbsp;B. gave details on how
                    to gain a confession from a heretic.&nbsp;&nbsp; C. was used by the Church to prove that witches
                    did not really exist.&nbsp;&nbsp; D. was written by John Calvin. &nbsp;&nbsp;E. was used by
                    Martin Luther to justify his view of salvation by faith alone.&nbsp;&nbsp; Answer: for years was
                    considered the standard handbook on witches.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={380} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={380} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Following the Thirty Years' War what country became dominant in Europe?:</p>
                <hr />
                <p>A. Sweden.&nbsp;&nbsp;B. France.&nbsp;&nbsp; C. Spain.&nbsp;&nbsp; D. Germany. &nbsp;&nbsp;E.
                    Bohemia.&nbsp;&nbsp; Answer: France.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={381} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={381} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The 16c religious wars that had plagued France were largely ended with the?:</p>
                <hr />
                <p>A. Edict of Nantes.&nbsp;&nbsp;B. accession to the throne of Louis XI.&nbsp;&nbsp; C. Treaty of
                    Cateau-Cambresis.&nbsp;&nbsp; D. massacre of St. Bartholomew's Day. &nbsp;&nbsp;E. resolution of
                    the Habsburg-Bourbon conflict by the Peace of Augsburg.&nbsp;&nbsp; Answer: Edict of Nantes.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={382} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={382} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is TRUE of the Dutch Revolt?:</p>
                <hr />
                <p>A. the nobleman William of Orange led the revolt.&nbsp;&nbsp;B. the Dutch flooded their own lands
                    to hamper the Spanish.&nbsp;&nbsp; C. the war was both a political and a religious
                    struggle.&nbsp;&nbsp; D. the southern provinces pledged loyalty to Spain in exchange for
                    compromises on certain issues. &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp;
                    Answer: all of these choices are correct.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={383} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={383} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The word vernacular is used to describe?:</p>
                <hr />
                <p>A. the structure of the human skeleton.&nbsp;&nbsp;B. a type of crossbow used by British archers
                    in the Hundred Years' War.&nbsp;&nbsp; C. the early printing press typesets.&nbsp;&nbsp; D. the
                    spoken language of an area. &nbsp;&nbsp;E. a political plot against Medici rule in
                    Florence.&nbsp;&nbsp; Answer: the spoken language of an area.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={384} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={384} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The dominant trend of government in Renaissance city-states in Italy was from?:</p>
                <hr />
                <p>A. republicanism to despotism.&nbsp;&nbsp;B. democracy to theocracy.&nbsp;&nbsp; C. absolutism to
                    democracy.&nbsp;&nbsp; D. despotism to theocracy. &nbsp;&nbsp;E. theocracy to
                    democracy.&nbsp;&nbsp; Answer: republicanism to despotism.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={385} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={385} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following locations had the greatest influence on shaping the values of the Italian
                    Renaissance?:</p>
                <hr />
                <p>A. the manor of a nobleman.&nbsp;&nbsp;B. the cottage of a serf.&nbsp;&nbsp; C. the townhouse of
                    an Italian merchant.&nbsp;&nbsp; D. the manufacturing districts of an Italian city.
                    &nbsp;&nbsp;E. a Benedictine monastery.&nbsp;&nbsp; Answer: the townhouse of an Italian
                    merchant.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={386} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={386} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"He is sometimes called the ""Father of Humanism?:"""</p>
                <hr />
                <p>A. Sir Thomas More.&nbsp;&nbsp;B. Petrarch.&nbsp;&nbsp; C. Boccaccio.&nbsp;&nbsp; D. Pico della
                    Mirandola. &nbsp;&nbsp;E. Johannes Gutenberg.&nbsp;&nbsp; Answer: Petrarch.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={387} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={387} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Renaissance education was characterized by?:</p>
                <hr />
                <p>A. "emphasis on developing the ""complete individual""."&nbsp;&nbsp;B. tendencies to criticize
                    the Church and openly encourage religious revolt.&nbsp;&nbsp; C. little attention to anything
                    but academic pursuits.&nbsp;&nbsp; D. a hesitancy to question old teachings. &nbsp;&nbsp;E.
                    support of the religious reforms initiated by Savonarola in Florence.&nbsp;&nbsp; Answer:
                    "emphasis on developing the ""complete individual""."</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={388} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={388} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The favorite classical author of Renaissance scholars was?:</p>
                <hr />
                <p>A. Virgil.&nbsp;&nbsp;B. Homer.&nbsp;&nbsp; C. Cicero.&nbsp;&nbsp; D. Plato. &nbsp;&nbsp;E.
                    Euclid.&nbsp;&nbsp; Answer: Cicero.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={389} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={389} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a characteristic of the Renaissance?:</p>
                <hr />
                <p>A. reemphasis on the culture of antiquity.&nbsp;&nbsp;B. search for balance and proportion in
                    politics.&nbsp;&nbsp; C. the development of a historical and critical view of the
                    world.&nbsp;&nbsp; D. strong anti-Christian sentiment. &nbsp;&nbsp;E. confidence in human
                    rationality.&nbsp;&nbsp; Answer: strong anti-Christian sentiment.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={390} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={390} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The early Renaissance humanists in Italy would have been MOST interested in?:</p>
                <hr />
                <p>A. translating a portion of the Bible into the vernacular.&nbsp;&nbsp;B. perfecting the Italian
                    language.&nbsp;&nbsp; C. ministering to the sick and other needy people.&nbsp;&nbsp; D.
                    analyzing the accounts of the debates of medieval scholastics. &nbsp;&nbsp;E. finding an old
                    Greek manuscript.&nbsp;&nbsp; Answer: finding an old Greek manuscript.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={391} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={391} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Castiglione in his work The Courtier ?</p>
                <hr />
                <p>A. provided a handbook for politicians.&nbsp;&nbsp;B. suggested the proper social graces for a
                    young Renaissance noble.&nbsp;&nbsp; C. supported the power of the monarch.&nbsp;&nbsp; D.
                    condemned the Church. &nbsp;&nbsp;E. insisted upon the complete equality of social
                    classes.&nbsp;&nbsp; Answer: suggested the proper social graces for a young Renaissance noble.
                </p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={392} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={392} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The literary masterpiece that satirized the ideals of knighthood and chivalry was written by?:
                </p>
                <hr />
                <p>A. Rabelais.&nbsp;&nbsp;B. Erasmus.&nbsp;&nbsp; C. Cervantes.&nbsp;&nbsp; D. Castiglione.
                    &nbsp;&nbsp;E. Petrarch.&nbsp;&nbsp; Answer: Cervantes.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={393} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={393} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Renaissance courtiers were?:</p>
                <hr />
                <p>A. people who worked for the Venetian Republic.&nbsp;&nbsp;B. slaves of the doge of
                    Venice.&nbsp;&nbsp; C. people who served a prince in multiple political and administrative
                    ways.&nbsp;&nbsp; D. military leaders whose conquests spread the Renaissance to northern Europe.
                    &nbsp;&nbsp;E. people who served in the Vatican as papal pages.&nbsp;&nbsp; Answer: people who
                    served a prince in multiple political and administrative ways.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={394} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={394} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Civic humanists?:</p>
                <hr />
                <p>A. advocated active service to the city-state.&nbsp;&nbsp;B. opposed the use of public funds to
                    patronize artists.&nbsp;&nbsp; C. supported a theocracy in Florence.&nbsp;&nbsp; D. advocated a
                    life of scholarly contemplation. &nbsp;&nbsp;E. opposed the republican form of
                    government.&nbsp;&nbsp; Answer: advocated active service to the city-state.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={395} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={395} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Northern humanists differed from their Italian predecessors?:</p>
                <hr />
                <p>A. by concentrating on the ancient Greek authors.&nbsp;&nbsp;B. in that they had no need for rich
                    patrons to support their work.&nbsp;&nbsp; C. in their focus on the textual reexamination of the
                    Bible and the writings of the early Church Father&nbsp;&nbsp; D. by refusing to use the
                    vernacular in their work. &nbsp;&nbsp;E. in their interest in medieval history.&nbsp;&nbsp;
                    Answer: in their focus on the textual reexamination of the Bible and the writings of the early
                    Church Father</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={396} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={396} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Art and sciences are not cast in a mold but are perfected by degrees by often handling and
                    polishing as bears leisurely lick their cubs into form. (Michel de Montaigne Works II. xii
                    1533-1592)</p>
                <hr />
                <p>A. skepticism concerning known or revealed truth.&nbsp;&nbsp;B. atheism and his subsequent
                    execution as a heretic.&nbsp;&nbsp; C. scientific methodology concerning experimentation in the
                    natural sciences.&nbsp;&nbsp; D. relativism in reference to absolute good or evil.
                    &nbsp;&nbsp;E. enlightened despotism as the most desireable form of government.&nbsp;&nbsp;
                    Answer: skepticism concerning known or revealed truth.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={397} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={397} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Mannerist art was characterized by?:</p>
                <hr />
                <p>A. formality balance restraint.&nbsp;&nbsp;B. emphasis on decorative design.&nbsp;&nbsp; C.
                    extravagant use of bright colors and abstract design.&nbsp;&nbsp; D. distorted human figures and
                    unnatural lighting effects. &nbsp;&nbsp;E. simplicity in human figures similar to Gothic
                    sculpture.&nbsp;&nbsp; Answer: distorted human figures and unnatural lighting effects.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={398} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={398} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>According to Jacob Burckhardt the Renaissance represented?:</p>
                <hr />
                <p>A. the greatest period of economic recovery in the history of Western civilization.&nbsp;&nbsp;B.
                    a period of moral decline.&nbsp;&nbsp; C. an era of tremendous graft and corruption in Italian
                    government.&nbsp;&nbsp; D. a distinct break from the Middle Ages. &nbsp;&nbsp;E. none of these
                    choices are correct&nbsp;&nbsp; Answer: a distinct break from the Middle Ages.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={399} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={399} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Pico della Mirandola's Oration on the Dignity of Man stated that?:</p>
                <hr />
                <p>A. humans were fallen creatures but regain their place by following God's will.&nbsp;&nbsp;B. God
                    gave humans free will so that they could choose to be earthly or spiritual
                    creatures.&nbsp;&nbsp; C. human beings were nothing more thn undifferentiated
                    animals.&nbsp;&nbsp; D. only through prayer and good works could man achieve his full potential.
                    &nbsp;&nbsp;E. humans were divine and destined to spiritual life.&nbsp;&nbsp; Answer: God gave
                    humans free will so that they could choose to be earthly or spiritual creatures.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={400} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={400} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Liberal education in the Renaissance included all of the following EXCEPT?:</p>
                <hr />
                <p>A. the study of military theory.&nbsp;&nbsp;B. a stress on physical education.&nbsp;&nbsp; C. the
                    mastery of Greek and Latin.&nbsp;&nbsp; D. the study of music. &nbsp;&nbsp;E. the ability to
                    write poetry and appreciate good works of art.&nbsp;&nbsp; Answer: the study of military theory.
                </p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={401} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={401} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Thomas More's Utopia ?:</p>
                <hr />
                <p>A. illustrated the northern humanists' break with the Catholic church.&nbsp;&nbsp;B. represented
                    the high point of northern humanist thought.&nbsp;&nbsp; C. led to his execution at the hands of
                    Henry VIII.&nbsp;&nbsp; D. presented a revolutionary social order based on communal living and
                    property. &nbsp;&nbsp;E. stressed that the end always justified the means in
                    politics.&nbsp;&nbsp; Answer: presented a revolutionary social order based on communal living
                    and property.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={402} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={402} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Prince argued that?:</p>
                <hr />
                <p>A. a prince must always behave in a moral fashion.&nbsp;&nbsp;B. the prince's highest obligation
                    was to God.&nbsp;&nbsp; C. the prince's highest obligation was the preservation of his
                    state.&nbsp;&nbsp; D. the prince must give one-half of his wealth to the poor and to the Church.
                    &nbsp;&nbsp;E. the prince's highest duty was the accumulation of personal wealth.&nbsp;&nbsp;
                    Answer: the prince's highest obligation was the preservation of his state.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={403} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={403} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Italian Renaissance art can be most appropriately described as?:</p>
                <hr />
                <p>A. a revolt against the classical style and the advancement of a new artistic standard based on
                    humanis&nbsp;&nbsp;B. NeoClassicism in which the traditional characteristics of harmony and
                    symmetry were valued.&nbsp;&nbsp; C. characterized by the spectacular and the deliberately
                    nonsymmetrical.&nbsp;&nbsp; D. romantic idealism predicated upon notions of secular fantasy.
                    &nbsp;&nbsp;E. the triumph of symbolism.&nbsp;&nbsp; Answer: NeoClassicism in which the
                    traditional characteristics of harmony and symmetry were valued.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={404} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={404} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Lorenzo Valla gained fame for?:</p>
                <hr />
                <p>A. becoming ruler of the Renaissance city of Florence.&nbsp;&nbsp;B. his inventions.&nbsp;&nbsp;
                    C. challenging the authority of Voltaire.&nbsp;&nbsp; D. proving the Donation of Constantine a
                    fraud. &nbsp;&nbsp;E. helping to unify Italy.&nbsp;&nbsp; Answer: proving the Donation of
                    Constantine a fraud.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={405} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={405} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Construed as an intellectual threat to the Church Humanism?:</p>
                <hr />
                <p>A. argued that the episcopal order of the Roman church should be altered.&nbsp;&nbsp;B. condemned
                    the Church for not addressing the needs of the poor.&nbsp;&nbsp; C. "identified with the ""New
                    Science"" which the Church opposed."&nbsp;&nbsp; D. challenged papal supremacy. &nbsp;&nbsp;E.
                    maintained that the true source of authority within the Church was scripture.&nbsp;&nbsp;
                    Answer: maintained that the true source of authority within the Church was scripture.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={406} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={406} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The primary reason for Bolshevik success in taking over the government in November 1917 was?:</p>
                <hr />
                <p>A. the overwhelming support the Bolsheviks had from the masses of the Russian
                    people.&nbsp;&nbsp;B. the collapse of workers' and soldiers' soviets which had been the backbone
                    of Provisional Government&nbsp;&nbsp; C. the abdication of the Tsar and his son.&nbsp;&nbsp; D.
                    the inability of the Provisional Government to solve the overwhelming problems facing the
                    Russian pe &nbsp;&nbsp;E. the support given to Lenin and the Bolsheviks by Western democracies
                    that wished to keep Russia in t&nbsp;&nbsp; Answer: the inability of the Provisional Government
                    to solve the overwhelming problems facing the Russian pe</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={407} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={407} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following best describes the wartime Russian government?:</p>
                <hr />
                <p>A. Holy man Rasputin ran the bureaucracy efficiently.&nbsp;&nbsp;B. The Tsarina Alexandra kept
                    Nicholas ignorant of domestic problems.&nbsp;&nbsp; C. The general population was largely
                    supportive of the war.&nbsp;&nbsp; D. Newer weapons kept Russian losses to a minimum.
                    &nbsp;&nbsp;E. Numerous reforms kept the peasants happy.&nbsp;&nbsp; Answer: The Tsarina
                    Alexandra kept Nicholas ignorant of domestic problems.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={408} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={408} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>After the Revolution of 1905 in Russia?:</p>
                <hr />
                <p>A. the Tsar's powers of appointment and decision-making were curtailed.&nbsp;&nbsp;B. the
                    government tried to estrengthen the village-communal system of agriculture in order to improve
                    c&nbsp;&nbsp; C. Russia at last adopted the Western model of representative assemblies and
                    political parties.&nbsp;&nbsp; D. workers were granted new rights to welfare and participation.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: Russia at last adopted the
                    Western model of representative assemblies and political parties.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={409} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={409} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Stalin's policy in postwar Russia is best characterized as?:</p>
                <hr />
                <p>A. rapid industrialization and agricultural collectivism.&nbsp;&nbsp;B. rearmament was given
                    first priority in industry.&nbsp;&nbsp; C. a planned economy organized into syndicates of labor
                    and management.&nbsp;&nbsp; D. a laissez-faire policy. &nbsp;&nbsp;E. the state annexed the
                    means of production outright.&nbsp;&nbsp; Answer: rapid industrialization and agricultural
                    collectivism.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={410} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={410} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was the result of the Treaty of Brest-Litovsk with Germany in 1918?:</p>
                <hr />
                <p>A. Russia lost one-third of her total area.&nbsp;&nbsp;B. it strengthened the government of
                    Alexander Kerensky.&nbsp;&nbsp; C. Russia gained control of the Baltic territories.&nbsp;&nbsp;
                    D. Russia signed a military alliance with the Western powers. &nbsp;&nbsp;E. Russia gained
                    territorial concessions from Germany in Eastern Europe.&nbsp;&nbsp; Answer: Russia lost
                    one-third of her total area.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={411} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={411} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Trotsky and Stalin's interpretations of Marxism differed most significantly in which of the
                    following ways?:</p>
                <hr />
                <p>A. Stalin wanted to foster revolution in Western Europe while Trotsky wanted to develop the
                    Soviet Unio&nbsp;&nbsp;B. "Trotsky wanted to foster world revolution while Stalin wanted ""to
                    build Socialism in one country."&nbsp;&nbsp; C. Stalin was a Bolshevik; Trotsky was a
                    Menshevik.&nbsp;&nbsp; D. Trotsky was a deviationist; Stalin followed the Party line.
                    &nbsp;&nbsp;E. Stalin believed that Russia was too backward to support Communism; Trotsky
                    believed the opposite.&nbsp;&nbsp; Answer: "Trotsky wanted to foster world revolution while
                    Stalin wanted ""to build Socialism in one country."</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={412} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={412} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The benefits of the Soviet system included all of the following EXCEPT?:</p>
                <hr />
                <p>A. full employment.&nbsp;&nbsp;B. low-cost utilities.&nbsp;&nbsp; C. ample inexpensive
                    food.&nbsp;&nbsp; D. free education. &nbsp;&nbsp;E. cheap housing.&nbsp;&nbsp; Answer: ample
                    inexpensive food.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={413} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={413} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which slogan expresses the ideal of the Bolshevik Revolution of 1917?:</p>
                <hr />
                <p>A. Bread Land Peace.&nbsp;&nbsp;B. Liberty Equality Fraternity.&nbsp;&nbsp; C. Nationalism
                    Democracy The People's Livelihood.&nbsp;&nbsp; D. Russification. &nbsp;&nbsp;E.
                    Lebensraum.&nbsp;&nbsp; Answer: Bread Land Peace.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={414} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={414} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was not part of Count Witte’s policy of industrialization?:</p>
                <hr />
                <p>A. banking reform to encourage domestic savings and investment.&nbsp;&nbsp;B. promotion of
                    foreign investment in Russian industry.&nbsp;&nbsp; C. construction of the trans-Siberian
                    railroad.&nbsp;&nbsp; D. protective tariffs to support emerging Russian industries.
                    &nbsp;&nbsp;E. nationalization of key industries such as coal and steel.&nbsp;&nbsp; Answer:
                    nationalization of key industries such as coal and steel.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={415} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={415} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements is most valid regarding the October Manifesto issued by Czar
                    Nicholas II in 1905?:</p>
                <hr />
                <p>A. it precipitated a general strike that paralyzed the economy.&nbsp;&nbsp;B. it brought about
                    significant constitutional reform of the government.&nbsp;&nbsp; C. it created a Duma to which
                    the czar's ministers were directly responsible.&nbsp;&nbsp; D. it was an expedient and temporary
                    promise of reform in response to civil unrest. &nbsp;&nbsp;E. it imposed martial law and
                    suppressed anti-governmental political activities.&nbsp;&nbsp; Answer: it was an expedient and
                    temporary promise of reform in response to civil unrest.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={416} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={416} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which country did NOT send troops to fight against the Bolsheviks in the Civil War?:</p>
                <hr />
                <p>A. Britain.&nbsp;&nbsp;B. Japan.&nbsp;&nbsp; C. France.&nbsp;&nbsp; D. the United States.
                    &nbsp;&nbsp;E. Germany.&nbsp;&nbsp; Answer: Germany.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={417} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={417} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>At the heart of the Soviet Five-Year Plan was the idea that?:</p>
                <hr />
                <p>A. Soviet foreign trade would improve if customers could sign five-year contracts.&nbsp;&nbsp;B.
                    the Communist Party should let the state handle economic policy without interfering.&nbsp;&nbsp;
                    C. central party-state control could replace capitalist self-regulation of economic
                    resources.&nbsp;&nbsp; D. workers and farmers would be able to plan vacations more effectively
                    if they had five-year work sche &nbsp;&nbsp;E. Soviet citizens should be allowed to own their
                    own small stores and shops.&nbsp;&nbsp; Answer: central party-state control could replace
                    capitalist self-regulation of economic resources.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={418} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={418} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Lenin had to adapt pure Marxist ideology to the situation in Russia because?:</p>
                <hr />
                <p>A. workers in Russia played virtually no part in the activities of March 1917.&nbsp;&nbsp;B. the
                    majority of the Russian population were peasants and Marx said little about peasants'
                    revolution&nbsp;&nbsp; C. Marxism had taken on too much of a religious nature and religion did
                    not appeal to the atheistic mas&nbsp;&nbsp; D. few revolutionary groups in Russia were
                    acquainted with Marx's philosophy or plan of action. &nbsp;&nbsp;E. none of these choices are
                    correct.&nbsp;&nbsp; Answer: the majority of the Russian population were peasants and Marx said
                    little about peasants' revolution</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={419} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={419} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following best characterizes the Russian Provisional Government of March-November
                    1917?:</p>
                <hr />
                <p>A. a group of radical intellectuals committed to world revolution.&nbsp;&nbsp;B. monarchists who
                    supported the czar.&nbsp;&nbsp; C. radical workers led by the Communists.&nbsp;&nbsp; D.
                    military commanders who wanted to install a dictatorship. &nbsp;&nbsp;E. middle-class and
                    intellectual leaders who had little sympathy for workers and peasants.&nbsp;&nbsp; Answer:
                    middle-class and intellectual leaders who had little sympathy for workers and peasants.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={420} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={420} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following BEST describes the essence of Lenin's New Economic Policy (NEP)?:</p>
                <hr />
                <p>A. mass opportunities for education.&nbsp;&nbsp;B. rapid industrialization and emphasis upon
                    heavy industry.&nbsp;&nbsp; C. trade with Western nations.&nbsp;&nbsp; D. a significant
                    resumption of private ownership. &nbsp;&nbsp;E. a huge increase in consumer
                    products.&nbsp;&nbsp; Answer: a significant resumption of private ownership.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={421} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={421} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Kronstadt Rebellion was caused by?:</p>
                <hr />
                <p>A. the economic disaster and social upheaval of the Russian Civil War.&nbsp;&nbsp;B. the desire
                    of Ukrainian naval officers to secede from the new Soviet Union.&nbsp;&nbsp; C. the collapse of
                    Germany in October/November 1917.&nbsp;&nbsp; D. the influence of the Spartacist movement.
                    &nbsp;&nbsp;E. troops sympathetic to Poland.&nbsp;&nbsp; Answer: the economic disaster and
                    social upheaval of the Russian Civil War.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={422} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={422} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Soviet controlled Comintern (Communist International) was?:</p>
                <hr />
                <p>A. the name Stalin chose for the Communist party.&nbsp;&nbsp;B. the policy of covertly financing
                    subversive organizations in western Europe and the United States.&nbsp;&nbsp; C. an organization
                    that sought to coordinate revolutionary activities of communist parties abroad.&nbsp;&nbsp; D. a
                    branch of the Soviet Military dedicated to acquiring overseas colonies for the Soviet Union.
                    &nbsp;&nbsp;E. an organization of international artists and writers who supported the Russian
                    Revolution.&nbsp;&nbsp; Answer: an organization that sought to coordinate revolutionary
                    activities of communist parties abroad.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={423} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={423} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is a uniquely Russian contribution to Marxist theory?:</p>
                <hr />
                <p>A. the sole determinant of value is human labor.&nbsp;&nbsp;B. the proletariat inevitably becomes
                    conscious of its revolutionary mission.&nbsp;&nbsp; C. capitalism resulted in a great increase
                    in human capacity to produce economic goods.&nbsp;&nbsp; D. a communist revolution must be led
                    by a party of professional revolutionaries. &nbsp;&nbsp;E. the operations of capitalists will
                    inevitably bring about the destruction of the capitalist system.&nbsp;&nbsp; Answer: a communist
                    revolution must be led by a party of professional revolutionaries.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={424} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={424} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Lenin called the system through which he implemented his political and economic policies in the
                    1918-1919 period?:</p>
                <hr />
                <p>A. people's democracy.&nbsp;&nbsp;B. communism triumphant.&nbsp;&nbsp; C. war
                    communism.&nbsp;&nbsp; D. socialist revolutionism. &nbsp;&nbsp;E. dictatorship of the
                    proletariat.&nbsp;&nbsp; Answer: war communism.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={425} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={425} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Ptolemaic conception of the universe was also known as?:</p>
                <hr />
                <p>A. the lunacentric conception.&nbsp;&nbsp;B. God's master plan.&nbsp;&nbsp; C. the geocentric
                    theory.&nbsp;&nbsp; D. the expanding universe. &nbsp;&nbsp;E. the heliocentric
                    concept.&nbsp;&nbsp; Answer: the geocentric theory.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={426} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={426} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Tycho Brahe?:</p>
                <hr />
                <p>A. was a major supporter of Copernicus' theory within the scientific community.&nbsp;&nbsp;B. did
                    most of his work in Italy.&nbsp;&nbsp; C. was condemned by the Church and burned at the stake
                    for his beliefs.&nbsp;&nbsp; D. recorded astronomical data from the observatory he built in
                    Denmark. &nbsp;&nbsp;E. was a Protestant minister who attacked the new modes of scientific
                    inquiry.&nbsp;&nbsp; Answer: recorded astronomical data from the observatory he built in
                    Denmark.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={427} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={427} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Sir Francis Bacon's contribution to philosophy Novum Organum was based upon?:</p>
                <hr />
                <p>A. developing Neo-Platonism.&nbsp;&nbsp;B. developing Scholasticism.&nbsp;&nbsp; C. the Socratic
                    Method.&nbsp;&nbsp; D. expanding rationalism. &nbsp;&nbsp;E. glorifying inductive
                    reasoning.&nbsp;&nbsp; Answer: glorifying inductive reasoning.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={428} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={428} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Newton's mathematical discoveries included?:</p>
                <hr />
                <p>A. calculus a mathematical means of measuring rates of change.&nbsp;&nbsp;B. algebra and set
                    theory.&nbsp;&nbsp; C. geometry.&nbsp;&nbsp; D. the whole number system. &nbsp;&nbsp;E. atomic
                    physics.&nbsp;&nbsp; Answer: calculus a mathematical means of measuring rates of change.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={429} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={429} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were causes of the Scientific Revolution EXCEPT?:</p>
                <hr />
                <p>A. improvements in scientific instruments.&nbsp;&nbsp;B. the contributions of medieval
                    universities.&nbsp;&nbsp; C. the recovery of classical scholarship during the
                    Renaissance.&nbsp;&nbsp; D. the challenges of navigation during long sea voyages. &nbsp;&nbsp;E.
                    the active support of the papacy.&nbsp;&nbsp; Answer: the active support of the papacy.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={430} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={430} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following statements most accurately reflects the attitude of the states of Europe
                    toward the new science?:</p>
                <hr />
                <p>A. in France and other Catholic countries monarchs attempted to suppress the new
                    science.&nbsp;&nbsp;B. outside of Italy and Poland the new science was scarcely
                    known.&nbsp;&nbsp; C. both England and France established royal societies of learned scientists
                    to meet together and discu&nbsp;&nbsp; D. the Russian Tsars welcomed western scientists who were
                    persecuted for their views. &nbsp;&nbsp;E. the new science withered as a result of the failure
                    to establish practical colleges devoted to the a&nbsp;&nbsp; Answer: both England and France
                    established royal societies of learned scientists to meet together and discu</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={431} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={431} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Galileo's ideas on motion included?:</p>
                <hr />
                <p>A. the idea that a rush of air behind a projectile kept it in motion.&nbsp;&nbsp;B. the principle
                    of inertia.&nbsp;&nbsp; C. the law of force times distance.&nbsp;&nbsp; D. the spring reaction
                    model. &nbsp;&nbsp;E. objects fall at different speeds depending on their size.&nbsp;&nbsp;
                    Answer: the principle of inertia.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={432} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={432} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Scientific Revolution?:</p>
                <hr />
                <p>A. proved that women were physically inferior to men.&nbsp;&nbsp;B. supported the idea that men
                    were more important than women in the reproductive process.&nbsp;&nbsp; C. proved that women
                    were mentally inferior to men.&nbsp;&nbsp; D. challenged the idea that women were inferior to
                    men. &nbsp;&nbsp;E. none of these choices are correct.&nbsp;&nbsp; Answer: challenged the idea
                    that women were inferior to men.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={433} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={433} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Scientific Revolution challenged Christianity because?:</p>
                <hr />
                <p>A. it undermined the literal interpretation of the Bible.&nbsp;&nbsp;B. it proved Jesus was not
                    divine.&nbsp;&nbsp; C. it proved that God did not exist.&nbsp;&nbsp; D. it proved the
                    resurrection never took place. &nbsp;&nbsp;E. it undermined the authority of the
                    Pope.&nbsp;&nbsp; Answer: it undermined the literal interpretation of the Bible.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={434} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={434} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>As a result of the scientific theories developed through the 16c and 17 Europeans developed a
                    conception of the universe?:</p>
                <hr />
                <p>A. as geocentric.&nbsp;&nbsp;B. as guided in every physical realm by a personal God.&nbsp;&nbsp;
                    C. as chaotic reflective of chance.&nbsp;&nbsp; D. as governed by natural laws. &nbsp;&nbsp;E.
                    as Aristotelian in makeup.&nbsp;&nbsp; Answer: as governed by natural laws.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={435} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={435} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Spinoza differed with all other philosophers of his day about the?:</p>
                <hr />
                <p>A. divinity of the material universe.&nbsp;&nbsp;B. rational elements of
                    Christianity.&nbsp;&nbsp; C. Copernican view of the universe.&nbsp;&nbsp; D. dangers to European
                    civilization of the Jewish faith. &nbsp;&nbsp;E. natural inferiority of women as
                    scientists.&nbsp;&nbsp; Answer: divinity of the material universe.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={436} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={436} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Galileo Galilei is credited with what important scientific discovery?:</p>
                <hr />
                <p>A. the organ responsible for circulating blood is the heart.&nbsp;&nbsp;B. inductive observation
                    the development of hypotheses experimentation and orgranization are the keys t&nbsp;&nbsp; C.
                    all objects fall with equal acceleration not velocity.&nbsp;&nbsp; D. mathematics can describe
                    natural phenomena. &nbsp;&nbsp;E. the earth revolves around the sun.&nbsp;&nbsp; Answer: all
                    objects fall with equal acceleration not velocity.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={437} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={437} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a difficulty with the Aristotelian cosmos?</p>
                <hr />
                <p>A. It did not explain why planets did not appear to be equidistant from earth.&nbsp;&nbsp;B. It
                    accurately predicted the movement of the planets.&nbsp;&nbsp; C. It advanced complicated
                    hypotheses such as the epicycles.&nbsp;&nbsp; D. It did not explain why the seasons were not
                    equal. &nbsp;&nbsp;E. It failed to account for the movement of the planets.&nbsp;&nbsp; Answer:
                    It failed to account for the movement of the planets.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={438} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={438} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Descartes' idea was that the world consists of two fundamental entities or substances which we
                    can call?:</p>
                <hr />
                <p>A. water and air.&nbsp;&nbsp;B. the physical and the spiritual.&nbsp;&nbsp; C. reason and
                    passion.&nbsp;&nbsp; D. deduction and induction. &nbsp;&nbsp;E. real and unreal.&nbsp;&nbsp;
                    Answer: the physical and the spiritual.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={439} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={439} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Medieval science was primarily based on?:</p>
                <hr />
                <p>A. close observation of nature.&nbsp;&nbsp;B. pure superstitions.&nbsp;&nbsp; C. the experimental
                    method.&nbsp;&nbsp; D. a blending of Christian theology and the writings of classical authors.
                    &nbsp;&nbsp;E. decrees emanating from the papacy.&nbsp;&nbsp; Answer: a blending of Christian
                    theology and the writings of classical authors.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={440} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={440} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>In De humani corporis fabrica Andrea Vesalius?:</p>
                <hr />
                <p>A. devised a model of the universe.&nbsp;&nbsp;B. discussed chemical treatments for
                    disease.&nbsp;&nbsp; C. created a modern anatomy text.&nbsp;&nbsp; D. explained a theory of
                    human evolution. &nbsp;&nbsp;E. wrote the classic text on magic and alchemy.&nbsp;&nbsp; Answer:
                    created a modern anatomy text.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={441} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={441} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Newtonian scientific model of the universe is?:</p>
                <hr />
                <p>A. mechanistic and predicable.&nbsp;&nbsp;B. irrational and holistic.&nbsp;&nbsp; C. organic and
                    poetic.&nbsp;&nbsp; D. mythological and magical. &nbsp;&nbsp;E. holistic and
                    providential.&nbsp;&nbsp; Answer: mechanistic and predicable.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={442} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={442} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Scientific Revolution and Deism radically transformed Western thinking by?:</p>
                <hr />
                <p>A. reaffirming the idea of original sin.&nbsp;&nbsp;B. requiring all previous scientific writings
                    to be burned.&nbsp;&nbsp; C. turning the best minds away from literature and to science and
                    technology.&nbsp;&nbsp; D. placing a new emphasis on irrationalism and mysticism. &nbsp;&nbsp;E.
                    introducing the idea of secular progress.&nbsp;&nbsp; Answer: introducing the idea of secular
                    progress.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={443} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={443} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Hitler's primary motivation for the invasion of the Soviet Union was?:</p>
                <hr />
                <p>A. to eliminate any possible resistance to German expansion in the Balkans and the Near
                    East.&nbsp;&nbsp;B. to block the westward expansion of Japan in Asia.&nbsp;&nbsp; C. to knock
                    Russia out of the war so that all his forces could be focused against the French and the
                    Br&nbsp;&nbsp; D. to destroy Bolshevism and acquire lebensraum for German colonization.
                    &nbsp;&nbsp;E. to exterminate the Slavic population which he believed to be a threat to German
                    mastery of Europe.&nbsp;&nbsp; Answer: to destroy Bolshevism and acquire lebensraum for German
                    colonization.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={444} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={444} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which aspect of the conduct of World War II DIFFERED from that of World War I?:</p>
                <hr />
                <p>A. widespread bombing of civilian populations by both sides.&nbsp;&nbsp;B. dependence upon
                    systems of alliances.&nbsp;&nbsp; C. women were a very effective part of the war production
                    effort.&nbsp;&nbsp; D. use of propaganda by both sides. &nbsp;&nbsp;E. conscription of armies
                    from civilian populations.&nbsp;&nbsp; Answer: widespread bombing of civilian populations by
                    both sides.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={445} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={445} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A significant British invention that helped turn the tide in the Battle of Britain against
                    Germany was?:</p>
                <hr />
                <p>A. poison gas.&nbsp;&nbsp;B. radar.&nbsp;&nbsp; C. V-2 rockets.&nbsp;&nbsp; D. """Tiger"" tank."
                    &nbsp;&nbsp;E. sonar.&nbsp;&nbsp; Answer: radar.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: medium
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={446} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={446} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which aspect of German strategy was employed during BOTH World Wars I and II?:</p>
                <hr />
                <p>A. a large-scale military push early in the war in the Balkans.&nbsp;&nbsp;B. formation of an
                    alliance with Japan.&nbsp;&nbsp; C. violation of Belgium's neutrality in order to attack
                    France.&nbsp;&nbsp; D. respect for the rights of the U. S. on the sea. &nbsp;&nbsp;E. invasion
                    of North Africa to seize the Suez Canal.&nbsp;&nbsp; Answer: violation of Belgium's neutrality
                    in order to attack France.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={447} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={447} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>A social historian would be most likely interested in researching which of the following topics
                    related to World War II?:</p>
                <hr />
                <p>A. the diplomatic correspondence between Churchill and Roosevelt.&nbsp;&nbsp;B. the
                    confrontations that exacerbated the Cold War.&nbsp;&nbsp; C. Allied troop landings on the coast
                    of Normandy in 1944.&nbsp;&nbsp; D. the creation and structure of the United Nations
                    &nbsp;&nbsp;E. women's participation in the labor force during the war&nbsp;&nbsp; Answer:
                    women's participation in the labor force during the war</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={448} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={448} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The success of blitzkrieg depended mainly on superiority in?:</p>
                <hr />
                <p>A. zeppelin production.&nbsp;&nbsp;B. air power plus mobile ground troops.&nbsp;&nbsp; C.
                    manpower.&nbsp;&nbsp; D. chemical weapons. &nbsp;&nbsp;E. naval power.&nbsp;&nbsp; Answer: air
                    power plus mobile ground troops.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={449} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={449} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The major strategic reason for Allied landings in Italy was to?:</p>
                <hr />
                <p>A. force Mussolini to resign.&nbsp;&nbsp;B. rescue Jewish children being hidden in Catholic
                    convents and monasteries.&nbsp;&nbsp; C. free Rome and liberate the Catholic Church.&nbsp;&nbsp;
                    D. open a second front to take the pressure off the Soviets. &nbsp;&nbsp;E. avoid a costly
                    cross-Channel invasion of Europe.&nbsp;&nbsp; Answer: open a second front to take the pressure
                    off the Soviets.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={450} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={450} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The important decision made by leading German officials at the Wannsee Conference was?:</p>
                <hr />
                <p>A. to develop an atomic bomb.&nbsp;&nbsp;B. to invade the Soviet Union.&nbsp;&nbsp; C. to begin
                    daytime air raids over Great Britain.&nbsp;&nbsp; D. to back up Japan's declaration of war on
                    the United States. &nbsp;&nbsp;E. "to begin implementation of the ""Final Solution"" to the
                    Jewish Question."&nbsp;&nbsp; Answer: "to begin implementation of the ""Final Solution"" to the
                    Jewish Question."</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={451} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={451} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The chief argument between Truman and Stalin at Potsdam in July 1945 was over?:</p>
                <hr />
                <p>A. free elections in eastern Europe.&nbsp;&nbsp;B. the numbers of tanks Americans and Russians
                    could keep in Europe.&nbsp;&nbsp; C. whether Russian Jews would be compensated for the
                    Holacaust&nbsp;&nbsp; D. what to do with German prisoners of war. &nbsp;&nbsp;E. whether or not
                    the Soviet Union would join the United Nations.&nbsp;&nbsp; Answer: free elections in eastern
                    Europe.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={452} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={452} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Why was the Atlantic Charter of 1941 critical to colonial peoples?:</p>
                <hr />
                <p>A. in it the United States promised to intervene militarily in the process of
                    decolonization.&nbsp;&nbsp;B. it promoted the concept that all people had the right to choose
                    the form of government under which t&nbsp;&nbsp; C. it stated that the United States would not
                    support any European countries who had colonies.&nbsp;&nbsp; D. it promised membership for all
                    colonial governments in the United Nations. &nbsp;&nbsp;E. it forced all European governments to
                    withdraw immediately from their colonies after the conclusion &nbsp;&nbsp; Answer: it promoted
                    the concept that all people had the right to choose the form of government under which t</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={453} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={453} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>After Hitler occupied most of France the remainder of the country became?:</p>
                <hr />
                <p>A. Communist France under Mendez France.&nbsp;&nbsp;B. very prosperous.&nbsp;&nbsp; C. Free
                    France under Charles de Gaulle.&nbsp;&nbsp; D. Republican France under Georges Clemenceau.
                    &nbsp;&nbsp;E. Vichy France under Marshall Henri Petain.&nbsp;&nbsp; Answer: Vichy France under
                    Marshall Henri Petain.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={454} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={454} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The tide turned in the Russian theater turned in favor of the Russians when?:</p>
                <hr />
                <p>A. German forces were beaten by the Russians in Poland.&nbsp;&nbsp;B. Allied forces came to the
                    aid of Russian troops in Iran.&nbsp;&nbsp; C. German forces were surrounded and captured at the
                    crucial battle of Stalingrad.&nbsp;&nbsp; D. German forces mutinied and abandoned the siege of
                    Leningrad. &nbsp;&nbsp;E. Hitler refused to send further supplies to the German troops besieging
                    Moscow.&nbsp;&nbsp; Answer: German forces were surrounded and captured at the crucial battle of
                    Stalingrad.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={455} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={455} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Nazi occupation in Western Europe differed from that in the east in that?:</p>
                <hr />
                <p>A. people in western countries were glad to collaborate with the Germans.&nbsp;&nbsp;B. Nazi
                    occupation was more extremely brutal in the east because of Nazi racial ideology.&nbsp;&nbsp; C.
                    they introduced five-year plans in the east but not in the west.&nbsp;&nbsp; D. the Nazis
                    treated captured American and British soldiers more humanely in the west than in the east.
                    &nbsp;&nbsp;E. Jews were lumped together with Slavic peoples in the east and so escaped the
                    worst of the Holocaust &nbsp;&nbsp; Answer: Nazi occupation was more extremely brutal in the
                    east because of Nazi racial ideology.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={456} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={456} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following groups were particularly singled out by the Nazis for extermination EXCEPT?:
                </p>
                <hr />
                <p>A. Jews.&nbsp;&nbsp;B. homosexuals.&nbsp;&nbsp; C. the physically handicapped.&nbsp;&nbsp; D.
                    Christian clergy. &nbsp;&nbsp;E. gypsies.&nbsp;&nbsp; Answer: Christian clergy.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    SAL1&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={457} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={457} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Winston Churchill's vision for the postwar world?:</p>
                <hr />
                <p>A. stressed the balance of power to check the Soviets and resisted ending colonial
                    empires.&nbsp;&nbsp;B. sought expansive advantages to guarantee security for his own nation
                    based on suspicions about his t&nbsp;&nbsp; C. "imagined the continuation of the Grand Alliance
                    into the postwar world as ""Policeman"" of world pe&nbsp;&nbsp; D. placed first priority in
                    reviving a strong international organization to achieve collective security &nbsp;&nbsp;E. all
                    of these choices are correct.&nbsp;&nbsp; Answer: stressed the balance of power to check the
                    Soviets and resisted ending colonial empires.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={458} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={458} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>President Roosevelt and Prime Minister Churchill announced at their wartime conference in
                    Casablanca that their principal war aim was to?:</p>
                <hr />
                <p>A. promote the national independence of Third World nations.&nbsp;&nbsp;B. topple the pro-fascist
                    governments in Spain and Argentina.&nbsp;&nbsp; C. force the unconditional surrender of both
                    Germany and Japan.&nbsp;&nbsp; D. destroy the last remnants of European imperialism.
                    &nbsp;&nbsp;E. contain the postwar power of the Soviet Union.&nbsp;&nbsp; Answer: force the
                    unconditional surrender of both Germany and Japan.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={459} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={459} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Most Lend-Lease aid was sent to?:</p>
                <hr />
                <p>A. Spain and Ethiopia.&nbsp;&nbsp;B. the Soviet Union and Great Britain.&nbsp;&nbsp; C. Greece
                    and Turkey.&nbsp;&nbsp; D. Spain and Italy. &nbsp;&nbsp;E. Great Britain and France.&nbsp;&nbsp;
                    Answer: the Soviet Union and Great Britain.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={460} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={460} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What exception to unconditional surrender were the Japanese allowed?:</p>
                <hr />
                <p>A. none of the Japanese high command would be tried for war crimes.&nbsp;&nbsp;B. the Japanese
                    were allowed to continue to build jet airplanes.&nbsp;&nbsp; C. Japan would not have to take
                    responsibility for the attack on Pearl Harbor.&nbsp;&nbsp; D. the Japanese were allowed to keep
                    some of the Pacific islands that they had occupied. &nbsp;&nbsp;E. Emperor Hirohito was retained
                    by the Japanese.&nbsp;&nbsp; Answer: Emperor Hirohito was retained by the Japanese.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={461} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={461} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were results of World War II EXCEPT?:</p>
                <hr />
                <p>A. the creation of new states in Europe.&nbsp;&nbsp;B. the positioning of the United States as a
                    world power.&nbsp;&nbsp; C. the loss of colonial empires by European nations.&nbsp;&nbsp; D.
                    Japan's adoption of a democratic constitution. &nbsp;&nbsp;E. the adoption of the United Nations
                    Charter.&nbsp;&nbsp; Answer: the creation of new states in Europe.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={462} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={462} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which statement expressed a defense used by some Nazi was criminals at their trials in an attempt
                    to justify their actions during World War II?:</p>
                <hr />
                <p>A. in a war loss of lives cannot be avoided.&nbsp;&nbsp;B. the end justifies the
                    means.&nbsp;&nbsp; C. a person should be held personally responsible for his or her own
                    actions.&nbsp;&nbsp; D. one's behavior is not accountable when one is following orders.
                    &nbsp;&nbsp;E. those who hold power have the right to exercise it in any way they see
                    fit.&nbsp;&nbsp; Answer: one's behavior is not accountable when one is following orders.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={463} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={463} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Austrian annexation of Bosnia in 1908 threatened the nationalist aspirations of which of the
                    following countries?:</p>
                <hr />
                <p>A. Turkey.&nbsp;&nbsp;B. Rumania.&nbsp;&nbsp; C. Serbia.&nbsp;&nbsp; D. France. &nbsp;&nbsp;E.
                    Herzegovina.&nbsp;&nbsp; Answer: Serbia.</p>
                <hr />
                <p>Technology: Debugging and Optimization&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={464} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={464} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>One of the most dangerous outcomes of the Bosnian crisis was that?:</p>
                <hr />
                <p>A. Austria lost the provinces of Bosnia and Herzegovina encouraging the further dismemberment of
                    the em&nbsp;&nbsp;B. Russia and Serbia were humiliated encouraging them to more reckless and
                    belligerent actions in the f&nbsp;&nbsp; C. England and France suffered a diplomatic defeat as
                    Russia advanced toward the Mediterranean.&nbsp;&nbsp; D. Germany began to back away from its
                    support of Austria because Austria threatened the peace of Europ &nbsp;&nbsp;E. none of these
                    choices are correct.&nbsp;&nbsp; Answer: Russia and Serbia were humiliated encouraging them to
                    more reckless and belligerent actions in the f</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={465} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={465} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>All of the following were contributory causes of World War I EXCEPT?:</p>
                <hr />
                <p>A. imperialist rivalries.&nbsp;&nbsp;B. economic competition.&nbsp;&nbsp; C. the arms
                    race.&nbsp;&nbsp; D. Bolshevism. &nbsp;&nbsp;E. Balkan nationalism.&nbsp;&nbsp; Answer:
                    Bolshevism.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={466} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={466} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
</div>

<div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The dismissal of Bismarck by Kaiser William II paved the way for an alliance between which of the
                    following countries during World War I?:</p>
                <hr />
                <p>A. France and Russia.&nbsp;&nbsp;B. Germany and Italy.&nbsp;&nbsp; C. Serbia and
                    Russia.&nbsp;&nbsp; D. Great Britain and Belgium. &nbsp;&nbsp;E. Germany and
                    Austria-Hungary.&nbsp;&nbsp; Answer: France and Russia.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp;
                    Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={467} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={467} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>At the Paris Peace Conference the two major powers NOT represented were?:</p>
                <hr />
                <p>A. Italy and Germany.&nbsp;&nbsp;B. Turkey and China.&nbsp;&nbsp; C. Germany and
                    Russia.&nbsp;&nbsp; D. Russia and Japan. &nbsp;&nbsp;E. Germany and Japan.&nbsp;&nbsp; Answer:
                    Germany and Russia.</p>
                <hr />
                <p>Technology: Standards&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={468} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={468} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which state existed in 1919 but NOT in 1914?:</p>
                <hr />
                <p>A. Poland.&nbsp;&nbsp;B. Denmark.&nbsp;&nbsp; C. Sqitzerland.&nbsp;&nbsp; D. Belgium.
                    &nbsp;&nbsp;E. Sweden.&nbsp;&nbsp; Answer: Poland.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={469} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={469} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The Schlieffen Plan indicated that the German General Staff?:</p>
                <hr />
                <p>A. did not expect to go to war with Russia.&nbsp;&nbsp;B. expected a long drawn-out
                    war.&nbsp;&nbsp; C. anticipated a war on two fronts.&nbsp;&nbsp; D. did not expect
                    Austria-Hungary to honor the Triple Alliance. &nbsp;&nbsp;E. were relying heavily on Italy and
                    the Ottoman Empire.&nbsp;&nbsp; Answer: anticipated a war on two fronts.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={470} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={470} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The major factors that led to German surrender were?:</p>
                <hr />
                <p>A. exhaustion of German resources and manpower.&nbsp;&nbsp;B. stiffened allied resistance
                    following the Treaty of Brest-Litovsk.&nbsp;&nbsp; C. British/Arab victory in the Middle East
                    and the surrender of the Ottoman Empire.&nbsp;&nbsp; D. the collapse of Austria-Hungary.
                    &nbsp;&nbsp;E. all of these choices are correct.&nbsp;&nbsp; Answer: all of these choices are
                    correct.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={471} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={471} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>As public morale weakened in the later stages of the war?:</p>
                <hr />
                <p>A. workers' strikes lessened because of brutal suppression.&nbsp;&nbsp;B. Clemenceau's liberal
                    French government let internal dissent dictate government policy.&nbsp;&nbsp; C. propaganda
                    posters lost all meaning and were abandoned.&nbsp;&nbsp; D. police powers were expanded to
                    include the arrest of dissenters as traitors. &nbsp;&nbsp;E. the number of new recruits in
                    France and England decreased.&nbsp;&nbsp; Answer: police powers were expanded to include the
                    arrest of dissenters as traitors.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={472} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={472} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>On the eve of the outbreak of war in Europe in 1914 William II of Germany?:</p>
                <hr />
                <p>A. attempted to engage Nicholas II in a diplomatic dislogue to avoid war if at all
                    possible.&nbsp;&nbsp;B. was plotting the overthrow of Nicholas II of Russia.&nbsp;&nbsp; C. sent
                    ultimatums to England and France that were so clumsy and insulting as to make war a
                    certainty.&nbsp;&nbsp; D. invited Bismarck to resume his role as Chancellor. &nbsp;&nbsp;E. was
                    intentionally provoking the Russians to attack Austria and set off World War I.&nbsp;&nbsp;
                    Answer: attempted to engage Nicholas II in a diplomatic dislogue to avoid war if at all
                    possible.</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={473} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={473} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>"The ""blank check"" that Kaiser William gave Austria on July 5 1914?:"</p>
                <hr />
                <p>A. promised complete German funding of the total amount needed to update the Austrian armed
                    forces.&nbsp;&nbsp;B. provided clear assurance of German military support for Austria-Hungary
                    against Serbia.&nbsp;&nbsp; C. confirmed a huge German loan for Austrian economic
                    development.&nbsp;&nbsp; D. attempted to revive the Austro-Russo-German partnership.
                    &nbsp;&nbsp;E. assured the Tsar that Serbia would not be invaded by Austria-Hungary.&nbsp;&nbsp;
                    Answer: provided clear assurance of German military support for Austria-Hungary against Serbia.
                </p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL2&nbsp;&nbsp;&nbsp; Difficulty:
                    difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={474} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={474} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>What is the social significance of women working in factories during World War I?:</p>
                <hr />
                <p>A. due to the wartime shortage of male workers even the supervisors were women.&nbsp;&nbsp;B.
                    women were found to be more adept than men at close detail work.&nbsp;&nbsp; C. universal
                    suffrage had been granted with the outbreak of war and women used the vote as leverage
                    for&nbsp;&nbsp; D. the vital contribution of women to the war effort helped in their liberation
                    from narrow social role &nbsp;&nbsp;E. only women in those days would accept such tedious menial
                    work.&nbsp;&nbsp; Answer: the vital contribution of women to the war effort helped in their
                    liberation from narrow social role</p>
                <hr />
                <p>Technology: Mobile Web HTML5 Mark-up and APIs&nbsp;&nbsp;&nbsp;Career Stage:
                    AL1&nbsp;&nbsp;&nbsp; Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={475} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={475} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>To break the deadlock of trench warfare nations resorted to all of the following EXCEPT?:</p>
                <hr />
                <p>A. the use of tanks.&nbsp;&nbsp;B. widespread use of poison gas.&nbsp;&nbsp; C. artillery
                    barrages.&nbsp;&nbsp; D. unrestricted submarine warfare. &nbsp;&nbsp;E. increased dependence on
                    cavalry.&nbsp;&nbsp; Answer: increased dependence on cavalry.</p>
                <hr />
                <p>Technology: JS Libraries/Frameworks&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp;
                    Difficulty: easy</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={476} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={476} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>British promises and assistance to Arabs fighting in the Middle East were designed to?:</p>
                <hr />
                <p>A. create their own independent countries.&nbsp;&nbsp;B. gain enough Arab good will so that
                    opposition to a new Jewish state would be minimal.&nbsp;&nbsp; C. remove French and Russian
                    influence from the region.&nbsp;&nbsp; D. assure the Arabs that an independent Jewish state
                    would never come into existence. &nbsp;&nbsp;E. help the Allied war effort by denying Arab
                    support to Turkey.&nbsp;&nbsp; Answer: help the Allied war effort by denying Arab support to
                    Turkey.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={477} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={477} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The most visible effect of World War I on European society was?:</p>
                <hr />
                <p>A. an end to unemployment.&nbsp;&nbsp;B. a dramatic increase in church attendance.&nbsp;&nbsp; C.
                    a new positive outlook by young people.&nbsp;&nbsp; D. a dramatic increase in unemployed
                    workers. &nbsp;&nbsp;E. an end to street crime.&nbsp;&nbsp; Answer: an end to unemployment.</p>
                <hr />
                <p>Technology: Javascript&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: difficult
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={478} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={478} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Article 231 of the Versailles Treaty?:</p>
                <hr />
                <p>A. established the League of Nations.&nbsp;&nbsp;B. divided Germany's colonies among the
                    Allies.&nbsp;&nbsp; C. contained the war guilt clause blaming Germany for World War
                    I.&nbsp;&nbsp; D. returned Alsace-Lorraine to France. &nbsp;&nbsp;E. ended the arms
                    race.&nbsp;&nbsp; Answer: contained the war guilt clause blaming Germany for World War I.</p>
                <hr />
                <p>Technology: CSS&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty: medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={479} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={479} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following was NOT a provision of the Treaty of Versailles?:</p>
                <hr />
                <p>A. Germany accepted sole responsibility for starting World War I.&nbsp;&nbsp;B. Austria was
                    required to pay reparations to the Allies.&nbsp;&nbsp; C. Germany was effectively
                    disarmed.&nbsp;&nbsp; D. the Rhineland was demilitarized. &nbsp;&nbsp;E. Germany was to pay the
                    cost of damage done to the property of Allied civilians.&nbsp;&nbsp; Answer: Austria was
                    required to pay reparations to the Allies.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={480} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={480} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>Which of the following is the most accurate description of the fundamental difference that lay
                    behind what Woodrow Wilson expected from the treaty ending World War I and what the Allies
                    wanted?:</p>
                <hr />
                <p>A. the Allies wanted reparations from Germany and Wilson opposed them.&nbsp;&nbsp;B. Wilson was
                    hampered by the need to negotiate a treaty that would pass the Senate whereas the Allies
                    &nbsp;&nbsp; C. Wilson wanted autonomy and independence for various eastern European nations
                    affected by the war whe&nbsp;&nbsp; D. establishment of the League of Nations was of less
                    importance to Wilson than it was to the British a &nbsp;&nbsp;E. Wilson wanted a peace that
                    would not lead to another war whereas the Allies wanted revenge.&nbsp;&nbsp; Answer: Wilson
                    wanted a peace that would not lead to another war whereas the Allies wanted revenge.</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: SAL2&nbsp;&nbsp;&nbsp; Difficulty:
                    medium</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={481} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={481} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The British won a major propaganda victory at the start of the First World War because of?:</p>
                <hr />
                <p>A. the sinking of the Lusitania.&nbsp;&nbsp;B. the Zimmerman telegram.&nbsp;&nbsp; C. German
                    atrocities in Belgium.&nbsp;&nbsp; D. the destruction by the Germans of major Parisian
                    landmarks. &nbsp;&nbsp;E. the Battle of the Marne.&nbsp;&nbsp; Answer: German atrocities in
                    Belgium.</p>
                <hr />
                <p>Technology: HTML&nbsp;&nbsp;&nbsp;Career Stage: SAL1&nbsp;&nbsp;&nbsp; Difficulty: difficult</p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={482} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={482} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="col s12 m12">
        <div className="card purple lighten-1">
            <div className="card-content white-text"><span className="card-title">Question</span>
                <p>The mandate system created by the League of Nations was a form of colonialism where the colonial
                    rulers were?:</p>
                <hr />
                <p>A. pledged to allow the inhabitants to establish self-rule immediately.&nbsp;&nbsp;B. allowed to
                    annex all former German colonies.&nbsp;&nbsp; C. to appoint a provisional government immediately
                    that was composed of the intellectual elites of thos&nbsp;&nbsp; D. accountable for the
                    well-being of the inhabitants with the ultimate goal of teaching them how to rul &nbsp;&nbsp;E.
                    responsible for maintaining indigenous cultures.&nbsp;&nbsp; Answer: accountable for the
                    well-being of the inhabitants with the ultimate goal of teaching them how to rul</p>
                <hr />
                <p>Technology: Accessibility&nbsp;&nbsp;&nbsp;Career Stage: AL1&nbsp;&nbsp;&nbsp; Difficulty: easy
                </p>
                <hr />
                <fieldset>
                    <div className="col s6 m6 center-align"><label className="white-text">Approve<input type="radio"
                                className="opaque" name={483} /></label></div>
                    <div className="col s6 m6 center-align"><label className="white-text">Reject<input type="radio"
                                className="opaque" name={483} /></label></div>
                </fieldset>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="center-align">
            <ul className="inline">
                <li className="inline disabled"><a href="#!"><img height="18em" src="/left.png" /></a></li>
                <li className="inline active"><a href="#!">1</a></li>
                <li className="inline"><a href="#!">2</a></li>
                <li className="inline"><a href="#!">3</a></li>
                <li className="inline"><a href="#!">4</a></li>
                <li className="inline"><a href="#!">5</a></li>
                <li className="inline"><a href="#!">2</a></li>
                <li className="inline"><a href="#!">3</a></li>
                <li className="inline"><a href="#!">4</a></li>
                <li className="inline"><a href="#!">5</a></li>
                <li className="mt-half inline"><a href="#!"><img height="18em" src="/right.png" /></a></li>
            </ul>
            <button className="btn">Submit</button>
        </div>
    </div>
</div>
</Fragment>
);
}

export default reviewQuestions;