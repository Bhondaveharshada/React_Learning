import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.css"

function App() {
  return (
    <div>
      <h1>Hello , I am Harshada Bhondave</h1>
      <h4>Following is the task that I have done.</h4>
      <ZoomIntegration />
    </div>
  );
}

// 1 * Expressions :-
//? JSX allows you to write Javascript expressions inside curly braces. this includes operations, function calls, and other js expressions that produce the values.

//2 * Function calls :-
//?  Functions ,especially those that returns JSX, can be invoked directly within your jsx
export const App2 = () => {
  return (
    <>
     <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
     <NetflixSeries/>
     </section>
    </>
  );
};

const ZoomIntegration = () => {
  const task = "Zoom Integration.";
  const summary =
    "By integrating zoom in our application we can use all the functionallity that zoom provide from our application like scheduling meetings,attend meetings etc";

  const technologyUsed = () => {
    const technology = "Angular(frontend), node.js(backend), mongoDb(database)";
    return technology;
  };

  return (
    <div>
      <div>
        <div>
          <img
            src="Screenshot 2024-10-23 151547.png"
            alt="zoom integration"
            width="50%"
            height="40%"
          />
        </div>
        <h2>Task: {task}</h2>
        <h2>rating: {30 / 3.2}</h2>
        <h3>Using package called zoomMeetingSDK</h3>
        <p>Summary : {summary}</p>
        <p>technology used: {technologyUsed()}</p>
      </div>
    </div>
  );
};

export default App;
