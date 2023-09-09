import { useRoutes } from "react-router-dom";
import { myLessonsList } from "./lessons.routes";
import { MyEntryPoint } from "./EntryPoint.routes";

export default function MyRoutes(){
    return useRoutes([myLessonsList,MyEntryPoint])
}