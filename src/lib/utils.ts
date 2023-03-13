
//trim text upto some count
export const trimText = (str: string, count: number = 0) => {
    return str.substring(0, count).concat(str?.length > count ? '...' : '');
}