import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import CalenderModal from "./CalenderModal";


export default function Calender(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [event, setEvent] = useState([{title: ' ' , date: ' ' }]);

  var list= [] ;
  useEffect(() => {
    props.apiservice.get_event().then((result) => {
      console.log(result.data);
      console.log(result.data[0]['title'])
      console.log(result.data[0]['date'])
      for(let i=0; i <result.data.length; i++){
        console.log(i)
        const titleT = result['data'][i]['title'];
        const dateT = result['data'][i]['date'];
        list.push({titleT,dateT});
        console.log(titleT);
        console.log(dateT);
        console.log(list);
       
        
       // settitle(titleT);
       // setdate(dateT);
      //  setEvent(event => [...event, {title,date}]);
        
      }
      console.log(event);
    //  setEvents(result.data)

    });
 
  }, []);
  
  function UpdateCalender(){
    return 1;
  }



  function renderEventContent(eventInfo) {

    return (

      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  
  /* const handleClick = (event) => {
    props.apiservice.save_event(props.username, title, date);
    // Prevent page reload
    
  };
*/
  
  const onEventAdded = (event) => {
  //  setEvents([...events]);
  };

      
        return (
          <div className="Calender">
        
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin  ]}
          initialView="dayGridMonth"
          weekends={true}
          events= {list}
          eventContent={renderEventContent}
          selectable={true}
          headerToolbar= {
            
            {
              left: 'prev,next today', 
              center: 'title', 
              right: 'dayGridMonth'
            }
          }
          dateClick={ function(info) {
            alert('Clicked on: ' + info.dateStr);
            setdate(info.dateStr);
          }
        }
          select= { 
            
           function(info) {
             
            setModalVisible(true)
            //alert('selected ' + info.startStr + ' to ' + info.endStr);
            }
          }

        />
        
        {modalVisible && <CalenderModal setModalVisible={setModalVisible} modalVisible={modalVisible} apiservice={props.apiservice} date={date} username={props.username}/>}
        </div>
        )
    }
  