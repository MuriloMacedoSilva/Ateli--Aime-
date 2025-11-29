
export interface CardItem {
    id: number;
    image: string;
    titulo: string;
    texto: string;
    firstTopico: string;
    secondTopico: string;
    thirdTopico: string
}

export type Cards = CardItem[];