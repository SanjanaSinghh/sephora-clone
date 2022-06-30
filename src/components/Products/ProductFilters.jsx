import React from "react";
import {Box,
    UnorderedList,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox } from "@chakra-ui/react";
import makeupstyles from "./Styles/Makeup.module.css";

export const ProductFilters=({filters})=>
{
    function handleClick(e,i) {
        if(i === "New"){
            
        }
        // console.dir(e.target)
        // console.dir(e.target.outerHTML);
    }
    return(
        <>
        <Box className={makeupstyles.filterContainer} padding="20px">
        <Accordion allowMultiple allowToggle width="250px" padding="0px">
            { filters?.map((item)=>(
                <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <h4 className={makeupstyles.filterHeading}>{item.title}</h4>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                <UnorderedList display="flex" flexDirection="column">
                    {item.filterOptions?.map((option)=>
                    (
                        <div onChange={(e)=>{handleClick(e, item.title)}} >
                            <Checkbox  >{option}</Checkbox>
                        </div>
                    ))}
                    
                </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            ))
                
            }
                    
        </Accordion>
        </Box>
        </>
    )
}