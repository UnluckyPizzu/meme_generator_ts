export interface MemesNetwork {
    success: boolean;
    data:    Data;
}

export interface Data {
    memes: MemeNetwork[];
}

export interface MemeNetwork {
    id:        string;
    name:      string;
    url:       string;
    width:     number;
    height:    number;
    box_count: number;
    captions:  number;
}
