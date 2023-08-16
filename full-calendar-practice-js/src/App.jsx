import { useState, useRef } from 'react'
import './App.css'
import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import ListMonth from '@fullcalendar/list'
import InteractionPlugin from '@fullcalendar/interaction'


function App() {
  const calendarRef = useRef(null);

  //이벤트 추가
  const onEventAdd = (e)=>{
    console.log("클릭")
    const api = calendarRef.current.getApi();
    api.addEvent({
      title:'추가된 이벤트',
      start:'2023-08-29'
    })
  }

  //이벤트 클릭시
  const eventClick = (info)=>{
    let date = new Date(info.event.start);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let promise = "날짜: " + year + "년" + month + "월" + day + "일" + hour + "시" + minutes + "분\n";
    promise += "제목: " + info.event.title +"\n";
    promise += "내용: " + info.event.constraint;

    alert(promise)
  }

  //날짜 클릭시
  const handleDateClick = (args)=>{
    console.log(args.dateStr)
    let date = new Date(args.dateStr);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 + '').length < 2? '0' + Number(date.getMonth() + 1) :  Number(date.getMonth() + 1);
    let day = date.getDate();

    let selectDate = year+"-"+month+"-"+day;
    alert(selectDate)
  }

  return (
    <>
     <h1>hi</h1>
     <div className='calendar'>
      <FullCalendar
        headerToolbar = {{
          left:'prev, next, today',//좌측 버튼
          center:'title',
          end:'dayGridMonth, timeGridWeek, listMonth', 
        }}
        locale={'ko'}//한국어 설정
        navLinks={true} //오른쪽 상단의 week를 클릭, 날짜를 클릭
        businessHours={true}//주말을 다른 색으로 설정
        plugins={[DayGridPlugin, TimeGridPlugin, ListMonth, InteractionPlugin]}
        initialView='dayGridMonth'//처음 보여질 모습
        events={[ {
          title  : 'event1',
          start  : '2023-08-13',
          constraint:'이벤트의 내용'
        },
        {
          title:"오늘의 이벤트",
          start:new Date()
        },
        {
          title:"데이트",
          start:'2023-08-23',
          color:'#ff0000'
        }]}//넣을 데이터
        eventClick={eventClick}//이벤트 클릭 이벤트
        ref={calendarRef}
        dateClick={handleDateClick}//날짜 클릭시 발동
        />
        <br />
        <button onClick={onEventAdd} className='btn btn-primary'>일정 추가</button>
     </div>
    </>
  )
}

export default App
