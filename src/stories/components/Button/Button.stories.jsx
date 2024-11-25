import Button from "./Button";


/** Base padrão dos botões Cnn */ 
export default {
    title: "Componentes/Base de Botões",
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: 'false',
        href: { control: "text" },
        className: { control: "text" },
        label: { control: "text" },
        target: { 
            control: "select", 
            options: ["_blank", "_self"] 
        },
    },
};

/** Base padrão dos botões das sections */ 
export const primaryButton = {
    args: {
        disabled: false,
        href: '#',
        className: 'block text-center disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white disabled:cursor-not-allowed py-4 px-8 bg-black border-2 border-black w-80 text-white border-black hover:bg-white hover:text-black rounded-lg',
        label: 'Clique aqui',
        target: '_blank',
    },
};

/** Base padrão dos botões dos blocos*/ 
export const secondaryButton = {
    args: {
        disabled: false,
        href: '#',
        className: 'block text-center disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white disabled:cursor-not-allowed py-4 px-8 bg-black border-2 border-black text-white border-black hover:bg-white hover:text-black rounded-lg',
        label: 'Clique aqui',
        target: '_blank',
    },
};
