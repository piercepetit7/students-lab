import StudentCard from "./StudentCard";

const Students = (props) => {
  return ( 
    <div>
      {props.students.map(student =>
        <StudentCard 
          key ={student.id}
          student={student}
        />
      )}
    </div>
  );
}

export default Students;