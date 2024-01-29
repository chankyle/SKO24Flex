import React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@twilio-paste/tabs';
import { Table, THead, Tr, Th, TBody, Td, TFoot} from '@twilio-paste/core/table'
import {Grid, Column } from '@twilio-paste/core/grid'
import { Separator } from '@twilio-paste/separator';

import ContactCard from "./ContactCard/ContactCard";
import ConversationSummary from "./ConversationSummary";
import Transcription from "./Transcription/Transcription";
import Iframe from "./Iframe/Iframe";


const orders = [
    {orderNumber: 12345, orderDate : '12/20/2023', amount : '$98.98', trackingNumber: '12345vx87gh123',orderItems : [
        { item: 1, description: 'Twilio Geometric Chucks', size: '12', amount: '$49.99', quantity: '1'},
        { item: 2, description: 'Twilio Inifinity Watch', size: '', amount: '$49.99', quantity: '1'},
    ]}
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
                                {/* <Column span={4}><ContactCard /></Column> */}
                                <Column span={8}><ConversationSummary /></Column>
                                <Column span={8}>
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
export default RetailView