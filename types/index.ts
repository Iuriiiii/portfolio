import { useRef, useState } from "react";
import projects from '../public/private-projects.json';

export type TProject = typeof projects[0];

export interface IProjectData {
    project: HTMLDivElement | null,
    state: ReturnType<typeof useState<TProject>>,
}

export interface IProjectsRef {
    projects: IProjectData[],
    do: boolean,
    index: number
}
