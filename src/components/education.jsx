import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div>
            <section class="colorlib-education" data-section="education">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Education</span>
							<h2 class="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingOne">
									        <h4 class="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Undergraduate Program In Computer Science
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div class="panel-body">
									            <div class="row">
										      		<div class="col-md-6">
										      			<p>I am currently on my under-graduate studies. I have taken courses like <strong>DSA, OOPs, Computer Networks, React, Php, Python, Java and Web-Data Management</strong> over the years and have better understanding of these subjects.</p>
										      		</div>
										      		<div class="col-md-6">
										      			<p>I am also a member of the <strong>Developer Students Club (DSC). </strong> </p>
										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingTwo">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">College Of Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									        <div class="panel-body">
									            <p>I have completed my <strong>Nigeria Certificate In Education (NCE)</strong> with major subjects as Chemistry/Physics. I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
													<strong><ul>
														<li>Chemistry</li>
														<li>Physics</li>
													</ul></strong>
									        </div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingThree">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Diploma in Udemy 
									            </a>
									        </h4>
									    </div>
									    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									        <div class="panel-body">
									            <p>I have completed some online courses on <strong>Udemy</strong>. They include: </p>	
                                                <strong><ul>
														<li>Python complete course</li>
														<li>Php Complete Course</li>
                                                        <li>Free SSL Certificate installation Course</li>
                                                        <li>Complete Wordpress Web Developement Course</li>
                                                        <li>Full Stack Web development Course</li>
													</ul></strong>
                                            </div>
									    </div>
									</div>

									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingFour">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Primary and Secondary  Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
									        <div class="panel-body">
									            <p>I have Completed My <strong>Primary and Secondary School</strong>,from the following schools:</p>	
                                                    <strong>
                                                        <ul>
                                                            <li>All Saint's Prsebyterian Nursery/Primary School, Ugep (FSLC) </li>
                                                            <li>All Saint's Presbyterian Academy, Ugep (WAEC/NECO) </li>
                                                        </ul>
                                                    </strong>
									        </div>
									    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
  }
}