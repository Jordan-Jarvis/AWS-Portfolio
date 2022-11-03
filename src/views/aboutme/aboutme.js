import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import '../projects/projectCards/templates/card.css'
import "./aboutme.css"
class ContactMe extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log("Home loading");
      return (
        <div className = "card2">
        <Card style={{ }}>
        <Card.Text>
        </Card.Text>
        <div className='jumbotron'>
        <h1 style={{}}>  Hello, I'm Jordan. </h1>
            <div className="wrapper">
                <div id="one">
            <img src="/assets/aboutme/2.jpg" width="180" crop="fill"  />
            </div>
            <div id="two">
                I am Jordan, and I love my life.
           <br></br><br></br>I recently graduated from BYU-Idaho with a degree in Computer Science.
        If you give me a broken laptop I will do my best to turn it into a cloud server. I grew up in a household where integrity was the top priority. Hard work and honesty is my policy. <br></br><br></br>
            I love to learn and improve my knowledge base. Ever since I was a small child I was tinkering and learning about the world around me at a rate far exceeding most people around me. I realized that computers were great and I could learn a lot from them.
            I enjoy running, hiking, mountain biking, playing open-world video games, developing personal coding projects, spending time with family and friends, and just trying new things. 
            <br>
            </br><br></br>
            I started tinkering with the family computer when I was 8, by the time I was 12 I was building computers with scrap parts from old "slow" computers that people were getting rid of and installing Ubuntu on them. 
            When I was in 7th grade I made the decision that I was going to develop something great. I have always stuck with this.

            My computer capabilities started getting dangerous when I started learning to hack the school computers. I ended up getting caught when I was 15, having hacked into the school district servers, which allowed me access to change my grades and see confidential information. For those who are curious, I was only suspended for 2 weeks when they realized that I didn't do anything with the access I had. I was just curious about my abilities and they realized I needed a healthier outlet.             <br></br><br></br>
            This is when I joined <a href="https://www.firstinspires.org/robotics/frc">First Robotics</a>. The best way to describe First Robotics is the following quote from their site, <i>"Under strict rules and limited time and resources, teams of high school students are challenged to build industrial-size robots to play a difficult field game in alliance with other teams, while also fundraising to meet their goals, designing a team “brand,” and advancing respect and appreciation for STEM within the local community."</i>
            <br></br><br/>
            Since then I have continued to learn, build, and create new things. When I was 17, my friend and I decided we would build a hovercraft. After a few tries, and failures, we ended up with a functional hovercraft made from duct-tape, plywood, plastic bags, a few screws, and 2 leaf blowers. Video of the final product <a href='https://youtu.be/KahVRZUKS3c'>here</a>. Just don't judge the editing too much. We were using windows movie maker and had no idea what we were doing.
            <br/><br/>
            After high school graduation I decided to serve a mission for <a href="https://www.churchofjesuschrist.org/?lang=eng">The Church of Jesus Christ of Latter-Day Saints</a>. A mission is a voluntary humanitarian effort to help those in need. It typically lasts for 2 years and is paid for by the one performing the mission. The destination is chosen by church leaders, in my case that was San Diego, California. A mission involves many responsibilities and restrictions. These include: a strict schedule starting at 6:30 am and ending at 10:30 pm, learning deeply the materials needed to teach effectively, the leadership of others, talking to strangers, 2 hours of study each day, assignment of another missionary who you work with for a few months at a time, and leadership responsibilities.            <br></br><br></br>
            After my mission, I got into IT and helpdesk. I started school and realized I was much better suited for computer science, as I started coding in the only languages available to me, Batch and Powershell, to automate my job. I changed majors and plowed through a computer science degree in 3 years. This takes me to where I am now. I spend most of my time working on projects like this page and keeping my skills up. I am currently searching for work, so feel free reach out.            <br/><br/>
            If you want to know more or want to contact me, click below or visit my social media.
            </div>
        </div>
  
  <p>
      <br></br>
    <Button variant="primary" onClick={()=>window.location.href="/contactme"}>Contact Me</Button>    <Button variant="primary" onClick={()=>window.location.href="/projects"}>See my projects</Button>

  </p>

</div>
        <Card.Text>
                </Card.Text>
        
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            Feel free to check out my projects. Github is not always the best medium to show one's work.
            </Card.Text>            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default ContactMe