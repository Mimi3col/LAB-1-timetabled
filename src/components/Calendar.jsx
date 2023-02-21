import React from "react";
import Event from "./Event.jsx";

const Calendar = () => {

    return (
        <div className={"Calendar"}>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="time">8 am</td>
                <td></td>
                <Event event='Math ➕' color='green' location={'Room 232'} />
                <td></td>
                <Event event='Math ➕' color='green' location={'Room 232'} />
                <td></td>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">9 am</td>
                <td></td>
                <Event event='Math ➕' color='green' location={'Room 232'} />
                <Event event='Science 🔬' color='blue' location={'Room 343'}/>
                <Event event='Math ➕' color='green' location={'Room 232'} />
                <Event event='Science 🔬' color='blue' location={'Room 343'}/>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">10 am</td>
                <td></td>
                <td></td>
                <Event event='Science 🔬' color='blue' location={'Room 343'}/>
                <td></td>
                <Event event='Science 🔬' color='blue' location={'Room 343'}/>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">11 am</td>
                <td></td>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'Room Decoration'} color={'gray'} location={'Library'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">12 pm</td>
                <td></td>
                <Event event={'Lunch 🍔'} color={'red'} location={'Room 100'}/>
                <Event event={'Lunch 🍔'} color={'red'} location={'Room 100'}/>
                <Event event={'Lunch 🍔'} color={'red'} location={'Room 100'}/>
                <Event event={'Lunch 🍔'} color={'red'} location={'Room 100'}/>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <Event event={'History 📜'} color={'pink'} location={'Room 647'}/>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'History 📜'} color={'pink'} location={'Room 647'}/>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">2 pm</td>
                <td></td>
                <Event event={'History 📜'} color={'pink'} location={'Room 647'}/>
                <td></td>
                <Event event={'History 📜'} color={'pink'} location={'Room 647'}/>
                <td></td>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <td></td>
                <Event event={'Lesson Planing'} color={'gray'} location={'Library'}/>
                <td></td>
                <Event event={'Room Decoration'} color={'gray'} location={'see Email'}/>
                <td></td>
            </tr>
            <tr>
                <td className="time">4 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">5 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Calendar