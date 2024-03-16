import './landing.css';
import yt from './Landing Icons/youtube.png';
import gpt from './Landing Icons/gpt.png';
import meet from './Landing Icons/meet.png';
import pencil from './Landing Icons/pencil.png';
import chat from './Landing Icons/chat.png';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="bio1">
        <div>
          EZ my Learn offers innovative features like YouTube integration, Chat
          GPT for instant assistance, and Google Meet for virtual classes. With
          note-taking, multiple chat options, attendance tracking, and a dynamic
          leaderboard, learning becomes engaging. Teachers can organize quizzes
          and streamline assignment submissions. Join EZ my Learn for
          accessible, effective, and enjoyable education. Welcome to a new era
          of learning innovation.
        </div>
      </div>

      <div className="icons">
        <div className="ic1">
          <img src={yt} alt="YOUTUBE" />
        </div>
        <div className="ic1">
          <img src={gpt} alt="GPT" />
        </div>
        <div className="ic1">
          <img src={chat} alt="NOTES" />
        </div>
        <div className="ic1">
          <img src={pencil} alt="MESSAGES" />
        </div>
        <div className="ic1">
          <img src={meet} alt="MEET" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
