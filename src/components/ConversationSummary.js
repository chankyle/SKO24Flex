import React, { useState, useEffect } from "react";

import { Card } from '@twilio-paste/card';

import { Box } from '@twilio-paste/box';
import {Grid, Column } from '@twilio-paste/core/grid'
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import { withTaskContext } from '@twilio/flex-ui';


const styles = {
    wrapper : {
        margin: 20
    }
}

const ConversationSummary = (props) => {
    const [message, setMessage] = useState('There is no summary available yet as the agent is about to start a conversation with the customer');
    const task = props.task
    /*
    This is where you will make a fetch call to your serverless function (sample function found in the serverless-functions
    folder in this repository). 

    Uncomment the following useEffect block of code and replace the URL with your serverless function URL, make 
    any other changes as needed. 
    */

    
    useEffect(() => {

        const getSummary = async () => {
            //const { task } = this.props;
            //console.log(task);
            const callSid = task.attributes.call_sid;
            const mapKey = "Summary-" + callSid;
            console.log("fetching summary for :", mapKey);
            // let result = callSid;
            
            const body = { map: mapKey };

            // Set up the HTTP options for your request
            const options = {
                method: 'POST',
                body: new URLSearchParams(body),
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            };

            // Make the network request using the Fetch API
            fetch('https://getdocument-9003.twil.io/getDocument', options)
                .then(resp => resp.json())
                .then(data => setMessage(data));
            }

        getSummary()

      }, []);
    

    let layout = (
        <div>
            <Box>
                <Card padding="space70">
                    <Grid gutter="space20">
                        <Column span={12}>
                            <Heading as="h2" variant="heading20" marginBottom="space0">
                                {'Conversation Summary'}
                            </Heading>
                        </Column>

                        <Column span={12}>
                            <Box display="flex" marginLeft="space60" justifyContent="space-between">
                                <Paragraph marginBottom="space0">
                                    {message}
                                </Paragraph>
                            </Box>
                        </Column>                                  
                    </Grid>
                </Card>
            </Box>
        </div>
    )
    return layout
}
export default withTaskContext(ConversationSummary);