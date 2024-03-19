import React, { useEffect, useState } from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@twilio-paste/tabs';
import { Table, THead, Tr, Th, TBody, Td, TFoot} from '@twilio-paste/core/table'
import {Grid, Column } from '@twilio-paste/core/grid'
import { Separator } from '@twilio-paste/separator';

import { Card } from '@twilio-paste/card';
import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';

import ContactCard from "./ContactCard/ContactCard";
import ConversationSummary from "./ConversationSummary";
import Transcription from "./Transcription/Transcription";
import Iframe from "./Iframe/Iframe";
import { withTaskContext } from '@twilio/flex-ui';
import SegmentProfiles from "./SegmentProfiles";
const currentDateTime = new Date().toLocaleString()
const timeStampMinus10 = new Date(Date.now() - 10000).toLocaleString();
const timeStampMinus18 = new Date(Date.now() - 18000).toLocaleString();
const timeStampMinus32 = new Date(Date.now() - 32000).toLocaleString();
const timeStampMinus45 = new Date(Date.now() - 45000).toLocaleString();


const orders = [
    {orderNumber: 12345, orderDate : '12/20/2023', amount : '$98.98', trackingNumber: '12345vx87gh123',orderItems : [
        { item: 1, description: 'Twilio Geometric Chucks', size: '12', amount: '$49.99', quantity: '1'},
        { item: 2, description: 'Twilio Inifinity Watch', size: '', amount: '$49.99', quantity: '1'},
    ]}
]

const segmentEvents = [
        {
            type: "track",
            timestamp: currentDateTime,
            properties: {
                language: "english",
                source: "Voice AI IVR"
            },
            event: "sendToFlex",
        },
        {
            type: "track",
            timestamp: timeStampMinus10,
            properties: {
                model: "nike pegasus",
                size: "10",
                quantity: "2",
                source: "Voice AI IVR"
            },
            event: "placeOrder",
        },
        {
            type: "track",
            timestamp: timeStampMinus18,
            properties: {
                model: "nike pegasus",
                source: "Voice AI IVR"
            },
            event: "checkInventory",
        },
        {
            type: "track",
            timestamp: timeStampMinus32,
            properties: {
                model: "nike pegasus",
                source: "Voice AI IVR"
            },
            event: "checkPrice",
        },
        {
            type: "track",
            timestamp: timeStampMinus45,
            properties: {
                language: "french",
                source: "Voice AI IVR"
            },
            event: "checkLanguage",
        }
    ]

const styles = {
    tableWrapper: {width: '100%'},
    table : {
        border : '1px solid #ededed',
    },
    orderRow : { border : '1px solid #ededed', height: 30 },
    orderCell: {width: '25%', border : '1px solid #ededed', padding: 10},
    orderHeading: { fontSize : 24},
    orderTitle: {fontSize : 14 },

    orderItemRow : { border : '1px solid #ededed', height: 30 },
    orderItemCell: {width: '20%', border : '1px solid #ededed', padding: 10, textAlign: 'left'},
    orderItemHeading: { fontSize : 24},
  
}

// const SegmentProfiles = (props) => {

//     const [event, setEvent] = useState([]);
//     const task = props.task
//     console.log("line 47");
//     console.log(props.task);
    
//     useEffect(() => {

//         const getSegmentProfile = async () => {
//             console.log("line 53");
//             console.log(task);
//             const callerID = task.attributes.from;
            
//             const body = { callerID: callerID };

//             // Set up the HTTP options for your request
//             const options = {
//                 method: 'POST',
//                 body: new URLSearchParams(body),
//                 headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
//                 'Access-Control-Allow-Origin': '*'
//                 }
//             };

//             // Make the network request using the Fetch API
//             fetch('https://getdocument-9003.twil.io/getSegmentProfile', options)
//                 .then(resp => {
//                     console.log(resp)
//                     console.log(resp.json())})
//                 .then(data => {
//                     data.data.forEach(item => {
//                         const { event, timestamp } = item;
//                         setEvent({
//                             event,
//                             timestamp
//                         });
//                     });
//                 });
//             }

//         getSegmentProfile()

//       }, []);
    
//     return null;
// }

const RetailView = (props) => {

    let layout = (
        <div>
            <Tabs baseId="retail-tabs">
                <TabList aria-label="details-tab">
                    <Tab>Details</Tab>
                    <Tab>Orders</Tab>                    
                    <Tab>CRM</Tab>

                    <Tab>Search</Tab>
                </TabList>
                <TabPanels>
                    {/* Customer Details Panel Here */}
                    <TabPanel>
                        <Grid gutter="space30">
                                <Column span={6}>
                                    <ConversationSummary />
                                    <Tabs baseId="conversations">
                                        <TabList aria-label="details-tab">
                                            <Tab>Transcript</Tab>
                                            <Tab>Summary</Tab>
                                            
                                        </TabList>
                                        <TabPanels>
                                        <TabPanel>
                                            <Grid gutter="space30">
                                                    <Column span={12}>
                                                        <Transcription />
                                                    </Column>
                                                </Grid>
                                            </TabPanel>                                            
                                            <TabPanel>
                                                <ConversationSummary/>
                                            </TabPanel>
                                            
                                        </TabPanels>
                                    </Tabs>
                                </Column> 
                                <Column span={6}>
                                <Box>
                                     <Card padding="space70">
                                         <Grid gutter="space20">
                                             <Column span={12}>
                                                 <Heading as="h2" variant="heading20" marginBottom="space0">
                                                     {'Segment Events'}
                                                 </Heading>
                                             </Column>

                    {/* Segment here */}
                        <Grid gutter="space30">
                            <div style={styles.tableWrapper}>

                            <p>&nbsp;</p>
                                    
                                            <Table style={{width: '100%'}}>
                                                <THead>

                                                </THead>
                                                <TBody>
                                                <Tr style={styles.orderRow}>
                                                    <Td style={styles.orderCell} width={100}>Name: </Td>
                                                    <Td style={styles.orderCell}>Ben Johnstone</Td>
                                                    <Td style={styles.orderCell}>Phone Number</Td>
                                                    <Td style={styles.orderCell}>+16477782422</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td style={styles.orderCell}>Address</Td>
                                                    <Td style={styles.orderCell}>101 Spear Street, San Francisco</Td>
                                                    <Td style={styles.orderCell}>Email</Td>
                                                    <Td style={styles.orderCell}>BJohnstone@Twilio.com</Td>                                                                                                        
                                                </Tr>
                                                <Tr style={styles.orderRow}><Td colSpan={6}>&nbsp;</Td></Tr>
                                                <Tr style={styles.orderRow}>
                                                    <Td colSpan={6}>
                                                        <Table width={'100%'}>
                                                            <THead>
                                                                <Th style={styles.orderItemCell}>Event Name</Th>
                                                                <Th style={styles.orderItemCell}>Timestamp</Th>
                                                                <Th style={styles.orderItemCell}>Properties</Th>
                                                            </THead>
                                                            <TBody>
                                                            {
                                                segmentEvents.map((events, index) => (
                                                            <Tr style={styles.orderItemRow} key={index}>
                                                                <Td style={styles.orderItemCell}>{events.event}</Td>
                                                                <Td style={styles.orderItemCell}>{events.timestamp}</Td>
                                                                <Td style={styles.orderItemCell}>{JSON.stringify(events.properties)}</Td>
                                                            </Tr>
                                                        ))}
                                                            <Tr style={styles.orderItemRow}><Td></Td></Tr>
                                                            </TBody>
                                                        </Table>
                                                    </Td>
                                                </Tr>
                                                </TBody>
                                            </Table>
                                        
                                    
                            </div>

                        </Grid>









                                             <Column span={12}>
                                                 <Box display="flex" marginLeft="space60" justifyContent="space-between">
                                                     <Paragraph marginBottom="space0">
                                                         <Table>
                                                        </Table>
                                                     </Paragraph>
                                                 </Box>
                                             </Column>                                  
                                         </Grid>
                                     </Card>
                                 </Box>
                                </Column>
                        </Grid>
                        <Separator orientation={'horizontal'} verticalSpacing="space40" />
                    </TabPanel>

                    {/* Orders here */}
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}><h1 style={styles.orderHeading}>Orders</h1></Column>
                            <div style={styles.tableWrapper}>

                            <p>&nbsp;</p>
                                    {
                                        orders.map((order, index) => (
                                            <Table style={{width: '100%'}}>
                                                <THead>

                                                </THead>
                                                <TBody>
                                                <Tr style={styles.orderRow} key={index}>
                                                    <Td style={styles.orderCell} width={100}>OrderNo: </Td>
                                                    <Td style={styles.orderCell}>{order.orderNumber}</Td>
                                                    <Td style={styles.orderCell}>Total Amount</Td>
                                                    <Td style={styles.orderCell}>{order.amount}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td style={styles.orderCell}>Tracking Number</Td>
                                                    <Td style={styles.orderCell}>{order.trackingNumber}</Td>
                                                    <Td style={styles.orderCell}>Date</Td>
                                                    <Td style={styles.orderCell}>{order.orderDate}</Td>                                                                                                        

                                                </Tr>
                                                <Tr style={styles.orderRow}><Td colSpan={6}>&nbsp;</Td></Tr>
                                                <Tr style={styles.orderRow}>
                                                    <Td colSpan={6}>
                                                        <Table width={'100%'}>
                                                            <THead>
                                                                <Th style={styles.orderItemCell}>Item</Th>
                                                                <Th style={styles.orderItemCell}>Quantity</Th>
                                                                <Th style={styles.orderItemCell}>Description</Th>
                                                                <Th style={styles.orderItemCell}>Size</Th>
                                                                <Th style={styles.orderItemCell}>Amount</Th>
                                                            </THead>
                                                            <TBody>
                                                        {
                                                            order.orderItems.map( (item, index) =>(
                                                                    <Tr style={styles.orderItemRow} key={index}>
                                                                        <Td style={styles.orderItemCell}>{item.item}</Td>
                                                                        <Td style={styles.orderItemCell}>{item.quantity}</Td>
                                                                        <Td style={styles.orderItemCell}>{item.description}</Td>
                                                                        <Td style={styles.orderItemCell}>{item.size}</Td>
                                                                        <Td style={styles.orderItemCell}>{item.amount}</Td>
                                                                    </Tr>
                                                            ))
                                                        }
                                                            <Tr style={styles.orderItemRow}><Td></Td></Tr>
                                                            </TBody>
                                                        </Table>
                                                    </Td>
                                                </Tr>
                                                </TBody>
                                            </Table>
                                        ))
                                    }
                            </div>

                        </Grid>
                    </TabPanel>

                    {/* CRM Panel Here */}
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}>
                                <h1>Implement a CRM iFrame here</h1>
                                <Iframe 
                                    width={'100%'}
                                    height={700}
                                    source={'https://www.bing.com'}
                                />
                            </Column>
                        </Grid>
                    </TabPanel>

  
                    <TabPanel>
                        <Grid gutter="space30">
                            <Column span={12}>
                                <h1>Implement search integration here</h1>
                                <Iframe 
                                    width={'100%'}
                                    height={700}
                                    source={'https://www.bing.com'}
                                />
                            </Column>
                        </Grid>
                    </TabPanel>                                        
                </TabPanels>
            </Tabs>
        </div>
    )
    return layout
}

export default withTaskContext(RetailView);