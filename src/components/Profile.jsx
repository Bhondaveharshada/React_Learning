export function Profile() {
  return (
    <div>
      <h1>Profile Cards</h1>
      <ProfileCard
        name="Harsh"
        age={20}
        greeting={
          <div>
            <strong>Hi Harsha , Have a nice Day!!.</strong>
          </div>
        }
      >
        <p>Hobbies:Reading, Cricket</p>
        <button>Contact</button>
      </ProfileCard>


      <ProfileCard
        name="Ketan"
        age={25}
        greeting={
          <div>
            <strong>Hi Ketan , Have a nice Day!!.</strong>
          </div>
        }
      >
        <p>Hobbies:Reading, Cricket</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};


function ProfileCard(props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    )
}
