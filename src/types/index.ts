export type FooterProps = {
    navigation : NavigationProps[]
}

export type NavigationProps = {
    key : string;
    label : string;
    data : MenuItem[]
}

export type MenuItem = {
    name : string
    path : string
}