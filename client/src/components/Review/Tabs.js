// IMPORTS
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from 'styled-components'

// COMPONENTS
import DetailsPanel from "./DetailsPanel";
import AllReviewsPanel from "./AllReviewsPanel";
import { ReviewPanel } from "./ReviewPanel";
import Landing from "../../views/Landing";
import { AuthUserContext } from "../Session/index";
// STYLED COMPONENTS
const STYLED_Tabs = styled(Tabs)`
  display: flex;
  flex-direction: column;

  background-color: #555555;

  border-radius: 10px;
`;
const STYLED_TabList = styled(TabList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: flex;

  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #555555;

  padding: 0;

  list-style: none;
`;
const STYLED_tab = styled(Tab)`
  display: flex;
  justify-content: center;

  text-align: center;
  width: 20%;
`;

// COMPONENT & EXPORT
export default props => {
  return (
    <STYLED_Tabs>
      <STYLED_TabList>
        <STYLED_tab>Details</STYLED_tab>
        <STYLED_tab>All Reviews</STYLED_tab>
        <STYLED_tab>Leave a Review</STYLED_tab>
      </STYLED_TabList>

      <TabPanel>
        <DetailsPanel details={props.details} hours={props.hours} />
      </TabPanel>
      <TabPanel>
        <AllReviewsPanel />
      </TabPanel>
      <TabPanel>
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <ReviewPanel close={props.close} /> : <Landing />)}
        </AuthUserContext.Consumer>
      </TabPanel>
    </STYLED_Tabs>
  );
};
