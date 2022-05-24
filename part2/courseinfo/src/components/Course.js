const Header = ({name}) => (
    <div>
      <h2>{name}</h2>
    </div>
  )
  
  const Content = ({parts}) => (
    parts.map(parts =>
      <div key={parts.id}>{parts.name} {parts.exercises}</div>
      )
  )
  
  const Total = ({total}) => (
    <b>total of {total} exercises</b>
  )
  
  const Course = ({course}) => {
    const total = course.parts.reduce((cumSum, part) => {
      console.log("cumSum:", cumSum)
      console.log("part:", part)
  
      return cumSum + part.exercises
    }, 0)
  
    return (<div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total total={total}></Total>
      
    </div>
  )
  }

  export default Course