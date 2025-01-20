
export default function ProfileCard({name,age, greeting, children}) {

  // const {name, age, greeting, children} = props;

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  )
}
