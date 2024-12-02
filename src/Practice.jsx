export const Practice = () =>{
    const student = [];
    return (
        <>
         <h2>{!student.length && 'No Student Found'}</h2>
         <h2>Number Of Student: {student.length}</h2>
        </>
    );
}