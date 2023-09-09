import { useRoutes } from "react-router-dom";
import { myLessonsList } from "./lessons.routes";
import { myEntryPointList } from "./EntryPoint.routes";
import { allProjectRoutes } from "./project.routes";

export default function MyRoutes(){
    return useRoutes([myLessonsList,myEntryPointList,allProjectRoutes])
}