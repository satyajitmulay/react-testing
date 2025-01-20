import ProfileCard from './ProfileCard'

export default function Profile() {
  return (
    <div>
      <h1>Profile Card Challege</h1>
      <ProfileCard
      name="Alice"
      age={30}
      greeting = {
        <div>
          <strong>Hi Alice, have a wonderful day!</strong>
        </div>
      }>
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
      name="Bob"
      age={25}
      greeting = {
        <div>
          <strong>Hi Bob, keep up the great work!</strong>
        </div>
      }>
        <p>Hobbies: Gaming, cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  )
}
