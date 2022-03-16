import {lazy} from 'react'
import AccordionItem from './AccordionItem';

const Preflight = lazy(() => import('../preflight/Preflight'));
const Preload = lazy(() => import('../preload/Preload' /* webpackPreload:true */));
const Heavy = lazy(() => import(`../heavy/Heavy`));
const TodoList = lazy(() => import('../todo-list/TodoList' ));
const Preconnect = lazy(() => import('../preconnect/Preconnect'));
const PriorityRender = lazy(() => import('../priority-render/PriorityRender'));


export default function AccordionList() {
    return <>
        <AccordionItem title="Preflight"><Preflight /></AccordionItem>
        <AccordionItem title="Preload"><Preload /></AccordionItem>
        <AccordionItem title="Long Task - Heavy rendering"><Heavy /></AccordionItem>
        <AccordionItem title="Long Task - Deffer execution"><TodoList /></AccordionItem>
        <AccordionItem title="Preconnect"><Preconnect /></AccordionItem>
        <AccordionItem title="Priority rendering"><PriorityRender /></AccordionItem>
    </>
}