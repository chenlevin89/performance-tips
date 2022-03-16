import {Suspense} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CircularProgress from '@mui/material/CircularProgress';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionItem({title,children}) {
    return <Accordion TransitionProps={{unmountOnExit: true, timeout:100}}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
        <AccordionDetails>
            <Suspense fallback={<CircularProgress />}>{children}</Suspense>
        </AccordionDetails>
    </Accordion>
}