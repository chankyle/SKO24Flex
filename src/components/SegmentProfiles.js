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

const SegmentProfiles = (props) => {

    const [event, setEvent] = useState([]);
    const task = props.task
    
    useEffect(() => {

        const getSegmentProfile = async () => {
            const callerID = task.attributes.from;
            
            const body = { callerID: callerID };

            // Set up the HTTP options for your request
            const options = {
                method: 'POST',
                body: new URLSearchParams(body),
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
                'Access-Control-Allow-Origin': '*'
                }
            };

            // Make the network request using the Fetch API
            fetch('https://getdocument-9003.twil.io/getSegmentProfile', options)
                .then(resp => resp.json())
                .then(data => {data => {
                    data.data.forEach(item => {
                        const { event, timestamp } = item;
                        setEvent({
                            event,
                            timestamp
                        });
                    });
                }
                });
            }

        getSegmentProfile()

      }, []);
  

    // let layout = (
    //     <div>
    //         <Box>
    //             <Card padding="space70">
    //                 <Grid gutter="space20">
    //                     <Column span={12}>
    //                         <Heading as="h2" variant="heading20" marginBottom="space0">
    //                             {'Conversation Summary'}
    //                         </Heading>
    //                     </Column>

    //                     <Column span={12}>
    //                         <Box display="flex" marginLeft="space60" justifyContent="space-between">
    //                             <Paragraph marginBottom="space0">
    //                                 {message}
    //                             </Paragraph>
    //                         </Box>
    //                     </Column>                                  
    //                 </Grid>
    //             </Card>
    //         </Box>
    //     </div>
    // )
    return null;
}
export default withTaskContext(SegmentProfiles);