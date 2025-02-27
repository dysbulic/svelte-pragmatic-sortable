import { SvelteComponentTyped } from "svelte";
export type Task = {
    id: number;
    content: string;
    status: Status;
};
import { type Status } from '$lib/types';
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PageProps = typeof __propDef.props;
export type PageEvents = typeof __propDef.events;
export type PageSlots = typeof __propDef.slots;
export default class Page extends SvelteComponentTyped<PageProps, PageEvents, PageSlots> {
}
export {};
