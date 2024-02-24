import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import './TaskCard.css';
import { useState } from "react";


const TaskCard = (taskObj) => {
    console.log(taskObj);
    let { userId, title } = taskObj.props;
    const [isCompleted, setIsCompleted] = useState(taskObj.props.completed);

    const onComplete = () => {
        console.log("completed");
        setIsCompleted(true);
    }

    return (
        // <div className='col-sm-6 col-md-4 col-lg-3 task-card text-center m-5 shadow-lg p-3'>
        //     <BiTask className="icon mb-3" />
        //     <div>
        //         <p className="uId">User Id :<span className="uIdSpam "> {userId}</span> </p>
        //         <p className="uId">Title :<span className="uIdSpam"> {title} </span> </p>
        //         {
        //             isCompleted? <p className="compText mt-5">TASK COMPLETED !!!</p>
        //             :
        //             <button onClick= {onComplete} className="btn compBtn">Completed</button>
        //         }
        //     </div>
        // </div>
        <div className={`col-sm-8 col-md-6 col-lg-4  ${isCompleted ? "completed-task-card" : "incomplete-task-card"} text-center m-5 shadow-lg p-3`}>
            {isCompleted ? <BiTask className="c-icon mb-3" /> : <BiTaskX className="i-icon mb-3" />}
            <div>
                <p className="uId">User Id: <span className="uIdSpam">{userId}</span></p>
                <p className="uId">Title: <span className="uIdSpam">{title}</span></p>
                {isCompleted ? (
                    <p className="compText">TASK COMPLETED !!!</p>
                ) : (
                    <button onClick={onComplete} className="btn compBtn">Completed</button>
                )}
            </div>
        </div>


    );
}
export { TaskCard };