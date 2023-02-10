import React from "react";
import { Routes, BrowserRouter, Route, NavLink } from 'react-router-dom';
import PopUp from '../pop-up/Pop-up';
import EditPopUp from '../pop-up/edit-pop';
import Flow from '../Flow/flow'
import LeftMenu from '../left-menu/left-menu'
import QuestionTicketView from '../question-ticket/question-ticket-view';
import QuestionCreator from '../QuestionCreator/QuestionCreator';
import Connector from '../pop-up/connector-popup';

export default function Router() {

  return (
    <BrowserRouter>
      <div >
        <section style={{ width: "88vw", height: "92vh", "margin-left": "12vw","background-color": "#e5e5e542" }}>
          <PopUp />
          <EditPopUp />
          <Connector/>
          <Routes>
            <Route path="/" element={<Flow />}></Route>
            <Route path="/Queries" element={<QuestionTicketView />}></Route>
            <Route path="/QuestionView" element={<Flow />}></Route>
            <Route path="/QuestionCreator" element={<QuestionCreator />}></Route>
          </Routes>
        </section>
        <LeftMenu></LeftMenu>
      </div>
    </BrowserRouter>
  );
}