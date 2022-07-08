export interface eventReact{
    preventDefault :()=> void;
    target: {
        note: {value: string | ''},
        name: {value: string | ''},
        address:  {value: string | ''},
        cuisineTypes: {value: string | ''},
        suggestedFor: {value: string | ''},
        reset: ()=> void;
    }
}
