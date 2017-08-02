import numeral from 'numeral';

export default function (value, format) {
    if (!value) return '';
    if (!format) return numeral(value).format('0,0');
    return numeral(value).format(format);
}